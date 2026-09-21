import React, { useState } from 'react';
import { signIn, signUp } from '../lib/auth-client';
import { loadHighlightsFromServer } from '../data/highYieldVaultData';
import { 
  Lock, 
  Mail, 
  User, 
  Key, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  Zap, 
  ArrowRight,
  Atom,
  Brain,
  Check
} from 'lucide-react';

interface AuthGateProps {
  onSuccess?: () => void;
  initialMode?: 'signin' | 'signup';
}

const DEMO_EMAIL = 'demo@radiology.edu';
const DEMO_PASSWORD = 'Bushong2026!';
const DEMO_NAME = 'Demo Technologist';

export const AuthGate: React.FC<AuthGateProps> = ({ onSuccess, initialMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const switchMode = (newMode: 'signin' | 'signup') => {
    setMode(newMode);
    setError(null);
    if (typeof window !== 'undefined') {
      const target = newMode === 'signup' ? '/register' : '/login';
      if (window.location.pathname !== target) {
        window.history.replaceState(null, '', target);
      }
    }
  };

  const fillDemoCredentials = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setName(DEMO_NAME);
    switchMode('signin');
    setError(null);
  };

  const handleInstantDemoLogin = async () => {
    setError(null);
    setSuccessMsg(null);
    setIsDemoLoading(true);
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);

    try {
      // First attempt to sign in with demo credentials
      let res = await signIn.email({
        email: DEMO_EMAIL,
        password: DEMO_PASSWORD
      });

      // If user doesn't exist yet on this server instance, automatically register it
      if (res.error) {
        const signupRes = await signUp.email({
          email: DEMO_EMAIL,
          password: DEMO_PASSWORD,
          name: DEMO_NAME
        });

        if (signupRes.error) {
          setError(signupRes.error.message || 'Failed to authenticate demo user.');
          setIsDemoLoading(false);
          return;
        }
      }

      setSuccessMsg('Demo account authenticated! Initializing syllabus...');

      try {
        await loadHighlightsFromServer();
      } catch (syncErr) {
        console.warn('[Auth] Background sync deferred', syncErr);
      }

      setTimeout(() => {
        setIsDemoLoading(false);
        onSuccess?.();
      }, 400);
    } catch (err: any) {
      console.error('[Demo Auth Error]', err);
      setError(err.message || 'An unexpected error occurred during demo sign in.');
      setIsDemoLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !password) {
      setError('Please provide both email and password.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'signup') {
        const trimmedName = name.trim() || trimmedEmail.split('@')[0];
        const res = await signUp.email({
          email: trimmedEmail,
          password,
          name: trimmedName
        });

        if (res.error) {
          setError(res.error.message || 'Failed to register account. Please try another email or sign in.');
          setLoading(false);
          return;
        }

        setSuccessMsg('Account registered successfully! Unlocking Bushong suite...');
      } else {
        const res = await signIn.email({
          email: trimmedEmail,
          password
        });

        if (res.error) {
          setError(res.error.message || 'Invalid email or password. Please verify your credentials.');
          setLoading(false);
          return;
        }

        setSuccessMsg('Welcome back! Loading your syllabus...');
      }

      // Sync user highlights from server
      try {
        await loadHighlightsFromServer();
      } catch (syncErr) {
        console.warn('[Auth] Background sync deferred', syncErr);
      }

      setTimeout(() => {
        setLoading(false);
        onSuccess?.();
      }, 400);
    } catch (err: any) {
      console.error('[Auth Error]', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-8 relative overflow-hidden font-sans select-none">
      {/* Dynamic Background Radiance */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        
        {/* Left / Brand Overview Column */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-lg">
          {/* Edition & ARRT Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 font-mono">11th Edition</span>
            <span className="text-slate-500">•</span>
            <span>ARRT Board Preparation Platform</span>
          </div>

          {/* Book Branding Title */}
          <div className="space-y-2">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-cyan-500/20 border border-cyan-400/30">
                <Atom className="w-7 h-7 text-white animate-spin-slow" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Radiologic Science
              </h1>
            </div>
            <p className="text-base sm:text-lg text-cyan-300 font-semibold">
              for Technologists: Physics, Biology, and Protection
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Authored by <span className="text-slate-200 font-medium">Stewart Carlyle Bushong, ScD, FACR, FACMP</span>
            </p>
          </div>

          {/* Value Propositions / High-Yield Features */}
          <div className="hidden sm:grid grid-cols-1 gap-3 pt-2">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-white">40 Complete Chapters & Clinical Syllabus</h2>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Comprehensive coverage of X-Ray production, beam filtration, image receptors, and dosimetry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-white">Timed ARRT Board Mock Simulator & Vault</h2>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Full registry simulation, high-yield one-liners, and cloud-synchronized personal highlights.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 mt-0.5">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-white">SM-2 Spaced Repetition Flashcards & Simulators</h2>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Active recall formulas, exam traps, and real-time bremsstrahlung x-ray spectrum simulator.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right / Authentication Gate Card */}
        <div className="w-full max-w-md">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-md space-y-6 relative">
            
            {/* Gate Header */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 via-cyan-500 to-blue-600 flex items-center justify-center mx-auto text-slate-950 shadow-lg shadow-cyan-500/20">
                <Lock className="w-6 h-6 text-slate-950 font-bold" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {mode === 'signin' ? 'Sign In to Access Textbook' : 'Create Free Student Account'}
              </h2>
              <p className="text-xs text-slate-400">
                {mode === 'signin' 
                  ? 'Enter your credentials or use 1-click demo to unlock the complete syllabus.' 
                  : 'Register free to save progress, bookmarks, and cross-device highlights.'}
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => switchMode('signin')}
                className={`py-2 rounded-lg transition-all ${
                  mode === 'signin'
                    ? 'bg-slate-800 text-cyan-300 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => switchMode('signup')}
                className={`py-2 rounded-lg transition-all ${
                  mode === 'signup'
                    ? 'bg-slate-800 text-cyan-300 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Quick Demo Access Callout */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-950 to-blue-950/40 border border-cyan-500/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Instant Demo Access
                </span>
                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="text-[10px] text-slate-400 hover:text-cyan-300 underline font-mono"
                  title="Copy demo credentials into form"
                >
                  Fill Inputs
                </button>
              </div>

              <div className="text-[11px] text-slate-300 font-mono bg-slate-950/80 px-2.5 py-1.5 rounded-lg border border-slate-800/80 flex items-center justify-between">
                <span className="truncate">demo@radiology.edu</span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-400">Bushong2026!</span>
              </div>

              <button
                type="button"
                disabled={isDemoLoading || loading}
                onClick={handleInstantDemoLogin}
                className="w-full py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                {isDemoLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                    <span>Signing In Demo Account...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>1-Click Instant Demo Sign In</span>
                    <ArrowRight className="w-3 h-3 text-cyan-400 ml-0.5" />
                  </>
                )}
              </button>
            </div>

            {/* Feedback Alerts */}
            {error && (
              <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-xs text-rose-300 flex items-start gap-2.5 animate-fadeIn">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-xs text-emerald-300 flex items-start gap-2.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {mode === 'signup' && (
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" /> Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Dr. Stewart Bushong"
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email Address:
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="technologist@hospital.edu"
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-cyan-400" /> Password:
                  </label>
                  <span className="text-[10px] text-slate-500">Min 8 characters</span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="At least 8 characters..."
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 pr-10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(p => !p)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || isDemoLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Validating Session...</span>
                  </>
                ) : mode === 'signin' ? (
                  <>
                    <ShieldCheck className="w-4 h-4 text-slate-950" />
                    <span>Sign In to Bushong Reader</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Create Student Account</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer Trust Markers */}
            <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free instant access • Powered by Better Auth & SQLite</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

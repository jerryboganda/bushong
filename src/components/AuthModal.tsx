import React, { useState } from 'react';
import { authClient, signIn, signUp } from '../lib/auth-client';
import { getStoredHighlights, saveStoredHighlights } from '../data/highYieldVaultData';
import { 
  Lock, 
  Mail, 
  User, 
  Key, 
  X, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Eye, 
  EyeOff,
  ShieldCheck
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
  featureTitle?: string;
  onSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signin',
  featureTitle,
  onSuccess
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      setError('Please provide email and password.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'signup') {
        const trimmedName = name.trim() || trimmedEmail.split('@')[0];
        const res = await signUp.email({
          email: trimmedEmail,
          password,
          name: trimmedName,
        });

        if (res.error) {
          setError(res.error.message || 'Failed to register account. Please try another email.');
          setLoading(false);
          return;
        }

        setSuccessMsg('Account registered successfully! Logging you in...');
      } else {
        const res = await signIn.email({
          email: trimmedEmail,
          password,
        });

        if (res.error) {
          setError(res.error.message || 'Invalid email or password. Please try again.');
          setLoading(false);
          return;
        }

        setSuccessMsg('Welcome back! Loading your profile...');
      }

      // Sync user highlights with server
      try {
        const localHighlights = getStoredHighlights();
        const syncRes = await fetch('/api/user/highlights', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ highlights: localHighlights })
        });
        if (syncRes.ok) {
          console.log('[Auth] Synced highlights with server.');
        }
      } catch (syncErr) {
        console.warn('[Auth] Offline or background sync deferred', syncErr);
      }

      setTimeout(() => {
        setLoading(false);
        onSuccess?.();
        onClose();
      }, 700);
    } catch (err: any) {
      console.error('[Auth Error]', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center mx-auto text-white shadow-lg shadow-cyan-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            {mode === 'signin' ? 'Sign In to Your Account' : 'Create Free Student Account'}
          </h2>
          {featureTitle ? (
            <p className="text-xs text-cyan-300 font-medium bg-cyan-950/60 border border-cyan-500/30 rounded-lg py-1.5 px-3">
              🔒 <span className="text-white font-semibold">{featureTitle}</span> requires authentication to save progress & sync highlights.
            </p>
          ) : (
            <p className="text-xs text-slate-400">
              Access the High-Yield Vault, ARRT Mock Simulator, and persistent Highlights.
            </p>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setMode('signin'); setError(null); }}
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
            onClick={() => { setMode('signup'); setError(null); }}
            className={`py-2 rounded-lg transition-all ${
              mode === 'signup'
                ? 'bg-slate-800 text-cyan-300 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Register
          </button>
        </div>

        {/* Feedback Messages */}
        {error && (
          <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-400" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" /> Full Name:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Dr. Stewart Bushong"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="technologist@hospital.edu"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-cyan-400" /> Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={8}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="At least 8 characters..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 pr-10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(p => !p)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : mode === 'signin' ? (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Sign In to Bushong Reader</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Create Student Account</span>
              </>
            )}
          </button>
        </form>

        {/* Benefits Note */}
        <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 text-center space-y-1">
          <p className="flex items-center justify-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Protected by Better Auth & SQLite Encryption
          </p>
        </div>
      </div>
    </div>
  );
};

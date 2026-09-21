import React from 'react';
import { 
  Lock, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  Highlighter,
  CheckCircle2
} from 'lucide-react';

interface ProtectedGateProps {
  isAuthenticated: boolean;
  onOpenAuth: (featureTitle: string) => void;
  featureTitle: string;
  featureDescription: string;
  benefits?: string[];
  children: React.ReactNode;
}

export const ProtectedGate: React.FC<ProtectedGateProps> = ({
  isAuthenticated,
  onOpenAuth,
  featureTitle,
  featureDescription,
  benefits = [
    'Save and synchronize custom highlights and high-yield notes across devices',
    'Full ARRT Board Exam Simulation with scoring, analytics, and category breakdown',
    'Personalized SM-2 Spaced Repetition SRS deck tracking for exam retention',
    'One-click revision vault and exam traps matrices'
  ],
  children
}) => {
  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl space-y-6 text-center animate-fadeIn backdrop-blur-sm">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400 shadow-xl shadow-cyan-500/10">
        <Lock className="w-8 h-8 text-cyan-400" />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" /> High-Yield Student Feature
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Unlock {featureTitle}
        </h2>
        <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          {featureDescription}
        </p>
      </div>

      {/* High-Yield Benefits List */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 text-left space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          Included with Free Student Account:
        </h3>
        <div className="grid grid-cols-1 gap-2.5">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => onOpenAuth(featureTitle)}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <span>Sign In / Create Free Account</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[11px] text-slate-400">
        Free instant registration • No credit card required • Powered by Better Auth
      </p>
    </div>
  );
};

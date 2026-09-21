import React from 'react';
import { ReaderPreferences, ReadingTheme, ReadingFont, ReadingSize, ReadingSpacing } from '../types/features';
import { Settings, X, Sun, Moon, BookOpen, Type, Sparkles, Check } from 'lucide-react';

interface ReaderSettingsModalProps {
  preferences: ReaderPreferences;
  onUpdatePreferences: (updated: Partial<ReaderPreferences>) => void;
  onClose: () => void;
}

export const ReaderSettingsModal: React.FC<ReaderSettingsModalProps> = ({
  preferences,
  onUpdatePreferences,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl animate-fadeIn">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Settings className="w-4 h-4 text-cyan-400" /> Reader Appearance & Focus
          </h3>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 1. Theme Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Reading Color Theme
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {[
              { id: 'slate', name: 'Deep Slate', bg: 'bg-slate-950', border: 'border-cyan-500/40', text: 'text-slate-200' },
              { id: 'oled', name: 'Pitch Black OLED', bg: 'bg-black', border: 'border-neutral-800', text: 'text-neutral-200' },
              { id: 'sepia', name: 'Warm Sepia', bg: 'bg-[#2b241c]', border: 'border-amber-700/50', text: 'text-[#f5ebd7]' },
              { id: 'paper', name: 'Light Paper', bg: 'bg-neutral-100', border: 'border-neutral-300', text: 'text-slate-900' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => onUpdatePreferences({ theme: t.id as ReadingTheme })}
                className={`p-3 rounded-xl border flex items-center justify-between transition-all ${t.bg} ${t.text} ${
                  preferences.theme === t.id ? 'ring-2 ring-cyan-400 shadow-md' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span>{t.name}</span>
                {preferences.theme === t.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Typography Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Typography Style
          </label>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {[
              { id: 'sans', name: 'Modern Sans', style: 'font-sans' },
              { id: 'serif', name: 'Editorial Serif', style: 'font-serif' },
              { id: 'opendyslexic', name: 'OpenDyslexic', style: 'tracking-wide' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => onUpdatePreferences({ font: f.id as ReadingFont })}
                className={`p-2.5 rounded-xl border text-center transition-all ${f.style} ${
                  preferences.font === f.id
                    ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Font Size & Spacing */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Font Size
            </label>
            <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
              {(['sm', 'md', 'lg', 'xl'] as ReadingSize[]).map(s => (
                <button
                  key={s}
                  onClick={() => onUpdatePreferences({ size: s })}
                  className={`flex-1 py-1.5 rounded-lg uppercase font-mono font-bold transition-all ${
                    preferences.size === s ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Line Spacing
            </label>
            <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
              {[
                { id: 'normal', label: '1.5' },
                { id: 'relaxed', label: '1.8' },
                { id: 'loose', label: '2.0' }
              ].map(sp => (
                <button
                  key={sp.id}
                  onClick={() => onUpdatePreferences({ spacing: sp.id as ReadingSpacing })}
                  className={`flex-1 py-1.5 rounded-lg font-mono font-bold transition-all ${
                    preferences.spacing === sp.id ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Reading Aids Toggles */}
        <div className="space-y-3 pt-2 border-t border-slate-800">
          {/* Bionic Reading */}
          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Bionic Reading Mode
              </span>
              <p className="text-[11px] text-slate-400">
                Emphasizes the <strong className="text-cyan-300">fir</strong>st let<strong className="text-cyan-300">te</strong>rs of each word for faster eye fixation
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.bionicReading}
              onChange={e => onUpdatePreferences({ bionicReading: e.target.checked })}
              className="w-4 h-4 rounded border-slate-700 text-cyan-500 focus:ring-0 bg-slate-800 cursor-pointer"
            />
          </label>

          {/* Smart In-Text Glossary Tooltips */}
          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> In-Text Glossary Tooltips
              </span>
              <p className="text-[11px] text-slate-400">
                Highlights 926 key radiologic terms with instant definition hover popovers
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.glossaryTooltips}
              onChange={e => onUpdatePreferences({ glossaryTooltips: e.target.checked })}
              className="w-4 h-4 rounded border-slate-700 text-cyan-500 focus:ring-0 bg-slate-800 cursor-pointer"
            />
          </label>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
        >
          Save & Apply Settings
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  REVIEW_OF_BASIC_PHYSICS, 
  SPECIAL_RADIOLOGIC_QUANTITIES, 
  SI_PREFIXES, 
  SI_DERIVED_UNITS_SPECIAL, 
  UNIVERSAL_PHYSICAL_CONSTANTS, 
  CONVERSION_TABLES 
} from '../data/referenceTables';
import { BookOpen, Zap, Compass, Activity, Hash, ArrowRight, Shield, Layers } from 'lucide-react';

export const ReferenceGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'physics' | 'radiologic-units' | 'si-units' | 'constants' | 'conversions'>('physics');

  return (
    <div className="max-w-5xl mx-auto px-3.5 xs:px-4 py-6 sm:py-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 rounded-2xl p-4 xs:p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" /> Inside Cover Reference Kit
            </div>
            <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Review of Basic Physics & Radiologic Units
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Exact formula sheets, SI prefixes, derived units, conversion tables, and fundamental physical constants from the 11th Edition front and back covers.
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-700 whitespace-nowrap self-start sm:self-auto shrink-0">
            Bushong 11th Ed.
          </span>
        </div>

        {/* Tab Selection */}
        <div className="flex overflow-x-auto no-scrollbar touch-scroll sm:flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800 pb-1 sm:pb-0">
          <button
            onClick={() => setActiveTab('physics')}
            className={`whitespace-nowrap px-3.5 py-2.5 min-h-[40px] rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'physics'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" /> Review of Basic Physics
          </button>
          <button
            onClick={() => setActiveTab('radiologic-units')}
            className={`whitespace-nowrap px-3.5 py-2.5 min-h-[40px] rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'radiologic-units'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" /> Radiologic Units
          </button>
          <button
            onClick={() => setActiveTab('si-units')}
            className={`whitespace-nowrap px-3.5 py-2.5 min-h-[40px] rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'si-units'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> SI Prefixes & Derived Units
          </button>
          <button
            onClick={() => setActiveTab('constants')}
            className={`whitespace-nowrap px-3.5 py-2.5 min-h-[40px] rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'constants'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Hash className="w-3.5 h-3.5" /> Universal Constants
          </button>
          <button
            onClick={() => setActiveTab('conversions')}
            className={`whitespace-nowrap px-3.5 py-2.5 min-h-[40px] rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'conversions'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> Conversion Tables
          </button>
        </div>
      </div>

      {/* Tab 1: Review of Basic Physics */}
      {activeTab === 'physics' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Inside Front Cover: Review of Basic Physics
            </h2>
            <span className="text-xs text-slate-400">Page 2 of Textbook</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEW_OF_BASIC_PHYSICS.map((sec, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {sec.category}
                    </span>
                    {sec.formula && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-300">
                        {sec.formula}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">
                    {sec.title}
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {sec.units && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                    Units: {sec.units}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Radiologic Units */}
      {activeTab === 'radiologic-units' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-lg xs:text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400 shrink-0" />
              Special Quantities of Radiologic Science
            </h2>
            <span className="text-xs text-slate-400">Pages 3 & 42 of Textbook</span>
          </div>

          {/* Mobile Horizontal Scroll Indicator */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 sm:hidden">
            <span className="text-cyan-400 font-semibold">Special Quantities Table</span>
            <span className="flex items-center gap-1 font-mono">
              <span>Swipe table</span>
              <ArrowRight className="w-3 h-3 text-cyan-400 animate-pulse" />
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto no-scrollbar touch-scroll">
              <table className="w-full min-w-[500px] text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Customary Unit</th>
                    <th className="p-4">Symbol</th>
                    <th className="p-4">SI Unit</th>
                    <th className="p-4">SI Symbol</th>
                    <th className="p-4">Exact Multiplier / Conversion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {SPECIAL_RADIOLOGIC_QUANTITIES.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 font-semibold text-white font-sans">{item.quantity}</td>
                      <td className="p-4 text-amber-300">{item.customaryName}</td>
                      <td className="p-4 font-bold text-amber-400">{item.customarySymbol}</td>
                      <td className="p-4 text-cyan-300">{item.siName}</td>
                      <td className="p-4 font-bold text-cyan-400">{item.siSymbol}</td>
                      <td className="p-4 text-slate-300 font-sans">{item.conversion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-cyan-300 mb-2">Air Kerma vs Tissue Absorbed Dose</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Radiation exposure is measured in units of C/kg, measured in air as <strong className="text-cyan-400">mGy_a</strong> (kinetic energy released in air). Absorbed dose in tissue is designated as <strong className="text-cyan-400">mGy_t</strong> (1 Gy = 1 J/kg = 100 rad) to distinguish beam exposure from patient organ energy absorption.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-cyan-300 mb-2">Effective Dose: The Sievert (Sv)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Used to express radiation received by radiation workers and populations for stochastic risk estimation. <strong className="text-cyan-400">E = ∑ (D_T × W_R × W_T)</strong> accounts for both radiation biological quality (W_R) and tissue-specific radiosensitivity (W_T).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: SI Prefixes & Derived Units */}
      {activeTab === 'si-units' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              SI Prefixes & Derived Physical Units
            </h2>
            <span className="text-xs text-slate-400">Pages 3 & 695 of Textbook</span>
          </div>

          {/* Prefixes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Standard Scientific & Engineering Prefixes (Table 1-5)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {SI_PREFIXES.map((p, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-center">
                  <div className="text-base font-bold text-cyan-300 font-mono">{p.symbol}</div>
                  <div className="text-xs text-white font-medium">{p.prefix}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{p.factor}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Derived Units */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                SI Derived Units With Special Names
              </h3>
              <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 sm:hidden">
                <span>Swipe</span>
                <ArrowRight className="w-3 h-3 text-cyan-400 animate-pulse" />
              </span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto no-scrollbar touch-scroll">
                <table className="w-full min-w-[500px] text-left text-xs text-slate-300 font-mono">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800 font-sans">
                    <tr>
                      <th className="p-3">Quantity</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Symbol</th>
                      <th className="p-3">Other Units</th>
                      <th className="p-3">SI Base Units</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {SI_DERIVED_UNITS_SPECIAL.map((u, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40">
                        <td className="p-3 font-sans text-white font-medium">{u.quantity}</td>
                        <td className="p-3 text-cyan-300">{u.name}</td>
                        <td className="p-3 font-bold text-amber-300">{u.symbol}</td>
                        <td className="p-3 text-slate-400">{u.otherUnits}</td>
                        <td className="p-3 text-emerald-300">{u.baseUnits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Universal Constants */}
      {activeTab === 'constants' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Hash className="w-5 h-5 text-cyan-400" />
              Universal Physical Constants
            </h2>
            <span className="text-xs text-slate-400">Inside Back Cover (Page 695)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {UNIVERSAL_PHYSICAL_CONSTANTS.map((c, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">{c.name}</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {c.symbol}
                  </span>
                </div>
                <div className="text-base font-bold text-cyan-400 font-mono mt-1">
                  {c.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Unit: {c.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Conversion Tables */}
      {activeTab === 'conversions' && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              Comprehensive Conversion Tables
            </h2>
            <span className="text-xs text-slate-400">Inside Back Cover (Page 694)</span>
          </div>

          {/* Length */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Length Equivalents in Meters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {CONVERSION_TABLES.length.map((l, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-xs text-slate-400">{l.unit}</div>
                  <div className="text-sm font-bold text-cyan-300 font-mono mt-1">{l.meters}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mass-Energy */}
          <div>
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                Mass-Energy Equivalents
              </h3>
              <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 sm:hidden">
                <span>Swipe table</span>
                <ArrowRight className="w-3 h-3 text-cyan-400 animate-pulse" />
              </span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto no-scrollbar touch-scroll">
                <table className="w-full min-w-[480px] text-left text-xs font-mono">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800 font-sans">
                    <tr>
                      <th className="p-3">Electron Volts (eV)</th>
                      <th className="p-3">Joules (J)</th>
                      <th className="p-3">Kilograms (kg)</th>
                      <th className="p-3">Atomic Mass Units (amu)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50 text-slate-300">
                    {CONVERSION_TABLES.massEnergy.map((m, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40">
                        <td className="p-3 text-cyan-300 font-semibold">{m.eV}</td>
                        <td className="p-3 text-amber-300">{m.joules}</td>
                        <td className="p-3 text-white">{m.kg}</td>
                        <td className="p-3 text-emerald-300">{m.amu}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Time */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                Time Equivalents
              </h3>
              <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 sm:hidden">
                <span>Swipe table</span>
                <ArrowRight className="w-3 h-3 text-cyan-400 animate-pulse" />
              </span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto no-scrollbar touch-scroll">
                <table className="w-full min-w-[450px] text-left text-xs font-mono">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800 font-sans">
                    <tr>
                      <th className="p-3">Unit</th>
                      <th className="p-3">Days</th>
                      <th className="p-3">Hours</th>
                      <th className="p-3">Minutes</th>
                      <th className="p-3">Seconds</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50 text-slate-300">
                    {CONVERSION_TABLES.time.map((t, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40">
                        <td className="p-3 font-sans text-white font-semibold">{t.unit}</td>
                        <td className="p-3 text-cyan-300">{t.days}</td>
                        <td className="p-3 text-amber-300">{t.hours}</td>
                        <td className="p-3 text-slate-300">{t.minutes}</td>
                        <td className="p-3 text-emerald-300">{t.seconds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

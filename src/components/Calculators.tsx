import React, { useState } from 'react';
import { Calculator as CalcIcon, RefreshCw, ArrowRight, Zap, Shield, Eye, Layers, Activity } from 'lucide-react';
import { SpectrumSimulator } from './SpectrumSimulator';

export const Calculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    | 'spectrum-sim'
    | 'inverse-square'
    | 'mas-distance'
    | 'fifteen-percent'
    | 'heat-units'
    | 'gcf-calc'
    | 'magnification'
    | 'focal-spot-blur'
    | 'ct-calc'
    | 'fluoro-gain'
    | 'rbe-oer'
    | 'ese-calc'
    | 'ct-dosimetry'
    | 'dap-calc'
    | 'dose-limit'
  >('spectrum-sim');

  // 1. Inverse Square Law
  const [islI1, setIslI1] = useState<number>(100);
  const [islD1, setIslD1] = useState<number>(100);
  const [islD2, setIslD2] = useState<number>(200);
  const islI2 = islD2 > 0 ? (islI1 * Math.pow(islD1 / islD2, 2)).toFixed(2) : '0';

  // 2. mAs Distance Rule
  const [mas1, setMas1] = useState<number>(20);
  const [sid1, setSid1] = useState<number>(100);
  const [sid2, setSid2] = useState<number>(180);
  const mas2 = sid1 > 0 ? (mas1 * Math.pow(sid2 / sid1, 2)).toFixed(2) : '0';

  // 3. 15% kVp Rule
  const [kvpOrig, setKvpOrig] = useState<number>(80);
  const [masOrig, setMasOrig] = useState<number>(30);
  const kvpUp = (kvpOrig * 1.15).toFixed(1);
  const masDown = (masOrig * 0.5).toFixed(1);
  const kvpDown = (kvpOrig * 0.85).toFixed(1);
  const masUp = (masOrig * 2).toFixed(1);

  // 4. Heat Units
  const [huKvp, setHuKvp] = useState<number>(85);
  const [huMa, setHuMa] = useState<number>(300);
  const [huTime, setHuTime] = useState<number>(0.2);
  const [huGen, setHuGen] = useState<number>(1.45); // High-frequency default
  const [huExposures, setHuExposures] = useState<number>(1);
  const totalHu = (huKvp * huMa * huTime * huGen * huExposures).toFixed(0);
  const totalJoules = (parseFloat(totalHu) * 0.705).toFixed(0);

  // 4b. Grid Conversion Factor (GCF / Bucky Factor)
  const [masGcfOrig, setMasGcfOrig] = useState<number>(10);
  const [gcfOrig, setGcfOrig] = useState<number>(1); // No grid = 1
  const [gcfNew, setGcfNew] = useState<number>(4); // 8:1 grid = 4
  const masGcfResult = gcfOrig > 0 ? ((masGcfOrig * gcfNew) / gcfOrig).toFixed(1) : '0';

  // 5. Magnification Factor & Object Size
  const [magSid, setMagSid] = useState<number>(100);
  const [magOid, setMagOid] = useState<number>(20);
  const [imageSize, setImageSize] = useState<number>(12);
  const magSod = Math.max(0.1, magSid - magOid);
  const mf = (magSid / magSod).toFixed(2);
  const objSize = (imageSize / (magSid / magSod)).toFixed(2);

  // 6. Focal-Spot Blur
  const [efs, setEfs] = useState<number>(0.6);
  const [fsbOid, setFsbOid] = useState<number>(15);
  const [fsbSid, setFsbSid] = useState<number>(100);
  const fsbSod = Math.max(0.1, fsbSid - fsbOid);
  const fsbResult = (efs * (fsbOid / fsbSod)).toFixed(3);

  // 7. CT Physics
  const [ctFov, setCtFov] = useState<number>(250);
  const [ctMatrix, setCtMatrix] = useState<number>(512);
  const [ctSlice, setCtSlice] = useState<number>(2.5);
  const ctPixelSize = (ctFov / ctMatrix).toFixed(3);
  const ctVoxel = (parseFloat(ctPixelSize) * parseFloat(ctPixelSize) * ctSlice).toFixed(4);

  // 8. Fluoroscopic Gain
  const [fluoroInD, setFluoroInD] = useState<number>(25);
  const [fluoroOutD, setFluoroOutD] = useState<number>(2.5);
  const [fluoroFlux, setFluoroFlux] = useState<number>(75);
  const minGain = Math.pow(fluoroInD / fluoroOutD, 2);
  const brightGain = (minGain * fluoroFlux).toFixed(0);
  const conversionFactor = (parseFloat(brightGain) * 0.01).toFixed(1);

  // 9. RBE & OER (Ch. 30)
  const [d250, setD250] = useState<number>(6.5);
  const [dTest, setDTest] = useState<number>(2.1);
  const rbeCalc = dTest > 0 ? (d250 / dTest).toFixed(2) : '0';

  const [dAnoxic, setDAnoxic] = useState<number>(4.0);
  const [dAerobic, setDAerobic] = useState<number>(1.5);
  const oerCalc = dAerobic > 0 ? (dAnoxic / dAerobic).toFixed(2) : '0';

  // 10. Entrance Skin Exposure (ESE) (Ch. 37)
  const [eseOutput, setEseOutput] = useState<number>(0.05); // mGya/mAs at 100 cm
  const [eseMas, setEseMas] = useState<number>(25);
  const [eseSsd, setEseSsd] = useState<number>(90);
  const eseVal = eseSsd > 0 ? (eseOutput * eseMas * Math.pow(100 / eseSsd, 2)).toFixed(2) : '0';

  // 11. CT Dosimetry: CTDI_vol, DLP, Effective Dose (Ch. 38)
  const [ctdiW, setCtdiW] = useState<number>(18);
  const [ctPitch, setCtPitch] = useState<number>(1.2);
  const [ctLength, setCtLength] = useState<number>(40);
  const [ctKFactor, setCtKFactor] = useState<number>(0.015); // Abdomen default
  const ctdiVol = ctPitch > 0 ? (ctdiW / ctPitch).toFixed(1) : '0';
  const dlpVal = (parseFloat(ctdiVol) * ctLength).toFixed(0);
  const ctEffDose = (parseFloat(dlpVal) * ctKFactor).toFixed(1);

  // 12. Dose Area Product (DAP) (Ch. 36)
  const [dapDose, setDapDose] = useState<number>(2.5); // cGy
  const [dapWidth, setDapWidth] = useState<number>(20); // cm
  const [dapHeight, setDapHeight] = useState<number>(25); // cm
  const dapVal = (dapDose * dapWidth * dapHeight).toFixed(0);

  // 13. Cumulative Dose Limit (Ch. 40)
  const [workerAge, setWorkerAge] = useState<number>(30);
  const cumulativeDose = (10 * workerAge).toFixed(0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <CalcIcon className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">Interactive Radiologic Physics Calculators</h2>
          <p className="text-xs text-slate-400">Exact formulas from Bushong 11th Edition with real-time feedback</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 text-xs font-medium">
        <button
          onClick={() => setActiveTab('spectrum-sim')}
          className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'spectrum-sim'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-cyan-300 hover:bg-slate-800 hover:text-white border border-cyan-500/30'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          Emission Spectrum Simulator
        </button>
        <button
          onClick={() => setActiveTab('inverse-square')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'inverse-square'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Inverse Square Law
        </button>
        <button
          onClick={() => setActiveTab('mas-distance')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'mas-distance'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          mAs Distance Rule
        </button>
        <button
          onClick={() => setActiveTab('fifteen-percent')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'fifteen-percent'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          15% kVp Rule
        </button>
        <button
          onClick={() => setActiveTab('gcf-calc')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'gcf-calc'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Grid Conversion (GCF)
        </button>
        <button
          onClick={() => setActiveTab('heat-units')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'heat-units'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Anode Heat Units
        </button>
        <button
          onClick={() => setActiveTab('magnification')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'magnification'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Magnification Factor
        </button>
        <button
          onClick={() => setActiveTab('focal-spot-blur')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'focal-spot-blur'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Focal-Spot Blur
        </button>
        <button
          onClick={() => setActiveTab('ct-calc')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'ct-calc'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          CT Pixel & Voxel
        </button>
        <button
          onClick={() => setActiveTab('fluoro-gain')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'fluoro-gain'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Fluoro Brightness Gain
        </button>
        <button
          onClick={() => setActiveTab('rbe-oer')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'rbe-oer'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          RBE & OER
        </button>
        <button
          onClick={() => setActiveTab('ese-calc')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'ese-calc'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Entrance Skin Dose (ESE)
        </button>
        <button
          onClick={() => setActiveTab('ct-dosimetry')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'ct-dosimetry'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          CTDI_vol & DLP
        </button>
        <button
          onClick={() => setActiveTab('dap-calc')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'dap-calc'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Dose Area Product (DAP)
        </button>
        <button
          onClick={() => setActiveTab('dose-limit')}
          className={`px-3 py-2 rounded-lg transition-all ${
            activeTab === 'dose-limit'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          Cumulative Dose Limit
        </button>
      </div>

      {/* Content Panels */}
      <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5">
        {/* 0. Spectrum Simulator */}
        {activeTab === 'spectrum-sim' && (
          <div>
            <SpectrumSimulator />
          </div>
        )}

        {/* 0b. Grid Conversion Factor (GCF) */}
        {activeTab === 'gcf-calc' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Grid Conversion Factor (Bucky Factor) Rule</h3>
                <p className="text-xs text-cyan-400 font-mono">mAs₂ = mAs₁ × (GCF₂ / GCF₁)</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 12</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Original Technique (mAs₁)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={masGcfOrig}
                    onChange={(e) => setMasGcfOrig(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mAs</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Original Grid Ratio (GCF₁)</label>
                <select
                  value={gcfOrig}
                  onChange={(e) => setGcfOrig(parseInt(e.target.value) || 1)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value={1}>No Grid (GCF = 1)</option>
                  <option value={2}>5:1 Grid (GCF = 2)</option>
                  <option value={3}>6:1 Grid (GCF = 3)</option>
                  <option value={4}>8:1 Grid (GCF = 4)</option>
                  <option value={5}>12:1 Grid (GCF = 5)</option>
                  <option value={6}>16:1 Grid (GCF = 6)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">New Target Grid Ratio (GCF₂)</label>
                <select
                  value={gcfNew}
                  onChange={(e) => setGcfNew(parseInt(e.target.value) || 1)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value={1}>No Grid (GCF = 1)</option>
                  <option value={2}>5:1 Grid (GCF = 2)</option>
                  <option value={3}>6:1 Grid (GCF = 3)</option>
                  <option value={4}>8:1 Grid (GCF = 4)</option>
                  <option value={5}>12:1 Grid (GCF = 5)</option>
                  <option value={6}>16:1 Grid (GCF = 6)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                <span className="text-xs text-cyan-300 font-medium">Required New Technique (mAs₂)</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{masGcfResult} <span className="text-sm font-normal text-cyan-300">mAs</span></div>
                <p className="text-xs text-slate-400 mt-1">
                  Adjusted factor: ×{(gcfNew / gcfOrig).toFixed(2)} exposure adjustment
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <span className="text-xs text-slate-300 font-medium">Bushong GCF Standard Factors</span>
                <p className="text-xs text-slate-300 mt-1">No grid = 1 • 5:1 = 2 • 6:1 = 3 • 8:1 = 4 • 12:1 = 5 • 16:1 = 6</p>
                <p className="text-xs text-slate-400 mt-1">Higher ratio grids absorb more scatter but increase required patient dose.</p>
              </div>
            </div>
          </div>
        )}

        {/* 1. Inverse Square Law */}
        {activeTab === 'inverse-square' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Inverse Square Law</h3>
                <p className="text-xs text-cyan-400 font-mono">I₁ / I₂ = (d₂ / d₁)²  ⟹  I₂ = I₁ × (d₁ / d₂)²</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 3, Ch. 34</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Initial Intensity (I₁)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={islI1}
                    onChange={(e) => setIslI1(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mGya or R</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Initial Distance (d₁)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={islD1}
                    onChange={(e) => setIslD1(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm or m</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">New Distance (d₂)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={islD2}
                    onChange={(e) => setIslD2(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm or m</span>
                </div>
              </div>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-cyan-300 font-medium">New Radiation Intensity (I₂)</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{islI2} <span className="text-sm font-normal text-cyan-300">mGya</span></div>
              </div>
              <p className="text-xs text-slate-400 max-w-xs text-right">
                Doubling distance reduces intensity to 25%; halving distance quadruples (400%) intensity.
              </p>
            </div>
          </div>
        )}

        {/* 2. mAs Distance Rule */}
        {activeTab === 'mas-distance' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">mAs Direct Square Law (Distance Compensation)</h3>
                <p className="text-xs text-cyan-400 font-mono">mAs₁ / mAs₂ = (SID₁ / SID₂)²  ⟹  mAs₂ = mAs₁ × (SID₂ / SID₁)²</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 8, Ch. 13</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Original mAs (mAs₁)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={mas1}
                    onChange={(e) => setMas1(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mAs</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Original SID (SID₁)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={sid1}
                    onChange={(e) => setSid1(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">New SID (SID₂)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={sid2}
                    onChange={(e) => setSid2(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-cyan-300 font-medium">Compensated Technique (mAs₂)</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{mas2} <span className="text-sm font-normal text-cyan-300">mAs</span></div>
              </div>
              <p className="text-xs text-slate-400 max-w-xs text-right">
                When SID increases, mAs must increase proportionally to maintain receptor exposure.
              </p>
            </div>
          </div>
        )}

        {/* 3. 15% kVp Rule */}
        {activeTab === 'fifteen-percent' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">The 15% Rule for kVp and mAs</h3>
                <p className="text-xs text-cyan-400 font-mono">15% increase in kVp = 2× optical density (cut mAs 50% to maintain)</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 8, Ch. 13</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Baseline kVp</label>
                <div className="relative">
                  <input
                    type="number"
                    value={kvpOrig}
                    onChange={(e) => setKvpOrig(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">kVp</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Baseline mAs</label>
                <div className="relative">
                  <input
                    type="number"
                    value={masOrig}
                    onChange={(e) => setMasOrig(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mAs</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-4">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5" /> Option A: Longer Scale Contrast (Lower Patient Dose)
                </span>
                <div className="text-xl font-bold text-white mb-1">
                  {kvpUp} kVp <span className="text-xs text-slate-400">at</span> {masDown} mAs
                </div>
                <p className="text-xs text-slate-300">
                  +15% kVp with 50% mAs cut maintains optical density, decreases subject contrast, and cuts patient entrance dose significantly.
                </p>
              </div>
              <div className="bg-amber-950/30 border border-amber-500/30 rounded-lg p-4">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5" /> Option B: Shorter Scale Contrast (Higher Contrast)
                </span>
                <div className="text-xl font-bold text-white mb-1">
                  {kvpDown} kVp <span className="text-xs text-slate-400">at</span> {masUp} mAs
                </div>
                <p className="text-xs text-slate-300">
                  -15% kVp with double mAs maintains optical density while elevating image contrast (short scale).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4. Heat Units */}
        {activeTab === 'heat-units' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Anode Thermal Heat Units (HU)</h3>
                <p className="text-xs text-cyan-400 font-mono">HU = kVp × mA × s × Generator Factor × Exposures</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 6</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">kVp</label>
                <input
                  type="number"
                  value={huKvp}
                  onChange={(e) => setHuKvp(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">mA</label>
                <input
                  type="number"
                  value={huMa}
                  onChange={(e) => setHuMa(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Time (seconds)</label>
                <input
                  type="number"
                  step="0.05"
                  value={huTime}
                  onChange={(e) => setHuTime(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Generator Type</label>
                <select
                  value={huGen}
                  onChange={(e) => setHuGen(parseFloat(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value={1.0}>1-Phase (1.00)</option>
                  <option value={1.35}>3-Phase 6P (1.35)</option>
                  <option value={1.41}>3-Phase 12P (1.41)</option>
                  <option value={1.45}>High-Frequency (1.45)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Exposures</label>
                <input
                  type="number"
                  value={huExposures}
                  onChange={(e) => setHuExposures(parseInt(e.target.value) || 1)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-cyan-300 font-medium">Total Thermal Anode Load</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">
                  {totalHu} <span className="text-sm font-normal text-cyan-300">HU</span>
                  <span className="text-xs text-slate-400 font-normal ml-3">({totalJoules} Joules)</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-xs text-right">
                1 HU = 0.705 Joules. Standard diagnostic anodes store 300,000 to 1,500,000 HU.
              </p>
            </div>
          </div>
        )}

        {/* 5. Magnification Factor */}
        {activeTab === 'magnification' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Magnification Factor & Actual Object Size</h3>
                <p className="text-xs text-cyan-400 font-mono">MF = SID / SOD  |  Object Size = Image Size / MF</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 10</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">SID (Source-to-Receptor)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={magSid}
                    onChange={(e) => setMagSid(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">OID (Object-to-Receptor)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={magOid}
                    onChange={(e) => setMagOid(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Image Size on Radiograph</label>
                <div className="relative">
                  <input
                    type="number"
                    value={imageSize}
                    onChange={(e) => setImageSize(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                <span className="text-xs text-cyan-300 font-medium">Magnification Factor (MF)</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{mf}×</div>
                <p className="text-xs text-slate-400 mt-1">SOD = {magSod.toFixed(1)} cm</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <span className="text-xs text-slate-300 font-medium">True Anatomical Object Size</span>
                <div className="text-2xl font-bold text-white mt-0.5">{objSize} <span className="text-sm font-normal text-slate-400">cm</span></div>
                <p className="text-xs text-slate-400 mt-1">Structure is {(parseFloat(mf) * 100 - 100).toFixed(0)}% enlarged on image</p>
              </div>
            </div>
          </div>
        )}

        {/* 6. Focal-Spot Blur */}
        {activeTab === 'focal-spot-blur' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Focal-Spot Blur (Geometric Unsharpness)</h3>
                <p className="text-xs text-cyan-400 font-mono">Focal-Spot Blur = Effective Focal Spot × (OID / SOD)</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 10</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Effective Focal Spot Size</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={efs}
                    onChange={(e) => setEfs(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">OID</label>
                <div className="relative">
                  <input
                    type="number"
                    value={fsbOid}
                    onChange={(e) => setFsbOid(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">SID</label>
                <div className="relative">
                  <input
                    type="number"
                    value={fsbSid}
                    onChange={(e) => setFsbSid(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-cyan-300 font-medium">Calculated Focal-Spot Blur</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{fsbResult} <span className="text-sm font-normal text-cyan-300">mm</span></div>
              </div>
              <p className="text-xs text-slate-400 max-w-xs text-right">
                Focal-spot blur is greater on the cathode side due to the anode heel effect. Minimize OID to maximize edge sharpness.
              </p>
            </div>
          </div>
        )}

        {/* 7. CT Physics */}
        {activeTab === 'ct-calc' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Computed Tomography Pixel & Voxel Dimensions</h3>
                <p className="text-xs text-cyan-400 font-mono">Pixel Size = FOV / Matrix Size  |  Voxel = Pixel Area × Slice Thickness</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 28</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Field of View (FOV)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={ctFov}
                    onChange={(e) => setCtFov(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Reconstruction Matrix</label>
                <select
                  value={ctMatrix}
                  onChange={(e) => setCtMatrix(parseInt(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value={256}>256 × 256</option>
                  <option value={512}>512 × 512 (Standard)</option>
                  <option value={1024}>1024 × 1024 (High-Res)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Slice Thickness</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.5"
                    value={ctSlice}
                    onChange={(e) => setCtSlice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mm</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                <span className="text-xs text-cyan-300 font-medium">Pixel Dimension</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{ctPixelSize} <span className="text-sm font-normal text-cyan-300">mm</span></div>
                <p className="text-xs text-slate-400 mt-1">Spatial resolution cutoff ~ {(1 / (2 * parseFloat(ctPixelSize))).toFixed(2)} lp/mm</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <span className="text-xs text-slate-300 font-medium">Voxel Volume</span>
                <div className="text-2xl font-bold text-white mt-0.5">{ctVoxel} <span className="text-sm font-normal text-slate-400">mm³</span></div>
                <p className="text-xs text-slate-400 mt-1">{parseFloat(ctPixelSize) === ctSlice ? 'Isotropic Voxel' : 'Anisotropic Voxel'}</p>
              </div>
            </div>
          </div>
        )}

        {/* 8. Fluoro Gain */}
        {activeTab === 'fluoro-gain' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Fluoroscopic Image Intensifier Brightness Gain</h3>
                <p className="text-xs text-cyan-400 font-mono">Minification Gain = (d_i / d_o)²  |  Brightness Gain = Minification × Flux Gain</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 25</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Input Phosphor Diameter (d_i)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={fluoroInD}
                    onChange={(e) => setFluoroInD(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Output Phosphor Diameter (d_o)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.5"
                    value={fluoroOutD}
                    onChange={(e) => setFluoroOutD(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm (typ. 2.5)</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Flux Gain</label>
                <div className="relative">
                  <input
                    type="number"
                    value={fluoroFlux}
                    onChange={(e) => setFluoroFlux(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">photons/e⁻</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                <span className="text-xs text-cyan-300 font-medium">Total Brightness Gain</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{brightGain}×</div>
                <p className="text-xs text-slate-400 mt-1">Minification Gain = {minGain.toFixed(1)}×</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <span className="text-xs text-slate-300 font-medium">Standard ICRU Conversion Factor</span>
                <div className="text-2xl font-bold text-white mt-0.5">{conversionFactor} <span className="text-sm font-normal text-slate-400">(cd/m²) / (mGya/s)</span></div>
                <p className="text-xs text-slate-400 mt-1">Typical diagnostic range: 50 to 300</p>
              </div>
            </div>
          </div>
        )}

        {/* 9. RBE & OER */}
        {activeTab === 'rbe-oer' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Radiobiology: RBE & Oxygen Enhancement Ratio</h3>
                <p className="text-xs text-cyan-400 font-mono">RBE = D_250 / D_test  |  OER = D_anoxic / D_aerobic</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 30</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* RBE Sub-panel */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-cyan-300 mb-3">Relative Biologic Effectiveness (RBE)</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Standard Dose (250 kVp)</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        value={d250}
                        onChange={(e) => setD250(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                      <span className="absolute right-3 top-2 text-xs text-slate-500">Gy</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Test Radiation Dose</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        value={dTest}
                        onChange={(e) => setDTest(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                      <span className="absolute right-3 top-2 text-xs text-slate-500">Gy</span>
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-3">
                  <span className="text-xs text-cyan-300 font-medium">Calculated RBE</span>
                  <div className="text-2xl font-bold text-cyan-400 mt-0.5">{rbeCalc}</div>
                  <p className="text-xs text-slate-400 mt-1">Diagnostic x-rays have RBE = 1.0 (LET ~3 keV/μm)</p>
                </div>
              </div>

              {/* OER Sub-panel */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-rose-300 mb-3">Oxygen Enhancement Ratio (OER)</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Anoxic / Hypoxic Dose</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        value={dAnoxic}
                        onChange={(e) => setDAnoxic(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                      />
                      <span className="absolute right-3 top-2 text-xs text-slate-500">Gy</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Aerobic (Oxygenated) Dose</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        value={dAerobic}
                        onChange={(e) => setDAerobic(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                      />
                      <span className="absolute right-3 top-2 text-xs text-slate-500">Gy</span>
                    </div>
                  </div>
                </div>
                <div className="bg-rose-950/40 border border-rose-500/30 rounded-lg p-3">
                  <span className="text-xs text-rose-300 font-medium">Calculated OER</span>
                  <div className="text-2xl font-bold text-rose-400 mt-0.5">{oerCalc}</div>
                  <p className="text-xs text-slate-400 mt-1">Typical diagnostic x-ray OER = 2.5 to 3.0; High-LET OER = 1.0</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 10. Entrance Skin Dose (ESE) */}
        {activeTab === 'ese-calc' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Radiographic Patient Entrance Skin Exposure (ESE)</h3>
                <p className="text-xs text-cyan-400 font-mono">ESE = Machine Output (at 100 cm) × mAs × (100 / SSD)²</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 37</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Output at 100 cm</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    value={eseOutput}
                    onChange={(e) => setEseOutput(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mGya/mAs</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Exposure Technique (mAs)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={eseMas}
                    onChange={(e) => setEseMas(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mAs</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Source-to-Skin Distance (SSD)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={eseSsd}
                    onChange={(e) => setEseSsd(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                <span className="text-xs text-cyan-300 font-medium">Entrance Skin Exposure (Air Kerma)</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{eseVal} <span className="text-sm font-normal text-cyan-300">mGya</span></div>
                <p className="text-xs text-slate-400 mt-1">Equivalent to {(parseFloat(eseVal) * 100).toFixed(0)} mrad</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <span className="text-xs text-slate-300 font-medium">Typical Reference Benchmarks</span>
                <p className="text-xs text-slate-300 mt-1">PA Chest: 0.1–0.2 mGya | AP Lumbar Spine: 2.5–4.0 mGya</p>
                <p className="text-xs text-slate-400 mt-1">Pelvis: 1.5–2.5 mGya | Extremity: 0.05 mGya</p>
              </div>
            </div>
          </div>
        )}

        {/* 11. CT Dosimetry: CTDI_vol, DLP, Effective Dose */}
        {activeTab === 'ct-dosimetry' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">CT Patient Dosimetry: CTDI_vol, DLP, & Effective Dose</h3>
                <p className="text-xs text-cyan-400 font-mono">CTDI_vol = CTDI_w / Pitch  |  DLP = CTDI_vol × Length  |  E = DLP × k</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 38</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Weighted CTDI (CTDI_w)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.5"
                    value={ctdiW}
                    onChange={(e) => setCtdiW(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">mGy</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Helical Pitch</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={ctPitch}
                    onChange={(e) => setCtPitch(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">ratio</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Scan Length (z-axis)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={ctLength}
                    onChange={(e) => setCtLength(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Body Region k-factor</label>
                <select
                  value={ctKFactor}
                  onChange={(e) => setCtKFactor(parseFloat(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value={0.0021}>Head (0.0021)</option>
                  <option value={0.0059}>Neck (0.0059)</option>
                  <option value={0.014}>Chest (0.014)</option>
                  <option value={0.015}>Abdomen/Pelvis (0.015)</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                <span className="text-xs text-cyan-300 font-medium">Volume CTDI (CTDI_vol)</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{ctdiVol} <span className="text-sm font-normal text-cyan-300">mGy</span></div>
                <p className="text-xs text-slate-400 mt-1">Average slice dose across volume</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <span className="text-xs text-slate-300 font-medium">Dose-Length Product (DLP)</span>
                <div className="text-2xl font-bold text-white mt-0.5">{dlpVal} <span className="text-sm font-normal text-slate-400">mGy·cm</span></div>
                <p className="text-xs text-slate-400 mt-1">Total radiation energy imparted</p>
              </div>
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-4">
                <span className="text-xs text-emerald-300 font-medium">Estimated Effective Dose (E)</span>
                <div className="text-2xl font-bold text-emerald-400 mt-0.5">{ctEffDose} <span className="text-sm font-normal text-emerald-300">mSv</span></div>
                <p className="text-xs text-slate-400 mt-1">Whole-body stochastic risk equivalent</p>
              </div>
            </div>
          </div>
        )}

        {/* 12. Dose Area Product (DAP) */}
        {activeTab === 'dap-calc' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Dose Area Product (DAP)</h3>
                <p className="text-xs text-cyan-400 font-mono">DAP = Air Kerma (cGy) × Field Width (cm) × Field Height (cm)</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 36</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Dose / Air Kerma</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={dapDose}
                    onChange={(e) => setDapDose(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cGy</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Field Width</label>
                <div className="relative">
                  <input
                    type="number"
                    value={dapWidth}
                    onChange={(e) => setDapWidth(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Field Height</label>
                <div className="relative">
                  <input
                    type="number"
                    value={dapHeight}
                    onChange={(e) => setDapHeight(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-500">cm</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                <span className="text-xs text-cyan-300 font-medium">Calculated DAP</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{dapVal} <span className="text-sm font-normal text-cyan-300">cGy·cm²</span></div>
                <p className="text-xs text-slate-400 mt-1">Collimation decreases DAP even if entrance dose is unchanged</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <span className="text-xs text-slate-300 font-medium">DAP Meter Location</span>
                <p className="text-xs text-slate-300 mt-1">Mounted directly beneath the collimator leaves prior to beam exit.</p>
                <p className="text-xs text-slate-400 mt-1">DAP remains constant as distance increases because field area expands by 1/d² inverse ratio.</p>
              </div>
            </div>
          </div>
        )}

        {/* 13. Cumulative Dose Limit */}
        {activeTab === 'dose-limit' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Lifetime Cumulative Occupational Dose Limit (NCRP 116)</h3>
                <p className="text-xs text-cyan-400 font-mono">Cumulative Limit = 10 mSv × Age (in years) [= 1 rem × Age]</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Ch. 40</span>
            </div>
            <div className="max-w-md mb-6">
              <label className="block text-xs text-slate-400 mb-1">Technologist Age (Years)</label>
              <input
                type="number"
                value={workerAge}
                onChange={(e) => setWorkerAge(parseInt(e.target.value) || 18)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                <span className="text-xs text-cyan-300 font-medium">Cumulative Lifetime Effective Dose Cap</span>
                <div className="text-2xl font-bold text-cyan-400 mt-0.5">{cumulativeDose} <span className="text-sm font-normal text-cyan-300">mSv</span></div>
                <p className="text-xs text-slate-400 mt-1">Equivalent to {(parseFloat(cumulativeDose) / 10).toFixed(0)} rem</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <span className="text-xs text-slate-300 font-medium">Annual Occupational Effective Limit</span>
                <div className="text-2xl font-bold text-white mt-0.5">50 <span className="text-sm font-normal text-slate-400">mSv/year (5 rem)</span></div>
                <p className="text-xs text-slate-400 mt-1">Lens of eye: 150 mSv/yr | Skin/Extremities: 500 mSv/yr</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

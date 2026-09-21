import React, { useState, useMemo } from 'react';
import { Zap, Activity, Sliders, Info, RotateCcw } from 'lucide-react';

export const SpectrumSimulator: React.FC = () => {
  const [kvp, setKvp] = useState<number>(80);
  const [ma, setMa] = useState<number>(200);
  const [exposureTime, setExposureTime] = useState<number>(0.1);
  const mas = useMemo(() => parseFloat((ma * exposureTime).toFixed(1)), [ma, exposureTime]);
  const [filtration, setFiltration] = useState<number>(2.5); // mm Al equivalent
  const [generator, setGenerator] = useState<'single' | 'three6' | 'three12' | 'hf'>('hf');
  const [target, setTarget] = useState<'tungsten' | 'moly' | 'rhodium'>('tungsten');

  // Generator efficiency multiplier and ripple
  const genConfig = {
    single: { factor: 0.6, ripple: '100% ripple (Single Phase)', name: 'Single Phase (100% Ripple)' },
    three6: { factor: 0.85, ripple: '14% ripple (3-Phase 6-Pulse)', name: '3-Phase 6-Pulse (14% Ripple)' },
    three12: { factor: 0.95, ripple: '4% ripple (3-Phase 12-Pulse)', name: '3-Phase 12-Pulse (4% Ripple)' },
    hf: { factor: 1.0, ripple: '< 1% ripple (High Frequency)', name: 'High-Frequency (< 1% Ripple)' }
  }[generator];

  // Target characteristics
  const targetConfig = {
    tungsten: { z: 74, name: 'Tungsten (W, Z=74)', kEdge: 69.5, kAlpha: 59, kBeta: 67 },
    moly: { z: 42, name: 'Molybdenum (Mo, Z=42 - Mammography)', kEdge: 20.0, kAlpha: 17.5, kBeta: 19.6 },
    rhodium: { z: 45, name: 'Rhodium (Rh, Z=45 - Dense Breast)', kEdge: 23.2, kAlpha: 20.2, kBeta: 22.7 }
  }[target];

  // Calculate Bremsstrahlung spectrum curve points (0 to 150 keV)
  const { points, area, effectiveEnergy, hvlEstimate, characteristicVisible } = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    const maxE = kvp;
    let totalArea = 0;
    let energySum = 0;

    // Filtration attenuation factor: low energies absorbed exponentially: exp(-mu * filtration)
    for (let e = 1; e <= 150; e += 1) {
      if (e > maxE) {
        pts.push({ x: e, y: 0 });
        continue;
      }

      // Kramers law approximation for Bremsstrahlung: I(E) ~ Z * (E_max - E)
      const rawBrems = targetConfig.z * (maxE - e) * 0.005;

      // Filtration transmission: low energies (< 25 keV) are heavily filtered
      const muAl = Math.max(0.05, 120 / Math.pow(e, 1.8)); // approximate mass attenuation of Al
      const transmission = Math.exp(-muAl * filtration * 0.3);

      let intensity = rawBrems * transmission * (mas / 20) * genConfig.factor;
      if (intensity < 0) intensity = 0;

      pts.push({ x: e, y: intensity });
      totalArea += intensity;
      energySum += intensity * e;
    }

    const effE = totalArea > 0 ? (energySum / totalArea).toFixed(1) : '0';
    // HVL estimate: directly proportional to effective energy and filtration
    const hvl = (parseFloat(effE) * 0.065 + filtration * 0.2).toFixed(2);
    const charVis = kvp >= targetConfig.kEdge;

    return {
      points: pts,
      area: Math.round(totalArea * 10),
      effectiveEnergy: effE,
      hvlEstimate: hvl,
      characteristicVisible: charVis
    };
  }, [kvp, mas, filtration, genConfig, targetConfig]);

  // Scaled coordinates for SVG viewBox (0,0 to 600,260)
  const svgWidth = 600;
  const svgHeight = 240;
  const maxIntensity = 120; // scale reference

  const pathD = useMemo(() => {
    let d = `M 0,${svgHeight} `;
    points.forEach((pt) => {
      const px = (pt.x / 150) * svgWidth;
      const py = svgHeight - Math.min(svgHeight, (pt.y / maxIntensity) * svgHeight);
      d += `L ${px.toFixed(1)},${py.toFixed(1)} `;
    });
    d += `L ${(kvp / 150) * svgWidth},${svgHeight} Z`;
    return d;
  }, [points, kvp]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 xs:p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400 shrink-0" />
            Interactive X-Ray Emission Spectrum Simulator
          </h2>
          <p className="text-xs text-slate-400">
            Real-time visualization of Continuous Bremsstrahlung radiation and Discrete Characteristic K-peaks
          </p>
        </div>
        <button
          onClick={() => {
            setKvp(80);
            setMa(200);
            setExposureTime(0.1);
            setFiltration(2.5);
            setGenerator('hf');
            setTarget('tungsten');
          }}
          className="px-3 py-2 min-h-[36px] rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Standard (80 kVp / 200 mA @ 0.1s)
        </button>
      </div>

      {/* Real-time Spectrum SVG Canvas */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5 xs:p-4 sm:p-6 space-y-4 shadow-inner">
        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-xs text-slate-400 px-1 sm:px-2">
          <span className="font-bold text-slate-300 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
            Relative Photon Intensity vs. Energy (keV)
          </span>
          <span className="font-mono text-cyan-400 font-semibold text-[11px] sm:text-xs">
            E_max = {kvp} keV • E_avg ≈ {effectiveEnergy} keV
          </span>
        </div>

        <div className="relative w-full h-52 xs:h-64 border-b border-l border-slate-700 pt-2 pr-2 sm:pr-4">
          {/* SVG Graph */}
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Grid Lines */}
            {[30, 60, 90, 120, 150].map((keV) => (
              <g key={keV}>
                <line
                  x1={(keV / 150) * svgWidth}
                  y1={0}
                  x2={(keV / 150) * svgWidth}
                  y2={svgHeight}
                  stroke="#334155"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                />
                <text
                  x={(keV / 150) * svgWidth}
                  y={svgHeight + 16}
                  fill="#94a3b8"
                  fontSize="11"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {keV}
                </text>
              </g>
            ))}

            {/* Continuous Bremsstrahlung Spectrum Area */}
            <path
              d={pathD}
              fill="url(#spectrumGradient)"
              stroke="#22d3ee"
              strokeWidth="2.5"
            />

            {/* Characteristic K-alpha Peak */}
            {characteristicVisible && (
              <g>
                <line
                  x1={(targetConfig.kAlpha / 150) * svgWidth}
                  y1={svgHeight}
                  x2={(targetConfig.kAlpha / 150) * svgWidth}
                  y2={25}
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle
                  cx={(targetConfig.kAlpha / 150) * svgWidth}
                  cy={25}
                  r="4"
                  fill="#fbbf24"
                />
                <text
                  x={(targetConfig.kAlpha / 150) * svgWidth}
                  y={16}
                  fill="#fbbf24"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  Kα ({targetConfig.kAlpha} keV)
                </text>
              </g>
            )}

            {/* Characteristic K-beta Peak */}
            {characteristicVisible && (
              <g>
                <line
                  x1={(targetConfig.kBeta / 150) * svgWidth}
                  y1={svgHeight}
                  x2={(targetConfig.kBeta / 150) * svgWidth}
                  y2={55}
                  stroke="#fb7185"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle
                  cx={(targetConfig.kBeta / 150) * svgWidth}
                  cy={55}
                  r="3.5"
                  fill="#f43f5e"
                />
                <text
                  x={(targetConfig.kBeta / 150) * svgWidth}
                  y={46}
                  fill="#f43f5e"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  Kβ
                </text>
              </g>
            )}

            {/* Gradients */}
            <defs>
              <linearGradient id="spectrumGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* X-axis Label */}
        <div className="text-center font-mono text-[11px] text-slate-400">
          X-Ray Photon Energy (keV)
        </div>

        {/* Real-time Readouts Bar */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Total Beam Quantity</span>
            <span className="text-base font-black text-white font-mono">{area.toLocaleString()} <span className="text-xs text-slate-400 font-normal">rel. units</span></span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Effective Energy (E_avg)</span>
            <span className="text-base font-black text-cyan-400 font-mono">{effectiveEnergy} <span className="text-xs text-slate-400 font-normal">keV</span></span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Estimated Beam HVL</span>
            <span className="text-base font-black text-emerald-400 font-mono">{hvlEstimate} <span className="text-xs text-slate-400 font-normal">mm Al</span></span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">K-Characteristic Status</span>
            <span className={`text-xs font-bold font-mono ${characteristicVisible ? 'text-amber-400' : 'text-slate-500'}`}>
              {characteristicVisible ? `Active (≥ ${targetConfig.kEdge} keV)` : `Inactive (< ${targetConfig.kEdge} keV)`}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Controls Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 xs:p-5 sm:p-6">
        {/* Left Column Controls */}
        <div className="space-y-4">
          {/* kVp Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-200">Tube Voltage (kVp)</span>
              <span className="text-cyan-400 font-mono font-bold text-sm">{kvp} kVp</span>
            </div>
            <input
              type="range"
              min={40}
              max={150}
              step={1}
              value={kvp}
              onChange={e => setKvp(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>40 kVp</span>
              <span className="text-amber-400/80">K-Edge: 69.5 kVp</span>
              <span>150 kVp</span>
            </div>
          </div>

          {/* Tube Current (mA) Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-200">Tube Current (mA)</span>
              <span className="text-cyan-400 font-mono font-bold text-sm">{ma} mA</span>
            </div>
            <input
              type="range"
              min={50}
              max={1000}
              step={25}
              value={ma}
              onChange={e => setMa(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>50 mA</span>
              <span>500 mA</span>
              <span>1000 mA</span>
            </div>
          </div>

          {/* Exposure Time & mAs Product Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-200">Exposure Time & Product (mAs)</span>
              <span className="text-cyan-400 font-mono font-bold text-sm">
                {exposureTime.toFixed(2)} s <span className="text-slate-400 font-normal">({mas} mAs)</span>
              </span>
            </div>
            <input
              type="range"
              min={0.01}
              max={1.0}
              step={0.01}
              value={exposureTime}
              onChange={e => setExposureTime(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0.01 s</span>
              <span>0.50 s</span>
              <span>1.00 s</span>
            </div>
          </div>

          {/* Added Filtration Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-200">Total Filtration (Beam Hardening)</span>
              <span className="text-emerald-400 font-mono font-bold text-sm">{filtration.toFixed(1)} mm Al</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={5.0}
              step={0.5}
              value={filtration}
              onChange={e => setFiltration(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0.5 mm Al (Low)</span>
              <span className="text-cyan-400">2.5 mm Al (Regulatory standard)</span>
              <span>5.0 mm Al (High)</span>
            </div>
          </div>
        </div>

        {/* Right Column Controls: Generator & Target Material */}
        <div className="space-y-4">
          {/* Generator Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-200 block">
              High-Voltage Generator Type & Voltage Ripple
            </label>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
              {[
                { id: 'single', label: 'Single Phase', ripple: '100% Ripple' },
                { id: 'three6', label: '3-Phase 6-P', ripple: '14% Ripple' },
                { id: 'three12', label: '3-Phase 12-P', ripple: '4% Ripple' },
                { id: 'hf', label: 'High Frequency', ripple: '< 1% Ripple' }
              ].map(g => (
                <button
                  key={g.id}
                  onClick={() => setGenerator(g.id as any)}
                  className={`p-2.5 min-h-[44px] rounded-xl border text-left transition-all ${
                    generator === g.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs">{g.label}</div>
                  <div className="text-[10px] text-cyan-400 font-mono">{g.ripple}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Anode Target Material */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-200 block">
              Anode Target Material & Atomic Number (Z)
            </label>
            <div className="space-y-2">
              {[
                { id: 'tungsten', label: 'Tungsten (W, Z=74)', desc: 'General radiography standard; K-edge at 69.5 keV' },
                { id: 'moly', label: 'Molybdenum (Mo, Z=42)', desc: 'Mammography soft-tissue target; K-edge at 20.0 keV' },
                { id: 'rhodium', label: 'Rhodium (Rh, Z=45)', desc: 'Mammography dense breast target; K-edge at 23.2 keV' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setTarget(t.id as any)}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    target === t.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-xs">{t.label}</div>
                    <div className="text-[10px] text-slate-500">{t.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bushong Physics Rules Explained */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-2">
        <div className="flex items-center gap-1.5 font-bold text-cyan-300">
          <Info className="w-4 h-4" /> Core Bushong Spectrum Principles:
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400">
          <li>• <strong>kVp:</strong> Shifts the maximum energy cut-off (E_max) to the right and raises the entire curve amplitude.</li>
          <li>• <strong>mAs:</strong> Multiplies the height (amplitude) of the curve at every energy proportionally, without changing E_max.</li>
          <li>• <strong>Filtration:</strong> Absorbs low-energy x-rays, shifting the peak toward higher energies (beam hardening) and reducing patient skin dose.</li>
          <li>• <strong>High-Frequency Generators:</strong> Greatly enhance beam intensity and average energy compared to single-phase systems.</li>
        </ul>
      </div>
    </div>
  );
};

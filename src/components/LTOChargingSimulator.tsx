import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import { Play, Pause, RotateCcw, Battery, Zap, Thermometer, ShieldAlert, Wifi } from 'lucide-react';

interface SimulatorProps {
  currentLang: Language;
}

export default function LTOChargingSimulator({ currentLang }: SimulatorProps) {
  const [charging, setCharging] = useState(false);
  const [soc, setSoc] = useState(15); // State Of Charge (SOC) starting at 15%
  const [power, setPower] = useState(0); // Charging power (kW)
  const [temp, setTemp] = useState(22); // battery temp (°C)
  const [cycles, setCycles] = useState(24982); // Simulated cycles run
  const [chargerMode, setChargerMode] = useState<'standard' | 'ultra'>('ultra');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (charging) {
      timerRef.current = setInterval(() => {
        setSoc((prevSoc) => {
          if (prevSoc >= 100) {
            setCharging(false);
            setPower(0);
            return 100;
          }
          // Ultra mode is faster (approx 6% per cycle), Standard is ~3c
          const increment = chargerMode === 'ultra' ? 5.5 : 2.5;
          const nextSoc = Math.min(prevSoc + increment, 100);

          // Simulate active metrics
          const basePower = chargerMode === 'ultra' ? 450 : 220;
          // Taper power near 90%+
          const activePower = nextSoc > 90 ? Math.round(basePower * (1.1 - nextSoc / 100)) : basePower + Math.floor(Math.random() * 15);
          setPower(activePower);

          // Raise temperature slightly
          setTemp((prevTemp) => {
            const limit = chargerMode === 'ultra' ? 36.5 : 29.0;
            if (prevTemp < limit) {
              return parseFloat((prevTemp + 0.6).toFixed(1));
            }
            return parseFloat((limit + (Math.random() * 0.4 - 0.2)).toFixed(1));
          });

          return nextSoc;
        });
      }, 500);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setPower(0);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [charging, chargerMode]);

  const handleStartStop = () => {
    if (soc >= 100) {
      setSoc(15);
      setTemp(22);
    }
    setCharging((prev) => !prev);
  };

  const handleReset = () => {
    setCharging(false);
    setSoc(15);
    setPower(0);
    setTemp(22);
    setCycles(24982 + Math.floor(Math.random() * 10));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-md space-y-6 text-[#333333]" id="chg-simulator">
      {/* Title Segment */}
      <div className="border-b border-slate-100 pb-4 space-y-1 text-left">
        <h3 className="text-[#014e96] text-md font-bold flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-500 animate-pulse" />
          {DICTIONARY.chargingTitle[currentLang]}
        </h3>
        <p className="text-xs text-slate-500">
          {DICTIONARY.chargingDesc[currentLang]}
        </p>
      </div>

      {/* Control Station Panel */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left Info Column */}
        <div className="md:col-span-4 space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">
              Select DC Charger Protocol
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setChargerMode('standard');
                  if (charging) setPower(220);
                }}
                className={`py-2 text-[10px] font-bold tracking-wider rounded border transition-all ${
                  chargerMode === 'standard'
                    ? 'bg-[#eef4ff] border-blue-500 text-blue-700 font-extrabold shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                STANDARD 240kW
              </button>
              <button
                onClick={() => {
                  setChargerMode('ultra');
                  if (charging) setPower(450);
                }}
                className={`py-2 text-[10px] font-bold tracking-wider rounded border transition-all ${
                  chargerMode === 'ultra'
                    ? 'bg-amber-50 border-amber-500 text-amber-700 font-extrabold shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                BOOSTER 480kW (LTO)
              </button>
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleStartStop}
              className={`flex-1 py-3 px-4 rounded-md text-xs font-bold font-mono tracking-wide flex items-center justify-center gap-1.5 border transition-all ${
                charging
                  ? 'bg-amber-500 border-amber-600 hover:bg-amber-400 text-slate-950 font-black hover:scale-[1.02]'
                  : 'bg-[#014e96] border-blue-700 hover:bg-[#003c73] text-white hover:scale-[1.02]'
              }`}
            >
              {charging ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>{DICTIONARY.pauseChg[currentLang]}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{DICTIONARY.startChg[currentLang]}</span>
                </>
              )}
            </button>
            
            <button
              onClick={handleReset}
              className="px-3.5 py-3 bg-slate-100 border border-slate-250 hover:bg-slate-200 hover:text-slate-800 rounded-md text-slate-500 transition-all active:scale-95"
              title="Reset Simulator"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Dynamic Vector Battery Visualizer */}
        <div className="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-lg flex flex-col items-center justify-center space-y-4 min-h-[180px] relative">
          
          {/* Animated Energy Flow Particles Indicator */}
          {charging && (
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] text-blue-600 font-mono animate-pulse">
              <span className="flex items-center gap-1">
                <Wifi className="w-3.5 h-3.5 animate-bounce" />
                <span>DC PILOT COMM ACTIVE</span>
              </span>
              <span>400 V / 450 A</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            {/* Battery Exterior Shell */}
            <div className="w-48 h-20 bg-slate-200 border-4 border-slate-400 rounded-lg p-1.5 flex items-stretch gap-1 relative overflow-hidden shadow-inner">
              
              {/* Battery Cells columns inside */}
              {[...Array(6)].map((_, i) => {
                const cellThreshold = (i + 1) * 16.6;
                const isActive = soc >= cellThreshold;
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded transition-all duration-300 ${
                      isActive
                        ? soc < 30
                          ? 'bg-red-500 shadow-lg shadow-red-500/30'
                          : soc < 60
                          ? 'bg-amber-500 shadow-lg shadow-amber-500/30'
                          : 'bg-emerald-500 shadow-lg shadow-emerald-500/30'
                        : 'bg-slate-300'
                    } ${charging && isActive && i === Math.floor(soc / 16.6) ? 'animate-pulse bg-blue-500' : ''}`}
                  ></div>
                );
              })}

              {/* Shimmer wave effect when charging */}
              {charging && (
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-[shimmer_1s_infinite] pointer-events-none"></div>
              )}
            </div>
            
            {/* Battery Cap */}
            <div className="w-2.5 h-8 bg-slate-400 rounded-r-md"></div>
          </div>

          <div className="text-center">
            <span className="text-3xl font-extrabold font-mono text-slate-800 tracking-tight">
              {Math.round(soc)}%
            </span>
            <span className="text-[10px] font-bold text-slate-500 font-mono tracking-wider block uppercase mt-0.5">
              State of Charge (SOC)
            </span>
          </div>
        </div>

        {/* Right Columns: Live Telemetry readout */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-2.5 font-mono text-xs">
          
          <div className="bg-slate-50 p-2.5 border border-slate-200 rounded-md">
            <span className="text-[10px] text-slate-500 uppercase font-bold block">{DICTIONARY.chgPower[currentLang]}</span>
            <span className={`text-md font-black ${power > 0 ? 'text-amber-600 font-extrabold' : 'text-slate-400'}`}>
              {power} <span className="text-[10px] font-normal">kW</span>
            </span>
          </div>

          <div className="bg-slate-50 p-2.5 border border-slate-200 rounded-md">
            <span className="text-[10px] text-slate-500 uppercase font-bold block flex items-center gap-1">
              <Thermometer className="w-3 h-3 text-blue-500" />
              <span>{DICTIONARY.chgTemp[currentLang]}</span>
            </span>
            <span className={`text-md font-black ${temp > 35 ? 'text-orange-600' : 'text-slate-700'}`}>
              {temp} <span className="text-[10px] font-normal">°C</span>
            </span>
          </div>

          <div className="bg-slate-50 p-2.5 border border-slate-200 rounded-md col-span-2 md:col-span-1">
            <span className="text-[10px] text-slate-500 uppercase font-bold block">{DICTIONARY.chgCycles[currentLang]}</span>
            <span className="text-md font-black text-slate-700">
              {cycles} <span className="text-[10px] text-slate-500">/ 25,000</span>
            </span>
          </div>

        </div>

      </div>

      {/* Status Output Logs feedback */}
      {soc >= 100 && (
        <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-lg text-xs text-emerald-700 flex items-start gap-2 animate-fade-in text-left">
          <p className="font-semibold">{DICTIONARY.chgCompleteMsg[currentLang]}</p>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Product, Language } from '../types';
import { DICTIONARY } from '../data';
import { 
  X, Check, ArrowRight, Cpu, Battery, Eye, 
  Ruler, Users, Zap, Timer, Compass, Gauge, TrendingUp, Maximize2
} from 'lucide-react';

interface ModalProps {
  product: Product | null;
  currentLang: Language;
  onClose: () => void;
  onInquireClick: () => void;
}

export default function ProductDetailModal({
  product,
  currentLang,
  onClose,
  onInquireClick
}: ModalProps) {
  if (!product) return null;

  // Localized label and corresponding Lucide icon mapping for maximum technical visual aesthetic
  const specLabelsMap = [
    { key: 'length', label: DICTIONARY.specLength[currentLang], icon: <Maximize2 className="w-4 h-4 text-slate-550" /> },
    { key: 'dimensions', label: DICTIONARY.specDimensions[currentLang], icon: <Ruler className="w-4 h-4 text-slate-550" /> },
    { key: 'passengerCapacity', label: DICTIONARY.specCapacity[currentLang], icon: <Users className="w-4 h-4 text-slate-550" /> },
    { key: 'batteryType', label: DICTIONARY.specBatteryType[currentLang], icon: <Battery className="w-4 h-4 text-[#014e96]" /> },
    { key: 'batteryCapacity', label: DICTIONARY.specBatteryCapacity[currentLang], icon: <Zap className="w-4 h-4 text-amber-500" /> },
    { key: 'chargingTime', label: DICTIONARY.specCharging[currentLang], icon: <Timer className="w-4 h-4 text-blue-500" /> },
    { key: 'motorPower', label: DICTIONARY.specMotor[currentLang], icon: <Cpu className="w-4 h-4 text-indigo-500" /> },
    { key: 'range', label: DICTIONARY.specRange[currentLang], icon: <Compass className="w-4 h-4 text-emerald-500" /> },
    { key: 'maxSpeed', label: DICTIONARY.specSpeed[currentLang], icon: <Gauge className="w-4 h-4 text-rose-500" /> },
    { key: 'maxClimbing', label: DICTIONARY.specClimbing[currentLang], icon: <TrendingUp className="w-4 h-4 text-orange-500" /> }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto block" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="specs-modal-root">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Backdrop overlay - using simple, clean semi-transparent background to isolate the modal clearly */}
        <div 
          className="fixed inset-0 bg-slate-950/45 transition-opacity z-0" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        {/* Center alignment trick for vertical layout */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal panel body - elevated contrast, thick boundaries to stand out in iframe */}
        <div className="relative z-10 inline-block align-bottom bg-white border border-slate-300 rounded-2xl text-left overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full text-zinc-900 ring-1 ring-black/5">
          
          {/* Header */}
          <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex justify-between items-center mr-0.5">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#014e96] text-white font-mono text-[10px] uppercase font-black rounded shadow-sm">
                  {product.modelCode}
                </span>
                {product.badge && (
                  <span className="px-2 py-0.5 bg-red-100 text-red-800 text-[10px] font-black rounded-md border border-red-200 shadow-sm">
                    {product.badge[currentLang]}
                  </span>
                )}
              </div>
              <h3 className="text-[#014e96] text-lg font-black mt-1.5" id="modal-title">
                {product.name[currentLang]}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-[#666666] hover:text-black p-2 hover:bg-slate-200 rounded-lg transition-colors border border-slate-250 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              
              {/* Left Column: Image and taglines */}
              <div className="md:col-span-2 space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-slate-250 shadow-md bg-white flex items-center justify-center relative group">
                  <img
                    src={product.image}
                    alt={product.name[currentLang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* CAMBELL Series authenticity badge overlay */}
                  {product.category === 'bus' || product.subCategory === 'avtobus' && (
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-[#014e96] text-white px-3 py-1 rounded-md text-[11px] font-bold shadow-lg border border-blue-400/40">
                      <span className="text-amber-400 font-extrabold font-mono tracking-widest text-[11px]">CAMBELL</span>
                      <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                      <span className="text-[10px] font-bold text-slate-100">{currentLang === 'zh' ? '官方系列' : 'Official Series'}</span>
                    </div>
                  )}
                </div>
                
                <div className="bg-slate-50 p-4.5 border border-slate-200 rounded-xl space-y-2.5 text-left shadow-sm">
                  <p className="text-[10px] text-[#014e96] font-extrabold uppercase tracking-widest font-mono">Highlights / 核心亮点</p>
                  <p className="text-slate-900 text-sm font-extrabold leading-snug">
                    "{product.tagline[currentLang]}"
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium pt-2 border-t border-slate-250">
                    {product.description[currentLang]}
                  </p>
                </div>
              </div>

              {/* Right Column: Spec Sheet */}
              <div className="md:col-span-3 space-y-3.5 text-left">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#014e96] border-b border-slate-250 pb-2.5 flex items-center gap-2">
                  <Cpu className="w-4.5 h-4.5 text-[#014e96]" />
                  {DICTIONARY.technicalSpecifications[currentLang]}
                </h4>
                
                {/* Clean, high-contrast, beautiful visual sheet */}
                <div className="bg-white rounded-xl border border-slate-250 overflow-hidden shadow-sm">
                  <div className="divide-y divide-slate-200 max-h-80 overflow-y-auto pr-0.5">
                    {specLabelsMap.map(({ key, label, icon }) => {
                      const value = (product.specs as any)[key];
                      return (
                        <div key={key} className="grid grid-cols-12 py-2.5 px-4 text-xs items-center hover:bg-slate-50 transition-colors odd:bg-slate-50/50">
                          {/* Parameter label with icon */}
                          <div className="col-span-5 flex items-center gap-2 text-slate-900 font-bold text-left">
                            <span className="shrink-0">{icon}</span>
                            <span>{label}</span>
                          </div>
                          {/* Parameter crisp value */}
                          <div className="col-span-7 text-neutral-900 font-extrabold font-mono text-left pl-3.5 border-l border-slate-250 leading-relaxed">
                            {value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Section: Bullet Features */}
            <div className="border-t border-slate-250 pt-5 space-y-3 text-left">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 flex items-center gap-1.5">
                <Check className="w-4.5 h-4.5 text-green-600 stroke-[3]" />
                {currentLang === 'zh' ? '安全与技术专利认证' : currentLang === 'en' ? 'Core Mechanical Advantages' : 'Modelning asosiy afzalliklari'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.keyFeatures[currentLang].map((feature, idx) => (
                  <div key={idx} className="flex gap-2.5 items-center bg-slate-50 hover:bg-slate-100 border border-slate-200 p-3 rounded-lg shadow-sm transition-colors">
                    <span className="flex items-center justify-center w-5.5 h-5.5 bg-[#014e96]/10 text-[#014e96] border border-[#014e96]/20 rounded font-mono text-xs font-black shadow-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-slate-700 leading-normal text-left font-bold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="bg-slate-100 px-6 py-4.5 border-t border-slate-200 flex justify-between items-center mr-0.5">
            <div className="text-[10px] text-slate-500 font-mono hidden sm:block font-extrabold uppercase tracking-wide">
              Product Standard Ref: {product.modelCode}-CAMBELL-CLASS3
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 bg-white border border-slate-250 hover:bg-slate-55 text-xs text-zinc-900 font-bold rounded-lg shadow-sm transition-all cursor-pointer"
              >
                {DICTIONARY.close[currentLang]}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquireClick();
                }}
                className="w-1/2 sm:w-auto px-5 py-2.5 bg-[#e53e3e] hover:bg-red-750 text-xs text-white font-extrabold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{DICTIONARY.requestQuote[currentLang]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

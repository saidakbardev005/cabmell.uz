import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  Cpu, 
  Activity, 
  Layers, 
  CheckCircle, 
  Play, 
  Pause, 
  Compass, 
  ChevronRight, 
  FileText, 
  Truck, 
  Search, 
  AlertCircle,
  TrendingUp,
  Sliders,
  ShieldAlert,
  Download,
  Flame,
  ArrowRight
} from 'lucide-react';

interface FactoryMonitoringProps {
  currentLang: Language;
}

interface AssemblyStep {
  id: number;
  label: { uz: string; zh: string; en: string };
  code: string;
  status: 'completed' | 'active' | 'upcoming';
  robotRate: number;
  temperature: number;
  efficiency: number;
  duration: string;
  description: { uz: string; zh: string; en: string };
  metrics: { name: { uz: string; zh: string; en: string }; value: string; progress: number }[];
}

interface ActiveOrder {
  id: string;
  client: { uz: string; zh: string; en: string };
  qty: { uz: string; zh: string; en: string };
  deliverDate: { uz: string; zh: string; en: string };
  carrier: { uz: string; zh: string; en: string };
  destination: { uz: string; zh: string; en: string };
  routeProgress: number; // 1 to 5 representing current station index
  currentStation: { uz: string; zh: string; en: string };
  logBook: { time: string; text: { uz: string; zh: string; en: string } }[];
}

// ----------------------------------------------------
// DYNAMIC BLUEPRINT SCHEMATICS FOR ASSEMBLY STEPS
// ----------------------------------------------------
function StepVisualSchematic({ stepId, currentLang }: { stepId: number; currentLang: Language }) {
  const [pulseOdd, setPulseOdd] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseOdd(prev => !prev);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const t = (uz: string, zh: string, en: string) => {
    if (currentLang === 'uz') return uz;
    if (currentLang === 'zh') return zh;
    return en;
  };

  return (
    <div className="bg-[#030712] border border-slate-900 rounded-xl p-4 mb-5 relative overflow-hidden flex flex-col items-center justify-center min-h-[190px]" id="step-blueprint-view">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#00cfc0_1px,transparent_1px),linear-gradient(to_bottom,#00cfc0_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
      
      {/* Background neon radial flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/5 blur-[50px] pointer-events-none"></div>

      <div className="w-full flex items-center justify-between mb-3 text-[9px] font-mono tracking-widest text-[#00cfc0]">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-[#00cfc0] rounded-full animate-ping"></span>
          <span>{t("XIZMAT KO‘RSATISH CHIZMASI: JONLI REJIM", "生产品控工艺数字图纸 • 处理中", "DIGITAL TWIN PATHWAY • ACTIVE FEED")}</span>
        </span>
        <span className="text-slate-500">SYS_V24_AUTO</span>
      </div>

      {stepId === 1 && (
        <div className="w-full max-w-md flex flex-col items-center gap-2">
          <svg viewBox="0 0 400 120" className="w-full h-24 stroke-cyan-500/40 fill-none stroke-1.5">
            <line x1="20" y1="100" x2="380" y2="100" className="stroke-slate-800" strokeDasharray="3,3" />
            <path d="M40,90 L60,95 L340,95 L360,90 L360,60 L350,35 L120,35 L100,55 L40,55 Z" strokeWidth="2" className="stroke-cyan-400" />
            <line x1="120" y1="35" x2="120" y2="95" className="stroke-cyan-500/65" />
            <line x1="200" y1="35" x2="200" y2="95" className="stroke-cyan-500/65" />
            <line x1="280" y1="35" x2="280" y2="95" className="stroke-cyan-500/65" />
            
            <line x1="40" y1="55" x2="100" y2="95" strokeDasharray="2,2" />
            <line x1="120" y1="35" x2="200" y2="95" strokeDasharray="2,2" />
            <line x1="200" y1="35" x2="280" y2="95" strokeDasharray="2,2" />
            <line x1="280" y1="35" x2="340" y2="95" strokeDasharray="2,2" />
            
            <circle cx="90" cy="95" r="14" className="stroke-[#030712]" fill="#030712" />
            <circle cx="300" cy="95" r="14" className="stroke-[#030712]" fill="#030712" />
            <circle cx="90" cy="95" r="14" strokeDasharray="2,2" />
            <circle cx="300" cy="95" r="14" strokeDasharray="2,2" />

            {/* Glowing welding spark stars */}
            <circle cx="120" cy="35" r={pulseOdd ? "5" : "2"} className="fill-amber-400 stroke-amber-400/80" />
            <circle cx="200" cy="95" r={pulseOdd ? "2" : "5"} className="fill-yellow-400 stroke-yellow-400/80" />
            <circle cx="280" cy="35" r={pulseOdd ? "6" : "3"} className="fill-orange-400 stroke-orange-400/80" />
            <circle cx="340" cy="95" r={pulseOdd ? "3" : "6"} className="fill-amber-500 stroke-amber-500/80" />
            
            {/* Laser scanning vertical bar */}
            <line x1={pulseOdd ? "90" : "310"} y1="20" x2={pulseOdd ? "90" : "310"} y2="105" className="stroke-red-500/60 stroke-2 transition-all duration-1000" />
          </svg>
          <span className="text-[10px] font-mono text-amber-400 mt-1 uppercase font-bold tracking-wider text-center">
            {t("KUKA Robotlari: Karkas payvandlash va mustahkamlash (Faol)", "德国KUKA六轴机器人：车身骨架高频熔化保护接缝 (加工中)", "KUKA Heavy Robotization: High-strength monocoque frame welding on go")}
          </span>
        </div>
      )}

      {stepId === 2 && (
        <div className="w-full max-w-md flex flex-col items-center gap-2">
          <svg viewBox="0 0 400 120" className="w-full h-24 stroke-teal-500/40 fill-none stroke-1.5">
            <rect x="30" y="50" width="340" height="55" className="stroke-teal-500/30" fill="rgba(20, 184, 166, 0.05)" />
            <path d="M30,55 Q50,52 70,55 T110,55 T150,55 T190,55 T230,55 T270,55 T310,55 T350,55 T370,55" className="stroke-teal-400/80 stroke-1" strokeDasharray="3,1" />

            <g transform="translate(0, 15)">
              <path d="M45,65 L65,70 L335,70 L355,65 L355,42 L345,22 L120,22 L100,38 L45,38 Z" strokeWidth="2" className="stroke-[#00cfc0]" fill="rgba(0, 207, 192, 0.15)" />
              <line x1="120" y1="22" x2="120" y2="70" className="stroke-teal-300/40" />
              <line x1="280" y1="22" x2="280" y2="70" className="stroke-teal-300/40" />
              <circle cx="95" cy="70" r="11" className="stroke-teal-500/20 fill-teal-950/80" />
              <circle cx="295" cy="70" r="11" className="stroke-teal-500/20 fill-teal-950/80" />
            </g>

            {/* Ions floating downwards */}
            <text x="70" y={pulseOdd ? "65" : "75"} className="fill-teal-300 text-[8px] font-bold font-mono">H+</text>
            <text x="140" y={pulseOdd ? "85" : "75"} className="fill-teal-300 text-[8px] font-bold font-mono">OH-</text>
            <text x="220" y={pulseOdd ? "70" : "80"} className="fill-[#00dfd0] text-[8px] font-bold font-mono">DFT•Ni2+</text>
            <text x="320" y={pulseOdd ? "65" : "80"} className="fill-teal-300 text-[8px] font-bold font-mono">Epoxy+</text>

            <circle cx="100" cy="85" r="2" className="fill-teal-350 animate-pulse" />
            <circle cx="180" cy="70" r="1.5" className="fill-teal-350 animate-pulse" />
            <circle cx="250" cy="90" r="2.5" className="fill-teal-350 animate-pulse" />
          </svg>
          <span className="text-[10px] font-mono text-teal-400 mt-1 uppercase font-bold tracking-wider text-center">
            {t("CAT Kataforez vannasi: Korroziyadan 15 yillik mutloq himoya (Faol)", "整车全浸没式阴极超声电泳：使钢壳附着致密防刮防锈固封层 (池深2.6m)", "Nano cathodic cataphoresis bath: Fully active chemical molecule deposition")}
          </span>
        </div>
      )}

      {stepId === 3 && (
        <div className="w-full max-w-md flex flex-col items-center gap-2">
          <svg viewBox="0 0 400 120" className="w-full h-24 stroke-green-500/40 fill-none stroke-1.5">
            <line x1="20" y1="100" x2="380" y2="100" className="stroke-slate-800" strokeDasharray="3,3" />
            <path d="M40,90 L60,95 L340,95 L360,90 L360,60 L350,35 L120,35 L100,55 L40,55 Z" strokeWidth="2" className="stroke-green-400" />
            
            <path d="M40,55 L100,55 L120,35 L350,35 L360,60 L240,60 L230,90 L60,95 L40,90 Z" className="fill-emerald-500/20 stroke-none" />
            <path d="M240,60 L360,60 L360,90 L340,95 L230,90 Z" className="fill-green-400/35 stroke-none animate-pulse" />

            <circle cx="90" cy="95" r="14" className="stroke-[#070b1a] fill-[#070b1a]" />
            <circle cx="300" cy="95" r="14" className="stroke-[#070b1a] fill-[#070b1a]" />
            <circle cx="90" cy="95" r="12" className="stroke-green-900" />
            <circle cx="300" cy="95" r="12" className="stroke-green-900" />

            {/* Spray paint effect */}
            <path d="M110,15 L120,35" className="stroke-emerald-400 stroke-2" strokeDasharray="2,2" />
            <path d="M260,15 L250,35" className="stroke-green-300 stroke-2" strokeDasharray="3,1" />
            <path d="M320,15 L320,35" className="stroke-emerald-400 stroke-2" strokeDasharray="2,2" />

            <circle cx="110" cy="15" r="4" className="fill-emerald-500" />
            <circle cx="260" cy="15" r="4" className="fill-green-400" />
            <circle cx="320" cy="15" r="4" className="fill-emerald-500" />

            <path d="M80,30 Q120,25 150,30" className="stroke-emerald-400/40 animate-pulse" />
            <path d="M220,30 Q260,25 300,30" className="stroke-green-400/40 animate-pulse" />
          </svg>
          <span className="text-[10px] font-mono text-green-400 mt-1 uppercase font-bold tracking-wider text-center">
            {t("Robotli Bo'yoq: Elektrostatik purkash va issiq quritish (Faol)", "德国静电旋杯客车喷涂系统：多层双面喷射、漆膜厚度实时诊断 (正常)", "Electrostatic spray bell process: Dustless curing chamber operations active")}
          </span>
        </div>
      )}

      {stepId === 4 && (
        <div className="w-full max-w-md flex flex-col items-center gap-2">
          <svg viewBox="0 0 400 120" className="w-full h-24 stroke-blue-500/40 fill-none stroke-1.5">
            <path d="M40,90 L60,95 L340,95 L360,90 L360,60 L350,35 L120,35 L100,55 L40,55 Z" strokeWidth="1.5" className="stroke-indigo-800" />
            
            {/* LTO battery back block */}
            <rect x="120" y="80" width="130" height="12" rx="2" className="stroke-blue-400 fill-blue-950/85 stroke-2" />
            <line x1="145" y1="80" x2="145" y2="92" className="stroke-blue-500/50" />
            <line x1="170" y1="80" x2="170" y2="92" className="stroke-blue-500/50" />
            <line x1="195" y1="80" x2="195" y2="92" className="stroke-blue-500/50" />
            <line x1="220" y1="80" x2="220" y2="92" className="stroke-blue-500/50" />

            {/* Rear dynamic transmission axle & PMSM engine */}
            <ellipse cx="288" cy="85" rx="14" ry="10" className="stroke-purple-400 fill-purple-950/85 stroke-2" />
            <path d="M280,85 M296,85" className="stroke-purple-300" strokeWidth="2" />

            <line x1="90" y1="92" x2="120" y2="85" className="stroke-cyan-500" strokeWidth="1.5" />
            <circle cx="90" cy="95" r="14" className="stroke-slate-600 fill-slate-900" />
            <circle cx="300" cy="95" r="14" className="stroke-slate-600 fill-slate-900" />

            {/* Animated electrical flow */}
            <path d="M250,86 L274,86" className="stroke-blue-400 stroke-2" strokeDasharray="3,2" />
            
            <g className="opacity-95">
              <text x="135" y="73" className="fill-blue-400 text-[8px] font-mono font-bold uppercase">LTO BATTERIES (IP68)</text>
              <text x="250" y="70" className="fill-purple-400 text-[8px] font-mono font-bold uppercase">350kW PMSM ENGINE</text>
            </g>
          </svg>
          <span className="text-[10px] font-mono text-blue-400 mt-1 uppercase font-bold tracking-wider text-center">
            {t("Dvigatel va tortish batareyalari: Butlash va tuman shinalarini o'rnatish", "总装合装工区：高安全钛酸锂及350kW多合一电控高压线束互联 (合围完毕)", "EV Heavy Fittings: High-isolation fast LTO battery busbars and motor fitting")}
          </span>
        </div>
      )}

      {stepId === 5 && (
        <div className="w-full max-w-md flex flex-col items-center gap-2">
          <svg viewBox="0 0 400 120" className="w-full h-24 stroke-purple-500/40 fill-none stroke-1.5">
            <path d="M40,90 L60,95 L340,95 L360,90 L360,60 L350,35 L120,35 L100,55 L40,55 Z" strokeWidth="2" className="stroke-purple-400" />

            <circle cx="90" cy="95" r="14" className="stroke-purple-500/60 fill-slate-900" />
            <circle cx="300" cy="95" r="14" className="stroke-purple-500/60 fill-slate-900" />
            
            {/* Spinning indicator */}
            <circle cx="90" cy="95" r="8" className="stroke-cyan-400 animate-pulse" strokeDasharray="4,2" />
            <circle cx="300" cy="95" r="8" className="stroke-cyan-400 animate-pulse" strokeDasharray="4,2" />

            {/* Sprays of water checking isolation */}
            <line x1="30" y1="15" x2="370" y2="15" className="stroke-slate-800" strokeWidth="2" />
            <line x1="60" y1="15" x2="60" y2="50" className="stroke-blue-400/70" strokeDasharray="3,6" />
            <line x1="120" y1="15" x2="120" y2="40" className="stroke-blue-400/50" strokeDasharray="3,5" />
            <line x1="180" y1="15" x2="180" y2="60" className="stroke-blue-400/70" strokeDasharray="2,4" />
            <line x1="240" y1="15" x2="240" y2="40" className="stroke-blue-400/50" strokeDasharray="3,5" />
            <line x1="300" y1="15" x2="300" y2="50" className="stroke-blue-400/70" strokeDasharray="3,6" />

            <rect x="15" y="25" width="55" height="18" rx="2" className="stroke-slate-800 fill-slate-950/95" />
            <text x="21" y="37" className="fill-green-400 text-[8.5px] font-mono">ABS: PASS</text>

            <rect x="330" y="25" width="55" height="18" rx="2" className="stroke-slate-800 fill-slate-950/95" />
            <text x="335" y="37" className="fill-green-400 text-[8.5px] font-mono">SEAL: 100%</text>
          </svg>
          <span className="text-[10px] font-mono text-purple-400 mt-1 uppercase font-bold tracking-wider text-center">
            {t("Yakuniy Sifat Nazorati: Dinamik tormoz va dush kamerasi datchiklari", "出厂检验淋雨室与动能回收测功器调试：全域控制模块无错通关 (正常)", "Rigorous Dynamic Diagnostics: Seal, brake integrity, and ECU flashing completed")}
          </span>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// DYNAMIC CORRIDOR TRANSIT MAP (LANZHOU to UZBEKISTAN)
// ----------------------------------------------------
function GPSRouteLiveMap({ activeOrder, currentLang }: { activeOrder: ActiveOrder; currentLang: Language }) {
  const t = (uz: string, zh: string, en: string) => {
    if (currentLang === 'uz') return uz;
    if (currentLang === 'zh') return zh;
    return en;
  };

  const getCargoCoordinates = () => {
    const progress = activeOrder.routeProgress; 
    if (progress === 1) {
      return { x: 23, y: 59, label: t("Ehtiyot qismlar yo'lda (Khorgosga qarab)", "高自控核心件大件物流运载中", "Key components loaded, transit to border") };
    }
    if (progress === 2) {
      return { x: 62, y: 50, label: t("Andijon: Korpus kataforez vannasida", "正在安集延制造车间进行电泳工艺", "Andijan Plant: Electrochemical bath active") };
    }
    if (progress === 3) {
      return { x: 62, y: 50, label: t("Andijon: Robotlashgan bo'yash liniyasi", "正在安集延车间进行烤漆工艺", "Andijan Plant: Robotic coat baking active") };
    }
    if (progress === 4) {
      if (activeOrder.id === 'AND-112') { 
        return { x: 75, y: 39, label: t("Toshkentga yetkazilmoqda (A-373 trassasi)", "大宗成品专线车队越过查特卡尔山运往塔什干", "Freight fleet ascending Kamchik Pass to Tashkent") };
      } else if (activeOrder.id === 'AND-039') { 
        return { x: 75, y: 54, label: t("Farg'onaga transport yuklanmoqda", "成品调拨运出，运经费尔干纳大Depot", "Transit convoy descending to Fergana valley depot") };
      } else { 
        return { x: 71, y: 65, label: t("Samarqandga Vintage furgon tranziti", "复古定制客车超宽重卡押运行进中", "Heritage antique flatbeds en route to Samarkand") };
      }
    }
    if (activeOrder.id === 'AND-112') {
      return { x: 88, y: 28, label: t("Toshkent: Chilonzor depoga topshirildi", "已完工抵达并交付塔什干第3大型公交枢纽", "Arrived & catalogued at Tashkent, Depot #3") };
    } else if (activeOrder.id === 'AND-039') {
      return { x: 88, y: 58, label: t("Farg'ona: Regional transport depasiga topshirildi", "已完工交付费尔干纳州交通运输部并投入试运", "Formally delivered to Fergana Transit Department") };
    } else {
      return { x: 80, y: 80, label: t("Samarqand: Silk Road Tour parkida", "已完工安全配至撒马尔罕雷吉斯坦古区摆渡区", "Fully delivered to Samarkand tourist operations and tour depot") };
    }
  };

  const cargo = getCargoCoordinates();

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-4 mt-6 text-left relative overflow-hidden flex flex-col gap-4 shadow-sm" id="geo-tracking-system">
      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#014e96] font-extrabold uppercase select-none">
          <Compass className="w-4 h-4 text-[#014e96] animate-spin" style={{ animationDuration: '12s' }} />
          <span>{t("YEVROOSIYO JONLI GPS TRANZIT XARITASI (LANZHOU - ANDIJON)", "丝绸之路横跨欧亚智能货运星图 (兰州总装 ⇄ 安集延分厂)", "BELT AND ROAD LIVE TRANSIT LINK (LANZHOU ⇄ ANDIJAN)")}</span>
        </div>
        <span className="text-[8px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
          BEACON {activeOrder.id} ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch">
        <div className="lg:col-span-3 bg-slate-50 border border-slate-200/80 rounded-lg p-3 relative min-h-[220px] flex items-center justify-center">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#014e96_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>

          <svg viewBox="0 0 500 240" className="w-full h-full max-h-[240px] z-10 fill-none select-none">
            {/* Topographic backgrounds */}
            <path d="M 120 10 L 210 50 L 260 40 L 300 90 L 330 80 L 360 120 M 360 120 L 410 160 L 460 210" className="stroke-slate-200" strokeWidth="1" strokeDasharray="4,4" />
            <path d="M 240 130 H 300 L 340 180" className="stroke-slate-200" strokeWidth="1" strokeDasharray="4,4" />

            {/* Lanzhou-Xinjiang Route */}
            <path d="M 50,168 L 180,115" className="stroke-blue-105/20" strokeWidth="3" />
            <path d="M 50,168 L 180,115" className="stroke-blue-500/50 stroke-1.5" strokeDasharray="5,6" />

            {/* Xinjiang Border -> Andijan Path */}
            <path d="M 180,115 L 310,120" className="stroke-blue-105/20" strokeWidth="3" />
            <path d="M 180,115 L 310,120" className="stroke-blue-450/60 stroke-1.5" strokeDasharray="4,4" />

            {/* Direct branches */}
            <path d="M 310,120 L 440,67" className={`transition-all duration-500 ${activeOrder.id === 'AND-112' ? 'stroke-blue-500/40 stroke-[2px]' : 'stroke-slate-200'}`} strokeDasharray="2,3" />
            <path d="M 310,120 L 440,139" className={`transition-all duration-500 ${activeOrder.id === 'AND-039' ? 'stroke-blue-500/40 stroke-[2px]' : 'stroke-slate-200'}`} strokeDasharray="2,3" />
            <path d="M 310,120 L 400,192" className={`transition-all duration-500 ${activeOrder.id === 'AND-001' ? 'stroke-blue-500/40 stroke-[2px]' : 'stroke-slate-200'}`} strokeDasharray="2,3" />

            {/* Hubs */}
            <g transform="translate(50, 168)" className="cursor-help">
              <circle r="9" className="fill-blue-100/10 stroke-blue-300" />
              <circle r="4" className="fill-[#014e96]" />
              <text x="12" y="3" className="fill-slate-600 text-[8px] font-mono font-bold">Lanzhou HQ</text>
            </g>

            <g transform="translate(180, 115)">
              <circle r="8" className="fill-amber-50/10 stroke-amber-200" />
              <circle r="3.5" className="fill-amber-500" />
              <text x="10" y="-5" className="fill-slate-600 text-[8px] font-mono font-bold">Khorgos Border</text>
            </g>

            <g transform="translate(310, 120)">
              <circle r="11" className="fill-green-100/10 stroke-green-300" />
              <circle r="5" className="fill-[#02a854] animate-ping" />
              <circle r="4" className="fill-[#02a854]" />
              <text x="-30" y="21" className="fill-slate-800 text-[8px] font-bold font-mono tracking-wider">Andijan Plant</text>
            </g>

            <g transform="translate(440, 67)">
              <circle r="7" className={`transition-all duration-500 ${activeOrder.id === 'AND-112' ? 'fill-blue-100/10 stroke-blue-500' : 'fill-white stroke-slate-250'}`} />
              <circle r="3" className={`transition-all duration-500 ${activeOrder.id === 'AND-112' ? 'fill-blue-500' : 'fill-slate-400'}`} />
              <text x="10" y="3" className={`text-[8px] font-mono leading-none ${activeOrder.id === 'AND-112' ? 'fill-[#014e96] font-extrabold' : 'fill-slate-400'}`}>Tashkent (Depot 3)</text>
            </g>

            <g transform="translate(440, 139)">
              <circle r="7" className={`transition-all duration-500 ${activeOrder.id === 'AND-039' ? 'fill-blue-100/10 stroke-blue-500' : 'fill-white stroke-slate-250'}`} />
              <circle r="3" className={`transition-all duration-500 ${activeOrder.id === 'AND-039' ? 'fill-blue-500' : 'fill-slate-400'}`} />
              <text x="10" y="3" className={`text-[8px] font-mono leading-none ${activeOrder.id === 'AND-039' ? 'fill-[#014e96] font-extrabold' : 'fill-slate-400'}`}>Fergana (102)</text>
            </g>

            <g transform="translate(400, 192)">
              <circle r="7" className={`transition-all duration-500 ${activeOrder.id === 'AND-001' ? 'fill-blue-100/10 stroke-blue-500' : 'fill-white stroke-slate-250'}`} />
              <circle r="3" className={`transition-all duration-500 ${activeOrder.id === 'AND-001' ? 'fill-blue-500' : 'fill-slate-400'}`} />
              <text x="10" y="3" className={`text-[8px] font-mono leading-none ${activeOrder.id === 'AND-001' ? 'fill-[#014e96] font-extrabold' : 'fill-slate-400'}`}>Samarkand Tour</text>
            </g>

            {/* DYNAMIC LOGISTICS CARGO POSITION TRUCK PATH */}
            <g transform={`translate(${cargo.x * 5}, ${cargo.y * 2.4})`} className="transition-all duration-1000 ease-out z-20">
              <rect x="-10" y="-10" width="20" height="20" rx="3" className="fill-blue-100/20 stroke-blue-400 animate-pulse" />
              <circle r="6" className="fill-[#014e96]" />
              <circle r="2.5" className="fill-white" />
              <g transform="translate(-40, -18)">
                <rect x="0" y="0" width="80" height="12" rx="2" className="fill-white border border-slate-250 shadow-sm" />
                <text x="40" y="8" textAnchor="middle" className="fill-slate-750 font-mono text-[7px] font-bold">{activeOrder.id}: ON ROUTE</text>
              </g>
            </g>
          </svg>

          {/* Location details overlay */}
          <div className="absolute bottom-2 left-2 right-2 bg-slate-905/95 border border-slate-200 shadow-md rounded px-2.5 py-1.5 backdrop-blur z-20">
            <p className="text-[10px] font-mono font-medium text-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[#014e96] uppercase">{t("Hozirgi manzil:", "当前遥测位置:", "Current Geolocation:")}</span>
              <span className="text-slate-700 truncate font-semibold">{cargo.label}</span>
            </p>
          </div>
        </div>

        {/* Sidebar values for map */}
        <div className="lg:col-span-1 bg-slate-50 border border-slate-205 rounded-lg p-3 flex flex-col justify-between text-[11px] font-mono text-slate-755 shadow-inner">
          <div className="space-y-3.5 text-left">
            <span className="text-[8px] font-black tracking-widest text-slate-400 uppercase block">
              {t("TRANZIT YO'NALISHI", "地学运输测控参数", "Transit Milestones")}
            </span>

            <div className="space-y-2">
              <div>
                <span className="text-[8px] text-slate-450 block leading-normal uppercase">{t("KELIB CHIQISH:", "研发物料中心:", "Source Base:")}</span>
                <span className="text-slate-800 font-bold">Lanzhou (Gansu, CN)</span>
              </div>
              <div className="border-l border-blue-550/30 pl-2 py-0.5 space-y-2">
                <div>
                  <span className="text-[8px] text-slate-450 block leading-normal uppercase">{t("ORALIQ GUMRUK:", "边控口岸结转:", "Customs Terminal:")}</span>
                  <span className="text-slate-650">Khorgos Border Station</span>
                </div>
                <div>
                  <span className="text-[8px] text-slate-450 block leading-normal uppercase">{t("YIG'ILISH MARKAZI:", "制造及组装车间:", "Assembled & Calibrated:")}</span>
                  <span className="text-[#014e96] font-bold">Andijan Factory (UZ)</span>
                </div>
              </div>
              <div>
                <span className="text-[8px] text-slate-450 block leading-normal uppercase">{t("YAKUNIY PUNKT:", "交车运营站点:", "Delivery City Depot:")}</span>
                <span className="text-blue-800 font-extrabold truncate block">
                  {activeOrder.id === 'AND-112' ? 'Tashkent (TSX)' : activeOrder.id === 'AND-039' ? 'Fergana (FZ)' : 'Samarkand (SilkTour)'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-0.5 text-left">
            <span className="text-[8px] uppercase tracking-wider text-slate-400 block">GPS SYSTEM STATUS</span>
            <span className="text-[#014e96] text-[10px] font-bold block">40.7821° N, 72.3442° E</span>
            <span className="text-slate-455 text-[8px] block">SSL_ENCRYPTED_LINK_OK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------
export default function FactoryMonitoring({ currentLang }: FactoryMonitoringProps) {
  const [activeStepId, setActiveStepId] = useState<number>(2); // Default to Step 2: Cataphoresis
  const [activeOrderId, setActiveOrderId] = useState<string>('AND-039');
  const [simRunning, setSimRunning] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Simulated dynamic telemetry metrics
  const [sensorPulse, setSensorPulse] = useState<number>(99.5);
  const [robotTemp, setRobotTemp] = useState<number>(42);
  const [currentPower, setCurrentPower] = useState<number>(340);
  const [completedBusesCount, setCompletedBusesCount] = useState<number>(42);

  const t = (uz: string, zh: string, en: string) => {
    if (currentLang === 'uz') return uz;
    if (currentLang === 'zh') return zh;
    return en;
  };

  const assemblySteps: AssemblyStep[] = [
    {
      id: 1,
      label: {
        uz: 'Shassi va Karkasni Payvandlash',
        zh: '底盘与车身骨架自动化焊接工艺',
        en: 'Robotic Chassis & Frame Welding Line'
      },
      code: 'WELD-01',
      status: 'completed',
      robotRate: 85,
      temperature: 1450,
      efficiency: 97.4,
      duration: '45 min',
      description: {
        uz: 'Shu bosqichda yuqori mustahkamlikka ega po\'lat profillar robot-birlashtiruvchilar yordamida avtomatlashtirilgan tarzda payvandlanib, avtobusning asosiy zaxira skeleti shakllantiriladi.',
        zh: '在该工位，利用高强度低合金钢材桁架，通过重型焊接机器人进行全自动二氧化碳气体保护焊，精确定位成型整车承载式立体式骨架。',
        en: 'At this station, high-strength structural carbon-steel profiles are welded by programmable robotic manipulators to form the monocoque chassis.'
      },
      metrics: [
        { 
          name: { uz: 'Robot payvand mustahkamligi', zh: '焊接熔深与焊接平整度级别', en: 'Welding Joint Tensile Integrity' }, 
          value: '99.8%', 
          progress: 99.8 
        },
        { 
          name: { uz: 'Lazer datchigi og\'ishi', zh: '激光红外光栅束对齐偏差值', en: 'Laser Crosshair Target Deflection' }, 
          value: '0.02 mm', 
          progress: 95 
        },
        { 
          name: { uz: 'Karkas buralish mustahkamligi', zh: '抗扭抗剪变性能应力评级', en: 'Torsional Stress Tolerance' }, 
          value: '450 MPa', 
          progress: 88 
        }
      ]
    },
    {
      id: 2,
      label: {
        uz: 'Korroziyaga qarshi Kataforez vannasi',
        zh: '多温区整车阴极电泳防腐漆涂装',
        en: '12-Phase Cathodic Cataphoresis Treatment'
      },
      code: 'CATH-02',
      status: 'active',
      robotRate: 98,
      temperature: 28,
      efficiency: 99.5,
      duration: '120 min',
      description: {
        uz: 'Avtobus korpusi 12 bosqichli maxsus kimyoviy-gavanik vannalarga to\'liq botirilib qoplanadi va sirt korroziyaga qarshi 15 yillik mutloq kafolatlangan yupqa himoya qatlamiga ega bo\'ladi.',
        zh: '车身整体通过12道严格控制的理化去油、水洗与浸没式阴极电泳处理，使金属晶格晶体外部形成致密高分子防蚀层，确保15年以上超强抗锈抗漏。',
        en: 'The entire steel passenger shell undergoes deep liquid immersion across 12 sequential chemical electrocoating chambers, creating an unyielding anti-rust shield.'
      },
      metrics: [
        { 
          name: { uz: 'Kataforez vannasi konsentratsiyasi', zh: '电泳槽液固组分及含漆百分比', en: 'Electrocoating Bath Active Ratio' }, 
          value: `${sensorPulse}%`, 
          progress: sensorPulse 
        },
        { 
          name: { uz: 'Qoplama datchik qalinligi (Sirtda)', zh: '聚合物纳米干膜固化厚度', en: 'Dry Film Thickness (DFT) Metrics' }, 
          value: '22 µm', 
          progress: 92 
        },
        { 
          name: { uz: 'Elektrik ionlash kuchlanishi', zh: '高整流离子析出静电电压', en: 'Ionization Electrocoat Voltage' }, 
          value: '380 V', 
          progress: 94 
        }
      ]
    },
    {
      id: 3,
      label: {
        uz: 'Yuqori Sifatli Robotli Bo\'yoq',
        zh: '三涂一烘旋杯式静电全自动喷漆',
        en: 'High-Gloss Electrostatic Spray Painting'
      },
      code: 'PAIN-03',
      status: 'upcoming',
      robotRate: 95,
      temperature: 65,
      efficiency: 96.8,
      duration: '60 min',
      description: {
        uz: 'Germaniyadan keltirilgan elektrostatik aylanuvchi purkagichlar va dasturiy bo\'yoq robotlari orqali havosiz bechang toza xonalarda ikki xil tusli yorqin va bardoshli nano sirt qoplama beriladi.',
        zh: '配用静电旋杯无尘自动喷漆漆枪轴臂，辅以多色一次烘干固化技术，保障漆面均匀高亮，耐受高寒直晒紫外老化。',
        en: 'Featuring electrostatic rotary bell atomizations in pressurized cleanrooms, achieving immaculate dual-tone color coats and thermal gloss bake.'
      },
      metrics: [
        { 
          name: { uz: 'Sirt yopishqoqlik adgeziyasi', zh: '面漆附着力黏连系数 (B.S.)', en: 'Specular Paint Adhesion Score' }, 
          value: '98.9%', 
          progress: 98.9 
        },
        { 
          name: { uz: 'Sirt yaltiroqlik indeksi (GU)', zh: '折射率反射透光度指标', en: 'Specular Gloss Reflection Spec' }, 
          value: '92 GU', 
          progress: 92 
        },
        { 
          name: { uz: 'Filtratsiya tozaligi (HEPA)', zh: '无尘室空气微粒过滤比例', en: 'HEPA Airborne Microparticle Class' }, 
          value: '99.9%', 
          progress: 99.9 
        }
      ]
    },
    {
      id: 4,
      label: {
        uz: 'Elektr va LTO Batareyalar O\'rnatish',
        zh: '高压动力系统与底盘机械部件合装',
        en: 'EV Powertrain & Chassis Component Fitting'
      },
      code: 'ASSE-04',
      status: 'upcoming',
      robotRate: 45,
      temperature: 24,
      efficiency: 98.2,
      duration: '180 min',
      description: {
        uz: 'Portlashdan va sovuqdan mutloq xavfsiz bo\'lgan professional LTO (litiy titanatli) akkumulyator bloklari, tortish motorlari, havo klapanlari va pnevmatik osmalar to\'plamining butlanishi.',
        zh: '合装超低温不爆不自燃钛酸锂(LTO)高能量密度电池舱总成、大转矩永磁同步电机及承载整体气路、全轴高度调整悬挂气囊。',
        en: 'Fitting of pioneering sub-zero crash-isolated LTO (lithium titanate) energy storage modules, synch powertrain motors, and pneumatic valves.'
      },
      metrics: [
        { 
          name: { uz: 'LTO batareyalar izolatsiyasi', zh: '高电压动力母排对地绝缘电阻', en: 'High-Voltage Isolation Resistance' }, 
          value: '500 MΩ', 
          progress: 100 
        },
        { 
          name: { uz: 'Bolt qotirish datchigi nazorati', zh: '承载紧固件数力矩精度系数', en: 'Serrated Fastener Dynamic Torque' }, 
          value: '99.2%', 
          progress: 99.2 
        },
        { 
          name: { uz: 'Pnevmatik sızdırmazlik barqarorligi', zh: '空气制动阀与悬挂干路极速气密性', en: 'Pneumatic Brake Path Air Sealing' }, 
          value: '0.00 bar/h', 
          progress: 96 
        }
      ]
    },
    {
      id: 5,
      label: {
        uz: 'Yakuniy Sifat va Sinov Yo\'li',
        zh: '多工况出厂前整车综合调试检验',
        en: 'Final Dynamic Validation & Track Run'
      },
      code: 'TEST-05',
      status: 'upcoming',
      robotRate: 20,
      temperature: 18,
      efficiency: 100,
      duration: '90 min',
      description: {
        uz: 'EMS datchiklar tashxisi, kuchli bosimli dush xonasida suv o\'tkazmaslik sinovi, ABS tormoz tizmi sozlashlari va sinov poligonida ekstremal tezlanish sinovlari.',
        zh: '出厂检验流程核心：整车强力模拟淋雨防渗测试、动态防抱死驻车制动滑台校对、动力电控模块多层错误码底扫。',
        en: 'Dynamic test track sequences validating multi-point cabin water sealing, anti-lock brake systems, and full electronic sensor calibration.'
      },
      metrics: [
        { 
          name: { uz: 'Salon havo germetikligi', zh: '舱室内气密淋沐防透抗渗测试', en: 'Pressurized Shower Leak Guard' }, 
          value: '100.0%', 
          progress: 100 
        },
        { 
          name: { uz: 'Regeneratsiya tormoz qaytarishi', zh: '动能回收减速充电能量回馈比', en: 'Regen Brake Energy Feed Rate' }, 
          value: '28.5%', 
          progress: 85 
        },
        { 
          name: { uz: 'ECU datchik diagnostikasi', zh: '板载动力总控整车故障扫描', en: 'Onboard ECU Sensor Health Status' }, 
          value: '0 xatolar', 
          progress: 100 
        }
      ]
    }
  ];

  const ordersData: ActiveOrder[] = [
    {
      id: 'AND-039',
      client: {
        uz: 'Farg‘ona Viloyat Transport Boshqarmasi',
        zh: '费尔干纳州交通运输部',
        en: 'Fergana District Regional Transit Authority'
      },
      qty: {
        uz: '10 dona - Delfin 12m (Yashil shahar yo\'lovchi avtobusi)',
        zh: '10 台 - Dolphin 12米超安全快充纯电低地板城市客车',
        en: '10 Units - Dolphin 12m Super-Fast Charge Low-Floor Bus'
      },
      deliverDate: {
        uz: '18-Iyun, 2026',
        zh: '2026年6月18日',
        en: 'June 18, 2026'
      },
      carrier: {
        uz: 'Andijon Logistics Corp (karvon #552)',
        zh: '安集延丝路多式大宗物流 (特种运输车队 #552)',
        en: 'Andijan Logistics Corp (Special Cargo Convoy #552)'
      },
      destination: {
        uz: 'Farg‘ona shahar, Al-Farg‘oniy ko‘chasi, 102-yo‘lovchi deposi',
        zh: '费尔干纳市，阿尔-费尔干纳大街，102号公共交通集散中心库',
        en: 'Fergana City, Al-Ferganiy St., Depot #102'
      },
      routeProgress: 2, 
      currentStation: {
        uz: 'Korroziyaga qarshi Kataforez vannasida ishlov',
        zh: '防腐处理中：正在通过阴极多位沉浴防腐池电镀',
        en: 'Corrosion prevention: Immersed in 12-dip cathodic electrobath'
      },
      logBook: [
        { time: '10:15', text: { uz: 'Shassi va mustahkam karkas robotli payvandlash to‘liq tugatildi.', zh: '骨架全车高精激光重载电弧焊接组装出线。', en: 'Monocoque high-tensile frame robotic welding completed.' } },
        { time: '12:00', text: { uz: 'Korroziyaga qarshi Kataforez vannasidan chiqdi va qotirildi (Amaldagi).', zh: '进入阴极防腐主浴池电镀程序 (当前进行中)。', en: '12-bath dual-temperature cathodic protection plating active.' } },
        { time: 'Rejada', text: { uz: 'Bo‘yoq va elektr agregatlar liniyasiga yo\'naltiriladi.', zh: '排产流程：无尘室多层多色极光滑面罩漆烘干。', en: 'Next line: High-gloss electrostatic dual-tone coating step.' } }
      ]
    },
    {
      id: 'AND-112',
      client: {
        uz: 'Toshkent shahar "Toshshahartransxizmat" AJ',
        zh: '塔什干市公共交通运联股份集团 (TSX)',
        en: 'Tashkent Transit Alliance OJSC (TSX)'
      },
      qty: {
        uz: '15 dona - Ikki qavatli Premium panorama avtobus',
        zh: '15 台 - 双层纯电轻奢3H全景观光漫游客车',
        en: '15 Units - GTQ6122BEV Elite Double-Decker Smart Tourer'
      },
      deliverDate: {
        uz: '25-Iyun, 2026',
        zh: '2026年6月25日',
        en: 'June 25, 2026'
      },
      carrier: {
        uz: 'Sino-Uz Trans Forwarder LLC',
        zh: '中新欧陆智捷联运仓储集配 04 货轮整车队',
        en: 'Sino-Uz Trans Forwarder LLC (Automotive Fleet 04)'
      },
      destination: {
        uz: 'Toshkent shahar, Chilonzor tumani, 3-avtosaroy',
        zh: '塔什干市，奇兰扎尔区，第3大型公交总场站',
        en: 'Tashkent, Chilanzar District, Transit Depot #3'
      },
      routeProgress: 4, 
      currentStation: {
        uz: 'Elektr butlash, LTO batareya toli to\'plam shinalarini o\'rnatish',
        zh: '高压电装中：正在合组350kW变频同步电机及快充钛电池',
        en: 'HV installation: Interconnecting LTO cells & 350kW PMSM traction box'
      },
      logBook: [
        { time: 'Tugadi', text: { uz: 'Karkas payvandlash va kataforez vannalaridan o‘tdi.', zh: '底架重型焊接与12相防刮镀层完全沉积建档。', en: 'Welded chassis structural testing and cathodic coating done.' } },
        { time: 'Tugadi', text: { uz: 'Yashil va oq yuqori elektrostatik bo‘yoq bilan qoplandi (Gidro sirt).', zh: '防紫外抗碎石面保护面漆全自动多臂喷成、烤干。', en: 'Electrostatic protective white and green paint layers set.' } },
        { time: '14:20', text: { uz: 'PMSM dvigatel va LTO akkumulyatorlari mitti shassiga o‘rnatilmoqda (Amaldagi).', zh: '高电压牵引电源组插嵌、高防电线防护舱扣紧调试 (进行中)。', en: 'LTO explosion-proof cell arrays lockup and electric motor fitting.' } }
      ]
    },
    {
      id: 'AND-001',
      client: {
        uz: 'Samarqand "Silk Road Tour" sayyohlik agentligi',
        zh: '撒马尔罕 “丝绸之路之旅” 集团公司',
        en: 'Samarkand "Silk Road Tour" Travel Agency'
      },
      qty: {
        uz: '8 dona - Vintage retro vintage tramvay avtobusi',
        zh: '8 台 - 怀旧复古英伦风电车观光主题大客车',
        en: '8 Units - Heritage Antique-Style Scenic Tram-Buses'
      },
      deliverDate: {
        uz: '30-Iyun, 2026',
        zh: '2026年6月30日',
        en: 'June 30, 2026'
      },
      carrier: {
        uz: 'SilkRoad Express Cargo',
        zh: '丝绸之路跨国超宽双轴特板拖运卡车',
        en: 'SilkRoad Express Logistics LLC (Plate Transit)'
      },
      destination: {
        uz: 'Samarqand shahar, Registon maydoni yaqinidagi turistik avtosaroy',
        zh: '撒马尔罕市，雷吉斯坦广场古迹游览环线配套总站',
        en: 'Samarkand Tourist Rail Line, Registon Depot'
      },
      routeProgress: 1, 
      currentStation: {
        uz: 'Shassi karkas profillarini payvandlash va butlash',
        zh: '激光架焊接：机器人组对怀旧弧边车顶侧棚架',
        en: 'Laser chassis skeleton: robotic frame alignment for retro arcs'
      },
      logBook: [
        { time: '09:00', text: { uz: 'Buyurtmani ishlab chiqarish va litsenziya chizmalari tasdiqlandi.', zh: '复古造型客车底盘冲压工艺单建档、进入切件组对环节。', en: 'Chassis press sheets signed and structural layouts checked.' } },
        { time: 'Hozir', text: { uz: 'Shassi karkas zaxiralari robotlar ostida payvandlanmoqda (Amaldagi).', zh: '焊接小队机器人进行后置驱动梁承重柱强化定点熔触 (进行中)。', en: 'Spot chassis framing and rear axle stress weldments active.' } }
      ]
    }
  ];

  const activeOrder = ordersData.find(o => o.id === activeOrderId) || ordersData[0];

  useEffect(() => {
    if (!simRunning) return;
    const timer = setInterval(() => {
      setSensorPulse(prev => {
        const delta = (Math.random() * 0.4 - 0.2);
        return parseFloat(Math.min(100, Math.max(90, prev + delta)).toFixed(1));
      });
      setRobotTemp(prev => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        return Math.min(65, Math.max(38, prev + delta));
      });
      setCurrentPower(prev => {
        const delta = Math.floor(Math.random() * 11) - 5;
        return Math.min(380, Math.max(300, prev + delta));
      });
      if (Math.random() < 0.05) {
        setCompletedBusesCount(prev => prev + 1);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [simRunning]);

  const selectedStep = assemblySteps.find(s => s.id === activeStepId) || assemblySteps[1];

  const filteredOrders = ordersData.filter(order => {
    const q = searchQuery.toLowerCase();
    return (
      order.id.toLowerCase().includes(q) ||
      order.client[currentLang].toLowerCase().includes(q) ||
      order.qty[currentLang].toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-8 px-4 font-sans select-none antialiased relative overflow-hidden" id="zavod-tour-system">
      
      {/* Decorative Grid Background and glowing light flares matching premium theme */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-green-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* TOP TITLE HEADER */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-50 border border-cyan-250 text-cyan-700 font-mono text-[10px] uppercase font-bold tracking-widest rounded-full animate-pulse shadow-sm">
            <Activity className="w-3 h-3 text-cyan-600" />
            {t("ANDIJON AVTOBUS JONLI MONITORING TIZIMI", "安集延智能工厂双向遥测中心", "Andijan Intelligent Plant Bidirectional Telemetry Center")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01254a] tracking-tight leading-tight">
            {t("Andijon Zavodi: Jonli monitoring & Ishlab chiqarish", "安集延智能工厂：数字孪生与生产品控监测中心", "Andijan Plant: Live Monitoring & Digital Twin Control Center")}
          </h2>
          <p className="text-sm text-slate-650 leading-relaxed">
            {t(
              "Andijon avtobus zavodining butun ishlab chiqarish jarayoni va dilerlik buyurtmalari tranzitini jonli datchiklar yordamida masofadan real vaqt rejimida kuzatish portali. Har bir bosqich va yuk datchik ma'lumotlari quyida keltirilgan.",
              "在Campbell品牌技术授权与工艺规范标准之下，实时遥测客车在产骨架、纳米防刮腐阴极电泳、机器人面漆烘干、电气总装及出厂前高规格综合检验全流程数字孪生。",
              "Real-time digital twin monitoring representing the fully automated robotic welding line, 12-dip cathodic cataphoresis treatment, and logistics transit maps."
            )}
          </p>
        </div>

        {/* ---------------- SECTION 1 ---------------- */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl relative animate-fade-in" id="robot-assembly-panel">
          
          {/* Header row inside section with real-time stats */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
            <div className="text-left space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase select-none">
                  {t("JONLI SECH MONITORI", "生产加工区遥测集成端", "Live Processing Workshop")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#01254a] tracking-tight">
                {t("Robotlashtirilgan Ishlab Chiqarish Monitoringi", "机器人装配生产线多维诊断中心", "Robotized Assemblies Production Monitor")}
              </h3>
              <p className="text-xs text-slate-500">
                {t(
                  "Andijon shahridagi J-avto sanoat majmuasida joylashgan KUKA robotik mexanizmlari va butlash stansiyasining jonli datchik ko'rsatkichlari.",
                  "集成德国KUKA六轴焊接机、静电无尘喷粉阀及高低压电气总线极化诊断。静态技术模型调优运行中。",
                  "Dynamic status feeds from heavy KUKA robotic manipulators and high-power dual-core cell charging ports."
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              
              <div className="bg-[#f0f4f9] border border-[#e2e8f0] rounded-xl px-4 py-2 text-left min-w-[110px] shadow-sm">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#014e96] block mb-0.5">
                  {t("ZAVOD REJASI", "在产客车系列", "Fleet Models")}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-[#014e96] font-mono">10</span>
                  <span className="text-[10px] text-slate-500">{t("ta Model", "款车型", "Models")}</span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2 text-left min-w-[110px] shadow-sm">
                <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-700 block mb-0.5">
                  {t("ROBOTLASHTIRISH", "产线自控比率", "Automation")}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-emerald-700 font-mono">55%</span>
                  <span className="text-[10px] text-emerald-650">{t("boshqaruv", "自动化", "Full robot")}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100/90 rounded-xl px-4 py-2 text-left min-w-[110px] shadow-sm">
                <span className="text-[9px] uppercase tracking-wider font-bold text-amber-800 block mb-0.5">
                  {t("KUNLIK REJA", "今日下线发运", "Today Compiled")}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-amber-700 font-mono">{completedBusesCount}</span>
                  <span className="text-[10px] text-amber-750">{t("ta Avtobus", "台整车", "Buses")}</span>
                </div>
              </div>

              {/* Sim pause toggle */}
              <button
                onClick={() => setSimRunning(!simRunning)}
                className={`p-2.5 rounded-xl border text-xs font-bold font-mono transition-all cursor-pointer flex items-center justify-center ${
                  simRunning 
                    ? 'bg-red-500/10 border-red-500/30 text-red-600 hover:bg-red-500/20' 
                    : 'bg-green-500/10 border-green-500/30 text-green-600 hover:bg-green-500/20'
                }`}
                title={simRunning ? "Pause Dynamic Pulse" : "Resume Dynamic Pulse"}
              >
                {simRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

            </div>
          </div>

          {/* MAIN GRID BLOCK: Step Selector (Left) vs Station Monitor Details Dashboard (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LEFT 5-BLOCKS COLUMN - ASSEMBLY STEPS LIST */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-3 text-left">
              <span className="text-[10px] uppercase tracking-widest font-black text-slate-500 font-mono mb-1">
                {t("ISH LAB CHIQARISH BOSQICHLARI", "客车总装处理工位序列", "Manufacturing Milestone Sequence")}
              </span>

              {assemblySteps.map((step) => {
                const isActive = step.id === activeStepId;
                const isCompleted = step.id < activeStepId;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`w-full p-3.5 rounded-xl border transition-all text-left relative overflow-hidden flex items-center gap-4 cursor-pointer group ${
                      isActive 
                        ? 'bg-[#014e96] border-[#014e96] shadow-md text-white' 
                        : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-cyan-400"></div>
                    )}

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border font-mono font-bold text-xs transition-all ${
                      isActive 
                        ? 'bg-blue-300/30 border-blue-200 text-white' 
                        : isCompleted 
                        ? 'bg-emerald-50 border-emerald-500 text-[#02a854]' 
                        : 'bg-white border-slate-200 text-slate-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      ) : (
                        `0${step.id}`
                      )}
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className={`text-[8px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded tracking-wider border ${
                          isActive 
                            ? 'bg-blue-800/40 text-blue-200 border-blue-700' 
                            : 'bg-slate-200 text-slate-600 border-slate-300'
                        }`}>
                          {step.code}
                        </span>
                        
                        {isActive && (
                          <span className="text-[8px] font-mono tracking-wider text-cyan-250 font-bold bg-white/10 px-1.5 py-0.5 rounded border border-white/20 animate-pulse uppercase">
                            {t("Amaldagi", "装配中", "Active")}
                          </span>
                        )}
                      </div>
                      
                      <h4 className={`text-xs font-extrabold truncate ${isActive ? 'text-white' : 'text-slate-800 group-hover:text-black'}`}>
                        {step.label[currentLang]}
                      </h4>
                    </div>

                    <ChevronRight className={`w-4 h-4 text-slate-500 group-hover:text-white transition-transform ${
                      isActive ? 'translate-x-1 text-cyan-400 font-bold' : ''
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT CONSOLE PANEL - TELEMETRY */}
            <div className="lg:col-span-12 xl:col-span-7 bg-slate-50 border border-slate-200/85 rounded-xl p-5 text-left flex flex-col justify-between shadow-inner relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                {/* Header title telemetry */}
                <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-slate-500 tracking-widest block uppercase">
                      {t("STANSIYA TELEMETRIYASI", "数控机机载实时监控仪", "Integrated Station Diagnostics")}
                    </span>
                    <h4 className="text-sm font-black text-slate-800 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-[#014e96] animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="text-[#014e96]">
                        {selectedStep.code} • {selectedStep.label[currentLang]}
                      </span>
                    </h4>
                  </div>

                  <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-150 text-emerald-700 rounded font-mono text-[9px] uppercase tracking-wider font-extrabold">
                    {t("OK status", "正常运行", "Live telemeters OK")}
                  </span>
                </div>

                {/* Long description text box */}
                <div className="bg-white border border-slate-200 p-3.5 mb-4 text-justify rounded-lg shadow-sm">
                  <p className="text-xs text-slate-700 leading-relaxed tracking-wide">
                    {selectedStep.description[currentLang]}
                  </p>
                </div>

                {/* DYNAMIC COMPONENT BLUEPRINT SCHEMATIC */}
                <StepVisualSchematic stepId={selectedStep.id} currentLang={currentLang} />

                {/* Sub diagnosis parameters slider gauges */}
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-widest font-black text-slate-500 font-mono block">
                    {t("FAOL SENSOR DIAGNOSTIKASI", "工段主要参数及信号波形", "Active Sensor Signals")}
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {selectedStep.metrics.map((met, mIdx) => (
                      <div key={mIdx} className="bg-white border border-slate-200/80 p-2.5 rounded-lg flex flex-col justify-between shadow-sm">
                        <span className="text-[8px] text-slate-500 font-bold block mb-1 leading-tight uppercase truncate">
                          {met.name[currentLang]}
                        </span>
                        
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs font-mono font-black text-slate-800">
                            {met.value}
                          </span>
                          
                          <div className="w-14 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#014e96] h-full rounded-full transition-all duration-700" style={{ width: `${met.progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core operational efficiency micro widget */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 border-t border-slate-200 pt-4 text-[10px] font-mono text-slate-650">
                  <div>
                    <span className="text-slate-400 block text-[8px] uppercase">{t("ROBOTLASHTIRISH", "机器人比率", "Automation")}</span>
                    <span className="font-extrabold text-slate-800 text-xs">{selectedStep.robotRate}%</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[8px] uppercase">{t("TERMOL STATUS", "工段运行温度", "Operating Temp")}</span>
                    <span className="font-extrabold text-amber-600 text-xs">{selectedStep.temperature}°C</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[8px] uppercase">{t("SAMARADORLIK", "能耗转换率", "Power Efficiency")}</span>
                    <span className="font-extrabold text-emerald-650 text-xs">{selectedStep.efficiency}%</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[8px] uppercase">{t("STANDART VAQT", "工艺标准耗时", "Cycle Duration")}</span>
                    <span className="font-extrabold text-[#014e96] text-xs">{selectedStep.duration}</span>
                  </div>
                </div>

              </div>

              {/* Lower passport / actions block */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono">
                <span className="text-slate-500 font-semibold uppercase flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '12s' }} />
                  <span>{t("RAQAMLI PASSPORT: INDUSTRY 4.0", "工艺制造护照: 数字化生态系统", "ID: Industry 4.0 Digital Twin Passport")}</span>
                </span>

                <div className="flex gap-1.5">
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded font-bold text-slate-600 hover:text-slate-900 cursor-pointer select-none">
                    {t("Standart", "标准", "Standard")}
                  </span>
                  <span className="px-2 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded font-bold hover:bg-emerald-100 cursor-pointer select-none">
                    {t("Boost ▲", "强电泳", "Boost")}
                  </span>
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded font-bold text-slate-650 hover:text-slate-900 cursor-pointer select-none">
                    {t("Profilaktika", "检查", "Servicing")}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ---------------- SECTION 2 ---------------- */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl text-left" id="factory-orders-panel">
          
          {/* Header titles row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#014e96] uppercase">
                  {t("DILERLIK BUYURTMALARI GURUXI", "客户采购订单在轨反馈", "In-Queue Transits")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#01254a] tracking-tight">
                {t("Zavod Buyurtmalarining Jonli Monitoringi", "安集延制造：大宗订单排产与物流追溯终端", "Live Depot Tracking of Active Orders")}
              </h3>
              <p className="text-xs text-slate-500">
                {t(
                  "Vazirliklar, davlat idoralari va chet el hamkorlarining buyurtmalari montaj qilinishi bosqichma-bosqich, GPS-koordinatalari va yuklangan datchiklar yordamida kuzatib boriladi.",
                  "数字中心全披露费尔干纳、塔什干公共汽车公司及中亚客户的整车出厂履历、海关联运状态与高压元器件原装路程。",
                  "Direct real-time tracking feeds indicating municipal transport logistics deliveries and transit coordinates."
                )}
              </p>
            </div>

            {/* Quick selectors for Active Orders */}
            <div className="flex flex-wrap items-center gap-2">
              {ordersData.map((ord) => {
                const isOrdSelected = ord.id === activeOrderId;
                return (
                  <button
                    key={ord.id}
                    onClick={() => setActiveOrderId(ord.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-black transition-all cursor-pointer ${
                      isOrdSelected 
                        ? 'bg-[#014e96] border border-[#014e96] text-white shadow-md' 
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {t("Buyurtma: ", "订单: ", "Order: ")}{ord.id}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LEFT AREA - INTERACTIVE PROGRESS BAR & ROUTE TRACK MAP */}
            <div className="lg:col-span-12 xl:col-span-8 bg-slate-50 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
              
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-200 gap-3 mb-5">
                  <span className="text-xs font-mono font-bold text-slate-700">
                    {t("AKTD BUYURTMANING ISHLAB CHIQARISH BOSQICH CHIZMASI", "全温段底盘与电驱制造状态进度排期", "Lifecycle Assembly Status of Active Vehicle Fleet")}
                  </span>

                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      placeholder={t("ID yoki haridorni izlang...", "查找订单 / 采购单位", "Search ID or buyer...")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border border-slate-200 text-xs text-slate-750 rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:border-blue-500"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                </div>

                {/* Progress dot markers horizontally */}
                <div className="py-6 px-4">
                  <div className="relative">
                    <div className="absolute top-[18px] left-0 right-0 h-[3px] bg-slate-200 -translate-y-1/2 pointer-events-none rounded"></div>
                    <div 
                      className="absolute top-[18px] left-0 h-[3px] bg-[#014e96] -translate-y-1/2 pointer-events-none rounded transition-all duration-1000 shadow-glow"
                      style={{ width: `${((activeOrder.routeProgress - 1) / 4) * 100}%` }}
                    ></div>

                    <div className="relative flex justify-between items-center text-center">
                      {[
                        { stepIdx: 1, label: { uz: 'Shassi (WELD)', zh: '底架焊接', en: 'Chassis' } },
                        { stepIdx: 2, label: { uz: 'Kataforez (CATH)', zh: '阴极电泳', en: 'Cataphoresis' } },
                        { stepIdx: 3, label: { uz: 'Bo‘yash (PAIN)', zh: '无尘喷烤漆', en: 'Painting' } },
                        { stepIdx: 4, label: { uz: 'Butlash (ASSE)', zh: '电机合总装', en: 'Assembly' } },
                        { stepIdx: 5, label: { uz: 'Eksport (TEST)', zh: '下线质检出货', en: 'Shipping' } }
                      ].map((stp, sIdx) => {
                        const isDone = sIdx + 1 < activeOrder.routeProgress;
                        const isNowAct = sIdx + 1 === activeOrder.routeProgress;
                        
                        return (
                          <div key={sIdx} className="flex flex-col items-center z-10">
                            <div className={`w-9 h-9 rounded-full border flex items-center justify-center font-mono font-bold text-xs transition-all ${
                              isNowAct 
                                ? 'bg-[#014e96] border-blue-400 text-white shadow-glow' 
                                : isDone 
                                ? 'bg-emerald-50 border-emerald-500 text-[#02a854]' 
                                : 'bg-white border-slate-200 text-slate-400'
                            }`}>
                              {isDone ? (
                                <CheckCircle className="w-4 h-4 text-emerald-650" />
                              ) : (
                                sIdx + 1
                              )}
                            </div>

                            <span className={`text-[9px] sm:text-[10px] font-bold mt-2 whitespace-nowrap hidden sm:block ${
                              isNowAct ? 'text-[#014e96]' : isDone ? 'text-slate-600' : 'text-slate-400'
                            }`}>
                                {stp.label[currentLang]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* DYNAMIC TRANSIT MAP */}
                <GPSRouteLiveMap activeOrder={activeOrder} currentLang={currentLang} />

                {/* Simulated Digital Logs feeds */}
                <div className="mt-6 bg-white border border-slate-200/80 p-4 rounded-xl text-left shadow-sm">
                  <h4 className="text-xs font-mono font-black text-[#014e96] uppercase tracking-wider mb-3 flex items-center gap-1.5 select-none">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>{t("JONLI MONTAY & LOGISTIKA VAQT JURNALI", "流水装配日志与整车跨境物流监控", "Live Production Journal & Border Dispatch Record")}</span>
                  </h4>

                  <ul className="space-y-3 font-mono text-[11px] text-slate-700">
                    {activeOrder.logBook.map((log, lIdx) => (
                      <li key={lIdx} className="flex gap-4 items-start py-1 border-b border-slate-100 last:border-0">
                        <span className="text-blue-650 font-extrabold shrink-0 w-16">{log.time}</span>
                        <div className="flex-1">
                          <span className="text-slate-400 mr-2">»</span>
                          <span>{log.text[currentLang]}</span>
                        </div>
                        {lIdx === activeOrder.logBook.length - 1 && (
                          <span className="px-1.5 py-0.5 bg-blue-50 border border-blue-200 text-[#014e96] rounded text-[9px] font-bold animate-pulse">
                            ACTIVE
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] text-slate-400 italic">
                    {t(
                      "* Eslatma: Datchiklar LTO batareyalarini -40 darajagacha barqaror isitilishini nazorat qiladi. Har bir transport montaji mutlaqo sertifikatlangan.",
                      "* 提示: 所有交付的中亚、大西北极寒公交均100%原装配对双卫星温控天线，并接入本数据共享链。安全规格证书已随包出厂。",
                      "* Logistics Note: Direct satellite-linked tracking protocols verify chassis stress indexes and high-voltage circuit status 24/7."
                    )}
                  </div>
                </div>

              </div>

              {/* Action document downloads */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-slate-450 italic text-slate-500 text-center sm:text-left">
                  {t(
                    "Tizim: Andijon & Lanzhou masofaviy ma‘lumotlar bog‘lanishi barqaror (AES-256).",
                    "连接状态：安集延总装诊断链路与兰州研发云服务器连接完美 (SSL v3 安全加密通道)",
                    "Satellite Connection: Secured AES-256 direct channel fully operational."
                  )}
                </span>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button 
                    onClick={() => {
                      alert(t(
                        "PDF formatidagi buyurtma shartnomasi va texnik-iqtisodiy asosnomalar kompyuteringizga yuklandi! (Ssenariy)",
                        "PDF 格式的采购技术规范与整车质量合格证书已全部导出至您的终端！",
                        "Successfully exported Order contract specifications & certification portfolio to PDF."
                      ));
                    }}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-700 font-mono transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#014e96]" />
                    <span>{t("Texnik Hujjatlar & Shartnoma", "技术规格 & 贸易契约", "Specifications & Contract PDF")}</span>
                  </button>

                  <button 
                    onClick={() => {
                      alert(t(
                        "Tekst formatidagi yetkazib berish ro'yxati va datchiklar jurnali muvaffaqiyatli yuklab olindi! (Ssenariy)",
                        "TXT 纯文本工时流转以及生产遥测日志一键导出完成！",
                        "Manufacturing telemetry log files successfully exported in raw TXT."
                      ));
                    }}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-[10px] font-bold text-emerald-700 font-mono transition-all cursor-pointer py-1.5 px-2.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t("Jonli jurnali (.TXT)", "导出监测文本 (.TXT)", "Export log (.TXT)")}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR PANEL - ORDER SPECIFIC META DETAILS */}
            <div className="lg:col-span-12 xl:col-span-4 bg-slate-50 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
              
              <div className="space-y-4">
                
                <div className="pb-3 border-b border-slate-200 flex items-center gap-2 select-none">
                  <Layers className="w-4 h-4 text-[#014e96]" />
                  <span className="text-xs uppercase tracking-widest font-black text-slate-750 font-mono">
                    {t("BUYURTMA CHIZMASI", "采购合同及车辆配置清单", "Active Fleet Dossier")}
                  </span>
                </div>

                <div className="space-y-3.5">
                  
                  <div className="bg-white border border-slate-200/80 p-3 rounded-lg text-left shadow-sm">
                    <span className="text-[8px] font-sans text-slate-400 uppercase font-black block mb-1">
                      {t("Buyurtma Kodu ID:", "大宗采购代码 ID:", "Procurement ID:")}
                    </span>
                    <span className="text-sm font-mono font-black text-slate-800">
                      {activeOrder.id}
                    </span>
                  </div>

                  <div className="bg-white border border-slate-200/80 p-3 rounded-lg text-left shadow-sm">
                    <span className="text-[8px] font-sans text-slate-400 uppercase font-black block mb-1">
                      {t("Haridor (Mijoz):", "需求侧采购保障单位:", "Procuring Buyer Client:")}
                    </span>
                    <span className="text-xs font-bold text-slate-700 block leading-tight">
                      {activeOrder.client[currentLang]}
                    </span>
                  </div>

                  <div className="bg-white border border-slate-200/80 p-3 rounded-lg text-left shadow-sm">
                    <span className="text-[8px] font-sans text-slate-400 uppercase font-black block mb-1">
                      {t("Transport Turi & Hajmi:", "定制车型配额与电池组规格:", "Volume & Vehicle Fleet Spec:")}
                    </span>
                    <span className="text-xs font-black text-[#014e96] block font-mono">
                      {activeOrder.qty[currentLang]}
                    </span>
                  </div>

                  <div className="bg-white border border-slate-200/80 p-3 rounded-lg text-left shadow-sm">
                    <span className="text-[8px] font-sans text-slate-400 uppercase font-black block mb-1">
                      {t("Kutish muddati (Topshirish):", "车间限定时效交期:", "Expected Handover Date:")}
                    </span>
                    <span className="text-xs font-bold text-amber-600 font-mono block">
                      {activeOrder.deliverDate[currentLang]}
                    </span>
                  </div>

                  <div className="bg-white border border-slate-200/80 p-3 rounded-lg text-left shadow-sm">
                    <span className="text-[8px] font-sans text-slate-400 uppercase font-black block mb-1">
                      {t("Yuk tashuvchi (Logistika):", "大宗跨国联运货代商:", "Carrier Fleet Dispatch:")}
                    </span>
                    <span className="text-xs font-semibold text-slate-750 block">
                      {activeOrder.carrier[currentLang]}
                    </span>
                  </div>

                  <div className="bg-white border border-slate-200/80 p-3 rounded-lg text-left shadow-sm">
                    <span className="text-[8px] font-sans text-slate-400 uppercase font-black block mb-1">
                      {t("Taqsimot manzili (Depo):", "接收及配套变配电总站:", "Final Destination Depot:")}
                    </span>
                    <span className="text-[11px] font-medium text-slate-700 block leading-tight">
                      {activeOrder.destination[currentLang]}
                    </span>
                  </div>

                </div>

              </div>

              {/* Warning HUD status */}
              <div className="p-3.5 bg-white border border-slate-200/80 rounded-xl mt-4 text-left shadow-sm">
                <span className="text-[8px] font-mono text-slate-400 uppercase block mb-1.5 font-bold flex items-center gap-1 select-none">
                  <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
                  <span>DATCHIK KAFOLATLANISHI</span>
                </span>
                <p className="text-[10px] text-slate-600 leading-relaxed font-mono">
                  {t(
                    "Har bir avtobus IP68 himoya darajasiga ega datchiklar, harorat ko'rsatuvchi va olovga bardoshlik detektorlari bilan sinovdan o'tgan.",
                    "该订单所属车辆100%搭载高精密极地运行监测芯片，并对运往高温/高寒沙尘环境关键件加装保护罩，状态均呈出场合规。",
                    "Fully equipped with premium anti-condensation modules, with extreme dust resistance certified under IP68 standards."
                  )}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

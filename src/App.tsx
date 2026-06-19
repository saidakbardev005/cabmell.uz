import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductSidebar from './components/ProductSidebar';
import ProductDetailModal from './components/ProductDetailModal';
import LTOChargingSimulator from './components/LTOChargingSimulator';
import ContactForm from './components/ContactForm';
import AboutLZGT from './components/AboutLZGT';
import LZGTNews from './components/LZGTNews';
import RDTechnology from './components/RDTechnology';
import ServiceGuarantee from './components/ServiceGuarantee';
import ContactUsPage from './components/ContactUsPage';
import JoinUs from './components/JoinUs';
import FactoryMonitoring from './components/FactoryMonitoring';
import AIConsultant from './components/AIConsultant';
import { PRODUCTS_DATA, STATS, DICTIONARY, CATEGORIES } from './data';
import { Product, Language } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Bus, Eye, FileText, CheckCircle2, ChevronRight, HelpCircle, Shield, Award } from 'lucide-react';

function getMotorPeakPower(motorPower: string): string {
  if (!motorPower || motorPower === 'N/A' || motorPower.startsWith('N/A')) return 'N/A';
  // Check if it has "Peak"
  const peakMatch = motorPower.match(/(\d+)\s*kW\s*Peak/i) || motorPower.match(/Peak\s*.*?(\d+)\s*kW/i);
  if (peakMatch && peakMatch[1]) {
    return peakMatch[1] + ' kW';
  }
  const kwMatch = motorPower.match(/(\d+)\s*kW/i);
  if (kwMatch && kwMatch[1]) {
    return kwMatch[1] + ' kW';
  }
  return motorPower.split(' ')[0] + ' kW';
}

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('uz'); // default to Uzbek to assist the Uzbek user directly
  const [activePage, setActivePage] = useState<string>('home'); // active page state
  const [selectedSubCat, setSelectedSubCat] = useState<string>('avtobus'); // default to avtobus representing our core bus lineup
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedFilterPropulsion, setSelectedFilterPropulsion] = useState<'all' | 'battery' | 'hydrogen'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const inquirySectionRef = useRef<HTMLDivElement>(null);

  const scrollToIndexForm = () => {
    inquirySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Automated carousel interval
  useEffect(() => {
    if (activePage !== 'home') return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6500);
    return () => clearInterval(interval);
  }, [activePage]);

  // URL Query parameter detection to match 1-to-1 cloned standard
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const class3 = params.get('class3');
    if (class3) {
      setActivePage('products');
      if (class3 === '17' || class3 === '12' || class3 === '12m' || class3 === 'hydrogen') {
        setSelectedSubCat('avtobus');
      } else if (class3 === 'van') {
        setSelectedSubCat('logistika');
      }
    }
  }, []);

  // Filter products based on subcategory, propulsion flags & search phrase
  const filteredProducts = PRODUCTS_DATA.filter((prod) => {
    // 1. Group category filter: either subCategory matches or category key matches directly
    const matchesSubCat = selectedSubCat === 'all' || 
                          prod.subCategory === selectedSubCat ||
                          prod.category === selectedSubCat;
    
    // 2. Engine tech filter
    let matchesPropulsion = true;
    if (selectedFilterPropulsion === 'battery') {
      matchesPropulsion = !prod.specs.batteryType.includes('PEM Fuel Cell');
    } else if (selectedFilterPropulsion === 'hydrogen') {
      matchesPropulsion = prod.specs.batteryType.includes('PEM Fuel Cell');
    }

    // 3. Search query filter
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const nameMatch = prod.name[currentLang]?.toLowerCase().includes(q) || 
                        prod.name.zh.toLowerCase().includes(q) ||
                        prod.name.en.toLowerCase().includes(q) ||
                        prod.name.uz.toLowerCase().includes(q);
      const codeMatch = prod.modelCode?.toLowerCase().includes(q);
      const descMatch = prod.description[currentLang]?.toLowerCase().includes(q) ||
                        prod.description.zh.toLowerCase().includes(q);
      const specMatch = Object.values(prod.specs).some(val => val.toLowerCase().includes(q));
      
      matchesSearch = nameMatch || codeMatch || descMatch || specMatch;
    }

    return matchesSubCat && matchesPropulsion && matchesSearch;
  });

  const getSubcategoryName = () => {
    if (selectedSubCat === 'all') return DICTIONARY.allProducts[currentLang];
    
    // Check main or subcategory translation
    for (const cat of CATEGORIES) {
      if (cat.key === selectedSubCat) {
        return cat.label[currentLang];
      }
      if (cat.subcategories) {
        const sub = cat.subcategories.find((s: any) => s.key === selectedSubCat);
        if (sub) {
          return sub.label[currentLang];
        }
      }
    }

    const item = PRODUCTS_DATA.find(p => p.subCategory === selectedSubCat || p.category === selectedSubCat);
    return item ? item.name[currentLang].split(' ')[1] || item.name[currentLang] : selectedSubCat;
  };

  const slides = [
    {
      title: {
        zh: '用绿色科技 驱动世界前行',
        en: 'Driving the World Forward with Green Tech',
        uz: 'Yashil Texnologiya Bilan Kelajak Sari'
      },
      subtitle: {
        zh: 'CAMBELL 凯姆贝尔 12米纯电动城市客车系列 — 甘肃省新能源骨干战略重工',
        en: 'CAMBELL Series 12M Pure Electric City Transit - Gansu Province Strategic Enterprise Landmark',
        uz: 'CAMBELL 12 Metrlik Toʻliq Elektr Shahar Avtobusi — Gansu viloyati bosh strategik korxonasi'
      },
      image: '/images/gt_bus_12m_1781508244809.jpg',
      badge: {
        zh: '旗舰客车 CAMBELL',
        en: 'FLAGSHIP CAMBELL',
        uz: 'FLAGMAN CAMBELL'
      },
      btnLabel: {
        zh: '立即申领技术白皮书',
        en: 'Request Technology Specs',
        uz: 'Texnik chizmalarni olish'
      },
      linkCode: '12m_class'
    },
    {
      title: {
        zh: '西北极寒风沙 广通一路守护',
        en: 'Unyielding Power in Extreme Climates',
        uz: 'Ekstremal Iqlimda Tengsiz Mustahkamlik'
      },
      subtitle: {
        zh: 'Class3=17 高物理标准 10.5米城市公交 — 专为高寒及干燥风沙运行条件定制',
        en: 'GTQ6105BEV Class3=17 Gold Standard 10.5M Bus - Engineered for Heavy Northwest Hazard Paths',
        uz: 'GTQ6105BEV Class3=17 Oltin Standart 10.5M Avtobus — Ayozli va qumli viloyatlar uchun'
      },
      image: '/images/gt_bus_10m_1781508267691.jpg',
      badge: {
        zh: '西北定制 Class3=17',
        en: 'Northwest Custom Class3=17',
        uz: 'Ekstremal Iqlim Class3=17'
      },
      btnLabel: {
        zh: '快速查阅核心参数',
        en: 'Explore Core Specs',
        uz: 'Parametrlarni koʻrish'
      },
      linkCode: '10m_class'
    },
    {
      title: {
        zh: '15分钟极速充满 LTO极致钛酸锂技术',
        en: '15-Min Ultra-Fast LTO Recharging Grid',
        uz: '15 Daqiqada Toʻliq Quvvatlovchi LTO Tizim'
      },
      subtitle: {
        zh: '首创全防水IP68钛酸锂动力总成，超长25000次循环寿命，-40℃超低温抗寒启动',
        en: 'Pioneering safe IP68 Lithium Titanate battery cell, supports 25,000 lifecycles and extreme cold restart',
        uz: 'Mutlaqo xavfsiz IP68 Lityum-Titanat batareya texnologiyasi, 25 000 marta zaryadlash va sovuqqa chidamlilik'
      },
      image: '/images/gt_hydrogen_bus_1781508285980.jpg',
      badge: {
        zh: '超级安全快充 LTO',
        en: 'LTO BATTERY TECHNOLOGY',
        uz: 'LTO BATAREYA TIZIMI'
      },
      btnLabel: {
        zh: '体验LTO充电仿真器',
        en: 'Open LTO Simulator',
        uz: 'Zaryadlash Simulyatori'
      },
      linkCode: 'simulator'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#333333] font-sans" id="web-root">
      
      {/* 1. Header component layer */}
      <Header currentLang={currentLang} onLangChange={setCurrentLang} searchQuery={searchQuery} onSearchChange={setSearchQuery} activePage={activePage} onActivePageChange={setActivePage} onSubCatChange={setSelectedSubCat} />
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex-grow flex flex-col"
        >
          {activePage === 'home' && (
            <>
              {/* 2. Brand Hero Slider Banner Section */}
              <section className="relative overflow-hidden bg-slate-900 text-white min-h-[460px] sm:min-h-[520px] flex items-center" id="hero-banner">
                {/* Background Image Carousel Track */}
                <div className="absolute inset-0 z-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 0.5, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />
                  </AnimatePresence>
                  {/* Luxury Corporate gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#01254a]/95 via-[#014e96]/75 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24 relative z-10 text-left">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left text column info */}
                    <div className="lg:col-span-8 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/90 border border-red-500 rounded-full text-[10px] sm:text-xs text-white font-extrabold shadow-lg uppercase tracking-wider animate-pulse">
                        <Award className="w-3.5 h-3.5" />
                        <span>{slides[currentSlide].badge[currentLang]}</span>
                      </div>
                      
                      <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                          {slides[currentSlide].title[currentLang]}
                        </h1>
                        <p className="text-sm sm:text-base text-blue-100 max-w-2xl font-medium leading-relaxed">
                          {slides[currentSlide].subtitle[currentLang]}
                        </p>
                      </div>

                      {/* Floating Direct target link notice */}
                      <div className="p-3 bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-lg border border-white/20 inline-flex flex-col text-left gap-1 transition-colors">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                          <span className="text-[10px] font-mono text-blue-300 font-bold uppercase tracking-widest">
                            lzgtnet.com official standard clone
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-200">
                          {currentLang === 'zh' 
                            ? '包含 10.5米纯电客车 (Class3=17) 钛酸锂电芯实测参数面板' 
                            : 'Synchronized with factory LTO titanate fast-charging parameters.'}
                        </span>
                      </div>

                      {/* Interactive Button row */}
                      <div className="flex flex-wrap gap-3.5 pt-2">
                        <button
                          onClick={() => {
                            if (slides[currentSlide].linkCode === 'simulator') {
                              // scroll to simulator
                              const element = document.getElementById('simulator-section');
                              element?.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              setSelectedSubCat(slides[currentSlide].linkCode);
                              setActivePage('products');
                              window.scrollTo({ top: 300, behavior: 'smooth' });
                            }
                          }}
                          className="px-6 py-3 bg-[#e53e3e] hover:bg-red-700 text-xs text-white font-black rounded-md shadow-lg transition-all flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5"
                        >
                          <span>{slides[currentSlide].btnLabel[currentLang]}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            setActivePage('products');
                            window.scrollTo({ top: 300, behavior: 'smooth' });
                          }}
                          className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-xs text-white font-bold rounded-md transition-all backdrop-blur-sm cursor-pointer"
                        >
                          {currentLang === 'zh' ? '进入产品中心' : currentLang === 'en' ? 'Product Showroom' : 'Mahsulotlar Katalogi'}
                        </button>
                      </div>
                    </div>

                    {/* Right preview thumbnail area inside slider */}
                    <div className="lg:col-span-4 hidden lg:block">
                      <div className="bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md shadow-2xl relative group overflow-hidden">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                          <img
                            src={slides[currentSlide].image}
                            alt="LZGT Slide Badge"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-3 text-left">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 font-bold block">兰州新区秦川重工生产基地</span>
                          <span className="text-xs font-black text-white mt-1 block">Lanzhou CAMBELL High-Precision Heavy Vehicles</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Slideshow dot indicators & Controls overlay right inside hero footer */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          currentSlide === index
                            ? 'h-2 w-7 bg-red-600'
                            : 'h-2 w-2 bg-white/40 hover:bg-white/85'
                        }`}
                        title={`Slide ${index + 1}`}
                      />
                    ))}
                  </div>

                </div>
              </section>

              {/* 3. Live Core metrics ribbon */}
              <section className="bg-white border-b border-slate-200 py-8 px-4" id="stats-ribbon">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                  {STATS.map((stat, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-250 rounded-lg flex flex-col justify-center text-center space-y-1 hover:border-blue-400 transition-all shadow-sm">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-[#014e96] tracking-tight">
                        {stat.value}
                        <span className="text-xs font-semibold text-slate-500 font-sans ml-0.5">{stat.unit}</span>
                      </span>
                      <span className="text-[11px] text-slate-650 font-bold">
                        {stat.label[currentLang]}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Brand models showroom on Home page */}
              <section className="py-14 bg-gradient-to-b from-slate-50 to-white text-left px-4 border-b border-slate-200">
                <div className="max-w-7xl mx-auto space-y-8">
                  <div className="text-center space-y-2 max-w-2xl mx-auto">
                    <span className="text-[10px] font-mono font-black text-[#e53e3e] tracking-widest uppercase block bg-red-50 inline-block px-2.5 py-0.5 rounded border border-red-200">
                      Product Center / 产品中心
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#014e96] tracking-tight">
                      {currentLang === 'zh' ? 'CAMBELL 凯姆贝尔系列明星车型展示' :
                       currentLang === 'en' ? 'CAMBELL Green Transit Star Lineup' :
                       'CAMBELL Yashil Transport Yulduzli Modellari'}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {currentLang === 'zh' ? '西北高寒、极具性价比、超级安全！专为中亚及西北高耐受场景定制而生。' :
                       'Optimized for extreme cold, high performance, and long fuel-cell operations.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PRODUCTS_DATA.slice(0, 3).map((product) => (
                      <div 
                        key={product.id}
                        className="bg-white border border-slate-200 hover:border-blue-400 rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-all group"
                      >
                        <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center">
                          <img 
                            src={product.image} 
                            alt={product.name[currentLang]} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white font-mono text-[9px] uppercase font-bold rounded">
                              {product.modelCode}
                            </span>
                          </div>
                          {product.category === 'bus' && (
                            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-[#014e96]/95 backdrop-blur-sm text-white px-2 py-0.5 text-[9px] font-bold rounded shadow border border-blue-400/30">
                              <span className="text-amber-400 font-black font-mono">CAMBELL</span>
                              <span className="text-white/60 text-[8px]">•</span>
                              <span>{currentLang === 'zh' ? '吉祥客车' : 'Series'}</span>
                            </div>
                          )}
                        </div>

                        <div className="p-5 flex-grow flex flex-col text-left space-y-3">
                          <div>
                            <h3 className="font-bold text-xs sm:text-sm text-[#014e96] tracking-tight group-hover:text-red-600 transition-colors line-clamp-1">
                              {product.name[currentLang]}
                            </h3>
                            <p className="text-[10px] font-mono text-slate-400 mt-1 italic line-clamp-1">
                              "{product.tagline[currentLang]}"
                            </p>
                          </div>

                          <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                            {product.description[currentLang]}
                          </p>

                          <div className="bg-slate-50 border border-slate-150 rounded-md p-3 grid grid-cols-3 gap-2 font-mono text-[10px] text-slate-600 text-center">
                            <div className="border-r border-slate-200 last:border-0 py-0.5">
                              <span className="block text-slate-450 font-sans text-[8px] uppercase font-bold tracking-wider mb-0.5">Length</span>
                              <span className="font-extrabold text-slate-800">{product.specs.length}</span>
                            </div>
                            <div className="border-r border-slate-200 last:border-0 py-0.5">
                              <span className="block text-slate-450 font-sans text-[8px] uppercase font-bold tracking-wider mb-0.5">Range</span>
                              <span className="font-extrabold text-slate-800">{product.specs.range.split(' ')[0]} km</span>
                            </div>
                            <div className="py-0.5">
                              <span className="block text-slate-450 font-sans text-[8px] uppercase font-bold tracking-wider mb-0.5">Motor Peak</span>
                              <span className="font-extrabold text-slate-800">{getMotorPeakPower(product.specs.motorPower)}</span>
                            </div>
                          </div>

                          <div className="pt-2 mt-auto grid grid-cols-2 gap-2">
                            <button
                              onClick={() => {
                                setSelectedProduct(product);
                                setModalOpen(true);
                              }}
                              className="py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition-all cursor-pointer text-center"
                            >
                              {currentLang === 'zh' ? '参数详情' : 'Specifications'}
                            </button>
                            <button
                              onClick={() => {
                                setSelectedProduct(product);
                                scrollToIndexForm();
                              }}
                              className="py-1.5 bg-blue-50 hover:bg-blue-100 text-[#014e96] border border-blue-200 text-xs font-semibold rounded transition-all cursor-pointer text-center animate-none"
                            >
                              {currentLang === 'zh' ? '获取报价' : 'Request Quote'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={() => {
                        setSelectedSubCat('all');
                        setActivePage('products');
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#014e96] hover:bg-[#003c73] text-white text-xs font-bold rounded-md shadow transition-colors cursor-pointer"
                    >
                      <span>{currentLang === 'zh' ? '查看全部客车/货车产品' : 'View Core Model Catalog'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Enterprise Honors & Quality Certifications band */}
              <section className="py-12 bg-slate-900 text-white border-b border-slate-850 px-4" id="honors-band">
                <div className="max-w-7xl mx-auto space-y-8">
                  <div className="text-center space-y-2">
                    <span className="text-[10px] font-mono text-red-500 font-black tracking-widest uppercase block">
                      HONORS & CERTIFICATIONS / 资质荣誉
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {currentLang === 'zh' ? '严苛检测 国际主流重工标准' : 
                       currentLang === 'en' ? 'Pioneering Heavy Industry Certifications' : 
                       'Bizning Xalqaro Sifat va Sharaf Sertifikatlarimiz'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-lg space-y-3 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30 text-amber-400 font-bold">
                        ★
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                          NATIONAL LICENCE / 国家资质
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white uppercase">国家重点重工生产基地</h4>
                        <p className="text-[11px] text-slate-300 leading-normal">
                          {currentLang === 'zh' ? '通过国家工信部整车特种资质核准，西北省新能源汽车骨干试点企业。' : 'Ministry of Industry & IT certified strategic transport production base.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-lg space-y-3 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30 text-amber-400 font-bold py-0.5">
                        L
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                          BATTERY SECURITY / LTO安全
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white uppercase">钛酸锂抗寒电池验证</h4>
                        <p className="text-[11px] text-slate-300 leading-normal">
                          {currentLang === 'zh' ? '电网与热管理专利。支持-40℃超常低温快速冷启动和极速充电。' : 'Approved battery hot-climate safety grid with IP68 electric air-tightness.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-lg space-y-3 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30 text-amber-400 font-bold py-0.5">
                        Q
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                          SYSTEMS AUDIT / 体系认证
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white">ISO9001/ISO14001 核准</h4>
                        <p className="text-[11px] text-slate-300 leading-normal">
                          {currentLang === 'zh' ? '国际质量体系和环境一体化严格认证，出口中亚Silk Road重要保障。' : 'International integrated quality frameworks & environmental safety standards.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-lg space-y-3 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30 text-amber-400 font-bold py-0.5">
                        E
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                          EXPORT CERTIFIED / 欧盟出口
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white uppercase">SGS & TUV检测通过</h4>
                        <p className="text-[11px] text-slate-300 leading-normal">
                          {currentLang === 'zh' ? '客车高抗拉抗弯物理指标与欧盟准入互认，产品实力安全可靠。' : 'CE/SGS certified structural tensile indicators safe for European operations.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Special Class3=17 Flagship Spotlight Banner (Home exclusive) */}
              <section className="py-12 bg-white border-b border-slate-200 text-left px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-xl shadow-sm">
                  <div className="lg:col-span-8 space-y-4">
                    <span className="px-2.5 py-1 bg-red-55 text-[#e53e3e] text-[9px] font-black rounded border border-red-200 uppercase tracking-widest font-mono">
                      Core Replica Target: Class3=17 Platinum Standard
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#014e96] tracking-tight">
                      {currentLang === 'zh' ? 'GTQ6105BEV 10.5米纯电城市公交系列' :
                       currentLang === 'en' ? 'GTQ6105BEV 10.5M Gold-Standard City Transit Bus' :
                       'GTQ6105BEV 10.5 metrlik shahar shoh supasi avtobusi'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                      {currentLang === 'zh'
                        ? '专为西北高寒、干旱风沙等极端运行场景打造。搭载高效钛酸锂（LTO）电芯并在全防水IP68电器气舱保护下实现超常全寿命安全载客运营，免除中途维护繁琐。'
                        : currentLang === 'en'
                        ? 'Built for extreme Northwest environmental hazards. Outfitted with high-efficiency LTO Titanate electric cell structures packaged within sealed IP68 compartments. Replaces heavy diesel motors with clean electric propulsion.'
                        : 'Ekstremal iqlim sharoitlariga va yuqori sovuqlarga mukammal moslashtirilgan. Butunlay germetik va IP68 himoyali isitish boʻlimlarida saqlanuvchi LTO tezkor akkumulyator tizimi bilan jihozlangan boʻlib, uzoq yillar xizmat koʻrsatadi.'}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          setSelectedSubCat('10m_class');
                          setActivePage('products');
                          window.scrollTo({ top: 300, behavior: 'smooth' });
                        }}
                        className="px-4 py-2 bg-[#014e96] hover:bg-[#003c73] text-white text-xs font-bold rounded shadow-sm transition-colors cursor-pointer"
                      >
                        {currentLang === 'zh' ? '查看Class3=17车型参数' : currentLang === 'en' ? 'Browse Class3=17 Models' : 'Class3=17 Modelini Koʻrish'}
                      </button>
                      <button
                        onClick={() => {
                          setActivePage('about');
                          window.scrollTo({ top: 300, behavior: 'smooth' });
                        }}
                        className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-[#014e96] text-xs font-bold rounded shadow-sm transition-colors cursor-pointer"
                      >
                        {currentLang === 'zh' ? '了解兰州广通背景' : currentLang === 'en' ? 'Learn Corporate Background' : 'Kompaniya Profili bilan Tanishish'}
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-4 aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                    <img
                      src="/images/gt_bus_10m_1781508267691.jpg"
                      alt="GTQ6105BEV"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </section>

              {/* 5. Interactive Charging Simulator center */}
              <section className="bg-slate-100 border-t border-b border-slate-200 py-12 px-4 shadow-inner" id="simulator-section">
                <div className="max-w-7xl mx-auto">
                  <LTOChargingSimulator currentLang={currentLang} />
                </div>
              </section>

              {/* News Highlights feed on Home page */}
              <section className="py-12 bg-white border-b border-slate-200 text-left px-4">
                <div className="max-w-7xl mx-auto space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">News Feed / 新闻中心</span>
                      <h3 className="text-xl font-black text-[#014e96] mt-1">{currentLang === 'zh' ? '广通最新动态新闻' : currentLang === 'en' ? 'Latest Press Releases' : 'Soʻnggi Yangiliklar'}</h3>
                    </div>
                    <button
                      onClick={() => {
                        setActivePage('news');
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-1.5 border border-slate-200 hover:border-blue-400 text-slate-700 text-xs font-bold rounded transition-colors cursor-pointer"
                    >
                      {currentLang === 'zh' ? '查看全部新闻' : currentLang === 'en' ? 'Read All News' : 'Barcha yangiliklar'} →
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div 
                      onClick={() => { setActivePage('news'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                      className="border border-slate-200 p-4 rounded-lg bg-slate-50 flex gap-4 hover:border-blue-300 transition-colors cursor-pointer text-left"
                    >
                      <div className="w-24 h-20 rounded bg-slate-100 overflow-hidden flex-shrink-0">
                        <img src="/images/gt_bus_10m_1781508267691.jpg" alt="News 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-400 font-bold block">2026-05-18</span>
                        <h4 className="font-extrabold text-[#014e96] text-xs sm:text-sm line-clamp-1">{currentLang === 'zh' ? 'Class3=17高规格核准资质获得全国表彰' : 'Class3=17 Accreditation Commended Nationally'}</h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{currentLang === 'zh' ? '兰州广通10.5米纯电客车西北高寒运行出色的电池表现荣获表彰' : 'Gansu advanced heavy industry bus achieves key strategic certifications.'}</p>
                      </div>
                    </div>
                    <div 
                      onClick={() => { setActivePage('news'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                      className="border border-slate-200 p-4 rounded-lg bg-slate-50 flex gap-4 hover:border-[#014e96]/30 transition-colors cursor-pointer text-left"
                    >
                      <div className="w-24 h-20 rounded bg-slate-100 overflow-hidden flex-shrink-0">
                        <img src="/images/gt_bus_12m_1781508244809.jpg" alt="News 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-400 font-bold block">2026-04-30</span>
                        <h4 className="font-extrabold text-[#014e96] text-xs sm:text-sm line-clamp-1">{currentLang === 'zh' ? '广通大客车首批批量发运出海运抵中亚市场' : 'Lanzhou Guangtong Buses Dispatched to Central Asia'}</h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{currentLang === 'zh' ? '大批量定制版公交车安全发运，协助中亚建立高寒快充生态' : 'Bulk orders dispatched to assist Tashkent green transport infrastructure.'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Contact & Quote submit terminal station */}
              <section className="bg-slate-50 border-t border-b border-slate-200 py-14 px-4" ref={inquirySectionRef} id="inquiry-form">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  
                  <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-center">
                    <div className="space-y-2">
                      <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">
                        Procurement & Consulting
                      </span>
                      <h3 className="text-2xl font-bold text-[#014e96] tracking-tight">
                        {currentLang === 'zh' 
                          ? '与广通全球销售建立联系' 
                          : currentLang === 'en' 
                          ? 'Connect with LZGT Commercial Export Division' 
                          : 'Lanzhou Guangtong Boʻlimi bilan aloqa'}
                      </h3>
                    </div>
                    
                    <p className="text-xs text-slate-606 leading-relaxed text-justify">
                      {currentLang === 'zh'
                        ? '我们拥有一支全球化专家队伍，为您提供新能源电动公交车招投标、定制电池舱（LTO快充技术），双电机驱动总成及风沙极寒特殊表面保护材质整体定制解决方案。'
                        : currentLang === 'en'
                        ? 'Our global executive engineering staff possesses deep consulting experience in tendering transit networks, customization of Lithium Titanate power configurations, heavy dual axle assemblies, and weatherproofing for arid sand climates.'
                        : 'Yangi avlod shahar transporti loyihalari uchun professional tender savdolari xujjatlari, batafsil hisob-kitob jadvallari, maxsus LTO tezkor zaryad batareyasi sigʻimlari va ayozli ob-havoga qarshi qoʻshimcha himoya qoplamalar kabi texnik yechimlarni toʻliq taqdim etamiz.'}
                    </p>

                    <div className="space-y-3 pt-2 font-mono text-xs">
                      <div className="flex gap-2.5 items-center p-3 bg-white rounded border border-slate-200 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-[11px] text-slate-700 text-left font-semibold">24-Hour Express Response Guarantee</span>
                      </div>
                      <div className="flex gap-2.5 items-center p-3 bg-white rounded border border-slate-200 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-[11px] text-slate-700 text-left font-semibold">Full Autocad / Solidworks Layout PDF exports</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <ContactForm currentLang={currentLang} selectedModelCode={selectedProduct?.modelCode} />
                  </div>

                </div>
              </section>
            </>
          )}

          {activePage === 'about' && (
            <>
              <AboutLZGT currentLang={currentLang} />
              
              <section className="bg-slate-50 border-t border-b border-slate-200 py-14 px-4" ref={inquirySectionRef} id="inquiry-form">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-center">
                    <div className="space-y-2">
                      <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">Procurement & Consulting</span>
                      <h3 className="text-2xl font-bold text-[#014e96] tracking-tight">
                        {currentLang === 'zh' ? '意向采购咨询' : currentLang === 'en' ? 'Direct Procurement Request' : 'Sotib Olish Boʻyicha Soʻrov'}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {currentLang === 'zh' 
                        ? '请填写下表与兰州总部建立线上联系。我们的西北总部全球销售团队将在24小时内联系贵司。'
                        : 'Submit details below to align with global logistics departments and receive structural blueprints.'}
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <ContactForm currentLang={currentLang} />
                  </div>
                </div>
              </section>
            </>
          )}

          {activePage === 'news' && (
            <LZGTNews currentLang={currentLang} />
          )}

          {activePage === 'products' && (
            <>
              {/* 4. Main Catalog Section (Bento Grid layout) */}
              <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12" id="products-list">
                <div className="flex flex-col lg:flex-row gap-8">
                  
                  {/* Left Navigation group of lzgtnet */}
                  <div className="lg:w-72 flex-shrink-0">
                    <ProductSidebar
                      currentLang={currentLang}
                      selectedSubCat={selectedSubCat}
                      onSelectSubCat={setSelectedSubCat}
                    />
                  </div>

                  {/* Right Product Grid Column */}
                  <div className="flex-grow space-y-6">
                    
                    {/* Filter and Section Header options bar */}
                    <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                      <div className="text-left">
                        <span className="text-[10px] text-[#014e96] font-extrabold uppercase font-mono tracking-widest block">
                          Product Category List / 广通精品
                        </span>
                        <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                          <span className="h-1.5 w-1.5 bg-red-600 rounded-full"></span>
                          {getSubcategoryName()}
                        </span>
                      </div>

                      {/* Grid Propulsion filter selector tabs */}
                      <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md border border-slate-200 text-[11px] font-mono">
                        <button
                          onClick={() => setSelectedFilterPropulsion('all')}
                          className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                            selectedFilterPropulsion === 'all'
                              ? 'bg-[#014e96] text-white font-bold'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {currentLang === 'zh' ? '全动力' : currentLang === 'en' ? 'All Drives' : 'Barchasi'}
                        </button>
                        <button
                          onClick={() => setSelectedFilterPropulsion('battery')}
                          className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                            selectedFilterPropulsion === 'battery'
                              ? 'bg-[#014e96] text-white font-bold'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {currentLang === 'zh' ? '纯电动' : currentLang === 'en' ? 'Electric' : 'Elektr (LFP/LTO)'}
                        </button>
                        <button
                          onClick={() => setSelectedFilterPropulsion('hydrogen')}
                          className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                            selectedFilterPropulsion === 'hydrogen'
                              ? 'bg-[#014e96] text-white font-bold'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {currentLang === 'zh' ? '氢燃料' : currentLang === 'en' ? 'Hydrogen' : 'Vodorod'}
                        </button>
                      </div>
                    </div>

                    {/* Products grid cards list */}
                    {filteredProducts.length === 0 ? (
                      <div className="text-center py-20 bg-white border border-slate-200 border-dashed rounded-lg space-y-3">
                        <HelpCircle className="w-12 h-12 text-slate-400 mx-auto animate-bounce" />
                        <p className="text-slate-600 text-xs font-semibold">
                          {currentLang === 'zh' 
                            ? '没有找到符合当前筛选条件的车辆型号。' 
                            : currentLang === 'en' 
                            ? 'No vehicles match the selected parameters.' 
                            : 'Ushbu saralash parametrlariga mos keladigan model topilmadi.'}
                        </p>
                        <button
                          onClick={() => {
                            setSelectedSubCat('all');
                            setSelectedFilterPropulsion('all');
                          }}
                          className="px-4 py-2 bg-blue-50 text-[#014e96] rounded-md text-xs font-bold border border-blue-200"
                        >
                          Reset filters
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="product-cards-grid">
                        <AnimatePresence mode="popLayout">
                          {filteredProducts.map((product) => (
                            <motion.div
                              key={product.id}
                              layout
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.25 }}
                              className="bg-white border border-slate-200 hover:border-blue-400/80 rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-all group relative animate-none"
                            >
                              {/* Card Thumbnail Image */}
                              <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center">
                                <img
                                  src={product.image}
                                  alt={product.name[currentLang]}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                                {/* Shading gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                                
                                {/* SubCategory and top indicators */}
                                <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                                  <span className="px-2 py-0.5 bg-white/90 text-[#014e96] font-mono text-[9px] uppercase border border-slate-200 font-bold rounded shadow-sm">
                                    {product.modelCode}
                                  </span>
                                </div>

                                {/* CAMBELL Series authenticity badge overlay */}
                                {product.category === 'bus' && (
                                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-[#014e96]/90 backdrop-blur-md text-[#ffffff] px-2.5 py-1 text-[10px] font-bold rounded-md shadow-md border border-blue-400/30">
                                    <span className="text-amber-400 font-extrabold font-mono tracking-wide">CAMBELL</span>
                                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                                    <span className="text-[9px] text-[#f1f5f9] font-medium">{currentLang === 'zh' ? '吉祥客车' : 'Series'}</span>
                                  </div>
                                )}

                                {/* Special Custom Badges */}
                                {product.badge && (
                                  <div className="absolute top-3 right-3">
                                    <span className="px-2 py-0.5 bg-[#e53e3e] text-white font-semibold text-[10px] rounded shadow">
                                      {product.badge[currentLang]}
                                    </span>
                                  </div>
                                )}

                                {/* Gold category highlight notice for Class3=17 */}
                                {product.id === 'gtq6105bev' && (
                                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-red-650 text-white px-2 py-0.5 font-mono text-[9px] font-black rounded-sm shadow">
                                    <Shield className="w-3 h-3" />
                                    <span>CLASS3=17 RECONSTRUCTION</span>
                                  </div>
                                )}
                              </div>

                              {/* Content block */}
                              <div className="p-5 flex-grow flex flex-col space-y-3.5 text-left">
                                <div>
                                  <h3 className="text-[#014e96] font-bold text-sm tracking-tight group-hover:text-red-600 transition-colors">
                                    {product.name[currentLang]}
                                  </h3>
                                  <p className="text-[10px] font-mono text-slate-500 mt-1 italic">
                                    "{product.tagline[currentLang]}"
                                  </p>
                                </div>

                                <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                                  {product.description[currentLang]}
                                </p>

                                 {/* Key spec indicators bar */}
                                <div className="bg-slate-50 border border-slate-150 rounded-md p-3 grid grid-cols-3 gap-2 font-mono text-[10px] text-slate-600 text-center">
                                  <div className="border-r border-slate-200 last:border-0 py-0.5">
                                    <span className="block text-slate-450 font-sans text-[8px] uppercase font-bold tracking-wider mb-0.5">Length</span>
                                    <span className="font-extrabold text-slate-800">{product.specs.length}</span>
                                  </div>
                                  <div className="border-r border-slate-200 last:border-0 py-0.5">
                                    <span className="block text-slate-450 font-sans text-[8px] uppercase font-bold tracking-wider mb-0.5">Range</span>
                                    <span className="font-extrabold text-slate-800">{product.specs.range.split(' ')[0]} km</span>
                                  </div>
                                  <div className="py-0.5">
                                    <span className="block text-slate-450 font-sans text-[8px] uppercase font-bold tracking-wider mb-0.5">Motor Peak</span>
                                    <span className="font-extrabold text-slate-800">{getMotorPeakPower(product.specs.motorPower)}</span>
                                  </div>
                                </div>

                                {/* CTA Grid button array */}
                                <div className="pt-2 mt-auto grid grid-cols-2 gap-3">
                                  <button
                                    onClick={() => {
                                      setSelectedProduct(product);
                                      setModalOpen(true);
                                    }}
                                    className="py-2.5 bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
                                  >
                                    <Eye className="w-3.5 h-3.5 text-[#014e96]" />
                                    <span>{DICTIONARY.viewDetails[currentLang]}</span>
                                  </button>
                                  
                                  <button
                                    onClick={() => {
                                      setSelectedProduct(product);
                                      scrollToIndexForm();
                                    }}
                                    className="py-2.5 bg-blue-50 hover:bg-blue-100 text-[#014e96] border border-blue-200 rounded text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer animate-pulse"
                                  >
                                    <FileText className="w-3.5 h-3.5" />
                                    <span>{DICTIONARY.requestQuote[currentLang]}</span>
                                  </button>
                                </div>
                              </div>

                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    )}

                  </div>

                </div>
              </main>

              {/* 5. Interactive Charging Simulator center */}
              <section className="bg-slate-100 border-t border-b border-slate-200 py-12 px-4 shadow-inner" id="simulator-section">
                <div className="max-w-7xl mx-auto">
                  <LTOChargingSimulator currentLang={currentLang} />
                </div>
              </section>

              {/* 6. Contact & Quote submit terminal station */}
              <section className="bg-slate-50 border-b border-slate-200 py-14 px-4" ref={inquirySectionRef} id="inquiry-form">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  
                  <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-center">
                    <div className="space-y-2">
                      <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">
                        Procurement & Consulting
                      </span>
                      <h3 className="text-2xl font-bold text-[#014e96] tracking-tight">
                        {currentLang === 'zh' 
                          ? '与广通全国销售建立联系' 
                          : currentLang === 'en' 
                          ? 'Connect with LZGT Commercial Export Division' 
                          : 'Lanzhou Guangtong Boʻlimi bilan aloqa'}
                      </h3>
                    </div>
                    
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {currentLang === 'zh'
                        ? '我们拥有一支全球化专家队伍，为您提供新能源电动公交车招投标、定制电池舱（LTO快充技术），双电机驱动总成及风沙极寒特殊表面保护材质整体定制解决方案。'
                        : currentLang === 'en'
                        ? 'Our global executive engineering staff possesses deep consulting experience in tendering transit networks, customization of Lithium Titanate power configurations, heavy dual axle assemblies, and weatherproofing for arid sand climates.'
                        : 'Yangi avlod shahar transporti loyihalari uchun professional tender savdolari xujjatlari, batafsil hisob-kitob jadvallari, maxsus LTO tezkor zaryad batareyasi sigʻimlari va ayozli ob-havoga qarshi qoʻshimcha himoya qoplamalar kabi texnik yechimlarni toʻliq taqdim etamiz.'}
                    </p>

                    <div className="space-y-3 pt-2 font-mono text-xs">
                      <div className="flex gap-2.5 items-center p-3 bg-white rounded border border-slate-200 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-[11px] text-slate-700 text-left font-semibold">24-Hour Express Response Guarantee</span>
                      </div>
                      <div className="flex gap-2.5 items-center p-3 bg-white rounded border border-slate-200 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-[11px] text-slate-700 text-left font-semibold">Full Autocad / Solidworks Layout PDF exports</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <ContactForm currentLang={currentLang} selectedModelCode={selectedProduct?.modelCode} />
                  </div>

                </div>
              </section>
            </>
          )}

          {activePage === 'rnd' && (
            <>
              <RDTechnology currentLang={currentLang} />
              
              <section className="bg-slate-50 border-t border-b border-slate-200 py-14 px-4" ref={inquirySectionRef} id="inquiry-form">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-center">
                    <div className="space-y-2">
                      <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">Procurement & Consulting</span>
                      <h3 className="text-2xl font-bold text-[#014e96] tracking-tight">
                        {currentLang === 'zh' ? '技术方案咨询' : currentLang === 'en' ? 'Technical Solution Consultation' : 'Texnik Konsultatsiya Soʻrovi'}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {currentLang === 'zh' 
                        ? '对广通重工与纯电客车技术专利感兴趣？请在右侧提交您的具体项目定制诉求。'
                        : 'Submit details below to align with global engineering departments.'}
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <ContactForm currentLang={currentLang} />
                  </div>
                </div>
              </section>
            </>
          )}

          {activePage === 'service' && (
            <>
              <ServiceGuarantee currentLang={currentLang} />
              
              <section className="bg-slate-50 border-t border-b border-slate-200 py-14 px-4" ref={inquirySectionRef} id="inquiry-form">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-center">
                    <div className="space-y-2">
                       <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">SLA Support</span>
                       <h3 className="text-2xl font-bold text-[#014e96] tracking-tight">
                         {currentLang === 'zh' ? '售后技术支持' : currentLang === 'en' ? 'Service Technical Desk' : 'Sotishdan Keyingi Servis Boʻlimi'}
                       </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed text-left">
                      {currentLang === 'zh' 
                        ? '请登记贵司所遇故障状况或配件采购清单，售后中心将在1小时内处理。'
                        : 'Register hardware failure issues or components requests instantly.'}
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <ContactForm currentLang={currentLang} />
                  </div>
                </div>
              </section>
            </>
          )}

          {activePage === 'careers' && (
            <JoinUs currentLang={currentLang} />
          )}

          {activePage === 'monitoring' && (
            <FactoryMonitoring currentLang={currentLang} />
          )}

          {activePage === 'contact' && (
            <>
              <ContactUsPage currentLang={currentLang} onScrollToInquiry={scrollToIndexForm} />
              
              <section className="bg-slate-50 border-t border-b border-[#e1e1e1] py-14 px-4" ref={inquirySectionRef} id="inquiry-form">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-center">
                    <div className="space-y-2">
                      <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">Direct Connection</span>
                      <h3 className="text-2xl font-bold text-[#014e96] tracking-tight">
                        {currentLang === 'zh' ? '总部直连表单' : currentLang === 'en' ? 'Direct Desk Connection' : 'Zavod Boʻlimi Aloqa Shakli'}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 leading-normal text-left">
                      {currentLang === 'zh' ? '该表格直连兰州新区秦川工厂出口销售科。' : 'Direct secure tunnel to Northwest G-Factory export sales division.'}
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <ContactForm currentLang={currentLang} />
                  </div>
                </div>
              </section>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 4. Product parameters specs Modal overlay */}
      <ProductDetailModal
        product={selectedProduct}
        currentLang={currentLang}
        onClose={() => {
          setSelectedProduct(null);
          setModalOpen(false);
        }}
        onInquireClick={scrollToIndexForm}
      />

      {/* 5. Official Gansu database footer */}
      <Footer currentLang={currentLang} />

      {/* Floating AI Consultant Widget */}
      <AIConsultant currentLang={currentLang} onNavigate={setActivePage} />

    </div>
  );
}

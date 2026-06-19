import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Globe, Clock, Search, ChevronDown, Award, Shield, FileText, Bot, Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activePage: string;
  onActivePageChange: (page: string) => void;
  onSubCatChange?: (subCat: string) => void;
}

export default function Header({ 
  currentLang, 
  onLangChange, 
  searchQuery, 
  onSearchChange, 
  activePage, 
  onActivePageChange,
  onSubCatChange 
}: HeaderProps) {
  const [time, setTime] = useState<string>('');
  const [hoveredCategory, setHoveredCategory] = useState<string>('tijorat');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navTitlesZh = ['网页首页', '关于我们', '新闻动态', '产品中心', '加入我们', '工厂监控', '科技研发', '服务保障', '联系我们'];
  const navTitlesEn = ['Home', 'About Us', 'News', 'Products', 'Careers', 'Factory Monitoring', 'R&D', 'Service', 'Contact'];
  const navTitlesUz = ['Veb-sayt bosh sahifasi', 'Biz haqimizda', 'Yangiliklar', 'Mahsulot markazi', "Bizga qo'shiling", 'Zavod Monitoringi', 'Ilmiy-Ar-Ge', 'Sotishdan keyingi xizmat', 'Aloqa'];
  const pageKeys = ['home', 'about', 'news', 'products', 'careers', 'monitoring', 'rnd', 'service', 'contact'];

  // Static submenus data matching lzgtnet.com Uzbek replica exactly
  const productsSubmenu = [
    { key: 'tijorat', label: { zh: '客车 / 城市交通系列以及旅游客车', en: 'Commercial vehicles', uz: 'Tijorat transport vositalari seriyasi' } },
    { key: 'maxsus', label: { zh: '新能源环卫与专用特种车辆', en: 'Special-purpose vehicles', uz: 'Maxsus transport vositalari seriyasi' } },
    { key: 'batareya_toplam', label: { zh: '钛酸锂(LTO)防爆动力电池组', en: 'Battery pack', uz: 'Batareya toʻplami' } },
    { key: 'batareya_mahsulot', label: { zh: '钛酸锂全极耳超低温电芯', en: 'Battery product units', uz: 'Batareya mahsulotlari' } },
    { key: 'zaryadlovchi', label: { zh: '360kW大功率智能直流充电桩', en: 'Smart charger station', uz: 'zaryadlovchi mahsulotlar' } },
    { key: 'motor_elektron', label: { zh: '高效永磁同步驱动电机系统', en: 'Motor & electronic controls', uz: 'Motor va elektron boshqaruv' } }
  ];

  const tijoratSubmenu = [
    { key: 'sightseeing', label: { zh: '复古英伦观光铛铛客车系列', en: 'Antique sightseeing vehicle', uz: 'Antik diqqatga sazovor joylarni tomosha qilish vositasi' } },
    { key: '12m_class', label: { zh: '“海豚”低地板高端纯电城市公交', en: 'Dolphin Bus series', uz: 'Delfin avtobusi' } },
    { key: '10m_class', label: { zh: '新国标大客车旗舰主力版', en: 'Classic Bus series', uz: 'Klassik avtobus' } },
    { key: 'van_class', label: { zh: '新古典主义全域道路穿梭小巴', en: 'Classic Road Passenger Mini-coasters', uz: 'Klassik yoʻl velosipedi' } },
    { key: 'shuttle_coaster', label: { zh: '经典豪华纯电公务中巴客车', en: 'Classic tour bus / European vehicle', uz: 'Klassik tur avtobusi/Yevropa transport vositasi' } },
    { key: 'double_decker', label: { zh: '12米双层纯电观光旅游巴士', en: 'Double-decker Bus (GTQ6122BEV6)', uz: 'Ikki qavatli avtobus' } },
    { key: 'articulated_bus', label: { zh: '18米超长铰接载客城市航空舰', en: '18-meter articulated vehicle', uz: '18 metrli boʻgʻimli yuk mashinasi' } }
  ];

  const aboutSubmenu = [
    { target: 'profile', label: { zh: '企业概况 / 工厂背景', en: 'Corporate Profile & Background', uz: 'Kompaniya profili va tarixi' } },
    { target: 'qinzhuan', label: { zh: '兰州新区秦川生产基地', en: 'Qinchuan Strategic Production Base', uz: 'Qinchuan zavod bazasi' } },
    { target: 'honors', label: { zh: '国际重工资质认证证书', en: 'Honors & Global Quality Audit', uz: 'Sifat sertifikatlari va unvonlar' } }
  ];

  const newsSubmenu = [
    { target: 'all', label: { zh: '企业最新动态爆料', en: 'Corporate Press Releases', uz: 'Kompaniya va zavod yangiliklari' } },
    { target: 'industry', label: { zh: '新能源重工行业动态', en: 'New Energy Industry Trends', uz: 'Yashil transport sohasi yangiliklari' } }
  ];

  const handleSubmenuProductSelect = (subcatKey: string) => {
    onActivePageChange('products');
    setIsMobileMenuOpen(false);
    let targetSubCat = 'avtobus';
    if (subcatKey === 'maxsus' || subcatKey === 'special') {
      targetSubCat = 'logistika';
    } else if (subcatKey === 'batareya_toplam' || subcatKey === 'batareya_mahsulot') {
      targetSubCat = 'batareya';
    } else if (subcatKey === 'zaryadlovchi') {
      targetSubCat = 'zaryadlash';
    } else if (subcatKey === 'motor_elektron') {
      targetSubCat = 'motor';
    } else if (subcatKey === 'sightseeing' || subcatKey === '12m_class' || subcatKey === '10m_class' || subcatKey === 'van_class' || subcatKey === 'shuttle_coaster' || subcatKey === 'double_decker' || subcatKey === 'articulated_bus') {
      targetSubCat = 'avtobus';
    }
    if (onSubCatChange) {
      onSubCatChange(targetSubCat);
    }
    // Smooth scroll downwards
    const el = document.getElementById('products-list');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleSubmenuAboutSelect = () => {
    onActivePageChange('about');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleSubmenuNewsSelect = () => {
    onActivePageChange('news');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const toggleMobileSection = (key: string) => {
    if (expandedMobileSection === key) {
      setExpandedMobileSection(null);
    } else {
      setExpandedMobileSection(key);
    }
  };

  return (
    <header className="bg-white text-[#333333] border-b border-slate-200 font-sans sticky top-0 z-[100] shadow-sm" id="main-header">
      
      {/* 1. Top Mini Utility Grey bar - Hidden on layout-restricted viewports */}
      <div className="bg-[#f8fafc] border-b border-slate-200 text-[11px] text-slate-500 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-650">
              <span className="inline-block w-1.5 h-1.5 bg-[#014e96] rounded-full shrink-0"></span>
              {currentLang === 'zh' ? '欢迎访问兰州广通新能源汽车官方展示平台！' : 
               currentLang === 'en' ? 'Welcome to Lanzhou Guangtong official export showroom!' : 
               'Lanzhou Guangtong rasmiy eksport portaliga xush kelibsiz!'}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Real-time Clock display */}
            <div className="flex items-center gap-1 text-slate-500 font-mono text-[10px]">
              <Clock className="w-3" />
              <span>Lanzhou: {time}</span>
            </div>

            {/* Language Picker in Top Bar */}
            <div className="flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-slate-400" />
              <button
                onClick={() => onLangChange('zh')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                  currentLang === 'zh' ? 'bg-[#014e96] text-white shadow-sm' : 'text-slate-500 hover:text-[#014e96]'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => onLangChange('en')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                  currentLang === 'en' ? 'bg-[#014e96] text-white shadow-sm' : 'text-slate-500 hover:text-[#014e96]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLangChange('uz')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                  currentLang === 'uz' ? 'bg-[#014e96] text-white shadow-sm' : 'text-slate-500 hover:text-[#014e96]'
                }`}
              >
                UZB
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Header Branding Logo & Navigation Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex justify-between items-center">
          
          {/* Authentic CAMBELL Branding Textual/SVG Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer shrink-0" onClick={() => { onActivePageChange('home'); setIsMobileMenuOpen(false); }}>
            <div className="flex items-baseline font-black tracking-tight" style={{ fontSize: '26px', fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>
              <span className="text-[#014e96]">C</span>
              <span className="inline-flex items-center justify-center mx-[0.5px] relative" style={{ width: '20px', height: '22px' }}>
                <svg viewBox="0 0 24 24" className="w-[18px] h-[20px] fill-none stroke-none">
                  <path d="M 12 2 L 2 22 L 22 22 Z" fill="#02a854" />
                  <path d="M 12 2 L 12 22 L 22 22 Z" fill="#014e96" opacity="0.15" />
                  <path d="M 12 7 L 6 20 L 18 20 Z" fill="#ffffff" />
                  <path d="M 12 11 L 15 18 L 9 18 Z" fill="#014e96" />
                </svg>
              </span>
              <span className="text-[#014e96]">MBE</span>
              <span className="text-[#02a854]">LL</span>
            </div>
            
            {/* Sub-label under logo */}
            <div className="border-l border-slate-200 pl-2.5 text-left hidden md:block">
              <h1 className="text-[11px] font-black text-[#014e96] uppercase tracking-wide leading-none">
                {currentLang === 'zh' ? '兰州广通新能源汽车' : 'Guangtong New Energy'}
              </h1>
              <p className="text-[8.5px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                Official Export Showroom
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION LAYOUT (Visible only on lg and larger layouts to prevent clutter/cutting) */}
          <div className="hidden lg:flex items-center gap-4.5">
            <nav className="flex items-center gap-2" aria-label="Official Web Menu">
              {pageKeys.map((pageKey, idx) => {
                const isActive = activePage === pageKey;
                const label = currentLang === 'zh' ? navTitlesZh[idx] :
                              currentLang === 'en' ? navTitlesEn[idx] : navTitlesUz[idx];

                const hasAboutDropdown = pageKey === 'about';
                const hasNewsDropdown = pageKey === 'news';
                const hasProductsDropdown = pageKey === 'products';

                return (
                  <div key={pageKey} className="relative group/menu">
                    <button
                      onClick={() => {
                        onActivePageChange(pageKey);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className={`px-3 py-1.5 text-[12.5px] font-extrabold tracking-tight transition-all rounded-full cursor-pointer border-none flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#014e96] text-white shadow-md transform scale-102 hover:bg-[#003c73]'
                          : 'text-slate-700 hover:text-[#014e96] hover:bg-slate-100'
                      }`}
                    >
                      <span>{label}</span>
                      {(hasAboutDropdown || hasNewsDropdown || hasProductsDropdown) && (
                        <ChevronDown className="w-3 h-3 text-slate-400 group-hover/menu:text-[#014e96] group-hover/menu:rotate-180 transition-transform duration-300" />
                      )}
                    </button>

                    {/* Fly-out Dropdown for Products */}
                    {hasProductsDropdown && (
                      <div className="absolute left-1/2 -translate-x-[40%] top-full pt-2 hidden group-hover/menu:block hover:block z-50 animate-fade-in-quick">
                        <div className="bg-white border border-slate-200 rounded-lg shadow-xl p-3 flex gap-3 text-zinc-900">
                          {/* Left category panel */}
                          <div className="w-72 space-y-1 border-r border-slate-100 pr-3">
                            <div className="px-2 py-1 border-b border-slate-150 text-[10px] font-bold text-[#014e96] uppercase tracking-wider font-mono">
                              {currentLang === 'zh' ? '产品大类 / CATEGORIES' : currentLang === 'en' ? 'Product Categories' : 'Mahsulot Boʻlimlari'}
                            </div>
                            {productsSubmenu.map((sub) => {
                              const isHovered = hoveredCategory === sub.key;
                              return (
                                <button
                                  key={sub.key}
                                  onMouseEnter={() => setHoveredCategory(sub.key)}
                                  onClick={() => handleSubmenuProductSelect(sub.key)}
                                  className={`w-full text-left px-3 py-2 text-[11px] sm:text-xs font-bold rounded transition-colors flex items-center justify-between cursor-pointer ${
                                    isHovered 
                                      ? 'bg-[#014e96]/10 text-[#014e96]' 
                                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#014e96]'
                                  }`}
                                >
                                  <span>{sub.label[currentLang]}</span>
                                  <ChevronDown className={`w-2.5 h-2.5 -rotate-90 transition-transform ${isHovered ? 'text-[#014e96] translate-x-0.5' : 'text-slate-350'}`} />
                                </button>
                              );
                            })}
                          </div>

                          {/* Right products / items details category list */}
                          <div className="w-80 space-y-1">
                            <div className="px-2 py-1 border-b border-slate-150 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                              {hoveredCategory === 'tijorat' 
                                ? (currentLang === 'zh' ? '客车精细分类' : currentLang === 'en' ? 'Transit Subcategories' : 'Subkategoriya modellar') 
                                : (currentLang === 'zh' ? '配套重工子系' : currentLang === 'en' ? 'Associated systems' : 'Qoʻshimcha tizimlar')}
                            </div>
                            
                            {hoveredCategory === 'tijorat' ? (
                              tijoratSubmenu.map((sub) => (
                                <button
                                  key={sub.key}
                                  onClick={() => handleSubmenuProductSelect(sub.key)}
                                  className="w-full text-left px-3 py-2 text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-[#014e96] hover:bg-slate-50 rounded transition-all flex items-center justify-between cursor-pointer group/sub"
                                >
                                  <span className="truncate max-w-[240px] group-hover/sub:translate-x-1 transition-transform">{sub.label[currentLang]}</span>
                                  <span className="text-[9px] font-mono font-bold text-[#014e96] opacity-0 group-hover/sub:opacity-100 transition-opacity">GO</span>
                                </button>
                              ))
                            ) : (
                              <div className="p-4 text-center space-y-2 mt-4">
                                <Award className="w-6 h-6 text-slate-300 mx-auto" />
                                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                                  {currentLang === 'zh' ? '大宗重工目录已准备' : 'Specialized Segment Ready'}
                                </span>
                                <button 
                                  onClick={() => handleSubmenuProductSelect(hoveredCategory)}
                                  className="px-4 py-1.5 bg-[#014e96] text-white text-[10px] font-extrabold rounded-md shadow-sm hover:bg-[#003c73] transition-colors cursor-pointer"
                                >
                                  {currentLang === 'zh' ? '进入分类列表' : currentLang === 'en' ? 'Open Category Page' : 'Boʻlimni yuklash'}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Fly-out Dropdown for About */}
                    {hasAboutDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 hidden group-hover/menu:block hover:block z-50 animate-fade-in-quick">
                        <div className="bg-white border border-slate-200 rounded-lg shadow-xl p-3 space-y-1">
                          <div className="px-2 py-1 border-b border-slate-100 text-[10px] font-bold text-[#014e96] uppercase tracking-wider font-mono">
                            {currentLang === 'zh' ? '企业核心模块' : currentLang === 'en' ? 'About Navigation' : 'Daraxt boʻlimi'}
                          </div>
                          {aboutSubmenu.map((sub, idx) => (
                            <button
                              key={idx}
                              onClick={handleSubmenuAboutSelect}
                              className="w-full text-left px-3 py-2 text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-[#014e96] hover:bg-slate-50 rounded transition-colors flex items-center justify-between cursor-pointer"
                            >
                              <span>{sub.label[currentLang]}</span>
                              <ChevronDown className="w-2.5 h-2.5 -rotate-90 text-slate-300" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Fly-out Dropdown for News */}
                    {hasNewsDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-60 hidden group-hover/menu:block hover:block z-50 animate-fade-in-quick">
                        <div className="bg-white border border-slate-200 rounded-lg shadow-xl p-3 space-y-1">
                          <div className="px-2 py-1 border-b border-slate-100 text-[10px] font-bold text-[#014e96] uppercase tracking-wider font-mono">
                            {currentLang === 'zh' ? '动态板块' : currentLang === 'en' ? 'News Categories' : 'Yangilik Boʻlimlari'}
                          </div>
                          {newsSubmenu.map((sub, idx) => (
                            <button
                              key={idx}
                              onClick={handleSubmenuNewsSelect}
                              className="w-full text-left px-3 py-2 text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-[#014e96] hover:bg-slate-50 rounded transition-colors flex items-center justify-between cursor-pointer"
                            >
                              <span>{sub.label[currentLang]}</span>
                              <ChevronDown className="w-2.5 h-2.5 -rotate-90 text-slate-300" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </nav>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-consultant'))}
              className="flex items-center gap-1.5 bg-[#014e96] hover:bg-blue-700 text-white px-4 py-1.5 rounded-full cursor-pointer transition-all shadow-md hover:shadow-lg font-bold text-xs shrink-0"
              id="header-ai-consultant-btn"
            >
              <Bot className="w-4 h-4 animate-pulse text-blue-200" />
              <span>
                {currentLang === 'zh' ? 'AI 顾问' : currentLang === 'en' ? 'AI Advisor' : 'AI Maslahatchi'}
              </span>
              <Sparkles className="w-3 h-3 text-yellow-300" />
            </button>
          </div>

          {/* MOBILE BURGER ACTION TRIGGER (Only visible on screens under lg width) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Language picker on mobile to switch directly */}
            <div className="sm:hidden flex items-center gap-1 bg-slate-100 px-2 py-1.5 rounded-lg border border-slate-200">
              <button onClick={() => onLangChange('zh')} className={`px-1 py-0.5 text-[9px] font-bold rounded ${currentLang === 'zh' ? 'bg-[#014e96] text-white' : 'text-slate-500'}`}>ZH</button>
              <button onClick={() => onLangChange('en')} className={`px-1 py-0.5 text-[9px] font-bold rounded ${currentLang === 'en' ? 'bg-[#014e96] text-white' : 'text-slate-500'}`}>EN</button>
              <button onClick={() => onLangChange('uz')} className={`px-1 py-0.5 text-[9px] font-bold rounded ${currentLang === 'uz' ? 'bg-[#014e96] text-white' : 'text-slate-500'}`}>UZ</button>
            </div>

            {/* Quick compact AI Advisor button on mobile bar */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-consultant'))}
              className="flex items-center gap-1 bg-[#014e96] hover:bg-blue-700 text-white px-3 py-2 rounded-full cursor-pointer transition-all shadow-sm font-bold text-[10px]"
            >
              <Bot className="w-3.5 h-3.5 animate-pulse text-blue-250" />
              <span>AI</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-slate-205 text-slate-700 hover:text-[#014e96] hover:bg-slate-50 rounded-xl cursor-pointer transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5.5 h-5.5" />
              ) : (
                <Menu className="w-5.5 h-5.5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 3. EXPANDED MOBILE DRAWER / MENU ACCORDION OVERLAY */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl max-h-[85vh] overflow-y-auto block animate-fade-in-quick text-left">
          <div className="px-4.5 py-4 space-y-1.5 divider-y divider-slate-100">
            {pageKeys.map((pageKey, idx) => {
              const isActive = activePage === pageKey;
              const label = currentLang === 'zh' ? navTitlesZh[idx] :
                            currentLang === 'en' ? navTitlesEn[idx] : navTitlesUz[idx];

              const hasAboutDropdown = pageKey === 'about';
              const hasNewsDropdown = pageKey === 'news';
              const hasProductsDropdown = pageKey === 'products';
              const isSectionExpanded = expandedMobileSection === pageKey;

              return (
                <div key={pageKey} className="border-b border-slate-100 pb-1.5 pt-1.5 first:pt-0 last:border-b-0">
                  <div className="flex justify-between items-center w-full">
                    <button
                      onClick={() => {
                        onActivePageChange(pageKey);
                        if (!hasAboutDropdown && !hasNewsDropdown && !hasProductsDropdown) {
                          setIsMobileMenuOpen(false);
                        } else {
                          toggleMobileSection(pageKey);
                        }
                      }}
                      className={`text-left text-xs sm:text-sm font-bold py-2.5 px-3 rounded-lg flex-1 cursor-pointer transition-colors ${
                        isActive 
                          ? 'bg-[#014e96]/10 text-[#014e96] font-black' 
                          : 'text-slate-850 hover:bg-slate-50'
                      }`}
                    >
                      {label}
                    </button>

                    {/* Nested Expand Accordion control */}
                    {(hasAboutDropdown || hasNewsDropdown || hasProductsDropdown) && (
                      <button
                        onClick={() => toggleMobileSection(pageKey)}
                        className="p-2 border border-slate-150 rounded-lg text-slate-400 hover:text-[#014e96] hover:bg-slate-50 cursor-pointer mr-1"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSectionExpanded ? 'rotate-180 text-[#014e96]' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Render Accordion Sub-items properly so there is zero overlap or clipping on mobile viewports */}
                  {isSectionExpanded && hasProductsDropdown && (
                    <div className="mt-2 pl-2 py-2 bg-slate-50 rounded-xl border border-slate-200 space-y-1 block md:grid md:grid-cols-2">
                      <div className="col-span-2 text-[10px] font-bold text-slate-400 px-3 uppercase tracking-wider mb-1 font-mono">
                        {currentLang === 'zh' ? '产品分类' : currentLang === 'en' ? 'Product Categories' : 'Mahsulot Boʻlimlari'}
                      </div>
                      {productsSubmenu.map((sub) => (
                        <button
                          key={sub.key}
                          onClick={() => handleSubmenuProductSelect(sub.key)}
                          className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#014e96] hover:bg-slate-100 rounded-lg transition-all flex items-center justify-between cursor-pointer"
                        >
                          <span>{sub.label[currentLang]}</span>
                          <span className="text-[9px] font-mono font-black text-[#014e96] shrink-0 ml-1">GO</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {isSectionExpanded && hasAboutDropdown && (
                    <div className="mt-2 pl-2 py-2 bg-slate-50 rounded-xl border border-slate-200 space-y-1 block">
                      {aboutSubmenu.map((sub, sidx) => (
                        <button
                          key={sidx}
                          onClick={handleSubmenuAboutSelect}
                          className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#014e96] hover:bg-slate-100 rounded-lg transition-all flex items-center justify-between cursor-pointer"
                        >
                          <span>{sub.label[currentLang]}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {isSectionExpanded && hasNewsDropdown && (
                    <div className="mt-2 pl-2 py-2 bg-slate-50 rounded-xl border border-slate-200 space-y-1 block">
                      {newsSubmenu.map((sub, sidx) => (
                        <button
                          key={sidx}
                          onClick={handleSubmenuNewsSelect}
                          className="w-full text-left px-3 py-2 text-xs font-bold text-slate-705 hover:text-[#014e96] hover:bg-slate-100 rounded-lg transition-all flex items-center justify-between cursor-pointer"
                        >
                          <span>{sub.label[currentLang]}</span>
                        </button>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      )}

    </header>
  );
}

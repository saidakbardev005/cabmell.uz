import React from 'react';
import { Language } from '../types';
import { Award, Shield, Milestone, Building2, Eye, History, CheckCircle } from 'lucide-react';

interface AboutLZGTProps {
  currentLang: Language;
}

export default function AboutLZGT({ currentLang }: AboutLZGTProps) {
  const t = {
    zh: {
      title: '走进广通',
      subtitle: '甘肃战略性新能源重工核心支柱',
      profileTitle: '公司简介',
      profileContent1: '兰州广通新能源汽车有限公司成立于甘肃兰州新区，是一家集新能源电动城市公交、氢燃料客车、智能物流厢式车等研发、制造和销售于一体的国家级高新技术企业。作为甘肃省战略性新兴产业骨干企业，公司在西北地区建有完备的数字化智能制造总装生产车间。',
      profileContent2: '公司始终紧密契合国家“双碳”战略以及“一带一路”倡议，深度融合广通客车的核心先进技术底蕴，面向西北极寒风沙极端恶劣气候，研发了独树一帜的钛酸锂(LTO)极速超级安全快充电芯组、IP68高防护底盘电器舱及3H高强度承载式轻量化车身，致力于为全球城市公共交通、商贸物流提供绿色、安全、智能高效的一体化定制解决方案。',
      milestonesTitle: '发展历程',
      valuesTitle: '核心价值观',
      honorsTitle: '资质与荣誉',
      ethicsTitle: '企业愿景',
      ethicsText: '致力于成为全球清洁能源商用整车的领先价值智造者，用绿色足迹连接现代丝路。',
    },
    en: {
      title: 'About LZGT',
      subtitle: 'Strategic Heavy Industry pillar of Gansu Province',
      profileTitle: 'Corporate Profile',
      profileContent1: 'Lanzhou Guangtong New Energy Automobile Co., Ltd., situated in the Lanzhou New District of Gansu, is a national high-tech enterprise integrating the R&D, manufacturing, and marketing of new energy pure electric buses, hydrogen fuel-cell transit vehicles, and smart logistics trucks.',
      profileContent2: 'Aligned with global zero-emission initiatives and the Silk Road Economic Belt corridor, LZGT integrates pioneering assembly technologies. Specially engineered to withstand sub-zero winters and arid windstorms, we deliver our signature super-fast LTO quick charging batteries, IP68 insulated electric compartments, and ultra-lightweight high-durability alloy chassis to municipal transit networks worldwide.',
      milestonesTitle: 'Milestones',
      valuesTitle: 'Core Values',
      honorsTitle: 'Credentials & Honors',
      ethicsTitle: 'Corporate Vision',
      ethicsText: 'To become a globally respected pioneer of clean commercial fleet value manufacturing, linking the modern Silk Road with carbon-free footprints.',
    },
    uz: {
      title: 'Lanzhou Guangtong haqida',
      subtitle: 'Gansu provinsiyasining strategik transport va ogʻir sanoat poydevori',
      profileTitle: 'Kompaniya Profili',
      profileContent1: 'Lanzhou Guangtong New Energy Automobile Co., Ltd. - Gansu provinsiyasining Lanzhou Yangi tumanida joylashgan boʻlib, yangi energiya avtobuslari, vodorod yonilgʻili shahar transportlari va aqlli yuk tashuvchi furgonlarni ishlab chiqaruvchi va eksport qiluvchi yirik davlat korxonasidir.',
      profileContent2: 'Kompaniyamiz ekologik toza muxtoriyat va Buyuk Ipak yoʻli iqtisodiy hamkorlik loyihalarini toʻliq qoʻllab-quvvatlaydi. Markaziy Osiyo va Shimoliy hududlarning jazirama va ekstremal sovuq tumanlariga moʻljallab maxsus LTO tezkor akkumulyator tizimlari, IP68 karkas himoyasi va oʻta yengil shassi tarkibiy qismlari ishlab chiqilgan boʻlib, butun dunyo shahar bekatlari uchun qulay yechimlarni yetkazamiz.',
      milestonesTitle: 'Kompaniya tarixi',
      valuesTitle: 'Asosiy qadriyatlar',
      honorsTitle: 'Guvohnomalar va Yutuqlar',
      ethicsTitle: 'Kompaniya Maqsadi',
      ethicsText: 'Dunyo boʻylab ekologik toza shahar transportlari yetkazib berish boʻyicha etakchi boʻlish hamda karbonat chiqindisidan holi yashil Ipak yoʻlini barpo etish.',
    }
  };

  const milestones = [
    {
      year: '2016',
      zh: '甘肃兰州新区秦川园区白杨路基地奠基开工，被列为省重点重工招商引资战略项目',
      en: 'Stone ceremony of the Baiyang Road Base in Lanzhou New District, recognized as Gansu key industrial layout',
      uz: 'Lanzhou Yangi hududida Baiyang koʻchasidagi zavodga asos solindi, loyiha davlat darajasidagi yirik loyihaga kiritildi'
    },
    {
      year: '2018',
      zh: '首批搭载钛酸锂(LTO)技术的纯电公交客车批量在西北城市公交客运上线运行，成功攻坚西北高低温及风沙运行环境',
      en: 'First batch of LTO ultra-fast charging transit buses delivered to Northwestern lines, operating smoothly under dry sands and heavy wind',
      uz: 'Shimoli-gʻarbiy shahar yoʻnalishlariga birinchi LTO tezkor zaryadlovchi elektr avtobuslari muvaffaqiyatli topshirildi'
    },
    {
      year: '2021',
      zh: '通过国家工信部整车Class3=17高规格核准资质，自主研发的10.5米黄金公交大底盘底板技术问鼎西北畅销王牌',
      en: 'Certified with "Class3=17" high-capacity transit vehicle standard. The 10.5M golden-bus chassis becomes the regional sales champion',
      uz: '"Class3=17" sertifikati olindi va 10.5 metrlik oltin standart elektr avtobus shassisi mamlakatda eng xaridorgir deb topildi'
    },
    {
      year: '2024',
      zh: '兰州广通新能源大巴大批量入驻中亚、中东多国公交线网，建立全球化售后网络体系与配件中心库',
      en: 'Bulk exports of LZGT electric fleets deployed in Tashkent (Uzbekistan) and countries across the Mid-East with dedicated spare parts depots',
      uz: 'Toshkent shahriga va Markaziy Osiyo mamlakatlariga katta hajmdagi avtobuslar eksporti boshlandi, markaziy zaxira omborlari ochildi'
    }
  ];

  const values = [
    {
      title: { zh: '绿色低碳', en: 'Green Ecology', uz: 'Yashil Ekologiya' },
      desc: { zh: '助力全球碳中和，尾气纯净水和零排放是我们的底线。', en: 'Pioneering net-zero transit, water tailpipes are our commitment.', uz: 'Yurish davomida faqat toza suv bugʻi chiqarish bizning oliy qoidamizdir.' }
    },
    {
      title: { zh: '快充极致', en: 'Ultra-Fast Recharge', uz: 'Tezkor Quvvatlash' },
      desc: { zh: '钛酸锂15分钟超级满充，打破传统充电数小时的低周转率劣势。', en: '15-minute complete LTO reload, avoiding hours of idle terminal parking.', uz: 'LTO batareya orqali 15 daqiqada 100% zaryadlash - bekor kutish vaqtlarini yoʻqotadi.' }
    },
    {
      title: { zh: '品质匠心', en: 'Unyielding Quality', uz: 'Muhandislik Sifati' },
      desc: { zh: '3H高硬度铝合金桁架，最高IP68电器三防标准，用重工致敬细节。', en: '3H tensile alloy structure, supreme IP68 triple electrical insulation guard.', uz: '3H alyuminiy korpus karkasi, IP68 eng yuqori elektrik tizimlar gidroishonch muhofazasi.' }
    }
  ];

  const honors = [
    {
      title: { zh: '国家高新技术企业证书', en: 'National High-Tech Enterprise Certification', uz: 'Milliy Yuqori Texnologiyali Korxona' },
      issuer: { zh: '中华人民共和国科技部', en: 'Ministry of Science and Technology, PRC', uz: 'Xitoy Fan va Texnologiya Vazirligi' }
    },
    {
      title: { zh: '整车准入 Class3=17 绿色推荐资质', en: 'Class3=17 Commercial High-Standard License', uz: 'Jahon Class3=17 Yuqori Avtobus Standarti' },
      issuer: { zh: '国家工信部装备发展中心', en: 'MIIT Industrial Vehicle Development Bureau', uz: 'Davlat Sanoat va Axborot Vazirligi' }
    },
    {
      title: { zh: 'ISO9001 国际质量管理体系体系认证', en: 'ISO9001/ISO14001 Quality & Green Management', uz: 'ISO9001/ISO14001 Xalqaro Standartlar' },
      issuer: { zh: 'SGS国际权威认证机构', en: 'SGS Global Accreditation Services', uz: 'SGS Xalqaro Reyting Agentligi' }
    },
    {
      title: { zh: '欧盟E-mark高标准整车出境认证书', en: 'European Union E-Mark Export Green Compliance', uz: 'Yevropa Ittifoqi E-Mark Eksport Tizimi' },
      issuer: { zh: '欧盟整车准入委员会', en: 'EU Automotive Regulatory Council', uz: 'Yevropa Ittifoqi Transport Departamenti' }
    }
  ];

  const curr = t[currentLang];

  return (
    <div className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 space-y-12" id="about-content-view">
      
      {/* Page Title Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">
          Lanzhou Guangtong profile / 企业概况
        </span>
        <h2 className="text-3xl font-black text-[#014e96] tracking-tight">
          {curr.title}
        </h2>
        <div className="h-1 w-16 bg-[#e53e3e] mx-auto rounded-full"></div>
        <p className="text-sm font-semibold text-[#4a5568]">
          {curr.subtitle}
        </p>
      </div>

      {/* Corporate profile card layout */}
      <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4 text-left">
          <div className="flex items-center gap-2 text-[#014e96]">
            <Building2 className="w-5 h-5 text-[#e53e3e]" />
            <span className="font-extrabold text-base tracking-tight">{curr.profileTitle}</span>
          </div>
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
            <p>{curr.profileContent1}</p>
            <p>{curr.profileContent2}</p>
          </div>
          <div className="p-4 bg-slate-50 border-l-4 border-[#014e96] rounded-r mt-4">
            <div className="text-[10px] font-bold text-[#e53e3e] uppercase tracking-wider">{curr.ethicsTitle}</div>
            <div className="text-xs font-semibold text-slate-700 mt-1">{curr.ethicsText}</div>
          </div>
        </div>
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#014e96]/10 to-transparent rounded-lg blur-xl opacity-40"></div>
          <div className="relative border border-slate-200 rounded-lg overflow-hidden bg-slate-100 aspect-video flex items-center justify-center">
            <img 
              src="/images/gt_bus_10m_1781508267691.jpg" 
              alt="Lanzhou Guangtong Production Complex" 
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-left">
              <span className="text-[9px] font-mono font-bold text-white uppercase bg-[#e53e3e] px-1.5 py-0.5 rounded shadow">LZGT G-Factory Base</span>
            </div>
          </div>
        </div>
      </div>

      {/* Value statement bento */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-black text-[#014e96] text-left border-l-4 border-[#e53e3e] pl-3 mb-6">
          {curr.valuesTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-5 text-left space-y-3 hover:shadow-md hover:border-[#014e96]/40 transition-all shadow-sm">
              <div className="p-2 bg-blue-50 text-[#014e96] rounded-full w-9 h-9 flex items-center justify-center font-bold">
                {i === 0 ? <Shield className="w-5 h-5 text-[#e53e3e]" /> : i === 1 ? <Award className="w-5 h-5 text-blue-600" /> : <CheckCircle className="w-5 h-5 text-green-600" />}
              </div>
              <h4 className="font-extrabold text-sm text-[#014e96]">{v.title[currentLang]}</h4>
              <p className="text-xs text-slate-500 leading-normal">{v.desc[currentLang]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones chronology */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-black text-[#014e96] text-left border-l-4 border-[#e53e3e] pl-3 mb-6">
          {curr.milestonesTitle}
        </h3>
        <div className="relative border-l border-slate-200 ml-3 space-y-8 text-left">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative pl-6">
              {/* Chrono dot */}
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-[#e53e3e] border-2 border-white rounded-full animate-pulse"></div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:border-slate-300 transition-colors">
                <span className="text-xs font-black font-mono text-[#014e96] block bg-blue-50 px-2 py-0.5 rounded w-fit mb-2">
                  {item.year}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {currentLang === 'zh' ? item.zh : currentLang === 'en' ? item.en : item.uz}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Honors grid */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-black text-[#014e96] text-left border-l-4 border-[#e53e3e] pl-3 mb-6">
          {curr.honorsTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {honors.map((h, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-5 text-left flex flex-col justify-between hover:border-blue-300 transition-all shadow-sm">
              <div className="space-y-2">
                <Award className="w-6 h-6 text-[#e53e3e]" />
                <h4 className="text-xs sm:text-sm font-extrabold text-[#014e96] leading-tight">
                  {h.title[currentLang]}
                </h4>
              </div>
              <span className="text-[10px] text-slate-400 font-bold tracking-tight block mt-4 border-t border-slate-100 pt-2">
                {h.issuer[currentLang]}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

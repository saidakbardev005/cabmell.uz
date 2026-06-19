import React from 'react';
import { Language } from '../types';
import { Cpu, Zap, Wind, ShieldCheck, Award, Layers, Leaf } from 'lucide-react';

interface RDTechnologyProps {
  currentLang: Language;
}

export default function RDTechnology({ currentLang }: RDTechnologyProps) {
  const t = {
    zh: {
      title: '科技研发与重工智造',
      subtitle: '以颠覆性智造，定义大国西北绿色交通硬核标准',
      intro: '兰州广通新能源汽车始终致力于攻克极温高低温运行失稳、超长充电延迟、车辆自重能耗过高等新能源商用车行业痛点。通过与高校、科研机构联合攻关，公司在钛酸锂极速快充、铝合金轻量化车身、三防最高防护电气集成舱等核心领域取得了数十项行业发明专利。',
      pillars: '四大核心重工技术专利',
      tech1Title: '安能LTO极速超快充电芯体系',
      tech1Desc: '采用先进晶格纳米化电极，可在10-15分钟内实现单枪至95%SOC安全充放电。电池长达2.5万次全寿命放电，在-30℃至+50℃均维持全活性输出，整车运营生命内免二次换电。',
      tech2Title: '3H高强度航空铝合金车身轻量化',
      tech2Desc: '基于3H多点高承载受力机理与热处理焊接拼插，比普通钢制结构减重12%至15%，整车续航提升近15%，车体终生不腐，报废铝合金型材回收高价值。',
      tech3Title: 'IP68高防护宽温空气气舱舱技术',
      tech3Desc: '结合高气压全幅保温理念，建立IP68防水、防尘、耐极寒热管理。专门阻断西北荒漠极其细微的风沙尘暴与高原凝霜，杜绝电气部件老化短路。',
      tech4Title: '质子交换膜(PEM)零排放氢能引擎',
      tech4Desc: '零尾气排放仅排出纯水。10分钟快充气瓶，提供综合超过500-600公里的极佳续航。具备极速全自动零下35度微秒级自动热引启动。',
      qualityCommitment: '数字化智造总装生产线优势',
      qualityText: '兰州新区秦川生产基地占地500余亩，配备了国内先进的客车底骨焊接机械臂、智能三段式漆装涂层工艺室、高精度动力匹配检测跑道以及整车淋雨防锈检测舱。所有出厂整车经历2.5小时极旱淋雨与35-45度陡峭爬坡极限动态考验，确保卓越出厂品质。'
    },
    en: {
      title: 'R&D and Heavy Smart-Manufacturing',
      subtitle: 'Defining industrial standards of robust green vehicle engineering',
      intro: 'Lanzhou Guangtong is dedicated to overcoming persistent limitations of new energy fleets, such as cold-climate state deterioration, hours of charging bottlenecks, and heavy curb weights. Through joint R&D laboratories, we hold dozens of industry patents on super-fast active charging and physical weatherproofing.',
      pillars: '4 Pillars of Master Patents',
      tech1Title: 'Signature LTO Ultra-Fast Electric Cells',
      tech1Desc: 'Employs nano-scale crystal electrodes to achieve full charge inside 10 to 15 minutes. Sustains 25,000+ cycles while operating beautifully from -30°C to +50°C without risk of thermal leakage.',
      tech2Title: '3H High-Tensile Aerospace Alloy Body',
      tech2Desc: 'Constructed using premium lightweight aluminum extrusion profiles and modular rivets, reducing chassis weight by 12-15%, expanding operational range, and resisting corrosion permanently.',
      tech3Title: 'IP68 High Protection Thermal Air Chamber',
      tech3Desc: 'An airtight, insulated enclosure shielding crucial electric batteries. Prevents desert fine sands, snow frosting, or rainfall water ingress, eliminating electronics aging or short circuiting.',
      tech4Title: 'Zero-Emission Proton Exchange Membrane Stack',
      tech4Desc: 'Releases zero carbon footprint, emitting only pure water. Consumes less than 10 minutes to refuel compressed hydrogen, delivering over 500-600km of steady municipal operations.',
      qualityCommitment: 'G-Factory Manufacturing Robotics',
      qualityText: 'Our Lanzhou New District compound spans over 500,000 square meters. It features cybernetic welding robot arms, dynamic paint curing booths, high-speed alignment testing tracks, and extreme water monsoon simulation cabins. Each model undergoes 2.5 hours of high-pressure rain tests and 45% hill-climbing dynamic audits before shipping.'
    },
    uz: {
      title: 'Ilmiy-Ar-Ge va Ishlab Chiqarish',
      subtitle: 'Ogʻir sanoat yechimlari orqali ekologik avtobuslarning yangi standartini belgilash',
      intro: 'Lanzhou Guangtong yangi avlod elektr avtobuslarining global muammolarini - sovuqda kuchsizlanish, soatlab zaryad kutish hamda ogʻir vazn kabilarni hal qilish uchun tinimsiz mehnat qildi. Ilmiy laboratoriyalar va universitetlar bilan hamkorlikda tezkor zaryad batareyalari hamda aviatsiya alyuminiy korpus kabi oʻnlab patentlar olindi.',
      pillars: '4 Ta Asosiy Patentlangan Muhandislik Texnologiyasi',
      tech1Title: 'Mashxur LTO Oʻta Tezkor Quvvatlash Tizimi',
      tech1Desc: 'LTO akkumulyatori bor-yoqʻi 10-15 daqiqa ichida DC orqali 95% zaryad oladi. Resursi 25,000 martadan oshadi va havo harorati -30°C dan +50°C gacha boʻlganda ham 100% samarali ishlayveradi.',
      tech2Title: '3H Konstruktsiyali Engil Aviatsiya Alyuminiy Korpus',
      tech2Desc: 'Aviatsiya darajasidagi alyuminiydan tayyorlangan ramka avtobus ogʻirligini 12%-15% gacha engillashtiradi, natijada bosib oʻtiladigan masofa koʻpayadi va korpus korroziyaga zarracha yoʻliqmaydi.',
      tech3Title: 'IP68 Himoyali Isitish Va Gazoissiq Havo Boʻlimi',
      tech3Desc: 'Elektronika va batareyalarni maxsus germetik muhofazalash boʻlimi. Choʻl shamollari orqali uchib keluvchi mayda qumlar, qor va namlikdan toʻliq saqlaydi hamda elektr qisqa tutashuvlarining oldini oladi.',
      tech4Title: ' PEM Vodorod Yonilgʻisi Tizimi (Zero Emission)',
      tech4Desc: 'Atrof-muhitga faqat toza suv bugʻi chiqaradi. 10 daqiqada vodorod toʻldirib, 500-600 km masofani muammosiz bosib oʻtadi hamda qishki ayozda ham avtomatik qizib tezda ishga tushadi.',
      qualityCommitment: 'G-Factory Raqamli Va Robotlashtirilgan Zavod',
      qualityText: 'Lanzhou New Area zavod maydoni 500 gektarni tashkil qiladi. U yerda eng soʻnggi robotlashtirilgan payvandlash liniyalari, yuqori bosimli suv sirlari va dinamik yoʻl sinov zonalari oʻrnatilgan. Har bir tayyorlangan avtobus 2.5 soat mudatda sunʻiy musson yomgʻirlari ostida sinovdan oʻtgandan keyingina mijozga eksport qilinadi.'
    }
  };

  const curr = t[currentLang];

  const techIcons = [
    <Zap className="w-8 h-8 text-[#e53e3e]" />,
    <Layers className="w-8 h-8 text-blue-600" />,
    <Cpu className="w-8 h-8 text-green-600" />,
    <Leaf className="w-8 h-8 text-cyan-600" />
  ];

  return (
    <div className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 space-y-12" id="about-rnd-technology">
      
      {/* Title block */}
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">
          R&D Center & Engineering Power / 科技研发
        </span>
        <h2 className="text-3xl font-black text-[#014e96] tracking-tight">
          {curr.title}
        </h2>
        <div className="h-1 w-16 bg-[#e53e3e] mx-auto rounded-full"></div>
        <p className="text-sm font-semibold text-[#4a5568]">
          {curr.subtitle}
        </p>
      </div>

      {/* Intro info card */}
      <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm text-left">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify indent-6 sm:indent-8">
          {curr.intro}
        </p>
      </div>

      {/* Technical Breakthrough Pillars (Bento Grid) */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-black text-[#014e96] text-left border-l-4 border-[#e53e3e] pl-3 mb-6">
          {curr.pillars}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            { title: curr.tech1Title, desc: curr.tech1Desc },
            { title: curr.tech2Title, desc: curr.tech2Desc },
            { title: curr.tech3Title, desc: curr.tech3Desc },
            { title: curr.tech4Title, desc: curr.tech4Desc }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-[#014e96]/40 transition-all flex gap-4 shadow-sm"
            >
              <div className="p-3 bg-slate-50 rounded-lg h-fit">
                {techIcons[idx]}
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-sm sm:text-base text-[#014e96]">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate factory and robotics quality commitment */}
      <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
        <div className="lg:col-span-5 aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative group">
          <img 
            src="/src/assets/images/gt_logistic_van_1781508306200.jpg" 
            alt="LZGT Assembly Line Robotics" 
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute bottom-3 left-3 text-left">
            <span className="text-[9px] font-mono font-bold text-white uppercase bg-blue-600 px-1.5 py-0.5 rounded shadow">LZGT Production Complex</span>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-[#014e96]">
            <Award className="w-5 h-5 text-[#e53e3e]" />
            <h3 className="font-black text-sm sm:text-base tracking-tight">
              {curr.qualityCommitment}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
            {curr.qualityText}
          </p>
        </div>
      </div>

    </div>
  );
}

import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Clock, ShieldAlert, Cpu, Truck, GraduationCap, PhoneCall } from 'lucide-react';

interface ServiceGuaranteeProps {
  currentLang: Language;
}

export default function ServiceGuarantee({ currentLang }: ServiceGuaranteeProps) {
  const t = {
    zh: {
      title: '售后服务保障体系',
      subtitle: '全时段全球云端级关怀，让每一次出行放心无阻',
      intro: '兰州广通新能源汽车秉承“高效响应，服务至上”的宗旨。依托智能数字云端服务大厅（OBD车联网），我们为全球客户建立了一套从预防诊断、极速抢修到零备件直供的一站式金牌售后体系，让每一辆广通城市公交、厢式物流车发挥极限运营价值。',
      guaranteesTitle: '客户服务核心承诺',
      g1Title: '24小时星级极速应急响应机制',
      g1Desc: '国内及出海出口线网建立全天候故障专线，专职售后工程师1小时内响应并提供远程技术分析建议，确需到现场的承诺24小时内迅速抵达。',
      g2Title: 'Global Cloud 全天候云端诊断系统',
      g2Desc: '出厂整车标配高通车联网OBD通讯，后台实时监测动力锂电池（特别是LTO）温度、SOC状态和单体电压。在电极偏离预设安全阈值前提前预警。',
      g3Title: '正品精工配件原厂快捷直发网络',
      g3Desc: '我们在兰州重组建立了覆盖极旱及中亚周边的零备件极速仓储。针对特约公交线网，所有核心传感器、空调电泵，可在48小时内顺丰或关税绿色通道极速空运。',
      g4Title: '全面周全的专业级技能技术培训',
      g4Desc: '面向海外公交运营商及本地电路维护工，提供免费的一对一高压安全用电常识、钛酸锂电池宽温运行维护、空气净化暖风系统调试以及安全行车规范认证。',
      hotlineTitle: '全国及海外尊贵业务咨询专线',
      hotlineContent: '有关新能源公交车、高周转钛酸锂动力组定制、以及出口配件采购，请立即拨打我们的中国咨询部，或通过下方的询盘卡在线提交您的定制说明，我们将竭诚为您服务。'
    },
    en: {
      title: 'Customer Support & Warranty Systems',
      subtitle: 'Global Cloud diagnostic safeguards ensuring zero municipal line downtime',
      intro: 'Lanzhou Guangtong prioritizes rapid dynamic solutions for transport authorities worldwide. Partnered with cloud networks (OBD telemetry hub), we have sculpted a comprehensive warranty system encompassing preventive telemetry, on-site heavy diagnostics, and fast customs clearance of spare parts.',
      guaranteesTitle: '4 Standard Core Commitments',
      g1Title: '24-Hour Express Field Response Guarantee',
      g1Desc: 'Provides round-the-clock emergency assistance lines. Certified powertrain service desks respond within 1 hour, committing to on-site arrival within 24 hours under our special service SLA.',
      g2Title: 'Global Cloud OBD Active Battery Inspection',
      g2Desc: 'Integrates active digital telemetry diagnostic boards onto current buses, tracking real-time LTO cell state, voltage deviation, and cabin temperature, sending alerts before hardware issues happen.',
      g3Title: 'Authentic Spare Parts Hub Fast Delivery',
      g3Desc: 'Establishes extensive storage layouts in Gansu and Central Asia. In critical logistics situations, vital electronic switches, high-voltage contactors, and pneumatic systems clear green custom pathways in under 48 hours.',
      g4Title: 'Operator Safety & Circuit Maintenance Training',
      g4Desc: 'Delivers full technical training courses to overseas transit authorities covering high-voltage system insulation handling, LTO charging pile management, pneumatic kneeling calibrate, and eco-defensive driver coaching.',
      hotlineTitle: 'Direct Global Service Hotlines',
      hotlineContent: 'For bus procurement tenders, custom battery cell orders, and genuine components support, contact our central Asian export headquarters directly or submit requests via the digital contact terminal below.'
    },
    uz: {
      title: 'Sotishdan Keyingi Kafolatli Xizmatlar',
      subtitle: 'Butun dunyo boʻylab bulutli OBD telemetriya tizimi - transport xavfsizligi kafolati',
      intro: 'Lanzhou Guangtong avtobus tarmoqlari ishida uzilishlar boʻlmasligini eng birinchi oʻringa qoʻyadi. Kompaniyamiz raqamli texnologiyalar yordamida (online bulutli telemetriya nazorati), barcha sotilgan avtobuslarning holatini profilaktika qiladi va istalgan muammoni zudlik bilan bartaraf etadi.',
      guaranteesTitle: 'Kafolatli Xizmatning 4 Ta Ustuni',
      g1Title: '24 Soat Ichida Mutaxassis Yetib Kelish Kafolati',
      g1Desc: 'Sutka davomida tunu-kun ishlovchi xalqaro aloqa liniyalari ishlaydi. 1 soat ichida birinchi masofaviy diagnostika qilinib, zarur holatlarda muhandislik guruhi 24 soatda bevosita joyiga yetib boradi.',
      g2Title: 'Global Cloud OBD Active Batareya Monitoring Tizimi',
      g2Desc: 'Barcha yangi avtobuslar ichki aqlli telemetriya datchigi bilan chiqadi. Ushbu datchik LTO batareyalar harorati va kuchlanishini masofadan boshqaradi va biron muammo boʻlishidan avval ogohlantiradi.',
      g3Title: 'Asl Ehtiyot Qismlarni 48 Soatda Yetkazib Berish',
      g3Desc: 'Gansu viloyati va Markaziy Osiyo (Toshkent zaxiralari) boʻylab yirik omborlarimiz mavjud. Muhim boʻlgan havo kompressorlari, sensorlar va datchiklar yashil bojxona yoʻlaklari orqali 48 soat ichida etib boradi.',
      g4Title: 'Haydovchilar Va Elektriklarni Bepul Oʻqitish Dasturlari',
      g4Desc: 'Chet eldagi hamkorlarimiz uchun yuqori kuchlanishli simlar bilan ishlash, LTO quvvatlash stansiyalaridan toʻgʻri foydalanish, yonda egilish (kneeling) tizimini koʻrish boʻyicha amaliy darslar oʻtkaziladi.',
      hotlineTitle: "Global Xizmat Ko'rsatish Telefon Liniyalari",
      hotlineContent: 'Tender va loyihalar, LTO batareya toʻplamiga buyurtmalar yoki ehtiyot qismlar soʻrovlari uchun bizning operatorlarimiz bilan telefon orqali bogʻlaning yoki quyidagi soʻrovnomani toʻldiring.'
    }
  };

  const curr = t[currentLang];

  const icons = [
    <Clock className="w-8 h-8 text-[#e53e3e]" />,
    <Cpu className="w-8 h-8 text-blue-600" />,
    <Truck className="w-8 h-8 text-green-600" />,
    <GraduationCap className="w-8 h-8 text-cyan-600" />
  ];

  return (
    <div className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 space-y-12" id="about-service-guarantee">
      
      {/* Title block */}
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">
          Service Warranty & Care Program / 服务与品质保障
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

      {/* Commitments Grid */}
      <div className="max-w-7xl mx-auto text-left">
        <h3 className="text-lg font-black text-[#014e96] border-l-4 border-[#e53e3e] pl-3 mb-6">
          {curr.guaranteesTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: curr.g1Title, desc: curr.g1Desc },
            { title: curr.g2Title, desc: curr.g2Desc },
            { title: curr.g3Title, desc: curr.g3Desc },
            { title: curr.g4Title, desc: curr.g4Desc }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-[#014e96]/40 transition-all flex gap-4 shadow-sm"
            >
              <div className="p-3 bg-slate-50 rounded-lg h-fit">
                {icons[idx]}
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

      {/* Hotline Support section */}
      <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="p-4 bg-red-50 text-[#e53e3e] rounded-full border border-red-200">
            <PhoneCall className="w-16 h-16 animate-bounce" />
          </div>
        </div>
        <div className="lg:col-span-8 space-y-4">
          <h3 className="font-black text-xl text-[#014e96] tracking-tight">
            {curr.hotlineTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
            {curr.hotlineContent}
          </p>
          <div className="p-4 bg-slate-50 rounded border border-slate-200 w-fit">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block tracking-wider">Lanzhou HQ Dispatch Desk</span>
            <span className="text-lg font-black text-blue-600 block mt-0.5">0931-2917551 / +86-931-2917551</span>
          </div>
        </div>
      </div>

    </div>
  );
}

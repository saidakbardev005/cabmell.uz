import React from 'react';
import { Language } from '../types';
import { MapPin, Phone, Mail, Clock, HelpCircle, ArrowDown } from 'lucide-react';

interface ContactUsPageProps {
  currentLang: Language;
  onScrollToInquiry: () => void;
}

export default function ContactUsPage({ currentLang, onScrollToInquiry }: ContactUsPageProps) {
  const t = {
    zh: {
      title: '联系我们',
      subtitle: '立足甘肃陇原基地，用绿色纽带联结世界客户',
      addressTitle: '甘肃兰州总部新区工厂基地',
      addressDesc: '甘肃省兰州市新区秦川园区白杨路188号',
      phoneTitle: '销售咨询与配件招投标专线',
      phoneDesc: '0931-2917551 (HQ) / +86-931-2917551',
      mailTitle: '官方企业电子邮箱',
      mailDesc: 'sales@lzgtnet.com / support@lzgtnet.com',
      workTitle: '对外办公与参观接待时间',
      workDesc: '星期一 至 星期五: 09:00 - 17:30 (中国标准时间/GMT+8)',
      mapAlt: '西北兰州广通智能化新能源工厂基地地理坐标',
      formTitle: '即刻在线递交询单需求',
      formBtn: '滑动至下方询单表格'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Anchored in Lanzhou City, Gansu, linking global markets',
      addressTitle: 'Lanzhou New District G-Factory HQ',
      addressDesc: 'No. 188 Baiyang Road, Qinchuan Park, Lanzhou New Area, Gansu Province, PRC',
      phoneTitle: 'Sales, Exports & Tender Helpline',
      phoneDesc: '0931-2917551 / +86-931-2917551',
      mailTitle: 'Official Enterprise Mailbox',
      mailDesc: 'sales@lzgtnet.com / support@lzgtnet.com',
      workTitle: 'Operational Office Hours',
      workDesc: 'Monday - Friday: 09:00 - 17:30 (China Standard Time/GMT+8)',
      mapAlt: 'Lanzhou New District Industrial Base Map Location',
      formTitle: 'Submit Online Corporate Inquiry Now',
      formBtn: 'Scroll Down for Quotation Form'
    },
    uz: {
      title: 'Biz bilan aloqa',
      subtitle: 'Lanzhou shahri Gansu viloyati zavodi, jahon bozorlariga yetkazib berish',
      addressTitle: 'Markaziy Zavod Va Ofis Manzili',
      addressDesc: 'KXR, Gansu viloyati, Lanzhou Yangi okrugi, Qinchuan zonasi, Baiyang koʻchasi 188-uy',
      phoneTitle: 'Eksport Va Loyihalar Boʻyicha Operator',
      phoneDesc: '0931-2917551 / +86-931-2917551',
      mailTitle: 'Rasmiy Korporativ Elektron Pochta',
      mailDesc: 'sales@lzgtnet.com / support@lzgtnet.com',
      workTitle: 'Kompaniya Ish Vaqtlari',
      workDesc: 'Dushanba - Juma: 09:00 - 17:30 (Yaqin Sharq vaqtida: GMT+8)',
      mapAlt: 'Lanzhou Guangton zavodi joylashuv xaritasi',
      formTitle: 'Onlayn Soʻrovnomani Hozir Toʻldiring',
      formBtn: 'Soʻrovnomaga Oʻtish'
    }
  };

  const curr = t[currentLang];

  return (
    <div className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 space-y-12" id="about-contact-page">
      
      {/* Title block */}
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">
          Corporate Location & Sales Desks / 联系我们
        </span>
        <h2 className="text-3xl font-black text-[#014e96] tracking-tight">
          {curr.title}
        </h2>
        <div className="h-1 w-16 bg-[#e53e3e] mx-auto rounded-full"></div>
        <p className="text-sm font-semibold text-[#4a5568]">
          {curr.subtitle}
        </p>
      </div>

      {/* Grid of contact details & visual map */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors flex gap-4 shadow-sm">
            <div className="p-3 bg-red-50 text-[#e53e3e] rounded-lg h-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-[#014e96]">{curr.addressTitle}</h4>
              <p className="text-xs text-slate-500 leading-normal">{curr.addressDesc}</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors flex gap-4 shadow-sm">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-[#014e96]">{curr.phoneTitle}</h4>
              <p className="text-xs text-slate-500 leading-normal font-mono">{curr.phoneDesc}</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors flex gap-4 shadow-sm">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg h-fit">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-[#014e96]">{curr.mailTitle}</h4>
              <p className="text-xs text-slate-500 leading-normal font-mono">{curr.mailDesc}</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors flex gap-4 shadow-sm">
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-lg h-fit">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-[#014e96]">{curr.workTitle}</h4>
              <p className="text-xs text-slate-500 leading-normal">{curr.workDesc}</p>
            </div>
          </div>

        </div>

        {/* Live Vector / visual map representer */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex-grow rounded-lg overflow-hidden border border-slate-200 bg-blue-50/50 p-4 flex flex-col relative" id="contact-map">
            {/* Elegant schematic factory rendering representing the map location */}
            <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-3 py-10 relative">
              <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#014e96 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <MapPin className="w-12 h-12 text-[#e53e3e] animate-bounce z-10" />
              <div className="z-10 space-y-1">
                <span className="text-xs font-black font-mono text-[#014e96] block uppercase tracking-wider bg-white rounded border border-blue-200 px-3 py-1.5 shadow">
                  No. 188 Baiyang Road, Qinchuan, Lanzhou
                </span>
                <span className="text-[10px] text-slate-500 font-bold block">{curr.mapAlt}</span>
              </div>
            </div>
          </div>

          {/* Quick scroll to Quote */}
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-left">
            <div>
              <h5 className="font-extrabold text-xs text-[#014e96]">{curr.formTitle}</h5>
              <p className="text-[10px] text-slate-400 font-bold">{currentLang === 'zh' ? '我们将通过原厂邮箱快速对接您' : 'Our commercial desk responds inside 24 hours'}</p>
            </div>
            <button
              onClick={onScrollToInquiry}
              className="px-4 py-2 bg-[#014e96] hover:bg-[#003c73] text-xs font-bold text-white rounded shadow-sm hover:shadow transition-all flex items-center gap-1 cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>{curr.formBtn}</span>
              <ArrowDown className="w-3.5 h-3.5 animate-pulse" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

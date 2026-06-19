import React from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import { ShieldCheck, Mail, MapPin, Printer, Info, PhoneCall } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  return (
    <footer className="bg-[#1b212c] text-[#bbcedf] border-t-4 border-[#014e96] font-sans" id="main-footer text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About the Company */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              {/* SVG Emblem Duplicate in Smaller */}
              <div className="w-8 h-8 rounded-full bg-white p-1">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#014e96" strokeWidth="6" />
                  <path d="M 22,50 C 22,35 48,32 50,50 C 48,68 22,65 22,50 Z" fill="#014e96" />
                  <path d="M 78,50 C 78,35 52,32 50,50 C 52,68 78,65 78,50 Z" fill="#e53e3e" />
                </svg>
              </div>
              <span className="text-white font-bold tracking-tight text-base">
                {DICTIONARY.companyName[currentLang]}
              </span>
            </div>
            
            <p className="text-xs text-[#a0b5c9] leading-relaxed text-justify">
              {DICTIONARY.footerAbout[currentLang]}
            </p>
            
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              <span className="px-2.5 py-0.5 bg-[#11161d] text-cyan-400 border border-[#2b3542] rounded">Gansu Strategic High-Tech Base</span>
              <span className="px-2.5 py-0.5 bg-[#11161d] text-[#e53e3e] border border-[#2b3542] rounded">Guangtong Automobile</span>
              <span className="px-2.5 py-0.5 bg-[#11161d] text-green-400 border border-[#2b3542] rounded">Class3=17 Premium Model</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 text-left">
            <h3 className="text-white font-bold text-sm tracking-wide border-b border-[#2b3542] pb-2">
              {currentLang === 'zh' ? '友情链接' : currentLang === 'en' ? 'Quick Links' : 'Katalog boʻlimlari'}
            </h3>
            <ul className="space-y-2.5 text-xs">
              {['新能源城市公交群', '极速钛酸锂快充线', '氢能未来公共项目', '关于广通基地', '陇原服务保障站'].map((item, index) => (
                <li key={index}>
                  <a href="#products-list" className="text-[#a0b5c9] hover:text-white transition-colors flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-[#e53e3e] rounded-full"></span>
                    <span>
                      {currentLang === 'zh' && item}
                      {currentLang === 'en' && ['City Electric Buses', 'LTO Fast Charge Line', 'Hydrogen Transit Projects', 'About Factory Base', 'Gansu Support Portal'][index]}
                      {currentLang === 'uz' && ['Elektr shahar avtobuslari', 'LTO tezkor zaryadlash liniyasi', 'Vodorod jamoat loyihalari', 'Ishlab chiqarish bazasi', 'Xizmat koʻrsatish markazlari'][index]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4 text-left">
            <h3 className="text-white font-bold text-sm tracking-wide border-b border-[#2b3542] pb-2">
              {currentLang === 'zh' ? '联系信息' : currentLang === 'en' ? 'Contact Details' : 'Aloqa maʼlumotlari'}
            </h3>
            <ul className="space-y-2.5 text-xs text-[#a0b5c9]">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-[#e53e3e] flex-shrink-0" />
                <span>{DICTIONARY.footerContacts[currentLang]}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>sales@lzgtnet.com / lzgt@lzgtnet.com</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Tel Support: +86-931-2917551</span>
              </li>
              <li className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Fax: 0931-8255555</span>
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Zip Code: 730000 / 甘ICP备16003251号-1</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-8 pt-8 border-t border-[#252c38] text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#718da4]">
          <p>{DICTIONARY.footerCopyright[currentLang]}</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              {currentLang === 'zh' ? '法律声明' : currentLang === 'en' ? 'Legal Terms' : 'Huquqiy kelishuv'}
            </a>
            <span>|</span>
            <span className="flex items-center gap-1.5 text-[#526f87]">
              <ShieldCheck className="w-4 h-4" />
              <span>Gansu Secure Certification SSL</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

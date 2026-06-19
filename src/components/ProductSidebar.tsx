import React from 'react';
import { Language } from '../types';
import { CATEGORIES, DICTIONARY } from '../data';
import { Bus, Star, Award, Shield, ArrowRight } from 'lucide-react';

interface SidebarProps {
  currentLang: Language;
  selectedSubCat: string;
  onSelectSubCat: (subCat: string) => void;
}

export default function ProductSidebar({
  currentLang,
  selectedSubCat,
  onSelectSubCat
}: SidebarProps) {
  
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'tijorat':
        return <Bus className="w-3.5 h-3.5 text-[#014e96]" />;
      case 'maxsus':
        return <Star className="w-3.5 h-3.5 text-[#02a854]" />;
      case 'batareya_toplam':
      case 'batareya_mahsulot':
        return <Award className="w-3.5 h-3.5 text-amber-500" />;
      case 'zaryadlovchi':
        return <Shield className="w-3.5 h-3.5 text-red-500" />;
      case 'motor_elektron':
        return <Star className="w-3.5 h-3.5 text-slate-500" />;
      default:
        return <Bus className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <aside className="w-full lg:w-72 bg-white border border-[#e2e8f0] rounded-lg shadow-sm space-y-5 overflow-hidden text-[#333333]" id="product-sidebar">
      {/* Sidebar Header Title */}
      <div className="bg-[#014e96] text-white px-4 py-3 flex items-center justify-between">
        <h2 className="text-sm font-bold tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-3.5 bg-red-600 rounded"></span>
          {DICTIONARY.sidebarTitle[currentLang]}
        </h2>
        <span className="text-[9px] text-blue-200 font-mono tracking-wider uppercase">Class3=17</span>
      </div>

      <div className="p-4 space-y-5">
        {/* Class3=17 Highlights Banner Block */}
        <div className="bg-blue-50/80 border border-blue-200/50 rounded-md p-3.5 space-y-1.5 relative overflow-hidden">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Target Catalog (class3=17)</span>
          </div>
          <p className="text-[11px] text-[#4a5568] leading-relaxed">
            {DICTIONARY.class3Highlight[currentLang]}
          </p>
        </div>

        {/* Categories Accordion */}
        <div className="space-y-4">
          {/* Reset Selection 'All' Option */}
          <button
            onClick={() => onSelectSubCat('all')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs font-bold transition-all ${
              selectedSubCat === 'all'
                ? 'bg-[#014e96] text-white shadow-sm'
                : 'text-[#4a5568] hover:bg-slate-100 hover:text-blue-700 border border-[#e2e8f0]'
            }`}
          >
            <span>{CATEGORIES[0].label[currentLang]}</span>
            {selectedSubCat === 'all' && <ArrowRight className="w-3.5 h-3.5 text-white" />}
          </button>

          {/* Group lists */}
          {CATEGORIES.slice(1).map((category: any) => {
            const hasKids = !!category.subcategories;
            const isCategorySelected = selectedSubCat === category.key;

            if (!hasKids) {
              return (
                <button
                  key={category.key}
                  onClick={() => onSelectSubCat(category.key)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs font-bold transition-all text-left ${
                    isCategorySelected
                      ? 'bg-[#014e96] text-white shadow-sm'
                      : 'text-[#4a5568] hover:bg-slate-150 hover:text-blue-700 border border-[#e2e8f0]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(category.key)}
                    <span>{category.label[currentLang]}</span>
                  </div>
                  {isCategorySelected && <ArrowRight className="w-3.5 h-3.5 text-white" />}
                </button>
              );
            }

            return (
              <div key={category.key} className="space-y-1.5 text-left">
                {/* Category header heading */}
                <div className="flex items-center gap-2 px-1 text-[11px] font-bold text-blue-800 tracking-wider uppercase border-b border-slate-100 pb-1">
                  {getCategoryIcon(category.key)}
                  <span>{category.label[currentLang]}</span>
                </div>

                {/* Sub-item select list */}
                <div className="pl-3.5 border-l-2 border-slate-250 space-y-1 text-left">
                  {category.subcategories.map((sub: any) => {
                    const isSelected = selectedSubCat === sub.key;
                    const isClass3_17 = sub.key === 'avtobus';

                    return (
                      <button
                        key={sub.key}
                        onClick={() => onSelectSubCat(sub.key)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded text-xs transition-all text-left ${
                          isSelected
                            ? 'bg-[#eef4ff] border-l-4 border-blue-600 text-[#014e96] font-bold shadow-sm'
                            : isClass3_17
                            ? 'text-blue-600 font-semibold hover:bg-slate-50 border border-transparent hover:border-blue-100'
                            : 'text-[#4a5568] hover:text-blue-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate pr-1">
                          {sub.label[currentLang]}
                        </span>
                        {isClass3_17 && !isSelected && (
                          <span className="inline-block px-1 bg-red-650 text-[8px] font-mono text-white rounded-sm scale-90">
                            CLASS3
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

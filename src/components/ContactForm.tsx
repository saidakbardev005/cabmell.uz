import React, { useState } from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import { Send, CheckCircle, AlertOctagon, HelpCircle } from 'lucide-react';

interface ContactFormProps {
  currentLang: Language;
  selectedModelCode?: string;
}

export default function ContactForm({ currentLang, selectedModelCode }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    busModel: selectedModelCode || 'GTQ6105BEV'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Quick fields validation
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      setErrorMessage(DICTIONARY.formValidationError[currentLang]);
      return;
    }

    // Trigger mock complete submission state
    console.log('Procurement request submitted:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      busModel: selectedModelCode || 'GTQ6105BEV'
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-md text-center space-y-4 max-w-2xl mx-auto" id="contact-success">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-200 animate-bounce">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-[#333333] text-md font-bold tracking-tight">
          {currentLang === 'zh' ? '预约询单受理成功' : currentLang === 'en' ? 'Quotation Request Sent Successfully' : 'Soʻrov qabul qilindi'}
        </h3>
        <p className="text-xs text-[#555555] max-w-md mx-auto leading-relaxed">
          {DICTIONARY.formSuccess[currentLang]}
        </p>
        <button
          onClick={handleReset}
          className="mt-4 px-6 py-2.5 bg-[#014e96] hover:bg-[#003c73] text-xs text-white font-bold rounded-md transition-colors"
        >
          {currentLang === 'zh' ? '再次提交' : currentLang === 'en' ? 'Submit Another Request' : 'Yangi soʻrov joʻnatish'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-md" id="contact-form-section">
      <div className="border-b border-slate-100 pb-4 mb-6 text-left">
        <h3 className="text-[#014e96] text-md font-bold flex items-center gap-1.5">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          {DICTIONARY.formTitle[currentLang]}
        </h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          {DICTIONARY.formDesc[currentLang]}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left text-[#333333]">
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 p-3.5 rounded-lg text-xs text-red-600 flex items-center gap-2">
            <AlertOctagon className="w-4 h-4 flex-shrink-0" />
            <span className="font-semibold">{errorMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Contact Officer Name */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-600 font-bold flex items-center gap-1">
              <span>{DICTIONARY.formName[currentLang]}</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alisher Sobirov"
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-md px-3.5 py-2.5 text-xs text-slate-800 outline-none transition-colors"
              required
            />
          </div>

          {/* Corporate Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-600 font-bold flex items-center gap-1">
              <span>{DICTIONARY.formEmail[currentLang]}</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. contact@logistic-asia.com"
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-md px-3.5 py-2.5 text-xs text-slate-800 outline-none transition-colors"
              required
            />
          </div>

          {/* Telegram / Phone Connection */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-600 font-bold flex items-center gap-1">
              <span>{DICTIONARY.formPhone[currentLang]}</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +998 (90) 123-4567"
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-md px-3.5 py-2.5 text-xs text-slate-800 outline-none transition-colors"
              required
            />
          </div>

          {/* Company / Organization Name */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-600 font-bold flex items-center gap-1">
              <span>{DICTIONARY.formCompany[currentLang]}</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Tashkent City Bus Depot"
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-md px-3.5 py-2.5 text-xs text-slate-800 outline-none transition-colors"
              required
            />
          </div>

        </div>

        {/* Model Selection Option dropdown */}
        <div className="space-y-1.5">
          <label className="text-xs text-slate-600 font-bold block">
            {currentLang === 'zh' ? '意向订购之客车/物流车车型' : currentLang === 'en' ? 'Interested Transit Model Selection' : 'Tanlangan avtobus/yuk furgon modeli'}
          </label>
          <select
            name="busModel"
            value={formData.busModel}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-md px-3.5 py-2.5 text-xs text-slate-800 outline-none transition-colors"
          >
            <option value="GTQ6105BEV">GTQ6105BEV - 10.5M Pure Electric (Class3=17 Core Standard)</option>
            <option value="GTQ6121BEV">GTQ6121BEV - 12M Pure Electric City Bus</option>
            <option value="GTQ6121FCEV">GTQ6121FCEV - 12M Hydrogen Fuel Cell city Bus</option>
            <option value="GTQ5041XXY">GTQ5041XXY - 5.9M Pure Electric Logistic Cargo Van</option>
          </select>
        </div>

        {/* Spec descriptions Message */}
        <div className="space-y-1.5">
          <label className="text-xs text-slate-600 font-bold block">
            {DICTIONARY.formMsg[currentLang]}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={currentLang === 'zh' ? '请输入如：购买台数、定制路线、极寒极地设计等特殊参数配套要求...' : currentLang === 'en' ? 'Type in any modifications needed (e.g., LTO high-capacity config, special anti-wind sand paint, seats layout)...' : 'Etilayotgan buyurtma tafsilotlari (masalan: sotib olish hajmi, LTO akkumulyator xotirasi, logotiplar)...'}
            rows={3}
            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-md px-3.5 py-2.5 text-xs text-slate-800 outline-none transition-colors resize-y p-3"
          ></textarea>
        </div>

        {/* Submit trigger button */}
        <div className="pt-3">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-[#014e96] hover:bg-[#003c73] text-xs font-bold text-white uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{DICTIONARY.formSubmit[currentLang]}</span>
          </button>
        </div>

      </form>
    </div>
  );
}

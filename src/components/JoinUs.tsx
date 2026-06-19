import React, { useState } from 'react';
import { Language } from '../types';
import { Briefcase, Calendar, MapPin, User, FileText, CheckCircle2, Upload, AlertCircle, Send, ArrowRight } from 'lucide-react';

interface JoinUsProps {
  currentLang: Language;
}

interface Job {
  id: string;
  title: { zh: string; en: string; uz: string };
  date: string;
  location: { zh: string; en: string; uz: string };
  limit: { zh: string; en: string; uz: string };
  responsibilities: { zh: string[]; en: string[]; uz: string[] };
  requirements: { zh: string[]; en: string[]; uz: string[] };
}

export default function JoinUs({ currentLang }: JoinUsProps) {
  const [selectedJobId, setSelectedJobId] = useState<string>('translator');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '1-3',
    coverLetter: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const jobs: Job[] = [
    {
      id: 'translator',
      title: {
        zh: '国际业务专员 / 英语翻译',
        en: 'International Business Specialist / English Translator',
        uz: 'Xalqaro biznes mutaxassisi/ingliz dili tarjimoni'
      },
      date: '2021-yil 28-aprel',
      location: {
        zh: '甘肃省兰州市兰州新区秦川园区',
        en: 'Qinchuan Zone, Lanzhou New Area, Gansu Province',
        uz: 'Lanzhou yangi hududi, Gansu'
      },
      limit: {
        zh: '无限制',
        en: 'No limit',
        uz: 'Cheklov yo\'q'
      },
      responsibilities: {
        zh: [
          '负责与海外意向客户及合作友商的日常邮件、电话联系、沟通与项目组织协调。',
          '负责涉外日常技术图纸、商业合同文本的专业笔译工作，以及大型商务会议的实时同声传译。',
          '跟踪兰州广通在海外（特别是中亚、西欧市场）招投标项目的全周期流程与材料核验。',
          '配合海外销售主管开展市场调研，整理分析当地新能源客车及补能充电设施产业政策。'
        ],
        en: [
          'Responsible for daily business email, phone calls, communication, and project coordination with overseas clients.',
          'Translate technical specification drawings, sales agreements, and legal documents; provide interpretation in meetings.',
          'Track active export bids and tenders launched by international transport ministries, mainly in Central Asia and Europe.',
          'Collaborate with export marketing directors to evaluate municipal tax structures, vehicle quotas and grid standards.'
        ],
        uz: [
          'Chet el kompaniyalari bilan kundalik ish aloqalari, aloqa va muofiqlashtirish uchun mas\'ul.',
          'Texnik hujjatlar va shartnomalarni tarjima qilish; muntazam uchrashuvlar uchun tarjimonlik xizmatlari.',
          'Lanzhou Guangtong kompaniyasining xalqaro (aynan Markaziy Osiyo va Yevropa) tender loyihalarini kuzatib borish.',
          'Eksport boʻlimi rahbarlariga shahar transporti, bojxona imtiyozlari va zaryadlash infratuzilmasi tahlilida koʻmaklashish.'
        ]
      },
      requirements: {
        zh: [
          '本科及以上学历，英语专业八级（TEM-8）或雅思7.0及以上，听说读写极其流利熟练。',
          '具有2年以上大型机械设备制造或汽车整车出口涉外翻译、国际商务专员岗位实战经验。',
          '能熟悉基本的AutoCAD制图与机械术语，具备良好的商业谈判和跨文化沟通效率。',
          '熟练应用主流办公自动化系统（Word, Excel, PowerPoint）。'
        ],
        en: [
          'Bachelor’s degree or above in English language, International Trade, with IELTS 7.0+ or equivalent.',
          'Minimum of 2 years of proven translation or market research experience within heavy manufacturing, machinery, or EV exports.',
          'Familiarity with automotive terminologies, CAD specs, and international commercial litigation clauses is highly valued.',
          'Proficient with major office automation tools (Word, Excel, PPT, PDF compilers).'
        ],
        uz: [
          'Oliy ma\'lumot (Bakalavr yoki undan yuqori), Ingliz tili yo\'nalishida mukammal IELTS 7.0 yoki teng sertifikat.',
          'Xalqaro savdo, ogʻir sanoat yoki avtomobil eksporti yoʻnalishida kamida 2 yillik professional ish tajribasi.',
          'Avtomobilsozlik terminologiyasi va AutoCAD chizmalari bilan ishlash boʻyicha dastlabki tushunchalar.',
          'Microsoft Office (Word, Excel, PowerPoint) va boshqa ofis dasturlarini mukammal bilish.'
        ]
      }
    },
    {
      id: 'lto_engineer',
      title: {
        zh: '钛酸锂(LTO)动力电池研发工程师',
        en: 'LTO Battery Research & Cell Design Engineer',
        uz: 'LTO Titanat litiyli akkumulyator muhandisi'
      },
      date: '2026-yil 12-yanvar',
      location: {
        zh: '广通陇原新能源研发中心',
        en: 'LZGT Gansu Advanced R&D Laboratory',
        uz: 'Lanzhou yangi loyiha texnoparki'
      },
      limit: {
        zh: '2名',
        en: '2 Openings',
        uz: '2 ta o\'rin'
      },
      responsibilities: {
        zh: [
          '负责超低温、极快充钛酸锂（LTO）动力电芯化学体系改性研究与配方包优化。',
          '设计与评估电池在零下40度至60度宽温域环境阻抗与容量衰减仿真控制系统。',
          '指导解决电池在针刺、挤压等物理短路状态下不燃爆、无热失控防爆结构开发。'
        ],
        en: [
          'Optimize Lithium Titanate (LTO) cell chemistry, anodes, and electrolytes for rapid charging stability.',
          'Simulate cell thermal impedance and cycle life behavior within intense cold zones (-40°C to 60°C).',
          'Lead hardware and sealing container engineering to avoid gas release or friction fire under structural stress.'
        ],
        uz: [
          'Past haroratlarda tez zaryad oluvchi LTO akkumulyatorlarining kimyoviy elementlari barqarorligini tadqiq qilish.',
          '-40°C va +60°C gacha boʻlgan tsikllarda akkumulyatorning ichki qarshiligini simulyatsiya va tahlil qilish.',
          'Akkumulyator teshilganda yoki kuchli zarb yeganda portlash va yonishdan saqlovchi korpus muhofazasini loyihalash.'
        ]
      },
      requirements: {
        zh: [
          '电化学、材料物理与化学、工程热物理等相关专业硕士或博士学历。',
          '精通锂聚合物或钛酸锂电池生产极片涂布、注液组装及化成工艺。',
          '对电池智能BMS管理算法、温控液冷泵阀布局设计有深入开发案底。'
        ],
        en: [
          'Master’s or Ph.D. degree in Electrochemistry, Material Science, thermal-fluid engineering or electrical design.',
          'Extensive familiarity with solid-electrolyte cell compositions, sheet coating, and chemical modeling.',
          'Prior development records designing liquid coolant pumps, plate warming or BMS telemetry.'
        ],
        uz: [
          'Elektrokimyo, Materialshunoslik yoki Issiqlik fizikasi yoʻnalishlarida Magistr yoki Ph.D. ilmiy darajasi.',
          'Lityum elementlarini qoplash kukunlari, suyuqlik quyish hamda akkumulyator yigʻish sanoat tizimlarini bilish.',
          'BMS kontrollerlari, datchik sxemalari va faol suyuq sovutish tizimlari loyihalarida ishtirok etganlik.'
        ]
      }
    }
  ];

  const activeJob = jobs.find(j => j.id === selectedJobId) || jobs[0];

  // Drag-and-drop actions
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      const validTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      if (validTypes.includes(fileExtension)) {
        setResumeFile(file);
        setErrorMsg('');
      } else {
        setErrorMsg(
          currentLang === 'zh'
            ? '仅支持 PDF 或 Word (doc, docx) 格式文件。'
            : currentLang === 'en'
            ? 'Only PDF or Word (doc, docx) document files are supported.'
            : 'Faqat PDF yoki Word (doc, docx) shaklidagi hujjatlar qabul qilinadi.'
        );
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
      setErrorMsg('');
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg(
        currentLang === 'zh'
          ? '请填写基本联系信息（姓名、邮箱、电话）。'
          : currentLang === 'en'
          ? 'Please provide your name, email, and contact number.'
          : 'Iltimos, ismingiz, pochtangiz va telefon raqamingizni toʻldiring.'
      );
      return;
    }
    if (!resumeFile) {
      setErrorMsg(
        currentLang === 'zh'
          ? '请上传您的个人简历。'
          : currentLang === 'en'
          ? 'Please upload your resume / CV document.'
          : 'Iltimos, rezyume (CV) hujjatingizni yuklang.'
      );
      return;
    }
    
    setIsSubmitted(true);
    setErrorMsg('');
  };

  return (
    <div className="bg-slate-50 min-h-screen text-[#333333]" id="careers-page">
      {/* Visual Subheader Header Banner */}
      <section className="bg-gradient-to-r from-[#01254a] to-[#014e96] text-white py-16 px-4 text-left shadow-md">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest text-[#02a854] uppercase block">
            {currentLang === 'zh' ? '甘肃省战略性重工企业' : currentLang === 'en' ? 'Gansu Strategic Heavy Enterprise' : 'Gansu strategik ogʻir sanoat korxonasi'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {currentLang === 'zh' ? '兰州广通招贤纳士中心' : currentLang === 'en' ? 'Join Lanzhou Guangtong Team' : 'Bizga Qoʻshiling'}
          </h2>
          <p className="text-sm max-w-2xl text-blue-100 font-medium leading-relaxed">
            {currentLang === 'zh' 
              ? '致力于世界级先进高寒、快充纯电及氢燃料电池商用客车的技术转化与制造。加入我们，共创绿色零排放公交长青伟业。' 
              : currentLang === 'en' 
              ? 'Dedicated to high-altitude cold-zone pure electric and hydrogen commercial bus manufacturing. Embark on a rewarding green career path with us.' 
              : 'Yuqori sovuqlarga va tez zaryadlash LTO batareya tizimiga moslashtirilgan elektr hamda vodorod avtobuslari muhandislik markazi.'}
          </p>
        </div>
      </section>

      {/* Main Page Layout Split */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Job listings navigation (Similar to career sidebar) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm text-left">
              <h3 className="text-[#014e96] font-bold text-xs tracking-wider uppercase border-b border-slate-100 pb-2 mb-3">
                {currentLang === 'zh' ? '热招岗位列表' : currentLang === 'en' ? 'Active Openings' : 'Boʻsh ish oʻrinlari'}
              </h3>
              
              <div className="space-y-2">
                {jobs.map((job) => {
                  const isSelected = job.id === selectedJobId;
                  return (
                    <button
                      key={job.id}
                      onClick={() => {
                        setSelectedJobId(job.id);
                        setIsSubmitted(false);
                      }}
                      className={`w-full flex items-center justify-between p-3.5 rounded text-left transition-all ${
                        isSelected 
                          ? 'bg-[#eef4ff] border-l-4 border-[#014e96] text-[#014e96]' 
                          : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold block leading-tight">{job.title[currentLang]}</span>
                        <span className="text-[10px] font-mono text-slate-450 block">{job.location[currentLang]}</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-[#014e96]' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* General info panel */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-5 text-left space-y-3.5">
              <h4 className="text-[#014e96] font-bold text-[11px] uppercase tracking-wider">
                {currentLang === 'zh' ? '兰州新区人才引入政策' : 'Recruitment Directives'}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed text-justify">
                {currentLang === 'zh'
                  ? '兰州新区为广通技术转化项目提供全方位核心住房补贴、高层次高水平人才津贴和西北安家费落户支持。'
                  : currentLang === 'en'
                  ? 'Lanzhou New Area offers high-tech key personal real-estate allowances, tax deductions, and premium career matching subsidies.'
                  : 'Lanzhou Yangi okrugining strategik zavod loyihalari uchun uylarni ijaraga olish imtiyozlari va maxsus malakali kadrlar bonuslari.'}
              </p>
              <div className="border-t border-slate-200 pt-3">
                <span className="text-[10px] text-slate-400 block">HR Mailbox:</span>
                <span className="text-xs font-bold text-slate-700 font-mono">hr-cambell@lzgtnet.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Selected Job details and submission of resume */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Job Specification Card (The replica target layout) */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm text-left space-y-6">
              
              <div className="border-b border-slate-100 pb-5 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 bg-green-50 text-[#02a854] text-[9px] font-bold font-mono rounded border border-green-200 uppercase">
                    {activeJob.limit[currentLang]}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Published: {activeJob.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#014e96]">
                  {activeJob.title[currentLang]}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeJob.location[currentLang]}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{activeJob.limit[currentLang]}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#014e96]" />
                  <span>
                    {currentLang === 'zh' ? '岗位职责' : currentLang === 'en' ? 'Job Responsibilities' : 'Ish majburiyatlari:'}
                  </span>
                </h4>
                <ul className="list-decimal list-outside pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                  {activeJob.responsibilities[currentLang].map((resp, i) => (
                    <li key={i} className="pl-1 search-highlight">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="space-y-2.5">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#014e96]" />
                  <span>
                    {currentLang === 'zh' ? '入职资格/要求' : currentLang === 'en' ? 'Job Requirements' : 'Talablar:'}
                  </span>
                </h4>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                  {activeJob.requirements[currentLang].map((req, i) => (
                    <li key={i} className="pl-1">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Career Application Form Section with Drag-and-Drop Resume Box as per Guidelines */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm text-left">
              <div className="border-b border-slate-100 pb-3 mb-6">
                <h3 className="text-base font-bold text-[#014e96]">
                  {currentLang === 'zh' ? '在线填写申请与简历投递' : currentLang === 'en' ? 'Apply Online & Upload Resume' : 'Ariza topshirish va rezyume yuklash'}
                </h3>
                <p className="text-[11px] text-slate-450 mt-0.5">
                  {currentLang === 'zh' ? '广通大区HR技术通道，我们会在2个工作日内反馈初筛结果。' : 'Submit your credential portfolio directly to our technical interview desk.'}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center space-y-3.5 antialiased">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-green-800">
                      {currentLang === 'zh' ? '申请提交成功！' : currentLang === 'en' ? 'Application Received Successfully!' : 'Ariza muvaffaqiyatli qabul qilindi!'}
                    </h4>
                    <p className="text-[11px] text-green-700 max-w-md mx-auto leading-relaxed">
                      {currentLang === 'zh'
                        ? '感谢您投递兰州广通。我们西北大厂HR科在收到您的电控简历后会提交至对应专班研发部进行筛选，后续会通过邮件及电话形式联系您！'
                        : currentLang === 'en'
                        ? 'Your credentials have been successfully prioritized. Our export HR division will contact you with matching technical assessments via email shortly.'
                        : 'Lanzhou Guangtong zavodiga hujjat topshirganingiz uchun tashakkur. Rezyumeingiz kadrlar boʻlimi tomonidan koʻrib chiqiladi va 24 soat ichida sizga javob ulanadi.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setResumeFile(null);
                      setFormData({ fullName: '', email: '', phone: '', experience: '1-3', coverLetter: '' });
                    }}
                    className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-bold transition-colors cursor-pointer"
                  >
                    {currentLang === 'zh' ? '递交另一份' : currentLang === 'en' ? 'Submit Another' : 'Yana yuborish'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2 font-medium">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        {currentLang === 'zh' ? '姓名 *' : currentLang === 'en' ? 'Full Name *' : 'Toʻliq ism-familiyangiz *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={currentLang === 'zh' ? '您的真实姓名' : 'John Doe'}
                        className="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:bg-white focus:border-[#014e96] transition-all"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        {currentLang === 'zh' ? '联系电话 *' : currentLang === 'en' ? 'Phone Number *' : 'Telefon raqamingiz *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        className="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:bg-white focus:border-[#014e96] transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        {currentLang === 'zh' ? '电子邮箱 *' : currentLang === 'en' ? 'Corporate Email *' : 'Elektron pochta manzili *'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="example@yourdomain.com"
                        className="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:bg-white focus:border-[#014e96] transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        {currentLang === 'zh' ? '相关工作经验' : 'Years of Relevant Experience'}
                      </label>
                      <select
                        className="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:bg-white focus:border-[#014e96] transition-all cursor-pointer"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      >
                        <option value="0-1">{currentLang === 'zh' ? '无经验 / 应届生' : 'Junior (Less than 1 year)'}</option>
                        <option value="1-3">{currentLang === 'zh' ? '1-3年' : 'Intermediate (1 to 3 years)'}</option>
                        <option value="3-5">{currentLang === 'zh' ? '3-5年' : 'Senior (3 to 5 years)'}</option>
                        <option value="5+">{currentLang === 'zh' ? '5年以上' : 'Director / Principal (5+ years)'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Drag-and-Drop Resume Box */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {currentLang === 'zh' ? '上传简历附件 * (PDF/Word)' : currentLang === 'en' ? 'Upload Resume / CV Document * (PDF/Word)' : 'Rezyume (CV) yuklash * (PDF/Word formats)'}
                    </label>
                    
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                        isDragOver
                          ? 'border-[#014e96] bg-[#eef4ff]'
                          : resumeFile
                          ? 'border-green-400 bg-green-50'
                          : 'border-slate-300 bg-slate-50 hover:bg-slate-100'
                      }`}
                      onClick={() => document.getElementById('career-file-input')?.click()}
                    >
                      <input
                        type="file"
                        id="career-file-input"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      
                      {resumeFile ? (
                        <>
                          <CheckCircle2 className="w-8 h-8 text-green-600" />
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-slate-800 block truncate max-w-md">{resumeFile.name}</span>
                            <span className="text-[10px] text-slate-450 block">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB • Ready to transmit</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-slate-400" />
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-slate-700 block">
                              {currentLang === 'zh' ? '拖拽简历文件到此处，或点击浏览上传' : currentLang === 'en' ? 'Drag and drop your CV file here, or click to browse' : 'Hujjatni bu yerga tortib olib keling yoki tanlash uchun bosing'}
                            </span>
                            <span className="text-[10px] text-slate-450 block">Supports PDF, DOC, DOCX up to 10MB</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {currentLang === 'zh' ? '自荐信 / 补充需求说明' : currentLang === 'en' ? 'Cover Letter / Remarks' : 'Siz haqizda qoʻshimcha maʻlumotlar'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={
                        currentLang === 'zh'
                          ? '简要描述您的核心学术或产品研发优势...'
                          : currentLang === 'en'
                          ? 'Briefly describe your credentials or technical expertise...'
                          : 'Biznesingiz yoki loyihalaringiz haqida qisqacha yozib qoldirishingiz mumkin...'
                      }
                      className="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:bg-white focus:border-[#014e96] transition-all resize-none"
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#014e96] hover:bg-[#003c73] text-white rounded text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>
                      {currentLang === 'zh' ? '投递简历申请' : currentLang === 'en' ? 'Transmit Direct Application' : 'Hujjatlarni HR boʻlimiga topshirish'}
                    </span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

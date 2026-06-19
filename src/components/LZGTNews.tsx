import React, { useState } from 'react';
import { Language } from '../types';
import { Newspaper, Calendar, ArrowLeft, ChevronRight, Bookmark } from 'lucide-react';

interface LZGTNewsProps {
  currentLang: Language;
}

interface Article {
  id: string;
  date: string;
  title: { zh: string; en: string; uz: string };
  summary: { zh: string; en: string; uz: string };
  content: { zh: string[]; en: string[]; uz: string[] };
  category: { zh: string; en: string; uz: string };
  image: string;
}

export default function LZGTNews({ currentLang }: LZGTNewsProps) {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles: Article[] = [
    {
      id: 'news_class3',
      date: '2026-05-18',
      category: { zh: '战略成果', en: 'Strategic Milestones', uz: 'Yutuqlar' },
      title: {
        zh: '中华人民共和国道路客车Class3=17标准深度评定：兰州广通10.5米纯电客车西北高寒运行受表彰',
        en: 'National Transit Evaluation: Lanzhou Guangtong 10.5M Pure Electric Bus Commended for Class3=17 Cold Climates',
        uz: 'Class3=17 Oliy Avtobus Standarti: Lanzhou Guangtong 10.5M avtobusi sovuq iqlim sinovlarida gʻolib boʻldi'
      },
      summary: {
        zh: '在近日召开的国家道路客车高规格质量测评会上，兰州广通旗下申报的GTQ6105BEV 10.5米纯电城市客车产品核心参数、钛酸锂宽温电芯高周转运行效率完美斩获全场高评，被工信部专家组认定为Class3=17金牌示范产品。',
        en: 'At the recently concluded National Automotive Quality Assessment Forum, Lanzhou Guanggong’s flagship 10.5m bus met the pristine Class3=17 standard, applauded for excellent chassis engineering and robust thermal resilience.',
        uz: 'Nufuzli milliy texnik kengash yigʻilishida Lanzhou Guangtong GTQ6105BEV 10.5 metrlik modeli oʻzining ajoyib karkas mustahkamligi va sovuqqa chidamliligi bilan oliy Class3=17 darajasidagi davlat minnatdorligini oldi.'
      },
      image: '/images/gt_bus_10m_1781508267691.jpg',
      content: {
        zh: [
          '2026年5月中旬，根据中华人民共和国交通运输部与工业和信息化部联合装备质量监测通报，兰州广通新能源汽车有限公司精心研制的10.5米城市公交系列顺利通过现场极温多维综合审议，斩获具有行业风向标意义的 Class3=17 型重点客车准入资质。',
          '测评委员会指出，西北高原有高海拔、冬季昼夜温差大（可达零下30摄氏度）、春夏极度干燥沙尘频飞的特殊高原气候。常规锂电池充电慢、放电不完全、甚至面临热失控风险。而兰州广通依托尖端第五代钛酸锂(LTO)快充电芯，并创造性搭载集成型IP68电器高防护保温气舱，在现场严寒测试中实现“充得饱、跑得稳、随时停靠”。',
          '通过此次深度重构与全面测评，兰州广通10.5米及12米主力系列车型已成功确立了其在北方极寒、多沙省份的战略采购主导地位，展现了甘肃先进绿色重工的新一代硬核实力。'
        ],
        en: [
          'In mid-May 2026, jointly announced by national transportation committees, Lanzhou Guangton’s 10.5-meter pure electric chassis series cleared strict high-altitude dynamic trials, achieving the legendary Class3=17 national transit seal.',
          'The expert group noted that Northwestern high-elevation plains present harsh winters down to -30°C along with violent seasonal dust storms. While traditional chemistries falter, LZGT relies on its fifth-generation LTO (Lithium Titanate) cells wrapped inside sealed IP68 anti-freezing thermal air ducts. It secures frictionless operations day and night.',
          'Under this national accreditation, Lanzhou Guangtong’s gold-standard fleet expands its dominant strategic procurement footprints across Northern and Western provinces, displaying the modern scientific prowess of Gansu industrial engineering.'
        ],
        uz: [
          '2026 yil may oyi oʻrtalarida, Milliy transport va sanoat komissiyasi tomonidan oʻtkazilgan keng qamrovli sinovlarda Lanzhou Guangtong 10.5 metrli elektr avtobus shassisi qiyin sharoitlarda yuqori chidamlilik koʻrsatib, "Class3=17" davlat guvohnomasiga ega boʻldi.',
          'Mutaxassislar kengashi taʻkidlashicha, Shimoli-Gʻarbiy choʻl plyatolarning ob-havosi sovuq boʻlib, -30 daraja sovuqqacha tushadi va kuchli qum boʻronlari sodir boʻladi. Standart akkumulyatorli mashinalar bunday sharoitda batareya sezilarli darajada muzlaydi. LZGT avtobusi esa oʻzining Lityum-Titanat (LTO) tizimi va IP68 havo isitish boʻlimi tufayli bemalol ishlay oladi.',
          'Ushbu yutuq orqali Lanzhou Guangtong avtobus tizimlari sovuq oʻlkalarda davlat transport tenderlarida yetakchi oʻringa chiqdi, bu esa Gansu ogʻir sanoatining xalqaro obroʻsini ifodalaydi.'
        ]
      }
    },
    {
      id: 'news_silkroad',
      date: '2026-04-30',
      category: { zh: '丝路出海', en: 'Belt & Road Exports', uz: 'Eksport Portfeli' },
      title: {
        zh: '丝路绿色走廊：兰州广通新能源大客车首批整车成功越境出海，助力塔什干绿色交通线网建设',
        en: 'The Green Silk Road: Lanzhou Guangtong Electric Buses Dispatched to Central Asia for Tashkent Green Transit',
        uz: 'Yashil Ipak Yoʻli: Lanzhou Guangtong elektr avtobuslarining birinchi partiyasi silliq xalqaro yoʻnalishda Toshkent shahriga yetkazildi'
      },
      summary: {
        zh: '随着定制化物流牵引车与大客车鸣笛启程，兰州新区秦川工厂大厅整装待发。兰州广通批量中亚定制版纯电动客车成功驶入国际，标志着古丝路陆路新能源绿色走廊获得中国制造重装支撑。',
        en: 'With heavy horns blown in the assembly factory, customized electric fleets formally departed for Central Asia markets. This breakthrough highlights Gansu green manufacturing anchoring clean transportation lines.',
        uz: 'Mashinasozlik zavodida tantanali tadbir boʻlib oʻtdi. Toshkent shahriga va Markaziy Osiyo avtobus tarmoqlarini kengaytirish uchun maxsus tayyorlangan ilk elektr avtobuslar joʻnatildi.'
      },
      image: '/images/gt_bus_12m_1781508244809.jpg',
      content: {
        zh: [
          '丝路绿色通道正在焕发蓬勃生机。2026年4月底，由兰州广通精心打造的新潮大客车在完成多关卡出厂调测后，从中国兰州新区秦川工厂基地排列启程，沿着口岸向中亚方向快速行进。',
          '该批客车采用了兰州广通专门为中亚地区（如乌兹别克斯坦塔什干）量身定制的方案。针对当地夏季高达45℃、冬季高寒、丘陵地带多、高周转负荷长等地域特征，采用了定制12米双枪大电量高续航布局，并对驾乘舒适系统包、多语种仪表（提供中文、英文、乌兹别克语）进行升级。',
          '通过此次批量采购，兰州广通成功奠定了中亚地区的新能源公交领航者形象。未来中亚销售总监表示，甘肃广通的目标是建立丝路沿线“1小时维修，24小时零配件极速发运”的零延迟售后保障网络。'
        ],
        en: [
          'The Green Silk Road is entering a golden phase of implementation. In late April 2026, high-efficiency transit buses manufactured by Lanzhou Guangtong departed from the Gansu assembly line, heading for Central Asian capital cities.',
          'The export fleet features custom equipment designed for local Central Asian geographies (such as Tashkent, Uzbekistan). To withstand local summer peaks of +45°C, rolling loess hills, and fast-frequency transit cycles, we upgraded the models with high-capacity dual-gun charging circuits, responsive climate controls, and tri-lingual operational software (Chinese, English, and Uzbek).',
          'This strategic batch shipment solidifies LZGT as a gold-standard partner for municipal transit in modern Eurasia. The head of global exports stated that the enterprise aims to construct a highly resilient regional service depot ensuring 1-hour fast troubleshooting and 24-hour express components delivery.'
        ],
        uz: [
          'Yashil Ipak yoʻli yangi rivojlanish bosqichiga kirdi. 2026-yilning aprel oyi oxirida, barcha tayyorgarliklardan soʻng, Lanzhou Guangtonning yangi rusumdagi shahar avtobuslari karvoni Toshkent shahriga tomon yoʻlga chiqdi.',
          'Ushbu avtobuslar Oʻzbekiston iqlimi uchun (yozda +45 darajagacha issiq va qishda sovuq haroratlar, togʻatoldi yoʻllar va uzoq masofalar) butunlay optimallashtirilgan. Avtobuslar toʻliq isitish va sovutish tizimlari, sensorli boshqaruv paneli va uch tildagi (Xitoy, Ingliz, Oʻzbek) interfeys bilan jihozlangan.',
          'Lanzhou Guangtong Markaziy Osiyo bozorida oʻz oʻrnini mustahkamlashni va servis bekatlari orqali har qanday ehtiyot qismlarni 24 soat ichida yetkazib berish tizimini kafolatlashini maʻlum qildi.'
        ]
      }
    },
    {
      id: 'news_lto_cas',
      date: '2026-03-12',
      category: { zh: '技术突破', en: 'Tech Breakthroughs', uz: 'Texnologiya' },
      title: {
        zh: '科技巅峰：兰州广通联合中科院重磅发布第五代钛酸锂(LTO)十五分钟极速充放电电芯',
        en: 'LZGT and Chinese Academy of Sciences (CAS) Unveil 5th Gen 15-Minute Safe LTO Ultra-Fast Battery Cell',
        uz: 'Texnologiya choʻqqisi: Lanzhou Guangtong 15 daqiqada quvvat oluvchi Lityum-Titanat (LTO) akkumulyatorini taqdim qildi'
      },
      summary: {
        zh: '兰州广通与中国科学院新型能源化学研究所召开联合科技大会，正式推出全新一代高循环、大功率、零热失控钛酸锂核芯电池包，实测十五分钟即可充电，循环寿命高达二十五万次。',
        en: 'Demonstrating technical leadership, Lanzhou Guanggong joint with top institutes officially launched the 5th generation LTO battery, featuring 15-minute quick-refill and a spectacular 25,000+ lifecycle.',
        uz: 'Lanzhou Guangtong kompaniyasi mamlakat ilmiy tadqiqot instituti bilan birgalikda mutlaqo xavfsiz va 15 daqiqada zaryad oluvchi yangi avlod LTO batareya bloklarini namoyish etdi.'
      },
      image: '/images/gt_hydrogen_bus_1781508285980.jpg',
      content: {
        zh: [
          '2026年3月中旬，兰州新区企业大厦高朋满座，兰州广通新能源汽车联合新能源材料权威实验室正式召开发布会，震撼发布了代表未来快充储能极限的第五代“G-LTO 极致安全快充电芯组”。',
          '该电芯采用纳米化钛酸锂晶体电极，相较于行业传统的磷酸铁锂(LFP)和三元锂电池，其最显著的核心优势在于：一、十五分钟直流单/双枪极速补能至95%SOC；二、极低温放电稳定性（零下35度维持90%容量）；三、绝对本征安全（穿刺不冒烟、无热失控）。',
          '通过仿真动力学优化，该动力包系统循环次数高达惊人的25000次以上。这意味着客车在完成全运输服务期报废时，电池电量衰减低于8%，实现电池退役后可免升级梯次储能应用。'
        ],
        en: [
          'In mid-March 2026, at the state-of-the-art tech conference room, Lanzhou Guanggong officially launched its 5th generation "G-LTO Ultimate Safety Cell Pack" representing the frontier of solid-state active grid charging.',
          'By employing nano-scale titanate crystals, the breakthrough yields major benefits over traditional LFP or ternary chemistries: 1. 10to15 minute rapid charging up to 95% State of Charge (SOC); 2. Unrestricted discharge rate even at profound sub-zero climates (-35°C); 3. Absolute structural safety with zero smoke or thermal runaway during extreme puncture testing.',
          'Calculated under intensive dynamic models, this battery easily supports over 25,000 deep cycles. This means the battery pack outlives the physical lifespan of the bus chassis, eliminating any expensive replacement cost.'
        ],
        uz: [
          '2026-yil mart oyi oʻrtalarida Lanzhou Guangtong muhandislari yangi G-LTO Lityum-Titanat batareya texnologiyasini namoyish etishdi.',
          'Ushbu batareyalarning anʻanaviy akkumulyatorlardan bosh ustunliklari: 1. Atigi 10-15 daqiqa ichida 95% energiya olish; 2. -35 darajagacha boʻlgan qorli havodagi barqarorlik; 3. Absolyut xavfsizlik (teshib koʻrilganda ham kimyoviy yonish yoki tutashish yuz bermaydi).',
          'Ushbu batareyaning foydalanish tsikli 25 000 martadan oshadi. Bu degani avtobus korpusi eskirib xizmatini yakunlasa ham, batareyani boshqa transportlarga oʻrnatib xizmat ettirish mumkin.'
        ]
      }
    }
  ];

  const currentArticles = articles;

  const handleBackToList = () => {
    setSelectedArticleId(null);
    const elem = document.getElementById('about-news-header');
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedArticle = articles.find(a => a.id === selectedArticleId);

  const t = {
    zh: {
      newsCenter: '广通新闻中心',
      desc: '聚焦西北绿色重工科技革命，追踪兰州广通全球出海步伐。',
      backToList: '返回新闻列表',
      readMore: '阅读全文',
      recentNews: '最新资讯',
      writtenBy: '作者：广通企划部',
      viewAllBtn: '回到页首'
    },
    en: {
      newsCenter: 'LZGT News Hub',
      desc: 'Highlighting Northwest green technology revolution and tracking global export achievements.',
      backToList: 'Back to News List',
      readMore: 'Read Full Article',
      recentNews: 'Latest Releases',
      writtenBy: 'By LZGT Corporate Communications',
      viewAllBtn: 'Back to top'
    },
    uz: {
      newsCenter: 'Guangtong Yangiliklar Markazi',
      desc: 'Shimoli-gʻarbiy ogʻir sanoat yutuqlari va Lanzhou Guangtonning dunyo boʻylab tarmoq rivojlanishi.',
      backToList: 'Yangiliklar roʻyxatiga qaytish',
      readMore: 'Batafsil oʻqish',
      recentNews: 'Soʻnggi Yangiliklar',
      writtenBy: 'Mualif: Guangtong Matbuot markazi',
      viewAllBtn: 'Guruh boshiga'
    }
  };

  const curr = t[currentLang];

  return (
    <div className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 space-y-10" id="about-news-header">
      
      {/* Title block */}
      {!selectedArticleId && (
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-[10px] text-[#014e96] font-extrabold tracking-widest font-mono uppercase block">
            Media Press Releases / 广通动态
          </span>
          <h2 className="text-3xl font-black text-[#014e96] tracking-tight">
            {curr.newsCenter}
          </h2>
          <div className="h-1 w-16 bg-[#e53e3e] mx-auto rounded-full"></div>
          <p className="text-sm font-semibold text-[#4a5568]">
            {curr.desc}
          </p>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {!selectedArticleId ? (
          /* News Feed Grid List view */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentArticles.map((art) => (
              <div 
                key={art.id} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-400 transition-all group text-left"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                    <img 
                      src={art.image} 
                      alt={art.title[currentLang]} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#014e96] text-white text-[9px] font-extrabold rounded shadow font-mono uppercase">
                        {art.category[currentLang]}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#e53e3e]" />
                      <span>{art.date}</span>
                    </div>
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#014e96] line-clamp-2 leading-snug group-hover:text-red-650 transition-colors">
                      {art.title[currentLang]}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {art.summary[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      setSelectedArticleId(art.id);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    }}
                    className="w-full py-2 bg-slate-50 hover:bg-[#014e96] hover:text-white border border-slate-200 rounded text-xs font-bold text-slate-700 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>{curr.readMore}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Article Detail View */
          selectedArticle && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto space-y-6 text-left">
              {/* Back Button */}
              <button
                onClick={handleBackToList}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 rounded transition-colors cursor-pointer mb-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{curr.backToList}</span>
              </button>

              <div className="space-y-4">
                <span className="px-2.5 py-1 bg-red-50 text-[#e53e3e] text-[10px] font-black rounded border border-red-200 uppercase tracking-widest">
                  {selectedArticle.category[currentLang]}
                </span>
                
                <h1 className="text-xl sm:text-2xl font-black text-[#014e96] leading-tight tracking-tight">
                  {selectedArticle.title[currentLang]}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-semibold border-b border-slate-100 pb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{selectedArticle.date}</span>
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-3.5 h-3.5 text-green-600" />
                    <span>{curr.writtenBy}</span>
                  </span>
                </div>
              </div>

              {/* Cover Image in Detail page */}
              <div className="w-full aspect-video sm:aspect-[21/9] rounded-lg overflow-hidden bg-slate-100 border border-slate-200 relative shadow-inner">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title[currentLang]} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description Body Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify mt-6">
                {selectedArticle.content[currentLang].map((paragraph, index) => (
                  <p key={index} className="indent-6 sm:indent-8">{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={handleBackToList}
                  className="px-5 py-2.5 bg-[#014e96] hover:bg-[#003c73] text-xs font-bold text-white rounded shadow transition-colors cursor-pointer"
                >
                  {curr.backToList}
                </button>
              </div>
            </div>
          )
        )}
      </div>

    </div>
  );
}

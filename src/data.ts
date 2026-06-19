import { Product, NavItem, TranslationDictionary } from './types';

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: { zh: '首页', en: 'Home', uz: 'Bosh sahifa' } },
  { key: 'about', label: { zh: '走进广通', en: 'About LZGT', uz: 'Loyiha haqida' } },
  { key: 'news', label: { zh: '广通新闻', en: 'LZGT News', uz: 'Yangiliklar' } },
  { key: 'products', label: { zh: '产品中心', en: 'Products', uz: 'Mahsulotlar' } },
  { key: 'rnd', label: { zh: '研发与制造', en: 'R&D', uz: 'Ar-Ge va Ishlab chiqarish' } },
  { key: 'service', label: { zh: '售后服务', en: 'Service', uz: 'Xizmat koʻrsatish' } },
  { key: 'contact', label: { zh: '联系我们', en: 'Contact Us', uz: 'Aloqa' } }
];

export const CATEGORIES = [
  {
    key: 'all',
    label: { zh: '全部产品', en: 'All Products', uz: 'Barcha mahsulotlar' }
  },
  {
    key: 'tijorat',
    label: { zh: '商业运输车辆系列', en: 'Commercial Vehicles Series', uz: 'Tijorat transport vositalari seriyasi' },
    subcategories: [
      { key: 'tijorat', label: { zh: '商业运输车', en: 'Commercial Vehicle', uz: 'Tijorat transport vositasi' } },
      { key: 'logistika', label: { zh: '物流车', en: 'Logistics Vehicle', uz: 'Logistika vositasi' } },
      { key: 'avtobus', label: { zh: '客车', en: 'Bus', uz: 'Avtobus' } },
      { key: 'shahar', label: { zh: '城市交通车辆', en: 'Urban Transit Vehicle', uz: 'Shahar transport vositalari' } },
      { key: 'past_tezlik', label: { zh: '低速运输车', en: 'Low-speed Vehicle', uz: 'Past tezlikdagi transport vositasi' } },
      { key: 'forklift', label: { zh: '叉车系列', en: 'Electric Forklift', uz: 'Forklift' } },
      { key: 'traktor', label: { zh: '拖拉机系列', en: 'EV Tractor', uz: 'Traktor' } }
    ]
  },
  {
    key: 'maxsus',
    label: { zh: '特种/专用车辆系列', en: 'Special Purpose Vehicles Series', uz: 'Maxsus transport vositalari seriyasi' },
    subcategories: [
      { key: 'sweeper', label: { zh: '路地清洁车', en: 'Road Sweeper / Sprinkler', uz: 'Yoʻl tozalovchi va purkagich' } }
    ]
  },
  {
    key: 'batareya_toplam',
    label: { zh: '电池包系列', en: 'Battery Packs', uz: 'Batareya to\'plami' }
  },
  {
    key: 'batareya_mahsulot',
    label: { zh: '电池产品系列', en: 'Battery Products', uz: 'Batareya mahsulotlari' }
  },
  {
    key: 'zaryadlovchi',
    label: { zh: '智能充电产品', en: 'Charging Products', uz: 'Zaryadlovchi mahsulotlar' }
  },
  {
    key: 'motor_elektron',
    label: { zh: '电机与电控系统', en: 'Motors & Electronic Control', uz: 'Motor va elektron boshqaruv' }
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'gtq6121bev',
    name: {
      zh: 'CAMBELL 凯姆贝尔 GTQ6121BEV 纯电动城市客车',
      en: 'CAMBELL series GTQ6121BEV Pure Electric City Bus',
      uz: 'CAMBELL series GTQ6121BEV Toʻliq Elektr Shahar Avtobusi'
    },
    modelCode: 'GTQ6121BEV',
    category: 'tijorat',
    subCategory: 'avtobus',
    image: '/src/assets/images/gt_bus_12m_1781508244809.jpg',
    badge: {
      zh: '主打产品',
      en: 'Flagship Model',
      uz: 'Flagman Model'
    },
    description: {
      zh: '兰州广通12米级纯电动客车，采用国际领先的轻量化铝合金车身技术，搭载高能量密度安全动力电池，全低地板设计，实现绿色环保、安全舒适、智能网联的现代都市公交体验。',
      en: 'Lanzhou Guangtong 12-meter class pure electric bus utilizes leading lightweight aluminum alloy body technology, high energy-density power battery system, and a full low-floor design for a green, safe, and comfortable urban journey.',
      uz: 'Lanzhou Guangtong 12 metrlik toʻliq elektr avtobusi xalqaro darajadagi engil alyuminiy korpus texnologiyasi, yuqori energiya zichligiga ega akkumulyator va toʻliq past polli dizayn bilan jihozlangan boʻlib, shahar transportiga yuqori darajada qulaylik olib keladi.'
    },
    tagline: {
      zh: '智慧科技 绿色出行标杆',
      en: 'Smart Technology, Benchmark of Green Mobility',
      uz: 'Aqlli texnologiya, yashil ekologik harakat standarti'
    },
    keyFeatures: {
      zh: [
        '超轻合金车身：整车轻量化设计，能耗降低12%',
        '全低地板低首步：方便老人、轮椅无障碍快速乘降',
        '3H高强度承载骨架：防撞性能提升25%，保证乘员安全',
        '钛酸锂快充兼容：支持最快15分钟全充满，高周转率'
      ],
      en: [
        'Ultra-light Alloy Body: Reduces curb weight, lowering power consumption by 12%',
        'Full Low-Floor Design: Completely level floor for barrier-free access',
        '3H High-Strength Body Structure: Anti-collision safety rating improved by 25%',
        'LTO Fast Charge Compatible: Recharges fully inside 10-15 minutes'
      ],
      uz: [
        'Oʻta engil alyuminiy korpus: Avtobus vaznini kamaytiradi va energiya sarfini 12% gacha tejaydi',
        'Toʻliq past polli kirish: Nogironlar aravachalari va keksalar uchun toʻsiqsiz tezkor chiqish imkoni',
        '3H mustahkamlangan karkas: Toʻqnashuvga chidamlilik 25% yuqori',
        'LTO tezkor quvvatlash: LTO akkumulyatorlar 10-15 daqiqada toʻliq quvvat oladi'
      ]
    },
    specs: {
      length: '12m',
      dimensions: '11990 × 2550 × 3250 mm',
      passengerCapacity: '95 / 28-36',
      batteryType: 'LTO (Lithium Titanate / CATL LFP optional)',
      batteryCapacity: '258 kWh',
      chargingTime: '15 mins (LTO Fast-Charge) / 2 hours (Standard Dual Gun)',
      motorPower: '150 kW Rated / 245 kW Peak',
      range: '350 km (Standard Urban Cycle)',
      maxSpeed: '85 km/h',
      maxClimbing: '20%'
    }
  },
  {
    id: 'gtq6122bev6',
    name: {
      zh: 'CAMBELL 凯姆贝尔 GTQ6122BEV6 双层纯电动巴士 / 观光车',
      en: 'CAMBELL GTQ6122BEV6 Double-Decker Pure Electric Bus',
      uz: 'Ikki qavatli avtobus (Model: GTQ6122BEV6)'
    },
    modelCode: 'GTQ6122BEV6',
    category: 'tijorat',
    subCategory: 'avtobus',
    image: '/src/assets/images/double_decker_bus_1781585041945.jpg',
    badge: {
      zh: '豪华双层',
      en: 'Double-Decker Flagship',
      uz: 'Ikki Qavatli Flagman'
    },
    description: {
      zh: '专为高品位城市观光和高负荷都市干线打造的双层纯电动客车。超宽观景车窗，高隔音低震动客舱，标配多重主动安全控制系统。具有西北地区高抗风防滑设计，完美应对气温骤变。',
      en: 'Premium double-decker electric bus tailored for panoramic city tourism & heavy-duty trunk lines. Built with noise-reduction chambers and anti-lateral wind balancing suspension.',
      uz: 'Hashamatli shahar sayohati va yoʻlovchi koʻp boʻlgan markaziy tranzit yoʻllari uchun moʻljallangan ikki qavatli toʻliq elektr avtobus. Oʻta keng panoramali oynalar, past shovqinli salon va shamolga bardoshli korpus tizimi.'
    },
    tagline: {
      zh: '揽尽城市风光 开启绿色高容双层未来',
      en: 'Unmatched Capacity: Double-Decker Architecture with Panoramic View',
      uz: 'Shaharni panoramali kuzatish va eng yuqori sigʻimli ikki qavatli transport'
    },
    keyFeatures: {
      zh: [
        '双层高透日光舱：360度开阔视野，打造顶级观光通勤体验',
        '超高承载结构设计：防侧翻安全系数极高，全时ESP车身稳定控制',
        '高储能长效巡航：快慢充皆宜，满足全天运营调度',
        '人性化商务舱配置：提供USB充电端口及高品质影音系统'
      ],
      en: [
        '360° Panoramic Upper Deck: Exceptional tourist visibility with thermal-insulated sun shades',
        'Anti-lateral Roll Control: Standard active Electronic Stability Program (ESP) for safety',
        'High Density Cell Packs: Large storage density supports continuous routes with minimal wait',
        'Corporate Suite Cabin: Features passenger USB charge slots and high-definition speakers'
      ],
      uz: [
        '360° Panoramali yuqori qavat: Shaharning goʻzal manzarasini tomosha qilish uchun maxsus oynalar',
        'Yonga agʻdarilishdan faol himoya: Standart active ESP barqarorlik tizimi kafolatlanadi',
        'Ulkan akkumulyator tizimi: Toʻliq kun davomida bemalol xizmat qila oladigan katta sigʻim',
        'Yoʻlovchilar uchun qulayliklar: Har bir oʻrindiqda USB portlar va sifatli akustik tizim'
      ]
    },
    specs: {
      length: '12.2m',
      dimensions: '12200 × 2550 × 4200 mm',
      passengerCapacity: '120 / 64+1 seats',
      batteryType: 'CATL High Density LFP',
      batteryCapacity: '422 kWh',
      chargingTime: '1.5 hours (Dual DC Fast Charger)',
      motorPower: '200 kW Rated / 350 kW Peak Dual-Drive',
      range: '400 km (Continuous Tourism Loop)',
      maxSpeed: '80 km/h',
      maxClimbing: '18%'
    }
  },
  {
    id: 'gtq6105bev',
    name: {
      zh: 'CAMBELL 凯姆贝尔 GTQ6105BEV 纯电动城市客车 (Class3=17)',
      en: 'CAMBELL series GTQ6105BEV Pure Electric City Bus (Class3=17)',
      uz: 'CAMBELL series GTQ6105BEV Toʻliq Elektr Avtobusi (Class3=17)'
    },
    modelCode: 'GTQ6105BEV',
    category: 'tijorat',
    subCategory: 'avtobus',
    image: '/src/assets/images/gt_bus_10m_1781508267691.jpg',
    badge: {
      zh: '主推产品',
      en: 'Best Seller',
      uz: 'Eng Ommabop'
    },
    description: {
      zh: '核心定位class3=17黄金尺寸产品。本车是结合现代都市核心公交专线、中运量公交网络精细打造的主力车型。采用全天候防盗热舱、卓越的高温与高寒运行适应性，是国内寒冷和西北风沙天气运行的王牌产品。',
      en: 'The core product of class3=17 category. This golden-dimension 10.5m bus is tailored for core mid-volume municipal transit lines. Specially built with anti-freezing LTO thermal chambers and wind-sand tolerance, making it perfect for cold climates.',
      uz: 'Ushbu mahsulot bizning class3=17 toifasidagi oltin standart hisoblanadi. Shaharning oʻrta zichlikdagi yoʻnalishlari uchun ideal tarzda loyihalashtirilgan. LTO akkumulyator tizimi sovuq iqlim sharoitida (Shimoli-gʻarbiy shamollar, sovuq haroratlar) buzilishlarsiz ishlashga kafolat beradi.'
    },
    tagline: {
      zh: '严寒酷暑中的风沙王牌 10.5米高效能城市客车',
      en: 'The All-Weather Champion: 10.5-Meter High Efficiency City Transit',
      uz: 'Har qanday ob-havoga chidamli chempion: 10.5 metrli yuqori samarali avtobus'
    },
    keyFeatures: {
      zh: [
        '极寒无忧运行：可在零下30度至零上45度大温差环境中正常充放电',
        '钛酸锂核心优势：25000次超长循环寿命，整车报废不换动力电池',
        '侧倾侧跪空气悬架：站点自动侧跪降底地板，尊享乘客关怀',
        '高防风沙等级：IP68最高三高（高寒、高原、高热）整车电器仓防护'
      ],
      en: [
        'Sub-Zero Excellence: Fully functional battery discharge from -30°C up to +45°C ambient temp',
        'LTO Extreme Lifespan: Exceeds 25,000 charge cycles - battery outlives the vehicle chassis',
        'Kneeling Air Suspension: Lowers bus height at stations for ultra-comfortable access',
        'IP68 Sandproof Guard: Dustproof, sandbox proof, water immersion protection for standard parts'
      ],
      uz: [
        'Ekstremal sovuqqa chidamlilik: -30°C dan +45°C gacha boʻlgan haroratlarda muammosiz ishlash',
        'LTO Akkumulyator Ustunligi: 25,000 martadan ortiq quvvatlanish tsikli - akkumulyatorni almashtirish talab etilmaydi',
        'Yonga egilish osma tizimi (Kneeling): Bekatlarda yoʻlovchilarni chiqarish va tushirish uchun tana balandligini pasaytirish',
        'IP68 himoya darajasi: Gʻubor va shamollardan oʻta quvvatli himoya tizimi'
      ]
    },
    specs: {
      length: '10.5m',
      dimensions: '10490 × 2520 × 3220 mm',
      passengerCapacity: '80 / 22-30',
      batteryType: 'LTO Fast-Charging LTO Pack (CATL LFP optional)',
      batteryCapacity: '198 kWh',
      chargingTime: '12 mins (LTO Fast-Charge) / 1.5 hours (Dual Gun LFP)',
      motorPower: '135 kW Rated / 210 kW Peak',
      range: '300 km (Energy-saving urban loop)',
      maxSpeed: '80 km/h',
      maxClimbing: '22%'
    }
  },
  {
    id: 'gtq6951bev',
    name: {
      zh: 'CAMBELL 凯姆贝尔 GTQ6951BEV 经典9.5米科客车',
      en: 'CAMBELL GTQ6951BEV Classic 9.5-Meter Pure Electric Bus',
      uz: 'Klassik 9.5 metrli avtobus modeli (GTQ6951BEV)'
    },
    modelCode: 'GTQ6951BEV',
    category: 'tijorat',
    subCategory: 'avtobus',
    image: '/src/assets/images/classic_bus_95m_1781585070520.jpg',
    badge: {
      zh: '经典畅销',
      en: 'Classic Transit',
      uz: 'Klassik Shahar Model'
    },
    description: {
      zh: '极佳转弯半径与经典紧凑车身结构。针对次级干干道及综合社区网络量身定制，兼顾通过性与大客位空间，是城市环保公交的中生代杰作。',
      en: 'Excellent turning radius and classic compact transit layout. Excellent choice for secondary channels, neighborhood feeders, and historic small lanes.',
      uz: 'Ajoyib qayrilish radiusi va klassik ixcham korpus. Tor shahar koʻchalari, turar-joy dahalari va oʻrta zichlikdagi hududlar uchun maxsus moslashtirilgan shahar ekologik avtobusi.'
    },
    tagline: {
      zh: '灵动穿梭 绿色社区循环巴士主力',
      en: 'Flexible and Agile: The Heart of Community Neighborhood Transit',
      uz: 'Serharakat va ixcham: Tor koʻchalar va mahallalar boʻylab eng maʼqul avtobus'
    },
    keyFeatures: {
      zh: [
        '高机动强通过：转弯半径仅为8.2米，自如穿行窄道老街',
        '全承载笼式骨架：多维合金管路无缝焊接，抵御多向极限撞击',
        '高安全快充钛酸锂：无缝衔接早晚高峰，单次快速补能即可持续运营',
        '防凝露多重空调：保持西北多砂且温差极端气候下的舱内干爽'
      ],
      en: [
        'Superb Maneuverability: Turning radius of only 8.2m to access narrow city corridors',
        'Monocoque Safety Cage: Premium tube-welded frame keeps passengers protected under impact',
        'LTO Active Chemistry: Enables rapid lunchtime recharging to ensure full workday uptime',
        'Advanced Desiccant HVAC: Keeps interior humidity perfect while handling severe temperature swings'
      ],
      uz: [
        'Oʻta yuqori manyovrlilik: Qayrilish radiusi bor-yoʻgʻi 8.2 metrni tashkil etgani sababli tor bekatlarga ham oson sigʻadi',
        'Monokok toʻliq xavfsizlik karkasi: Toʻqnashuv holatida salondagi yoʻlovchilarni maksimal himoyalaydi',
        'LTO quvvat tizimi: Tushlik vaqtida tezkor quvvat olib, kun boʻyi uzluksiz xizmat koʻrsata oladi',
        'Iqlim nazorat tizimi: Konditsioner tizimi harorat keskin oʻzgargan taqdirda ham havo sifatini saqlaydi'
      ]
    },
    specs: {
      length: '9.5m',
      dimensions: '9500 × 2480 × 3180 mm',
      passengerCapacity: '72 / 18-24 seats',
      batteryType: 'LTO Fast-Charge / LFP Available',
      batteryCapacity: '168 kWh',
      chargingTime: '10 mins (LTO Quick DC / Double Gun LFP optional)',
      motorPower: '115 kW Rated / 185 kW Peak',
      range: '240 km (Standard Community Loop)',
      maxSpeed: '80 km/h',
      maxClimbing: '24%'
    }
  },
  {
    id: 'gtq6121fcev',
    name: {
      zh: 'CAMBELL 凯姆贝尔 GTQ6121FCEV 氢燃料电池城市客车',
      en: 'CAMBELL series GTQ6121FCEV Hydrogen Fuel Cell City Bus',
      uz: 'CAMBELL series GTQ6121FCEV Vodorod Yonilgʻili Shahar Avtobusi'
    },
    modelCode: 'GTQ6121FCEV',
    category: 'tijorat',
    subCategory: 'avtobus',
    image: '/src/assets/images/gt_hydrogen_bus_1781508285980.jpg',
    badge: {
      zh: '未来科技',
      en: 'Hydrogen Future',
      uz: 'Vodorod Kelajagi'
    },
    description: {
      zh: '全新一代氢燃料电池公交客车。采用高功率质子交换膜氢堆系统，车载储氢罐快充5至10分钟可续航500多公里，真正实现尾气纯水排出，是未来终极零排放城市公共交通的标杆。',
      en: 'Latest generation Hydrogen Fuel Cell city bus. Powered by a high-efficiency proton-exchange membrane (PEM) stack, 5-10 minute rapid hydrogen refueling delivers over 500km range, emitting only pure water vapor.',
      uz: 'Yangi avlod vodorod yoqilgʻisi bilan ishlaydigan avtobus. Proton almashinadigan membrana (PEM) tizimi bilan ishlaydi, 5-10 daqiqalik quvvatlash 500 km dan ortiq masofani bosib oʻtishga imkon beradi, dumdan esa faqat musaffo suv bugʻi chiqadi.'
    },
    tagline: {
      zh: '终极零排放 广通氢能绿行未来',
      en: 'Ultimate Zero Emission: Driving the Green Future with Hydrogen Fuel',
      uz: 'Toʻliq nol emissiya: Vodorod quvvati bilan ekologik kelajak sari'
    },
    keyFeatures: {
      zh: [
        '终极绿色清洁：唯一排放物为纯净水，实现社会零碳排放',
        '全时段长效续航：单次加氢10分钟，综合工况续航达500-600公里',
        '高度防寒：无惧西北高原冬季结冰，零下35℃下实现秒级极速冷启动',
        '九重智能氢安防控：氢浓度超限自动截断，防爆泄压防撞一体化设计'
      ],
      en: [
        'Absolute Clean Energy: Emit only pure liquid H2O, true zero-carbon footprint',
        'Extended Range Operations: Refuels in under 10 minutes with 500-600km long-range endurance',
        'Extreme Freeze Boot: Starts in under 10 seconds even at deep -35°C high-altitude winter conditions',
        '9-Tier Active Hydrogen Safety: Automated instant valve shut-off, integrated crashworthiness design'
      ],
      uz: [
        'Mutloq toza energiya: Yagona chiqindi - tumandek toza suv, karbonat angidrid mutlaqo nol',
        'Uzoq masofa radiusi: 10 daqiqadan kam vaqtda vodorod toʻldirish va 500-600 km masofani bosib oʻtish',
        'Ayozli ishga tushirish: Toʻliq muzlagan -35°C haroratlarda ham avtomatik darhol qizdirib ishga tushish',
        '9 bosqichli vodorod xavfsizligi: Avtomatlashtirilgan avariya klapanlari, zaryad muhofazasi'
      ]
    },
    specs: {
      length: '12m',
      dimensions: '11990 × 2550 × 3360 mm',
      passengerCapacity: '90 / 26-38',
      batteryType: 'PEM Fuel Cell + LTO Buffer Hybrid Battery',
      batteryCapacity: '60 kW H2 Stack + 30 kWh Buffer LTO',
      chargingTime: '8-10 mins (Hydrogen Refueling at 35 MPa)',
      motorPower: '160 kW Rated / 260 kW Peak',
      range: '550 km (Active Hydrogen Cycle)',
      maxSpeed: '90 km/h',
      maxClimbing: '20%'
    }
  },
  {
    id: 'gtq5041xxy',
    name: {
      zh: 'GTQ5041XXY 纯电动厢式运输货车',
      en: 'GTQ5041XXY Pure Electric Cargo Logistics Van',
      uz: 'GTQ5041XXY Toʻliq Elektr Yuk Tashish Van-Furgoni'
    },
    modelCode: 'GTQ5041XXY',
    category: 'tijorat',
    subCategory: 'logistika',
    image: '/src/assets/images/gt_logistic_van_1781508306200.jpg',
    badge: {
      zh: '城配首选',
      en: 'Urban Logistic King',
      uz: 'Shahar Ichra Eng Maʼqul'
    },
    description: {
      zh: '针对现代商超配送、冷链物流、城市最后一公里物流及快递配送打造的精品100%纯电动运输车。大容积载货舱、高强度耐用底盘、强动力电机，超长市区行驶里程。',
      en: 'The premium cargo-logistic solution built for modern express mail, shopping mall distributions, and city last-mile logistics. Engineered with double rear-axle loading and high durability for maximum cost efficiency.',
      uz: 'Zamonaviy shahar ichida doʻkonlar yetkazib berish, muzlatilgan va tez buziladigan oziq-ovqat mahsulotlari hamda kurerlik xizmatlari uchun yaratilgan mukammal shahar ichra elektr yuk mashinasi.'
    },
    tagline: {
      zh: '大装载 超静音 城市纯电配送神车',
      en: 'Spacious, Smart, Quiet: The Ultimate Zero-Emission Logistic Van',
      uz: 'Keng, tejamkor, shovqinsiz: Shahar ichidagi eng ishonchli elektr furgon'
    },
    keyFeatures: {
      zh: [
        '超大货舱容积：高达9.4立方米平流载物空间，装载率提升15%',
        '高效永磁同步驱机：峰值扭矩大，爬坡重载毫无压力',
        '高硬度双后轴重载承载：底盘纵梁双层钢板压制，专为重载货物打造',
        '轿车化智能座舱：配备液晶触摸屏、一体式真皮包裹、智能胎压监测'
      ],
      en: [
        'Spacious Loading hold: 9.4 cubic meters flatbed interior volume, improves utilization rate by 15%',
        'High-torque PMSM Motor: Delivers superior starting power, easily climbs fully loaded',
        'Reinforced Chassis Leaf-springs: Heavy-duty cold press steel design to tolerate express loading',
        'Automotive-Grade Interior Cabin: Features center infotainment touch LCD, parking assist, and active TMPS'
      ],
      uz: [
        'Ulkan yuk hajmi: 9.4 kub metr tekis yukxona maydoni, foydalanish samaradorligini 15% oshiradi',
        'Yuqori aylanma momentli PMSM motor: Toʻliq yuklangan holatda ham qiyaliklarga oson koʻtarilish',
        'Mustahkamlangan shassi retsorlari: Ogʻir yuklarni ruxsat etilgan mebeldan ortiqcha koʻtara olish darajasi',
        'Yengil avtomobil saloni: Markaziy sensorli displey, orqa sensorli datchiklar, haydovchi xavfsizligi'
      ]
    },
    specs: {
      length: '5.9m',
      dimensions: '5990 × 2000 × 2650 mm',
      passengerCapacity: '3 persons max (Front bench cabin)',
      batteryType: 'CATL Lithium Iron Phosphate (LFP)',
      batteryCapacity: '86 kWh',
      chargingTime: '45 mins (Fast DC Standard 20%-80%) / 8 hours (AC Slow-Charge)',
      motorPower: '100 kW Peak Power',
      range: '260 km (Full Load urban delivery)',
      maxSpeed: '100 km/h',
      maxClimbing: '25%'
    }
  },
  {
    id: 'battery_pack_lto',
    name: {
      zh: 'CAMBELL 高能量密度钛酸锂(LTO)防爆动力电池组',
      en: 'CAMBELL High Energy Density LTO Modular Battery Pack',
      uz: 'CAMBELL LTO Yuqori quvvatli sovuqqa chidamli akkumulyator bloki'
    },
    modelCode: 'CAMBELL-LTO-P400',
    category: 'batareya_toplam',
    image: '/src/assets/images/lto_battery_pack_1781585107101.jpg',
    badge: {
      zh: '核心科技',
      en: 'Core Chemistry',
      uz: 'Yadro Texnologiyasi'
    },
    description: {
      zh: '搭载了最先进高倍率电芯的钛酸锂(LTO)锂电池包模块。具有绝对不起火、防穿刺短路、零下40度仍能正常运作、2.5万次超长循环充放寿命等极限制冷和超宽工作温差技术路线。',
      en: 'High-performance Lithium Titanate (LTO) battery module featuring safety against puncture or temperature rise. Supports extreme active high-rate recharging without risk of fire or cell degradation.',
      uz: 'Eng zamonaviy titanat litiyli (LTO) batareya bloki modullari. Hech qachon yonmaydi va teshilish yoki qisqa tutashuvda portlamaydi. -40°C daraja ayozda ham quvvatini yoʻqotmaydi, xizmat koʻrsatish resursi 25,000 marta quvvatlashgacha yetadi.'
    },
    tagline: {
      zh: '极地绝不燃爆 25000次地空循环寿命王牌电池组',
      en: 'Pure Titanate Safety: Sub-Zero Resilient Battery packs with 25000 Cycles',
      uz: 'Mutloq kafolatlangan xavfsizlik va 25,000 martalik unumdor tsikl zaxirasi'
    },
    keyFeatures: {
      zh: [
        '绝对安全防燃爆：针刺、碾压等极限物理损坏下零起火风险',
        '高倍率快充优势：支持最大6C充放电，最快可在10分钟内充至90%',
        '超高低温适应力：温差耐受度包含 -40℃ 至 +60℃，极端极寒正常运转',
        '全寿命极轻衰损：在25000次循环以后，剩余电量依然大于最初的80%'
      ],
      en: [
        'Zero-Thermal Runaway: Extremely stable formulation prevents swelling, gas release or fires',
        'Ultra-High 6C Rates: Fully support extreme energy input charging up to 90% SOC in 10 minutes',
        'Arctic Sub-Zero Resilience: Peak output sustained perfectly within temperature ranges of -40°C to +60°C',
        'Unmatched Longevity: Battery health index stays above 80% even after exceeding 25,000 charge cycles'
      ],
      uz: [
        'Termik portlashdan xoli: Oʻta barqaror kimyoviy tarkib teshilgan taqdirda ham yonmaydi va portlamaydi',
        'Oʻta tezkor 6C tezlik: Atigi 10 daqiqa ichida batareyani 90% gacha zaryadlash imkoniyati',
        'Muzlashga toʻliq chidamlilik: -40°C dan +60°C gacha boʻlgan ekstremal haroratlarda mutloq unumdorlik',
        'Ekstremal xizmat muddati: 25,000 martalik quvvatlantirishdan soʻng ham quvvat solishi 80% dan baland boʻlib qoladi'
      ]
    },
    specs: {
      length: 'N/A',
      dimensions: '880 × 540 × 420 mm',
      passengerCapacity: 'Industrial Pack / heavy duty',
      batteryType: 'Lithium Titanate Oxide (LTO)',
      batteryCapacity: '48.5 kWh per module',
      chargingTime: '10-15 Min via High DC input',
      motorPower: 'N/A (Output energy delivery 650V)',
      range: 'Modular battery expansion configuration',
      maxSpeed: 'N/A',
      maxClimbing: 'N/A'
    }
  },
  {
    id: 'charger_pile_series',
    name: {
      zh: 'CAMBELL 360kW 智能双枪大功率直流直流充电桩',
      en: 'CAMBELL 360kW Dual-Gun Intelligent High-Power DC Charger',
      uz: 'CAMBELL 360kW Super tezkor ikki dasta drosselli shahar zaryadlash stansiyasi'
    },
    modelCode: 'CAMBELL-CHARG-360',
    category: 'zaryadlovchi',
    image: '/src/assets/images/quick_charger_1781585131344.jpg',
    badge: {
      zh: '高效配套',
      en: 'Fast Charger',
      uz: 'Tezkor Quvvatlash'
    },
    description: {
      zh: '针对大运量、快节奏公共交通定制的智能液冷直流充电桩。配备360kW超大功率，单机双枪智能分配电流，搭载实时云端热管理防护与断电防雷安全保障。',
      en: 'Smart liquid-cooled high-power DC fast charging pile. Features 360kW output with active power balancing, automated dual-gun distribution, and internet telemetry logs.',
      uz: 'Katta shahar avtobus parklari uchun maxsus drosselli suyuq sovutiladigan aqlli zaryad stansiyasi. 360kW ulkan quvvat, ikki pistolet orqali doimiy aqlli taqsimot va xavfsiz avtomatik oʻchish tizimlari.'
    },
    tagline: {
      zh: '双枪极速蓄能 360kW大功率保障公共汽车高效运转',
      en: 'Massive 360kW Dual Output: Fueling Fleet Mobility inside Minutes',
      uz: '360kW ulkan tezlik va ikki dasta drosseli bilan bir vaqtda faol quvvat berish'
    },
    keyFeatures: {
      zh: [
        '双枪智能风流：双插充电头根据电池SOC状态自动动态分配功率，最大180kW+180kW',
        '主动电网电磁兼容：自带多级谐波电磁隔绝，保护配电房不受冲击损坏',
        '高等级防水防腐：IP55壳体结构与液冷绝缘防雷设计，露天作业全天候无忧',
        '多平台物联网云：支持IC卡扫码授权，并在中后台实时监测充电曲线与热传导'
      ],
      en: [
        'Active Balance Management: Automatically splits power matching exact state of charge of both connected buses',
        'Grid Harmonics filter: Integrated electromagnetic noise isolators protect existing municipal grids',
        'IP55 Weatherproof Core: Waterproof dual guns, liquid cooling mechanisms allow outdoor long-service life',
        'IoT Billing & Smart Metering: Full web portal support, automatic cycle profiling, high-precision thermal logs'
      ],
      uz: [
        'Aqlli taqsimlash boshqaruvi: Ulangan avtobuslarning quvvat sigʻimiga qarab har biriga aqlli oqim berish',
        'Filtr drosselli barqarorlik: Kuchli toʻlqinlardan himoya qiluvchi drossel va izolyator tizimi',
        'IP55 Ob-havo himoyasi: Tashqi bino boʻshligʻida ham har qanday yomgʻirlar ostida toʻliq ishlash',
        'Aqlli monitoring va IoT tizim: Real vaqtda harorat, tok kuchi va isteʻmolni datchiklar orqali kuzatish'
      ]
    },
    specs: {
      length: 'N/A',
      dimensions: '1800 × 750 × 600 mm',
      passengerCapacity: 'Utility Heavy Machinery support',
      batteryType: 'Electric Grid Interface / AC 380V input',
      batteryCapacity: 'Outlet power: max 360kW split',
      chargingTime: 'DC Fast Charge capability',
      motorPower: 'N/A',
      range: 'Efficiency rating: > 96%',
      maxSpeed: 'N/A',
      maxClimbing: 'N/A'
    }
  },
  {
    id: 'traction_motor_ev',
    name: {
      zh: 'CAMBELL 全时高效永磁同步驱动电机与变频电控',
      en: 'CAMBELL High Efficiency PMSM Traction Motor & Inverter',
      uz: 'CAMBELL PMSM Sinxron tortish elektr dvigateli va inverter tizimi'
    },
    modelCode: 'CAMBELL-MOT-Y245',
    category: 'motor_elektron',
    image: '/src/assets/images/traction_motor_1781585154801.jpg',
    badge: {
      zh: '核心动力',
      en: 'Flagship Motor',
      uz: 'Kuch Tizimi'
    },
    description: {
      zh: '专门为大型新能源重中型巴士研发的高速大扭矩永磁同步驱动电机。拥有高达98.5%的超高转换效率，最高转速达3500rpm，支持超强动力转换，扭矩转换迅猛平稳，是全天候车辆的核心大心脏。',
      en: 'Advanced design high-rpm permanent magnet synchronous motor (PMSM). Delivers massive torque for heavy-duty hybrid and solid EV transit fleets, complete with variable frequency controls.',
      uz: 'Gansu kompaniyasining ogʻir yuk tashish avtobuslari uchun maxsus ishlab chiqilgan yuqori aylanma bosimli doimiy magnitli sinxron elektr dvigateli (PMSM). Yuqori samaradorlik 98.5% gacha yetadi, oʻta mustahkam va ishonchli.'
    },
    tagline: {
      zh: '瞬发大扭矩 98.5%电电转化高效驱动客车征服复杂路面',
      en: '98.5% Ultra-High Mechanical Transformation Efficiency: Pure Power for Mountain Trails',
      uz: '98.5% ulkan unumdorlik va togʻli hududlarda qiyinchiliksiz aylanadigan drayver'
    },
    keyFeatures: {
      zh: [
        '超高能耗转换：采用特殊铜排扁线绕组技术，高效工作区宽大，省电8%以上',
        '高防护防爆外壳：一体化合金锻压，IP68防风沙及防绝缘短路损坏',
        '先进矢量电控变频：高频IGBT模块无级变频，加速平顺无顿挫',
        '集成制动能量回收：在车辆减速、刹车时，充当发电机安全向电池反向反冲电能'
      ],
      en: [
        'Flat-wire stator slots: Exquisite cooper windings reduce thermal emission, boosting efficiency by 8%',
        'Seamless Al-Alloy forged housing: Robust IP68 casing completely eliminates internal dust ingress',
        'State-of-the-art vector inverter: Variable IGBT controls provide smooth jerk-free acceleration curves',
        'Active Regenerative braking: Recovers over-run energy dynamically, feeding current back into the batteries'
      ],
      uz: [
        'Mis simli stator oʻrashlari: Issiqlik ajralishini kamaytirish evaziga qoʻshimcha 8% energiya tejaydi',
        'Aluminiy qotishmali butun quyma korpus: IP68 toʻliq himoya darajasi barcha turdagi changlardan himoya qiladi',
        'Silliq harakat boshqaruvi: Ilgʻor vektorli IGBT inverter tizimi evaziga avtobus bir tekis va tebranishlarsiz tezlashadi',
        'Regenerativ tormozlash tizimi: Avtobus toʻxtash vaqtida hosil boʻlgan kinetik energiyani qayta akkumulyatorga zaryadlab beradi'
      ]
    },
    specs: {
      length: 'N/A',
      dimensions: '580 × 440 × 450 mm',
      passengerCapacity: 'Heavy duty motor housing',
      batteryType: 'Works with 550V - 750V packs',
      batteryCapacity: 'Rated voltage: 600V AC',
      chargingTime: 'N/A',
      motorPower: '150 kW Rated / 245 kW Peak power',
      range: 'Peak Torque: 2800 N·m',
      maxSpeed: 'Max RPM: 3500 r/min',
      maxClimbing: 'Climb efficiency verified > 25%'
    }
  },
  {
    id: 'gt_tijorat_co_gold',
    name: {
      zh: 'CAMBELL 凯姆贝尔 GTQ6600BEV 纯电动轻客商商务车',
      en: 'CAMBELL Premium Pure Electric Commercial Shuttle Coaster',
      uz: 'tijorat transport vositasi'
    },
    modelCode: 'GTQ6600BEV',
    category: 'tijorat',
    subCategory: 'tijorat',
    image: '/src/assets/images/tijorat_vositasi_gold_1781585824578.jpg',
    badge: {
      zh: '尊享接待',
      en: 'Executive Coaster',
      uz: 'Biznes-Klass'
    },
    description: {
      zh: '专为高端商旅接待、政企通勤和高端酒店摆渡定制的纯电动商务客车。舒适静谧的车舱配备豪华皮质人体工学座椅，强力静音空调，多级减震，让每一次出行都尊享平稳和豪华。',
      en: 'Tailored for premium business tours, corporate commute, and luxury airport transfer. The ultra-silent cabin features leather ergonomic seats, multi-stage air suspension, and optimized climate controls.',
      uz: 'Yuqori martabali mehmonlar, delegatsiyalar, korporativ sayohatlar va aeroport transfer xizmati uchun yaratilgan hashamatli biznes-klass kichik elektr avtobusi. Shovqindan toʻliq izolyatsiyalangan salon va yumshoq osma pnevmo-tizim.'
    },
    tagline: {
      zh: '尊贵领航 智雅从容商旅标杆',
      en: 'Silent Elegance: Redefining Premium Executive Transports',
      uz: 'Sokin dabdaba: Biznesingiz uchun eng oliy darajadagi qulaylik'
    },
    keyFeatures: {
      zh: [
         '全时静音车舱：整车主动隔音降噪工艺，高速行驶中仍低于55分贝',
         '尊享平稳体验：配备前后复合空气悬架，多级液压阻尼减振隔绝颠簸',
         '航空级豪华配置：头等舱全真皮包裹座椅，带无线充及USB快充电口',
         '超级安全防护：搭载全套高能量密度电池，全车身配备主/被动碰撞预警'
      ],
      en: [
         'Acoustic-Sealed Cabin: Integrated noise isolation tech maintains interior sound under 55dB at highways',
         'Pneumatic Smoothness: Front and rear air-ride suspension with variable hydraulic dampers filters bumps',
         'Aviation Interior Style: Luxurious wrapping single executive seats with individual wireless charging',
         'Holistic Security Array: Robust LFP chemistry coupled with comprehensive ADAS collision guards'
      ],
      uz: [
         'Ovozdan mukammal izolyatsiya: Korpus va shassida qoʻllangan maxsus qatlamlar evaziga salonda shovqin mutlaqo yoʻq',
         'Yumshoq pnevmo-tizim: Old va orqa pnevmo-pistonlar yoʻldagi barcha notekisliklarni toʻliq yutadi',
         'Biznes-klass salon: Sifatli charm oʻrindiqlar, simsiz quvvatlash stansiyasi va USB drossellari',
         'Faol xavfsizlik datchigi: ADAS toʻqnashuv xavfidan ogohlantirish va chiziqni nazorat qilish tizimi'
      ]
    },
    specs: {
      length: '6.0m',
      dimensions: '5995 × 2040 × 2630 mm',
      passengerCapacity: '10-19 Seats configured',
      batteryType: 'LFP High Density Pack with thermal control',
      batteryCapacity: '110 kWh',
      chargingTime: '50 Mins DC Flash (20%-80%)',
      motorPower: '120 kW Rated / 200 kW Peak',
      range: '310 km (Intercity luxury cruise)',
      maxSpeed: '120 km/h',
      maxClimbing: '26%'
    }
  },
  {
    id: 'gt_logistika_v5',
    name: {
      zh: 'CAMBELL-V5 纯电动重载厢式运输车',
      en: 'CAMBELL V5 Heavy Duty Electric Cargo Box Truck',
      uz: 'Logistika vositasi - V5'
    },
    modelCode: 'GTQ5042XXY-V5',
    category: 'tijorat',
    subCategory: 'logistika',
    image: '/src/assets/images/logistika_v5_truck_1781585845968.jpg',
    badge: {
      zh: '货运王牌',
      en: 'Box Cargo Titan',
      uz: 'Heavy Duty Truck'
    },
    description: {
      zh: '兰州广通纯电动中型厢式货车，是城际干线重载物流、大型电商仓储货运、工业接驳的战略级产品。大体量金属货舱，抗压加宽纵梁，无惧超长负重，动力强悍。',
      en: 'Lanzhou Guangtong solid middle-weight electric box truck designed with a spacious metal closed box, reinforced steel double-axle chassis to transport industrial loads with premium safety.',
      uz: 'Sanoat yuklarini tashish, yirik logistik markazlar va shaharlararo yuk tashish uchun tayanuvchi yirik yopiq metall furgonli yuk mashinasi. Mustahkamlangan dual-shassi va LFP akkumulyatori.'
    },
    tagline: {
      zh: '钢铁之翼 绿色物流的高效大将军',
      en: 'Freight Dominance: Delivering High Volume at Zero Fuel Cost',
      uz: 'Yuk tashish giganti: Yoqilgʻi xarajatlarisiz eng yuqori unumdorlik'
    },
    keyFeatures: {
      zh: [
         '加固双层刚性底盘：高频冷冲压无缝焊接钢板，抗扭矩性能提升35%',
         '大胃王货舱：货舱长达4.2米，最大装载容积达16立方米，满足各类堆垛',
         '超级热泵电池包：高容量全工况液冷电池组，无惧极地酷暑与高寒衰减',
         '双后桥制动卡钳：气刹双回路控制配防抱死EPS系统，湿滑路面重载紧急制动稳妥'
      ],
      en: [
         'Reinforced Heavy Chassis: Cold-pressed high-strength seamless steel chassis, torsion stiffness up by 35%',
         'Spacious Cargo Holds: 4.2m cargo length with huge 16 cubic meters storage volume fits all industrial pallets',
         'Thermal Control Liquid Batteries: Smart active fluid liquid cooling, resists high elevation freeze climate',
         'Dual-Circuit Air Brakes: Complete double-chuckle pneumatic brake with ABS & EPS for complete braking safety'
      ],
      uz: [
         'Oʻta mustahkam shassi: Sovuq holda quyilgan qattiq metall va chidamlilik darajasi 35% koʻproq',
         'Ulkan hajmli yukxona: 4.2 metrli furgon uzunligi va jami 16 m³ hajm har qanday mahsulotlarni joylash imkonini beradi',
         'Smart suyuqlik sovutish tizimi: Akkumulyator haddan ortiq qizib ketish yoki sovuqdan toʻliq muhofaza qilingan',
         'Pnevmatik tormoz sxemasi: ABS va EPS barqarorlik tizimlari yuk toʻliq holatda ham xavfsiz toʻxtashni taʻminlaydi'
      ]
    },
    specs: {
      length: '6.0m',
      dimensions: '5995 × 2160 × 3150 mm',
      passengerCapacity: '3 Persons front cabin',
      batteryType: 'LFP Modular Battery with Liquid Warming Plate',
      batteryCapacity: '120 kWh',
      chargingTime: '55 Mins DC Quick Charge (20%-80%)',
      motorPower: '110 kW Rated / 185 kW Peak',
      range: '280 km (Heavy cargo duty)',
      maxSpeed: '90 km/h',
      maxClimbing: '24%'
    }
  },
  {
    id: 'gt_logistika_v3',
    name: {
      zh: 'CAMBELL-V3 纯电动城市配送货van车',
      en: 'CAMBELL V3 Agile Urban Logistics Electric Van',
      uz: 'Logistika vositasi - V3'
    },
    modelCode: 'GTQ5031XXY-V3',
    category: 'tijorat',
    subCategory: 'logistika',
    image: '/src/assets/images/logistika_v3_van_1781585867617.jpg',
    badge: {
      zh: '灵动先锋',
      en: 'Speedy Delivery',
      uz: 'Tezkor Furgon'
    },
    description: {
      zh: '针对现代快递配送、冷链保鲜、同城小件速递精心优化的灵动纯电动货拉拉车型。具有极小的转弯半径，窄路通过率极佳，采用超低地台大滑门，让货物搬运轻松简单。',
      en: 'The nimble light electric transport van developed for courier delivery, cold fresh chain, and small product delivery. Small turning radius meets narrow city corridors easily. Double side slides allow effortless loading.',
      uz: 'Chaqqon va mukammal shahar kuryerligi uchun yaratilgan shinam elektr furgon. Kichik tormozlanish va burilish radiusi tufayli tor shahar koʻchalarida ham bemalol harakatlanadi. Ikkita yon slayd eshikka ega.'
    },
    tagline: {
      zh: '穿街引线 城配配送的得力金星',
      en: 'Swift logistics: Maximum fuel savings for final-mile shipping operations',
      uz: 'Kuryer yordamchisi: Ish samaradorligini va vaqtni maksimal tejash'
    },
    keyFeatures: {
      zh: [
         '极佳通过性：2.1米超低整车高度，轻松驶入地下车库，通过桥洞无忧',
         '超级装卸舒适：一侧宽达0.9米的超大滑拉门配对开180°尾门，装卸极致轻松',
         '超低行驶每公里电耗：仅耗电0.12度每公里，比同级别燃油车节省85%营运开销',
         '智慧互联驾驶舱：配备倒车影像，一键启动，蓝牙通话以及高强度安全防撞吸能盒'
      ],
      en: [
         'Perfect Access Height: Under 2.1m total height, easily logs into underground car parking, no low clearances risks',
         'Ergonomic Loading: Double slide side doors coupled with 180° rear doors ensure seamless rapid cargo dispatch',
         'Ultra-Low Consumption: Consumes only 0.12 kWh electricity per kilometer, saving 85% run expense versus combustion',
         'Intelligent Driver Environment: Integrated backward view camera, Bluetooth control, push-to-start and safety force-absorption cabin'
      ],
      uz: [
         'Past korpus profili: Jami balandligi 2.1 metrdan kam, bemalol er osti mashinalar toʻxtash joylariga kura oladi',
         'Ergonomik slayd tizim: 0.9 metrli yon slayd eshik va 180 gradusga ochiladigan orqa eshiklar yuqori tezlikda yuk tushirishni taʻminlaydi',
         'Minimal sarf: Bir kilometrga bor-yoʻgʻi 0.12 Kilovatt tok sarflaydi. Yoqilgʻili mashinalardan 85% koʻproq foyda',
         'Aqlli orqa kamera vizuali: Salon displeyiga ulangan orqa datchik kameralar va Bluetooth simsiz ulanish drayvi'
      ]
    },
    specs: {
      length: '5.1m',
      dimensions: '5120 × 1850 × 1980 mm',
      passengerCapacity: '2 Persons front cabin',
      batteryType: 'LFP Safe Traction Pack',
      batteryCapacity: '64 kWh',
      chargingTime: '40 Mins DC fast charge (20%-80%)',
      motorPower: '80 kW Peak',
      range: '235 km (Optimized urban cycle)',
      maxSpeed: '100 km/h',
      maxClimbing: '22%'
    }
  }
];

export const STATS = [
  {
    value: '15',
    unit: 'Min',
    label: { zh: '最快钛酸锂(LTO)充电时间', en: 'Fastest LTO Recharge Time', uz: 'Eng tezkor LTO quvvatlash' }
  },
  {
    value: '0',
    unit: 'CO₂',
    label: { zh: '整车尾气碳排放比例', en: 'Tailpipe Carbon Emissions', uz: 'Emissiya miqdori' }
  },
  {
    value: '25,000+',
    unit: 'Cycles',
    label: { zh: '钛酸锂动力电池长寿命', en: 'LTO Charging Lifespan', uz: 'Akkumulyator resurs drayveri' }
  },
  {
    value: '500+',
    unit: 'Km',
    label: { zh: '未来氢燃料客车长续航', en: 'Hydrogen Hybrid Max Range', uz: 'Maksimal bosib oʻtish masofasi' }
  }
];

export const DICTIONARY: TranslationDictionary = {
  welcomeHeader: {
    zh: '兰州广通新能源汽车 | 官方网站精品展示',
    en: 'Lanzhou Guangtong New Energy Automobile | Official Catalogue',
    uz: 'Lanzhou Guangtong Yangi Energiya Avtobuslari | Rasmiy Katalogi'
  },
  hotline: {
    zh: '服务咨询热线：0931-2917551',
    en: 'Hotline Support: +86-931-2917551',
    uz: 'Aloqa operatorlari: +86-931-2917551'
  },
  companyName: {
    zh: '兰州广通新能源汽车有限公司',
    en: 'Lanzhou Guangtong New Energy Automobile Co., Ltd.',
    uz: 'Lanzhou Guangtong Yangi Energiya Avtomobil MCHJ'
  },
  subtitle: {
    zh: '致力于世界级先进清洁能源商用客车的研发与智造。10.5米纯电动黄金车型 class3=17 核心重构版。',
    en: 'Dedicated to world-class R&D and advanced manufacturing of clean energy commercial buses. Core replica featuring 10.5m Gold-standard Class3=17 transit vehicles.',
    uz: 'Jahon darajasidagi yangi energiya va vodorod texnologiyasiga tayanuvchi zamonaviy shahar avtobuslarini ishlab chiqarish markazi. Class3=17 muhandislik replikasi.'
  },
  allProducts: {
    zh: '产品大厅',
    en: 'Product Discovery Showroom',
    uz: 'Avtobuslar zali'
  },
  filterProps: {
    zh: '动力架构过滤',
    en: 'Propulsion Type',
    uz: 'Dvigatel turi'
  },
  lengthFilter: {
    zh: '车身尺寸筛选',
    en: 'Length Filter',
    uz: 'Uzunlik boʻyicha saralash'
  },
  allLengths: {
    zh: '全部尺寸',
    en: 'All Lengths',
    uz: 'Barcha uzunliklar'
  },
  viewDetails: {
    zh: '查看车辆详情',
    en: 'View Specs Details',
    uz: 'Texnik pasportini koʻrish'
  },
  requestQuote: {
    zh: '询盘/获取报价',
    en: 'Inquire & Request Offer',
    uz: 'Narxni soʻrash / Buyurtma'
  },
  close: {
    zh: '关闭',
    en: 'Close',
    uz: 'Yopish'
  },
  technicalSpecifications: {
    zh: '整车核心技术参数',
    en: 'Technical Specifications Sheet',
    uz: 'Texnik xarakteristika jadvali'
  },
  specLength: { zh: '车身长度', en: 'Vehicle Length', uz: 'Avtobus uzunligi' },
  specDimensions: { zh: '整车长×宽×高', en: 'Full Dimensions', uz: 'Gabarit oʻlchamlari' },
  specCapacity: { zh: '核载人数 / 座位数', en: 'Passenger Seating Capacity', uz: 'Yoʻlovchilar sigʻimi / Oʻrindiqlar' },
  specBatteryType: { zh: '电池技术路线', en: 'Battery System Chemistry', uz: 'Akkumulyator turi' },
  specBatteryCapacity: { zh: '电池额定电量', en: 'Battery Capacity Pack', uz: 'Akkumulyator quvvati (Kvt/s)' },
  specCharging: { zh: '充电耗时/性能', en: 'Recharge Time Performance', uz: 'Quvvatlanish vaqti' },
  specMotor: { zh: '驱动电机峰值功率', en: 'Electric Drive Train Motor', uz: 'Elektr dvigatel quvvati' },
  specRange: { zh: '续航乘用里程', en: 'Curb Range Endurance', uz: 'Maksimal bosib oʻtish masofasi' },
  specSpeed: { zh: '最高设计时速', en: 'Maximum Design Speed', uz: 'Maksimal tezlik' },
  specClimbing: { zh: '最大爬坡坡度', en: 'Maximum Hill Climbing', uz: 'Maksimal qiyalik koʻtarilish burchagi' },
  chargingTitle: {
    zh: '广通新能源钛酸锂(LTO)超快充动态模拟器',
    en: 'LZGT Neo LTO (Lithium Titanate) Quick Charging Simulator',
    uz: 'Lanzhou Guangtong LTO Akkumulyatorini Tez Quvvatlash Simulyatori'
  },
  chargingDesc: {
    zh: '兰州广通特有的高安全性钛酸锂(LTO)快充电池，其可在10-15分钟内完成充电。点击启动，亲自体验极速蓄能的革命性过程！',
    en: 'LZGT signature Lithium Titanate (LTO) battery technology delivers unparalleled quick energy refill within 15 minutes. Press start below to simulation test the rapid SOC charge speed in real-time!',
    uz: 'Lanzhou Guangtong LTO akkumulyatorining ajoyib ustunligi shundaki, unga atigi 10-15 daqiqa ichida toʻliq quvvat topish imkoni berilgan. Start tugmasini bosing va oʻta tez quvvatlanish oqimini koʻring!'
  },
  startChg: { zh: '激活充电', en: 'Initiate Charger', uz: 'Quvvatlashni boshlash' },
  pauseChg: { zh: '暂停蓄能', en: 'Pause Charging', uz: 'Quvvatlashni toʻxtatish' },
  resetChg: { zh: '重置仿真', en: 'Reset Simulator', uz: 'Qayta oʻrnatish' },
  chgState: { zh: '充电桩充电状态', en: 'Charging Pile Status', uz: 'Zaryadlash stansiyasi holati' },
  chgPower: { zh: '充电实时功率', en: 'Active DC Charging Power', uz: 'Haqiqiy quvvatlash kuchi' },
  chgTemp: { zh: '动力组核心温度', en: 'Battery Pack Temperature', uz: 'Akkumulyator harorati' },
  chgCycles: { zh: '模拟器电堆寿命', en: 'Simulated Pack Cycles', uz: 'Sinovlar soni' },
  chgCompleteMsg: {
    zh: '100% 充电完成！用时仅15分钟。可以随时投入长途公交商业运行。',
    en: '100% Fully Charged! Energy replenishing complete. Ready for instant municipal service.',
    uz: '100% Toʻliq quvvatlandi! Quvvatlash tugallandi. Avtobus yoʻnalishga chiqishga toʻliq tayyor!'
  },
  formTitle: {
    zh: '意向采购与产品参数索取',
    en: 'Direct Corporate Catalog & Quote Inquiry',
    uz: 'Ushbu model uchun narx yoki katalog soʻrovnomasi'
  },
  formDesc: {
    zh: '对广通新能源客车感兴趣？请填写下表，我们的全球销售部会在24小时内与您联系，并提供离线 PDF 车辆规范、详细报价。',
    en: 'Interested in LZGT advanced buses? Provide your company credentials below and our overseas commercial department will dispatch digital spec PDFs, structural layouts and custom solutions within 24 hours.',
    uz: 'Avtobus modelimiz sizga maʻqul keldimi? Quyidagi soʻrovnomani toʻldiring va bizning mutaxassislar sizga batafsil narxlar va barcha turdagi PDF fayl hujjatlarini 24 soat ichida yuborishadi.'
  },
  formName: { zh: '贵司负责人姓名', en: 'Contact Officer Name', uz: 'Ismingiz va familiyangiz' },
  formEmail: { zh: '电子邮箱地址', en: 'Corporate Email', uz: 'Elektron pochta manzili' },
  formPhone: { zh: '电话联系方式', en: 'Phone / Telegram Number', uz: 'Telefon yoki telegram raqam' },
  formCompany: { zh: '单位/机构名称', en: 'Company / Organization', uz: 'Korxona yoki tashkilot nomi' },
  formMsg: { zh: '定制与需求说明', en: 'Procurement Requirements details', uz: 'Izoh yoki maxsus talablar' },
  formSubmit: { zh: '提交询盘订单', en: 'Transmit Quote Request', uz: 'Soʻrovnomani yuborish' },
  formSuccess: {
    zh: '感谢您的提交！我们西北总部全球销售团队已经收到您的意向，将通过邮件联系您。',
    en: 'Transmission successful! Our Northwestern export desk will reach out via email shortly.',
    uz: 'Muvaffaqiyatli yuborildi! Markaziy aloqa boʻlimimiz siz bilan tez fursatda elektron pochta orqali bogʻlanadi.'
  },
  formValidationError: {
    zh: '请填写所有带 * 号的必填项。',
    en: 'Please complete all required fields (*).',
    uz: 'Iltimos, barcha yulduzcha (*) belgili maydonlarni toʻldiring.'
  },
  footerAbout: {
    zh: '兰州广通新能源汽车有限公司作为国家高新技术企业、甘肃省战略性新兴产业骨干企业，投身于高寒、高寒、干旱风沙等极端复杂地理天气环境下的新能源电动大巴、氢燃料客车的技术研发。',
    en: 'Lanzhou Guangtong New Energy Automobile Co., Ltd. is a major advanced high-tech enterprise in Gansu province, dedicated to solving cold climate, arid dust, and complex geographic high-elevation vehicle challenges.',
    uz: 'Lanzhou Guangtong Yangi Energiya Avtomobil kompaniyasi ekstremal iqlim, sovuq havo, shamolli qum-qum va yuqori balandlikdagi togʻli hududlar uchun yuqori darajada mos keluvchi elektr avtobuslar ishlab chiqarishga moslashtirilgan davlat tasdigʻidagi korxondir.'
  },
  footerContacts: {
    zh: '陇原基地：甘肃省兰州市新区秦川园区白杨路188号',
    en: 'HQ Factory Base: No. 188 Baiyang Road, Qinchuan Zone, Lanzhou New District, Gansu, PRC',
    uz: 'Zavod manzili: Xitoy, Gansu viloyati, Lanzhou Yangi okrugi, Qinchuan zonasi, Baiyang koʻchasi 188-uy'
  },
  footerCopyright: {
    zh: '© 2026 兰州广通新能源汽车有限公司. 版权所有. 备甘ICP备16003251号',
    en: '© 2026 Lanzhou Guangtong New Energy Automobile Co., Ltd. All Rights Reserved. Gansu ICP 16003251',
    uz: '© 2026 Lanzhou Guangtong New Energy Automobile Co., Ltd. Barcha huquqlar himoyalangan. Gansu ICP 16003251'
  },
  sidebarTitle: {
    zh: '产品分类',
    en: 'Product Categories',
    uz: 'Mahsulot toifalari'
  },
  class3Highlight: {
    zh: '当前正在查看 class3=17 核心公交系列，包含精选10.5米与12米车身长度之纯电/氢能主力黄金公交系列。',
    en: 'You are viewing the core "class3=17" catalog containing high-efficiency 10.5m & 12m Pure Electric & Hydrogen power models.',
    uz: 'Siz hozir "class3=17" toifasini koʻrmoqdasiz. Bu toifaga 10.5 metrlik va 12 metrlik shahar elektr/vodorod shahar avtobuslari kiradi.'
  }
};

import {
  AssessmentInput,
  AssessmentReport,
  CompetitorCard,
  RoadmapPhase,
  TrafficLightItem,
  TrafficLightLevel,
} from "@/types/assessment";

export const DEMO_PLASCO_INPUT: AssessmentInput = {
  businessName: "فروشگاه پلاسکو",
  ownerName: "مسعود فقیهی",
  industry: "فروشگاه لوازم پلاستیکی، آشپزخانه و جهیزیه (پلاسکو)",
  city: "شیراز",
  targetMarket: "local",
  yearsInBusiness: "above15",
  teamSize: "1to3",
  salesModel: "in_person",
  customerType: "b2c",
  websiteStatus: "none",
  socialStatus: "semi_active",
  adsExperience: "none",
  discoveryChannel: "reputation",
  websiteRequestFreq: "yes_sometimes",
  primaryGoal: "local_customers",
  instagramHandle: "Plascopedar",
  competitors: "پلاسکو کالکشن، پلاسکو پردیس، پلاست تهران",
};

export const SAMPLE_PLASCO_REPORT: AssessmentReport = {
  isSampleDemo: true,
  keywordGap: [
    { keyword: "پلاسکو در شیراز", intent: "خرید فوری", competition: "متوسط", competitorPresent: true },
    { keyword: "پلاسکو جهیزیه شیراز", intent: "خرید فوری", competition: "کم", competitorPresent: false },
    { keyword: "نظم دهنده یخچال و کابینت شیراز", intent: "خرید فوری", competition: "کم", competitorPresent: false },
    { keyword: "ظروف پلاستیکی پیک نیک شیراز", intent: "خرید فوری", competition: "کم", competitorPresent: false },
    { keyword: "خرید لوازم پلاستیکی آشپزخانه", intent: "اطلاعاتی", competition: "زیاد", competitorPresent: true },
  ],
  opportunity: {
    monthlySearchesMin: 600,
    monthlySearchesMax: 1200,
    contactRateMin: 3,
    contactRateMax: 6,
    note: "برآورد محافظه‌کارانه برای جستجوهای محلی پلاسکو و جهیزیه در شیراز؛ عدد دقیق به رتبه و کیفیت اجرا بستگی دارد.",
  },
  archetypeTitle: "کسب‌وکار اصیل و باسابقه با پتانسیل جهش محلی",
  businessSummary: {
    name: "فروشگاه پلاسکو",
    ownerOrManager: "مسعود فقیهی",
    industry: "لوازم پلاستیکی، آشپزخانه و جهیزیه",
    city: "شیراز",
    yearsLabel: "۲۷ سال سابقه فیزیکی",
    teamLabel: "تیم ۳ نفره",
    instagramHandle: "Plascopedar",
    websiteLabel: "بدون وب‌سایت",
  },
  score: 38,
  scoreBadge: "ظرفیت رشد بسیار بالا",
  scoreSummary:
    "سرمایه اصلی شما یعنی ۲۷ سال اعتبار واقعی در بازار شیراز هنوز به دارایی دیجیتال تبدیل نشده است. با یک استراتژی مرحله‌ای و کم‌هزینه، بدون فشار به تیم ۳ نفره می‌توانید سهم بزرگی از جستجوهای محلی را تصاحب کنید.",
  trafficLights: [
    {
      id: "history",
      label: "سابقه بازار",
      level: "green",
      statusText: "بسیار قوی",
      note: "۲۷ سال سابقه فیزیکی مستمر؛ مزیت رقابتی کمیاب در برابر فروشگاه‌های نوپا",
    },
    {
      id: "trust",
      label: "اعتبار محلی",
      level: "green",
      statusText: "بسیار قوی",
      note: "اعتماد بالای مشتریان حضوری و معرفی دهان‌به‌دهان در سطح شهر شیراز",
    },
    {
      id: "instagram",
      label: "شبکه‌های اجتماعی",
      level: "yellow",
      statusText: "متوسط",
      note: "حضور در اینستاگرام با پیج Plascopedar، نیازمند نظم محتوایی و قیف اتصال به خرید",
    },
    {
      id: "website",
      label: "وب‌سایت و کاتالوگ",
      level: "red",
      statusText: "نیاز به اقدام",
      note: "نداشتن وب‌سایت باعث از دست رفتن مشتریانی است که قبل از مراجعه حضوری جستجو می‌کنند",
    },
    {
      id: "seo",
      label: "حضور در گوگل (SEO)",
      level: "red",
      statusText: "نیاز به اقدام",
      note: "عدم نمایش در نتایج جستجوی محلی مانند «پلاسکو در شیراز» و Google Maps",
    },
    {
      id: "ads",
      label: "تبلیغات دیجیتال",
      level: "red",
      statusText: "نیاز به اقدام",
      note: "عدم استفاده هدفمند از کمپین‌های جستجوی محلی و تبلیغات هدفمند",
    },
  ],
  phase1Recommendation: {
    badge: "استراتژی پیشنهادی فاز اول (متناسب با تیم ۳ نفره)",
    headline:
      "فاز اول: سئوی محلی شیراز + تبدیل ۲۷ سال سابقه به سیگنال اعتماد + کاتالوگ آنلاین؛ نه فروشگاه اینترنتی سنگین از روز اول!",
    rationale:
      "راه‌اندازی یک فروشگاه اینترنتی بزرگ با صدها قلم کالای خرد، برای یک تیم ۳ نفره که تمرکز اصلی آن فروش حضوری است، در ماه‌های اول منجر به بحران انبارگردانی، به‌روزرسانی قیمت و ارسال مرسوله می‌شود. مسیر هوشمندانه، جذب جستجوهای آماده خرید در شیراز و هدایت آن‌ها به کاتالوگ کاربردی و مراجعه حضوری یا سفارش واتساپی است.",
    whyNotHeavyStore:
      "فروشگاه اینترنتی سنگین از روز اول نیازمند ادمین تمام‌وقت، اتصال لحظه‌ای قیمت صدها کالا و پشتیبانی ارسال است که با تیم ۳ نفره هم‌خوانی ندارد.",
    recommendedFunnel: [
      "فروشگاه فیزیکی",
      "پیدا شدن در گوگل (سئوی محلی)",
      "اعتمادسازی با سابقه ۲۷ ساله",
      "کاتالوگ دسته‌بندی‌شده کاربردی (آشپزخانه، جهیزیه، نظم‌دهنده)",
      "فروش آنلاین مرحله‌ای",
    ],
  },
  strengths: [
    "۲۷ سال سابقه واقعی در صنف پلاسکو که در فضای آنلاین به سادگی قابل کپی نیست",
    "شناخت عمیق از نیاز مشتری حضوری، سلیقه بازار و محصولات پرفروش جهیزیه و آشپزخانه",
    "داشتن هسته اولیه حضور در اینستاگرام (Plascopedar) برای نمایش محصولات جدید",
    "چابکی تیم ۳ نفره در تصمیم‌گیری سریع بدون بوروکراسی پیچیده",
  ],
  improvementAreas: [
    "نامرئی بودن در گوگل برای مشتریانی که عبارت «پلاسکو در شیراز» را جستجو می‌کنند",
    "نبود کاتالوگ آنلاین دسته‌بندی‌شده تا مشتری قبل از مراجعه، تنوع اجناس را ببیند",
    "تبدیل نشدن اعتبار ۲۷ ساله به نشانه‌های اعتماد دیجیتال (لوکیشن تاییدشده، نظرات مشتریان، صفحه درباره ما)",
    "وابستگی کامل به مراجعه حضوری و معرفی شفاهی در محدوده جغرافیایی فعلی",
  ],
  competitors: [
    {
      name: "پلاسکو کالکشن",
      tag: "رقیب سئومحور",
      strength: "قدرت بالا در سئوی دسته‌بندی محصولی و جذب ترافیک از جستجوهای عمومی",
      weaknessOrGap: "ضعف محسوس در برندینگ محلی و حس اعتماد فروشگاه باسابقه شهری",
      ourOpportunity:
        "تمرکز روی کوئری‌های محلی شیراز و ترکیب آن با اعتبار واقعی ۲۷ ساله فروشگاه مسعود فقیهی",
    },
    {
      name: "پلاسکو پردیس",
      tag: "ساختار لندینگ",
      strength: "طراحی لندینگ‌پیج‌های مستقل برای هر دسته محصول و نرخ پرش پایین",
      weaknessOrGap: "دسته‌بندی صرفاً فنی و نام‌محور به جای دسته‌بندی بر اساس نیاز روزمره مشتری",
      ourOpportunity:
        "ساخت کاتالوگ نیاز-محور با دسته‌های جذاب: «پکیج جهیزیه»، «نظم‌دهنده یخچال و کابینت» و «لوازم پیک‌نیک»",
    },
    {
      name: "پلاست تهران",
      tag: "اعتمادسازی دیجیتال",
      strength: "استفاده حرفه‌ای از نمادهای اعتماد، نظرات خریداران و نمایش حرفه‌ای موجودی",
      weaknessOrGap: "فاصله جغرافیایی برای مشتریان شیرازی که تحویل سریع یا بازدید حضوری می‌خواهند",
      ourOpportunity:
        "اهرم کردن ۲۷ سال سابقه فیزیکی، تضمین اصالت کالا و امکان تحویل فوری یا مراجعه حضوری در شیراز",
    },
    {
      name: "نتایج محلی گوگل «پلاسکو در شیراز»",
      tag: "فرصت طلایی نقشه",
      strength: "کاربران این جستجو بالاترین نیت خرید فوری و مراجعه حضوری را دارند",
      weaknessOrGap: "بسیاری از رقبای سنتی شیراز پروفایل ناقص و بدون تصویر و نظر در Google Maps دارند",
      ourOpportunity:
        "تصاحب رتبه‌های اول نقشه گوگل و نتایج محلی ظرف ۶۰ تا ۹۰ روز با بهینه‌سازی پروفایل و لندینگ محلی",
    },
  ],
  roadmap: [
    {
      phase: "فاز ۱",
      timeframe: "ماه اول و دوم",
      title: "تثبیت حضور محلی و ساخت ویترین اعتماد",
      focus: "دیده شدن در شیراز + تبدیل اعتبار ۲۷ ساله به دارایی دیجیتال",
      actions: [
        "ثبت و بهینه‌سازی حرفه‌ای موقعیت فروشگاه در Google Maps و نشان/بلد با نام استاندارد و عکس‌های واقعی",
        "راه‌اندازی وب‌سایت سبک و سریع (کاتالوگ‌محور، نه فروشگاه سنگین) با تمرکز بر صفحه داستان ۲۷ ساله فروشگاه",
        "طراحی ۴ دسته اصلی نیاز-محور: لوازم آشپزخانه، پکیج جهیزیه، نظم‌دهنده‌ها و لوازم پیک‌نیک",
      ],
    },
    {
      phase: "فاز ۲",
      timeframe: "ماه سوم و چهارم",
      title: "سئوی محلی و اتصال اینستاگرام به کاتالوگ",
      focus: "جذب جستجوهای آماده خرید و سامان‌دهی سفارش‌های واتساپی",
      actions: [
        "ساخت لندینگ‌پیج‌های بهینه‌شده برای کلمات کلیدی محلی مانند «پلاسکو در شیراز» و «پلاسکو جهیزیه شیراز»",
        "اتصال بایو و استوری‌های پیج Plascopedar به صفحات کاتالوگ سایت برای کاهش سوالات تکراری دایرکت",
        "جمع‌آوری هدفمند امتیاز و نظر (Review) از مشتریان وفادار حضوری در گوگل مپ",
      ],
    },
    {
      phase: "فاز ۳",
      timeframe: "ماه پنجم و ششم",
      title: "فروش آنلاین مرحله‌ای و کمپین‌های فصلی",
      focus: "فعال‌سازی درگاه پرداخت تنها برای پکیج‌های پرفروش و کمپین محلی",
      actions: [
        "فعال‌سازی خرید مستقیم آنلاین صرفاً برای ۲۰ تا ۳۰ محصول پرفروش و پکیج‌های آماده جهیزیه",
        "اجرای کمپین جستجوی محلی (Google Ads) با بودجه کنترل‌شده برای مناسبت‌ها و خرید جهیزیه",
        "تحلیل داده‌های فروش آنلاین و تصمیم‌گیری برای گسترش تدریجی سبد کالا بدون فشار به تیم ۳ نفره",
      ],
    },
  ],
  moneyKeywords: [
    "پلاسکو در شیراز",
    "بهترین پلاسکو شیراز",
    "خرید لوازم پلاستیکی آشپزخانه شیراز",
    "پلاسکو جهیزیه شیراز",
    "فروشگاه نظم دهنده یخچال و کابینت شیراز",
    "مرکز فروش ظروف پلاستیکی و پیک نیک شیراز",
  ],
};

function getYearsLabel(y: AssessmentInput["yearsInBusiness"]): string {
  switch (y) {
    case "under1":
      return "زیر ۱ سال سابقه";
    case "1to5":
      return "۱ تا ۵ سال سابقه";
    case "5to15":
      return "۵ تا ۱۵ سال سابقه";
    case "above15":
      return "بالای ۱۵ سال سابقه";
  }
}

function getTeamLabel(t: AssessmentInput["teamSize"]): string {
  switch (t) {
    case "1to3":
      return "تیم ۱ تا ۳ نفره";
    case "4to10":
      return "تیم ۴ تا ۱۰ نفره";
    case "above10":
      return "تیم بالای ۱۰ نفر";
  }
}

function getWebsiteLabel(w: AssessmentInput["websiteStatus"]): string {
  switch (w) {
    case "none":
      return "بدون وب‌سایت";
    case "old_no_traffic":
      return "وب‌سایت قدیمی بدون ورودی";
    case "active_pro":
      return "وب‌سایت فعال و حرفه‌ای";
  }
}

export function generateAssessmentReport(input: AssessmentInput): AssessmentReport {
  const cleanName = input.businessName.trim() || "کسب‌وکار شما";
  const cleanCity = input.city.trim() || "شهر شما";
  const cleanIndustry = input.industry.trim() || "حوزه فعالیت شما";

  // Check if user filled the exact Plasco demo case
  if (
    cleanName.includes("پلاسکو") &&
    cleanCity.includes("شیراز") &&
    input.yearsInBusiness === "above15" &&
    input.teamSize === "1to3" &&
    input.websiteStatus === "none"
  ) {
    return {
      ...SAMPLE_PLASCO_REPORT,
      isSampleDemo: false,
      businessSummary: {
        ...SAMPLE_PLASCO_REPORT.businessSummary,
        name: cleanName,
        ownerOrManager: input.ownerName?.trim() || "مسعود فقیهی",
        instagramHandle: input.instagramHandle?.trim() || "Plascopedar",
      },
    };
  }

  // Rule-based scoring
  let score = 20;
  if (input.yearsInBusiness === "above15") score += 16;
  else if (input.yearsInBusiness === "5to15") score += 12;
  else if (input.yearsInBusiness === "1to5") score += 7;
  else score += 3;

  if (input.websiteStatus === "active_pro") score += 24;
  else if (input.websiteStatus === "old_no_traffic") score += 10;

  if (input.socialStatus === "active_instagram") score += 15;
  else if (input.socialStatus === "semi_active") score += 8;

  if (input.adsExperience === "google_and_seo") score += 16;
  else if (input.adsExperience === "instagram_only") score += 7;

  if (input.discoveryChannel === "google") score += 6;
  else if (input.discoveryChannel === "reputation") score += 4;

  if (input.teamSize === "above10") score += 3;
  score = Math.min(95, Math.max(18, score));

  const scoreBadge =
    score >= 70
      ? "آماده مقیاس‌دهی (Scale)"
      : score >= 45
      ? "پتانسیل رشد سریع"
      : "ظرفیت رشد بسیار بالا";

  // Traffic Light evaluation
  const historyLevel: TrafficLightLevel =
    input.yearsInBusiness === "above15" || input.yearsInBusiness === "5to15"
      ? "green"
      : input.yearsInBusiness === "1to5"
      ? "yellow"
      : "red";

  const trustLevel: TrafficLightLevel =
    input.discoveryChannel === "reputation" ||
    input.yearsInBusiness === "above15" ||
    input.yearsInBusiness === "5to15"
      ? "green"
      : input.salesModel === "hybrid"
      ? "yellow"
      : "yellow";

  const websiteLevel: TrafficLightLevel =
    input.websiteStatus === "active_pro"
      ? "green"
      : input.websiteStatus === "old_no_traffic"
      ? "yellow"
      : "red";

  const socialLevel: TrafficLightLevel =
    input.socialStatus === "active_instagram"
      ? "green"
      : input.socialStatus === "semi_active"
      ? "yellow"
      : "red";

  const seoLevel: TrafficLightLevel =
    input.adsExperience === "google_and_seo" && input.websiteStatus === "active_pro"
      ? "green"
      : input.discoveryChannel === "google" || input.websiteStatus === "old_no_traffic"
      ? "yellow"
      : "red";

  const adsLevel: TrafficLightLevel =
    input.adsExperience === "google_and_seo"
      ? "green"
      : input.adsExperience === "instagram_only"
      ? "yellow"
      : "red";

  const trafficLights: TrafficLightItem[] = [
    {
      id: "history",
      label: "سابقه بازار",
      level: historyLevel,
      statusText:
        historyLevel === "green"
          ? "بسیار قوی"
          : historyLevel === "yellow"
          ? "متوسط"
          : "نیاز به اقدام",
      note:
        historyLevel === "green"
          ? `${getYearsLabel(input.yearsInBusiness)}؛ پشتوانه عالی برای جلب اعتماد آنلاین`
          : "کسب‌وکار در حال تثبیت جایگاه خود در بازار است و نیازمند اعتمادسازی سریع دیجیتال است",
    },
    {
      id: "trust",
      label: "اعتبار محلی",
      level: trustLevel,
      statusText: trustLevel === "green" ? "بسیار قوی" : "متوسط",
      note:
        trustLevel === "green"
          ? `اعتماد بالای مشتریان ${cleanCity} که باید در گوگل و سایت بازتاب پیدا کند`
          : `ظرفیت بالا برای تبدیل مشتریان راضی ${cleanCity} به نظرات تاییدشده آنلاین`,
    },
    {
      id: "seo",
      label: "حضور در گوگل (SEO)",
      level: seoLevel,
      statusText:
        seoLevel === "green" ? "بسیار قوی" : seoLevel === "yellow" ? "متوسط" : "نیاز به اقدام",
      note:
        seoLevel === "red"
          ? `عدم حضور موثر در جستجوهای مرتبط با «${cleanIndustry} در ${cleanCity}»`
          : "زیرساخت اولیه وجود دارد اما برای تصاحب کلمات پولساز نیازمند بهینه‌سازی هدفمند است",
    },
    {
      id: "website",
      label: "وب‌سایت",
      level: websiteLevel,
      statusText:
        websiteLevel === "green"
          ? "بسیار قوی"
          : websiteLevel === "yellow"
          ? "متوسط"
          : "نیاز به اقدام",
      note:
        websiteLevel === "red"
          ? "نداشتن وب‌سایت باعث از دست رفتن مشتریانی می‌شود که در گوگل به دنبال شما هستند"
          : websiteLevel === "yellow"
          ? "سایت فعلی نیاز به بازطراحی تجربه کاربری (UX) و ساختار تبدیل مشتری دارد"
          : "پایگاه وب حرفه‌ای آماده پذیرش ترافیک سئو و کمپین‌های تبلیغاتی",
    },
    {
      id: "instagram",
      label: "شبکه‌های اجتماعی",
      level: socialLevel,
      statusText:
        socialLevel === "green"
          ? "بسیار قوی"
          : socialLevel === "yellow"
          ? "متوسط"
          : "نیاز به اقدام",
      note:
        socialLevel === "green"
          ? "حضور فعال در اینستاگرام؛ وقت آن است که فالوورها به پایگاه اختصاصی شما متصل شوند"
          : socialLevel === "yellow"
          ? "فعالیت پراکنده در شبکه‌های اجتماعی نیازمند نظم و اتصال به صفحه محصول است"
          : "نبود حضور اجتماعی فعال؛ تمرکز اولیه می‌تواند روی گوگل + کاتالوگ وب باشد",
    },
    {
      id: "ads",
      label: "تبلیغات دیجیتال",
      level: adsLevel,
      statusText:
        adsLevel === "green" ? "بسیار قوی" : adsLevel === "yellow" ? "متوسط" : "نیاز به اقدام",
      note:
        adsLevel === "red"
          ? "عدم تجربه تبلیغات هدفمند؛ پتانسیل جذب سریع مشتری با گوگل ادز محلی"
          : adsLevel === "yellow"
          ? "تجربه تبلیغات اینستاگرامی وجود دارد؛ ادغام با جستجوی گوگل بازدهی را چند برابر می‌کند"
          : "آشنایی با تبلیغات جستجو؛ آماده بهینه‌سازی نرخ بازگشت سرمایه (ROAS)",
    },
  ];

  // Archetype & Phase-1 Recommendation Engine
  const isTraditionalHighTrust =
    (input.yearsInBusiness === "5to15" || input.yearsInBusiness === "above15") &&
    input.teamSize === "1to3" &&
    input.websiteStatus === "none" &&
    (input.customerType === "b2c" || input.customerType === "both");

  const isInstagramHeavyNoSite =
    input.socialStatus === "active_instagram" && input.websiteStatus !== "active_pro";

  const isExistingSiteOverhaul =
    input.websiteStatus === "old_no_traffic" ||
    (input.websiteStatus === "active_pro" && input.adsExperience !== "google_and_seo");

  let archetypeTitle = "کسب‌وکار آماده رشد ساختاریافته دیجیتال";
  let phase1Recommendation: AssessmentReport["phase1Recommendation"];
  let scoreSummary = "";

  if (isTraditionalHighTrust) {
    archetypeTitle = "کسب‌وکار اصیل و باسابقه با پتانسیل جهش محلی";
    scoreSummary = `تجربه ${getYearsLabel(input.yearsInBusiness)} در ${cleanCity} یک مزیت رقابتی بی‌نظیر است. با توجه به ${getTeamLabel(input.teamSize)}، به جای درگیر شدن با پیچیدگی‌های فنی، باید اعتبار واقعی خود را به ویترین گوگل تبدیل کنید.`;
    phase1Recommendation = {
      badge: `استراتژی اختصاصی ${getTeamLabel(input.teamSize)}`,
      headline: `فاز اول: سئوی محلی ${cleanCity} + تبدیل سابقه به سیگنال اعتماد + کاتالوگ آنلاین؛ نه فروشگاه اینترنتی سنگین از روز اول!`,
      rationale: `برای ${cleanName} با ${getYearsLabel(input.yearsInBusiness)} و ${getTeamLabel(input.teamSize)}، ساخت یک فروشگاه اینترنتی سنگین با درگاه و لجستیک پیچیده از روز اول باعث فرسایش تیم می‌شود. بهترین استراتژی، جذب مشتریان آماده خرید در ${cleanCity} از طریق گوگل و هدایت آن‌ها به کاتالوگ دسته‌بندی‌شده و خرید حضوری یا ثبت سفارش سریع است.`,
      whyNotHeavyStore:
        "مدیریت انبار آنلاین لحظه‌ای، بسته‌بندی و پشتیبانی ارسال انبوه برای تیم ۱ تا ۳ نفره در فاز اول ریسک عملیاتی بالایی دارد.",
      recommendedFunnel: [
        input.salesModel === "in_person" ? "کسب‌وکار حضوری فعلی" : "زیرساخت فروش فعلی",
        `پیدا شدن در گوگل (سئوی محلی ${cleanCity})`,
        `اعتمادسازی با ${getYearsLabel(input.yearsInBusiness)}`,
        "کاتالوگ دسته‌بندی‌شده کاربردی",
        "فروش آنلاین مرحله‌ای",
      ],
    };
  } else if (isInstagramHeavyNoSite) {
    archetypeTitle = "برند فعال شبکه‌های اجتماعی نیازمند پایگاه مستقل وب";
    scoreSummary = `فعالیت خوب شما در اینستاگرام نشان‌دهنده تقاضای بازار است، اما تکیه صرف بر الگوریتم اینستاگرام ریسک بالایی دارد. ایجاد وب‌سایت و جذب ترافیک گوگل، فروش شما را پایدار می‌کند.`;
    phase1Recommendation = {
      badge: "استراتژی تبدیل فالوور به مشتری گوگل و وب‌سایت",
      headline: `فاز اول: راه‌اندازی وب‌سایت/لندینگ تبدیل‌محور + سئوی ${input.targetMarket === "local" ? `محلی ${cleanCity}` : "سراسری"} در کنار اینستاگرام`,
      rationale: `مخاطبان شما در اینستاگرام به دنبال اعتماد و مشاهده سریع محصولات هستند. با راه‌اندازی یک سایت سریع و اتصال لینک بایو به صفحات دسته‌بندی‌شده، هم نرخ تبدیل دایرکت را بالا می‌برید و هم مشتریانی که در گوگل «${cleanIndustry}» را جستجو می‌کنند از دست نمی‌دهید.`,
      whyNotHeavyStore:
        "تمرکز فاز اول باید بر سرعت بارگذاری، نمایش شفاف خدمات/محصولات و ثبت سفارش آسان (یا پرداخت سریع) باشد نه امکانات پیچیده و بلااستفاده.",
      recommendedFunnel: [
        "ترافیک اینستاگرام و گوگل",
        "صفحه فرود و کاتالوگ سریع",
        "اعتمادسازی و نمونه کار / نظرات",
        "ثبت سفارش آنلاین یا مشاوره مستقیم",
      ],
    };
  } else if (isExistingSiteOverhaul) {
    archetypeTitle = "دارای زیرساخت وب نیازمند بازطراحی تجربه کاربری و سئو";
    scoreSummary = `شما گام اول یعنی داشتن وب‌سایت را برداشته‌اید، اما بدون سئو و بهینه‌سازی مسیر کاربر (UX)، سایت عملاً ویترین خاموش است. تمرکز ۶ ماه آینده باید بر جذب ترافیک هدفمند و افزایش نرخ تبدیل باشد.`;
    phase1Recommendation = {
      badge: "استراتژی احیا و بهینه‌سازی نرخ تبدیل (CRO & SEO)",
      headline: `فاز اول: عارضه‌یابی UX/SEO وب‌سایت فعلی + کمپین شکار تقاضا در گوگل (${input.targetMarket === "local" ? cleanCity : "سراسر کشور"})`,
      rationale: `به جای صرف هزینه دوباره برای ساخت سایت از صفر، ابتدا باید گلوگاه‌های فنی، سرعت موبایل و ساختار صفحات فرود سایت فعلی ${cleanName} اصلاح شود تا ترافیک ورودی به سرنخ (Lead) یا فروش واقعی تبدیل شود.`,
      whyNotHeavyStore:
        "افزودن تبلیغات قبل از اصلاح صفحات فرود و تجربه کاربری، تنها باعث هدررفت بودجه تبلیغاتی می‌شود.",
      recommendedFunnel: [
        "جستجوی گوگل و تبلیغات هدفمند",
        "صفحات فرود بهینه‌شده (UX)",
        "سیگنال‌های اعتماد و پاسخ سریع",
        "تبدیل بازدیدکننده به مشتری",
      ],
    };
  } else {
    archetypeTitle = "کسب‌وکار چابک در مسیر ساخت زیرساخت رشد دیجیتال";
    scoreSummary = `با توجه به وضعیت فعلی ${cleanName} در ${cleanCity}، ایجاد هم‌زمان یک ویترین معتبر در گوگل و مسیر ارتباطی شفاف با مشتری، سریع‌ترین بازگشت سرمایه را در ۶ ماه آینده رقم می‌زند.`;
    phase1Recommendation = {
      badge: "استراتژی رشد چابک و کم‌ریسک",
      headline: `فاز اول: تثبیت حضور در گوگل ${input.targetMarket === "local" ? `(${cleanCity})` : "(کشوری)"} + ساختار اعتمادسازی و جذب سرنخ`,
      rationale: `با تمرکز بر ${input.primaryGoal === "local_customers" ? `جذب مشتریان جدید در ${cleanCity}` : input.primaryGoal === "new_markets" ? "ورود به بازارهای جدید" : "افزایش اعتماد و برندسازی"} و متناسب با ${getTeamLabel(input.teamSize)}، ابتدا زیرساخت جذب مشتری از گوگل را می‌سازیم و سپس فروش آنلاین را توسعه می‌دهیم.`,
      whyNotHeavyStore:
        "شروع با ساختار چابک باعث می‌شود بودجه بازاریابی به جای هزینه‌های نگهداری فنی، صرف جذب مشتری واقعی شود.",
      recommendedFunnel: [
        "حضور در جستجوی گوگل",
        "لندینگ معرفی و خدمات",
        "اثبات اعتبار و نمونه‌کار",
        "ارتباط مستقیم / فروش مرحله‌ای",
      ],
    };
  }

  // Strengths & Improvement Areas
  const strengths: string[] = [];
  const improvementAreas: string[] = [];

  if (historyLevel === "green") {
    strengths.push(`${getYearsLabel(input.yearsInBusiness)} و شناخت عملی از نیاز مشتریان ${cleanIndustry}`);
  } else {
    strengths.push("چابکی بالا و انعطاف‌پذیری در پیاده‌سازی استانداردهای مدرن دیجیتال مارکتینگ");
  }

  if (socialLevel === "green") {
    strengths.push("حضور فعال در اینستاگرام و ارتباط مستقیم با مخاطبان");
  } else if (socialLevel === "yellow") {
    strengths.push("داشتن هسته اولیه حضور در شبکه‌های اجتماعی");
  }

  if (input.websiteStatus === "active_pro") {
    strengths.push("داشتن وب‌سایت حرفه‌ای به عنوان دارایی مستقل برند");
  }
  if (input.discoveryChannel === "reputation") {
    strengths.push(`اعتبار دهان‌به‌دهان و رضایت مشتریان فعلی در ${cleanCity}`);
  }
  if (input.websiteRequestFreq !== "no") {
    strengths.push("تقاضای اثبات‌شده از سمت مشتریان برای مشاهده آنلاین محصولات/خدمات");
  }

  if (input.websiteStatus === "none") {
    improvementAreas.push("نبود وب‌سایت یا کاتالوگ آنلاین برای مشتریانی که قبل از خرید در گوگل تحقیق می‌کنند");
  } else if (input.websiteStatus === "old_no_traffic") {
    improvementAreas.push("نیاز جدی وب‌سایت فعلی به بازطراحی تجربه کاربری و ساختار سئو");
  }

  if (seoLevel !== "green") {
    improvementAreas.push(
      `عدم رتبه‌گیری در کلمات کلیدی پولساز مرتبط با ${cleanIndustry} ${input.targetMarket === "local" ? `در ${cleanCity}` : ""}`
    );
  }
  if (adsLevel === "red") {
    improvementAreas.push("عدم بهره‌گیری از کمپین‌های هدفمند گوگل برای جذب مشتریان آماده خرید");
  }
  if (socialLevel === "red") {
    improvementAreas.push("نبود کانال فعال در شبکه‌های اجتماعی برای نمایش مستمر محصولات و اعتمادسازی");
  }

  // Dynamic Competitors
  const userCompList = (input.competitors || "")
    .split(/[,،\n]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const competitors: CompetitorCard[] = [
    {
      name: userCompList[0] || `برندهای پیشرو ${cleanIndustry} در گوگل`,
      tag: "رقیب جستجویی",
      strength: "ساختار دسته‌بندی‌شده در وب‌سایت و جذب ورودی ارگانیک از گوگل",
      weaknessOrGap: `ارتباط سرد و ماشینی با مشتری و ضعف در تمرکز بومی روی ${cleanCity}`,
      ourOpportunity: `ترکیب هویت واقعی ${cleanName} با صفحات فرود دقیق و پاسخ‌گویی سریع‌تر`,
    },
    {
      name: userCompList[1] || `پیج‌های فعال اینستاگرامی ${cleanIndustry}`,
      tag: "رقیب شبکه‌های اجتماعی",
      strength: "تولید محتوای مستمر بصری و تعامل بالا در استوری‌ها",
      weaknessOrGap: "نداشتن وب‌سایت معتبر، دشواری جستجوی محصولات و گم شدن قیمت‌ها در دایرکت",
      ourOpportunity: "ساخت کاتالوگ آنلاین منظم که تجربه خرید را برای مشتری بسیار ساده‌تر می‌کند",
    },
    {
      name: `نتایج محلی گوگل «${cleanIndustry} در ${cleanCity}»`,
      tag: "فرصت نقشه گوگل",
      strength: "کاربران این جستجو بالاترین قصد خرید یا مراجعه فوری را دارند",
      weaknessOrGap: `اکثر رقبا در ${cleanCity} پروفایل Google Maps ناقص و بدون نظر مشتریان دارند`,
      ourOpportunity: `تصاحب جایگاه‌های اول جستجوی محلی ${cleanCity} با سئوی محلی و جمع‌آوری نظرات واقعی`,
    },
  ];

  // 6-Month Roadmap
  const roadmap: RoadmapPhase[] = [
    {
      phase: "فاز ۱",
      timeframe: "ماه اول و دوم",
      title: "زیرساخت اعتماد و شکار تقاضای محلی",
      focus: "آماده‌سازی ویترین دیجیتال متناسب با ظرفیت تیم",
      actions: [
        `ثبت و بهینه‌سازی پروفایل ${cleanName} در گوگل مپ و نقشه‌های بومی برای پوشش جستجوهای ${cleanCity}`,
        input.websiteStatus === "none"
          ? "طراحی وب‌سایت چابک کاتالوگ‌محور با تاکید بر سوابق، مجوزها و داستان برند"
          : "بهینه‌سازی سرعت، نمایش موبایل و صفحات کلیدی وب‌سایت فعلی",
        "ساخت دسته‌بندی‌های کاربردی بر اساس نیاز واقعی مشتری به جای دسته‌بندی خشک",
      ],
    },
    {
      phase: "فاز ۲",
      timeframe: "ماه سوم و چهارم",
      title: "سئو محتوایی و هم‌افزایی کانال‌ها",
      focus: "رشد ترافیک ارگانیک و کاهش هزینه جذب مشتری",
      actions: [
        `تولید صفحات فرود اختصاصی برای کلمات کلیدی هدف در ${input.targetMarket === "local" ? cleanCity : "سطح کشور"}`,
        "اتصال اینستاگرام و شبکه‌های اجتماعی به صفحات محصول/خدمات سایت برای تکمیل قیف فروش",
        "راه‌اندازی سیستم جمع‌آوری نظرات مشتریان راضی برای تقویت سیگنال‌های اعتماد",
      ],
    },
    {
      phase: "فاز ۳",
      timeframe: "ماه پنجم و ششم",
      title: "مقیاس‌دهی فروش و کمپین‌های هدفمند",
      focus: "توسعه فروش آنلاین مرحله‌ای و تبلیغات بازده‌محور",
      actions: [
        "اجرای کمپین‌های جستجوی گوگل (Google Ads) با بودجه بهینه روی کلمات با نیت خرید بالا",
        "فعال‌سازی پرداخت آنلاین یا پیش‌فاکتور خودکار برای پرفروش‌ترین خدمات/محصولات",
        "بررسی شاخص‌های تبدیل (KPI) و برنامه‌ریزی ۶ ماه دوم بر اساس داده‌های واقعی فروش",
      ],
    },
  ];

  const moneyKeywords = [
    `${cleanIndustry} در ${cleanCity}`,
    `بهترین ${cleanIndustry} ${cleanCity}`,
    `قیمت و خرید ${cleanIndustry}`,
    `مرکز معتبر ${cleanIndustry} ${input.targetMarket === "local" ? cleanCity : "آنلاین"}`,
    `سفارش ${cleanIndustry} با ضمانت`,
  ];

  const isLocal = input.targetMarket === "local";
  const place = isLocal ? cleanCity : "آنلاین";
  const keywordGap: AssessmentReport["keywordGap"] = [
    { keyword: `${cleanIndustry} در ${cleanCity}`, intent: "خرید فوری", competition: "زیاد", competitorPresent: true },
    { keyword: `بهترین ${cleanIndustry} ${place}`, intent: "خرید فوری", competition: "متوسط", competitorPresent: true },
    { keyword: `قیمت ${cleanIndustry} ${place}`, intent: "خرید فوری", competition: "متوسط", competitorPresent: false },
    { keyword: `${cleanIndustry} نزدیک من`, intent: "خرید فوری", competition: "کم", competitorPresent: false },
    { keyword: `نحوه انتخاب ${cleanIndustry}`, intent: "اطلاعاتی", competition: "کم", competitorPresent: false },
  ];
  const baseSearch = isLocal ? 600 : 1500;
  const opportunity: AssessmentReport["opportunity"] = {
    monthlySearchesMin: baseSearch,
    monthlySearchesMax: baseSearch * 2,
    contactRateMin: 3,
    contactRateMax: 6,
    note: `برآورد محافظه‌کارانه برای «${cleanIndustry}» در ${place}؛ عدد دقیق به رقابت و کیفیت اجرا بستگی دارد.`,
  };

  return {
    isSampleDemo: false,
    keywordGap,
    opportunity,
    archetypeTitle,
    businessSummary: {
      name: cleanName,
      ownerOrManager: input.ownerName?.trim(),
      industry: cleanIndustry,
      city: cleanCity,
      yearsLabel: getYearsLabel(input.yearsInBusiness),
      teamLabel: getTeamLabel(input.teamSize),
      instagramHandle: input.instagramHandle?.trim(),
      websiteLabel: getWebsiteLabel(input.websiteStatus),
    },
    score,
    scoreBadge,
    scoreSummary,
    trafficLights,
    phase1Recommendation,
    strengths,
    improvementAreas,
    competitors:
      userCompList.length > 0
        ? competitors.slice(0, Math.min(2, userCompList.length))
        : competitors.slice(2),
    roadmap,
    moneyKeywords,
  };
}

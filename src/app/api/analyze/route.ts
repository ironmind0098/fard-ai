import { NextResponse } from "next/server";
import { AssessmentInput, AssessmentReport } from "@/types/assessment";
import { generateAssessmentReport } from "@/lib/assessment-engine";

function mapInputLabels(input: AssessmentInput) {
  const yearsMap: Record<AssessmentInput["yearsInBusiness"], string> = {
    under1: "زیر ۱ سال",
    "1to5": "۱ تا ۵ سال",
    "5to15": "۵ تا ۱۵ سال",
    above15: "بالای ۱۵ سال",
  };
  const teamMap: Record<AssessmentInput["teamSize"], string> = {
    "1to3": "۱ تا ۳ نفر",
    "4to10": "۴ تا ۱۰ نفر",
    above10: "بالای ۱۰ نفر",
  };
  const salesMap: Record<AssessmentInput["salesModel"], string> = {
    in_person: "فقط حضوری",
    online: "فقط آنلاین",
    hybrid: "ترکیبی (حضوری و آنلاین)",
  };
  const customerMap: Record<AssessmentInput["customerType"], string> = {
    b2c: "مصرف‌کننده نهایی (B2C)",
    b2b: "شرکتی و سازمانی (B2B)",
    both: "هر دو (B2C و B2B)",
  };
  const websiteMap: Record<AssessmentInput["websiteStatus"], string> = {
    none: "نداریم",
    old_no_traffic: "داریم ولی قدیمی و بدون ورودی",
    active_pro: "فعال و حرفه‌ای",
  };
  const socialMap: Record<AssessmentInput["socialStatus"], string> = {
    active_instagram: "فعال در اینستاگرام",
    semi_active: "نیمه‌فعال",
    none: "نداریم",
  };
  const adsMap: Record<AssessmentInput["adsExperience"], string> = {
    none: "هیچ هزینه‌ای نکرده‌ایم",
    instagram_only: "فقط تبلیغات اینستاگرام",
    google_and_seo: "گوگل ادز و سئو",
  };
  const discoveryMap: Record<AssessmentInput["discoveryChannel"], string> = {
    reputation: "اعتبار محلی و معرفی مشتریان قبلی",
    passersby: "مراجعه حضوری و رهگذر",
    instagram: "اینستاگرام و شبکه‌های اجتماعی",
    google: "جستجو در گوگل",
  };
  const requestMap: Record<AssessmentInput["websiteRequestFreq"], string> = {
    yes_sometimes: "بله، گاهی",
    yes_often: "بله، زیاد",
    no: "خیر",
  };
  const goalMap: Record<AssessmentInput["primaryGoal"], string> = {
    local_customers: "جذب مشتری بیشتر در شهر خودمان",
    new_markets: "ورود به بازارهای جدید",
    brand_trust: "افزایش اعتماد و برندسازی",
  };

  return {
    years: yearsMap[input.yearsInBusiness],
    team: teamMap[input.teamSize],
    sales: salesMap[input.salesModel],
    customer: customerMap[input.customerType],
    website: websiteMap[input.websiteStatus],
    social: socialMap[input.socialStatus],
    ads: adsMap[input.adsExperience],
    discovery: discoveryMap[input.discoveryChannel],
    websiteReq: requestMap[input.websiteRequestFreq],
    goal: goalMap[input.primaryGoal],
    market: input.targetMarket === "local" ? "محلی / شهری" : "سراسر کشور",
  };
}

export async function POST(request: Request) {
  let input: AssessmentInput;
  try {
    input = (await request.json()) as AssessmentInput;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const fallbackReport = generateAssessmentReport(input);
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  const model = process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";

  if (!apiKey) {
    return NextResponse.json({
      report: fallbackReport,
      source: "local_fallback",
      reason: "missing_api_key",
    });
  }

  const labels = mapInputLabels(input);

  const systemPrompt = `تو «fardAi»، استراتژیست ارشد دیجیتال مارکتینگ در پلتفرم «شهر هوشمند فرد» (آژانس دیجیتال مارکتینگ مانافرد) هستی.
وظیفه تو تحلیل دقیق بلوغ دیجیتال یک کسب‌وکار ایرانی بر اساس اطلاعات واقعی آن و تولید یک گزارش کاملاً اختصاصی، کاربردی، بدون کلیشه و متناسب با همان شغل، شهر، سابقه و تعداد اعضای تیم است.

اصول استراتژیک مهم:
1. هرگز نسخه تکراری و سنگین نپیچ! مثلاً برای یک کسب‌وکار سنتی باسابقه با تیم کوچک (۱ تا ۳ نفر) و بدون وب‌سایت، فروشگاه اینترنتی سنگین از روز اول پیشنهاد نده؛ بلکه مسیر مرحله‌ای (سئوی محلی شهر + تبدیل سابقه به سیگنال اعتماد + کاتالوگ آنلاین یا لندینگ کاربردی) پیشنهاد بده.
2. اگر کسب‌وکار کلینیک، رستوران، تولیدی، آموزشگاه، دفتر وکالت، خدمات فنی، فروشگاه پوشاک یا هر صنف دیگری است، مثال‌ها، دسته‌بندی‌ها، تحلیل رقبا، نقشه راه ۶ ماهه و کلمات کلیدی باید ۱۰۰٪ مختص همان صنف و شهر باشند.
3. امتیاز (score) بین ۲۰ تا ۹۵ و منطقی بر اساس وضعیت واقعی دارایی‌های دیجیتال و سابقه باشد.
4. خروجی را فقط و فقط به صورت یک JSON معتبر مطابق ساختار زیر برگردان (بدون هیچ متن اضافه یا markdown):

{
  "archetypeTitle": "عنوان تیپ کسب‌وکار (کوتاه و حرفه‌ای)",
  "score": 45,
  "scoreBadge": "یکی از: ظرفیت رشد بسیار بالا | پتانسیل رشد سریع | آماده مقیاس‌دهی (Scale)",
  "scoreSummary": "خلاصه تحلیلی ۲ تا ۳ جمله‌ای دقیق درباره وضعیت فعلی و مهم‌ترین فرصت رشد این کسب‌وکار",
  "trafficLights": [
    { "id": "history", "label": "سابقه بازار", "level": "green|yellow|red", "statusText": "بسیار قوی|متوسط|نیاز به اقدام", "note": "توضیح کوتاه اختصاصی" },
    { "id": "trust", "label": "اعتبار محلی", "level": "green|yellow|red", "statusText": "بسیار قوی|متوسط|نیاز به اقدام", "note": "توضیح کوتاه اختصاصی" },
    { "id": "seo", "label": "حضور در گوگل (SEO)", "level": "green|yellow|red", "statusText": "بسیار قوی|متوسط|نیاز به اقدام", "note": "توضیح کوتاه اختصاصی" },
    { "id": "website", "label": "وب‌سایت", "level": "green|yellow|red", "statusText": "بسیار قوی|متوسط|نیاز به اقدام", "note": "توضیح کوتاه اختصاصی" },
    { "id": "instagram", "label": "شبکه‌های اجتماعی", "level": "green|yellow|red", "statusText": "بسیار قوی|متوسط|نیاز به اقدام", "note": "توضیح کوتاه اختصاصی" },
    { "id": "ads", "label": "تبلیغات دیجیتال", "level": "green|yellow|red", "statusText": "بسیار قوی|متوسط|نیاز به اقدام", "note": "توضیح کوتاه اختصاصی" }
  ],
  "phase1Recommendation": {
    "badge": "عنوان کوتاه استراتژی فاز اول متناسب با تیم",
    "headline": "تیتر شفاف و عملیاتی توصیه فاز اول با ذکر شهر و شغل",
    "rationale": "توضیح منطقی ۲ تا ۳ جمله‌ای که چرا این مسیر بهترین بازگشت سرمایه را دارد",
    "whyNotHeavyStore": "توضیح کوتاه درباره اشتباه رایجی که این کسب‌وکار نباید در فاز اول مرتکب شود",
    "recommendedFunnel": ["گام ۱", "گام ۲", "گام ۳", "گام ۴", "گام ۵"]
  },
  "strengths": ["نقطه قوت ۱", "نقطه قوت ۲", "نقطه قوت ۳"],
  "improvementAreas": ["گلوگاه ۱", "گلوگاه ۲", "گلوگاه ۳"],
  "competitors": [
    {
      "name": "نام رقیب واقعی یا الگوی رقیب برتر در همین صنف و شهر",
      "tag": "برچسب کوتاه (مثلاً رقیب سئومحور)",
      "strength": "نقطه قوت اصلی رقیب",
      "weaknessOrGap": "ضعف یا شکاف رقیب",
      "ourOpportunity": "فرصت دقیق تمایز برای این کسب‌وکار"
    }
  ],
  "roadmap": [
    {
      "phase": "فاز ۱",
      "timeframe": "ماه اول و دوم",
      "title": "عنوان فاز ۱",
      "focus": "تمرکز اصلی فاز ۱",
      "actions": ["اقدام اجرایی ۱", "اقدام اجرایی ۲", "اقدام اجرایی ۳"]
    },
    {
      "phase": "فاز ۲",
      "timeframe": "ماه سوم و چهارم",
      "title": "عنوان فاز ۲",
      "focus": "تمرکز اصلی فاز ۲",
      "actions": ["اقدام اجرایی ۱", "اقدام اجرایی ۲", "اقدام اجرایی ۳"]
    },
    {
      "phase": "فاز ۳",
      "timeframe": "ماه پنجم و ششم",
      "title": "عنوان فاز ۳",
      "focus": "تمرکز اصلی فاز ۳",
      "actions": ["اقدام اجرایی ۱", "اقدام اجرایی ۲", "اقدام اجرایی ۳"]
    }
  ],
  "moneyKeywords": ["کلمه کلیدی پولساز ۱", "کلمه کلیدی پولساز ۲", "کلمه کلیدی پولساز ۳", "کلمه کلیدی پولساز ۴", "کلمه کلیدی پولساز ۵"],
  "keywordGap": [
    { "keyword": "عبارت جستجوی واقعی همین شغل و شهر", "intent": "خرید فوری یا اطلاعاتی", "competition": "کم یا متوسط یا زیاد", "competitorPresent": true }
  ],
  "opportunity": {
    "monthlySearchesMin": 600,
    "monthlySearchesMax": 1200,
    "contactRateMin": 3,
    "contactRateMax": 6,
    "note": "یک جمله درباره مبنای این برآورد محافظه‌کارانه"
  }
}

دقت کن:
- keywordGap دقیقاً ۵ تا ۶ آیتم باشد؛ intent فقط «خرید فوری» یا «اطلاعاتی»، competition فقط «کم»، «متوسط» یا «زیاد».
- opportunity یک برآورد محافظه‌کارانه و بازه‌ای از جستجوی ماهانه همین شغل در همین شهر و نرخ تماس ۲ تا ۸ درصد است؛ اعداد صحیح باشند.
- آرایه competitors فقط شامل رقبایی باشد که کاربر نام برده (حداکثر ۲)؛ اگر نامی وارد نشده فقط یک کارت «نتایج محلی گوگل در [شهر]» بده. نام رقیب نساز.
- تمام متون به فارسی روان، حرفه‌ای و دقیق باشند.`;

  const userPrompt = `اطلاعات کسب‌وکار برای تحلیل:
- نام کسب‌وکار: ${input.businessName}
- حوزه فعالیت / شغل: ${input.industry}
- شهر: ${input.city}
- محدوده بازار هدف: ${labels.market}
- سابقه فعالیت: ${labels.years}
- تعداد اعضای تیم: ${labels.team}
- مدل فروش فعلی: ${labels.sales}
- نوع مشتریان: ${labels.customer}
- وضعیت وب‌سایت: ${labels.website}
- وضعیت شبکه‌های اجتماعی: ${labels.social}
- تجربه تبلیغات دیجیتال: ${labels.ads}
- نحوه آشنایی مشتریان فعلی: ${labels.discovery}
- آیا مشتریان سراغ سایت/سفارش آنلاین گرفته‌اند: ${labels.websiteReq}
- مهم‌ترین هدف ۶ ماه آینده: ${labels.goal}
- آیدی اینستاگرام: ${input.instagramHandle?.trim() || "وارد نشده"}
- رقبای شناخته‌شده توسط کاربر: ${input.competitors?.trim() || "وارد نشده"}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: userPrompt }],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.4,
          },
        }),
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("Gemini API error:", response.status, errorText);
      return NextResponse.json({
        report: fallbackReport,
        source: "local_fallback",
        reason: `gemini_http_${response.status}`,
      });
    }

    const data = await response.json();
    const rawText: string | undefined =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return NextResponse.json({
        report: fallbackReport,
        source: "local_fallback",
        reason: "empty_gemini_response",
      });
    }

    const parsed = JSON.parse(rawText) as Partial<AssessmentReport>;

    // Validate essential fields and merge safely with fallback
    const mergedReport: AssessmentReport = {
      isSampleDemo: false,
      archetypeTitle: parsed.archetypeTitle || fallbackReport.archetypeTitle,
      businessSummary: fallbackReport.businessSummary,
      score:
        typeof parsed.score === "number" && !Number.isNaN(parsed.score)
          ? Math.min(95, Math.max(15, Math.round(parsed.score)))
          : fallbackReport.score,
      scoreBadge: parsed.scoreBadge || fallbackReport.scoreBadge,
      scoreSummary: parsed.scoreSummary || fallbackReport.scoreSummary,
      trafficLights:
        Array.isArray(parsed.trafficLights) && parsed.trafficLights.length === 6
          ? parsed.trafficLights
          : fallbackReport.trafficLights,
      phase1Recommendation:
        parsed.phase1Recommendation?.headline &&
        Array.isArray(parsed.phase1Recommendation.recommendedFunnel)
          ? parsed.phase1Recommendation
          : fallbackReport.phase1Recommendation,
      strengths:
        Array.isArray(parsed.strengths) && parsed.strengths.length > 0
          ? parsed.strengths
          : fallbackReport.strengths,
      improvementAreas:
        Array.isArray(parsed.improvementAreas) && parsed.improvementAreas.length > 0
          ? parsed.improvementAreas
          : fallbackReport.improvementAreas,
      competitors:
        Array.isArray(parsed.competitors) && parsed.competitors.length > 0
          ? parsed.competitors
          : fallbackReport.competitors,
      roadmap:
        Array.isArray(parsed.roadmap) && parsed.roadmap.length > 0
          ? parsed.roadmap
          : fallbackReport.roadmap,
      moneyKeywords:
        Array.isArray(parsed.moneyKeywords) && parsed.moneyKeywords.length > 0
          ? parsed.moneyKeywords
          : fallbackReport.moneyKeywords,
      keywordGap:
        Array.isArray(parsed.keywordGap) && parsed.keywordGap.length >= 3
          ? parsed.keywordGap
          : fallbackReport.keywordGap,
      opportunity:
        parsed.opportunity &&
        Number.isFinite(parsed.opportunity.monthlySearchesMin) &&
        Number.isFinite(parsed.opportunity.monthlySearchesMax) &&
        Number.isFinite(parsed.opportunity.contactRateMin) &&
        Number.isFinite(parsed.opportunity.contactRateMax)
          ? parsed.opportunity
          : fallbackReport.opportunity,
    };

    return NextResponse.json({
      report: mergedReport,
      source: "gemini",
    });
  } catch (err) {
    console.error("Gemini API request failed:", err);
    return NextResponse.json({
      report: fallbackReport,
      source: "local_fallback",
      reason: "network_or_parse_error",
    });
  }
}

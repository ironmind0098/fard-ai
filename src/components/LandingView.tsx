"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  FileSearch,
  LockOpen,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { ManafardDivider } from "./ManafardBrand";

interface LandingViewProps {
  onStartAssessment: () => void;
  onOpenSampleReport: () => void;
}

const FAQ_ITEMS = [
  {
    q: "آیا برای دریافت تحلیل اولیه باید شماره تماس بدهم؟",
    a: "خیر! پس از تکمیل ۴ مرحله ارزیابی، لایه اول گزارش شامل امتیاز آمادگی دیجیتال، جدول وضعیت چراغ‌راهنمایی (نقاط قوت و ضعف) و استراتژی پیشنهادی فاز اول، کاملاً رایگان و بدون نیاز به وارد کردن شماره موبایل نمایش داده می‌شود.",
  },
  {
    q: "چه زمانی اطلاعات تماس دریافت می‌شود و در لایه دوم چه چیزی باز می‌شود؟",
    a: "تنها در صورتی که بخواهید تحلیل دقیق ۳ رقیب برتر حوزه خود در گوگل و اینستاگرام، نقشه راه اجرایی ۶ ماهه و لیست کلمات کلیدی پولساز را مشاهده و دریافت کنید، نام و شماره موبایل خود را وارد می‌کنید.",
  },
  {
    q: "تفاوت ارزیابی ایجنت fardAi با مشاوره‌های تبلیغاتی چیست؟",
    a: "ما نسخه تکراری «حتماً از روز اول فروشگاه اینترنتی سنگین بزنید» را برای همه نمی‌پیچیم! ایجنت fardAi در شهر هوشمند فرد بر اساس سابقه واقعی، تعداد اعضای تیم، نوع مشتری و شهر شما تصمیم می‌گیرد که آیا الان زمان سئوی محلی و کاتالوگ است یا فروشگاه آنلاین و کمپین تبلیغاتی.",
  },
  {
    q: "تکمیل فرم ارزیابی چقدر زمان می‌برد؟",
    a: "حدود ۲ دقیقه. تمام گزینه‌ها به صورت انتخابی و ساده طراحی شده‌اند و مرحله چهارم (اطلاعات تکمیلی و رقبا) کاملاً اختیاری است و می‌توانید از آن عبور کنید.",
  },
];

export default function LandingView({
  onStartAssessment,
  onOpenSampleReport,
}: LandingViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="flex-1 bg-[#EBEBEB]">
      {/* Hero Card Section */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-10 lg:p-12">
          {/* Subtle Royal Blue & Magenta glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-[#E0F0FF]/70 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-[#E50062]/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E0F0FF] px-3.5 py-1.5 text-xs font-bold text-[#114DD4]">
                <Sparkles className="h-3.5 w-3.5 text-[#E50062]" />
                <span>شهر هوشمند فرد • تحلیل هوشمند بلوغ دیجیتال با ایجنت fardAi</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-[1.35] tracking-tight text-[#0E1629] sm:text-4xl lg:text-[40px]">
                اولین قدم به سوی رشد دیجیتال،{" "}
                <span className="text-[#E50062]">دقیقاً متناسب با ظرفیت واقعی</span>{" "}
                کسب‌وکار شما
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#525252]">
                به جای پیشنهادهای فروش تحمیلی و راه‌اندازی سایت‌های پرهزینه، در ۲ دقیقه
                بفهمید برای وضعیت فعلی شما (سابقه، تعداد تیم و شهر)، اولویت اول{" "}
                <strong className="font-bold text-[#0E1629]">سئوی محلی</strong> است،{" "}
                <strong className="font-bold text-[#0E1629]">کاتالوگ آنلاین</strong> یا{" "}
                <strong className="font-bold text-[#0E1629]">فروشگاه اینترنتی</strong>.
              </p>

              {/* Main CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={onStartAssessment}
                  className="manafard-cta inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-bold text-white active:scale-[0.98] cursor-pointer"
                >
                  <span>شروع ارزیابی رایگان</span>
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={onOpenSampleReport}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F5F5F5] px-6 py-4 text-base font-bold text-[#0E1629] shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all hover:bg-[#E0F0FF] hover:text-[#114DD4] cursor-pointer"
                >
                  <FileSearch className="h-5 w-5 text-[#114DD4]" />
                  <span>مشاهده نمونه گزارش واقعی</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-medium text-[#757575] sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <LockOpen className="h-4 w-4 text-[#00A862]" />
                  <span>نتیجه اولیه بدون نیاز به شماره تماس</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#00A862]" />
                  <span>تحلیل اختصاصی برای بازار ایران</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#114DD4]" />
                  <span>مبتنی بر تجربه پروژه‌های واقعی مانافرد</span>
                </div>
              </div>
            </div>

            {/* Hero Demo Preview Card with Manafard Vector Graphic */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] bg-[#F5F5F5] p-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] sm:p-6">
                {/* Custom Manafard Vector Illustration (Royal Blue + Magenta Pedestal Style) */}
                <div className="mb-4 flex items-center justify-between rounded-2xl bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div>
                    <span className="text-[11px] font-bold text-[#114DD4]">
                      پیش‌نمایش خروجی سامانه
                    </span>
                    <h2 className="mt-0.5 text-base font-bold text-[#0E1629]">
                      فروشگاه پلاسکو (نمونه واقعی)
                    </h2>
                    <span className="mt-1.5 inline-block rounded-full bg-[#00A862]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#008A52]">
                      ظرفیت رشد بسیار بالا
                    </span>
                  </div>

                  {/* Stylized Vector Icon in #114DD4 & #E50062 */}
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <rect x="8" y="8" width="48" height="48" rx="14" fill="#E0F0FF" />
                    <path
                      d="M18 42L27 32L34 37L46 22"
                      stroke="#114DD4"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="46" cy="22" r="4.5" fill="#E50062" />
                    <rect x="18" y="47" width="28" height="3.5" rx="1.75" fill="#114DD4" fillOpacity="0.25" />
                  </svg>
                </div>

                {/* Mini Score + Traffic Lights */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1 flex flex-col items-center justify-center rounded-2xl bg-white p-3 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                    <span className="text-2xl font-bold text-[#E50062]" dir="ltr">
                      38<span className="text-xs font-medium text-[#757575]">/100</span>
                    </span>
                    <span className="mt-1 text-[10px] font-bold text-[#757575]">
                      آمادگی دیجیتال
                    </span>
                  </div>
                  <div className="col-span-2 space-y-2 text-xs">
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
                      <span className="font-medium text-[#292929]">سابقه بازار (۲۷ سال)</span>
                      <span className="font-bold text-[#008A52]">🟢 بسیار قوی</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
                      <span className="font-medium text-[#292929]">اینستاگرام</span>
                      <span className="font-bold text-amber-600">🟡 متوسط</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
                      <span className="font-medium text-[#292929]">وب‌سایت و سئو</span>
                      <span className="font-bold text-[#E50062]">🔴 نیاز به اقدام</span>
                    </div>
                  </div>
                </div>

                {/* Mini Phase 1 Insight */}
                <div className="mt-3 rounded-2xl bg-white p-4 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#114DD4]">
                    <Target className="h-4 w-4 text-[#E50062]" />
                    <span>توصیه هوشمند فاز اول:</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-6 text-[#525252]">
                    فاز اول: سئوی محلی شیراز + تبدیل ۲۷ سال سابقه به سیگنال اعتماد +
                    کاتالوگ آنلاین؛ نه فروشگاه اینترنتی سنگین از روز اول!
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onOpenSampleReport}
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0E1629] px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-[#132644] cursor-pointer"
                >
                  <span>مشاهده کامل این گزارش نمونه</span>
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (3-Step Cards) */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold text-[#E50062]">
              فرآیند ۳ مرحله‌ای ایجنت fardAi
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#0E1629] sm:text-3xl">
              چگونه نقشه راه اختصاصی شما ساخته می‌شود؟
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#757575] sm:text-base">
              برخلاف فرم‌های تماس معمولی، ابتدا ارزش واقعی را دریافت می‌کنید و بر اساس
              مدل کسب‌وکار خود تصمیم می‌گیرید.
            </p>
          </div>

          <ManafardDivider label="مراحل ارزیابی هوشمند" />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#F5F5F5] p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0F0FF] text-[#114DD4]">
                <BarChart3 className="h-6 w-6" />
              </div>
              <span className="mt-5 inline-block text-xs font-bold text-[#114DD4]">
                گام اول • ۲ دقیقه
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-[#0E1629]">
                ثبت بلوغ و وضعیت فعلی
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-[#525252]">
                سابقه، تعداد تیم، شهر هدف، وضعیت وب‌سایت، شبکه اجتماعی و تجربه قبلی
                تبلیغات خود را در ۴ گام کوتاه مشخص می‌کنید.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F5F5] p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A862]/15 text-[#008A52]">
                <LockOpen className="h-6 w-6" />
              </div>
              <span className="mt-5 inline-block text-xs font-bold text-[#008A52]">
                گام دوم • آنی و بدون شماره
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-[#0E1629]">
                دریافت تحلیل اولیه و امتیاز
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-[#525252]">
                بلافاصله امتیاز آمادگی دیجیتال، جدول چراغ‌راهنمایی ۶ شاخص کلیدی و
                استراتژی فاز اول متناسب با تیم خود را می‌بینید.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F5F5] p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E50062]/12 text-[#E50062]">
                <TrendingUp className="h-6 w-6" />
              </div>
              <span className="mt-5 inline-block text-xs font-bold text-[#E50062]">
                گام سوم • گزارش کامل
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-[#0E1629]">
                تحلیل رقبا و نقشه ۶ ماهه
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-[#525252]">
                در صورت تمایل، با ثبت شماره تماس، آنالیز رقبای برتر گوگل/اینستاگرام و
                کلمات کلیدی پولساز حوزه شما بازگشایی می‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Strip */}
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[24px] bg-[#0E1629] p-7 text-white shadow-lg md:flex-row sm:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#114DD4] text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">
                مناسب کسب‌وکارهای سنتی باسابقه تا فروشگاه‌های آنلاین در حال رشد
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                چرا نباید به هر کسب‌وکاری از روز اول فروشگاه اینترنتی سنگین پیشنهاد داد؟
                نمونه واقعی «فروشگاه پلاسکو شیراز» را ببینید.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenSampleReport}
            className="manafard-cta shrink-0 rounded-2xl px-6 py-3.5 text-sm font-bold text-white cursor-pointer"
          >
            مشاهده کیس واقعی پلاسکو
          </button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0E1629] sm:text-3xl">
              سوالات متداول
            </h2>
            <p className="mt-2.5 text-sm text-[#757575]">
              شفافیت کامل درباره نحوه کار ایجنت fardAi در شهر هوشمند فرد
            </p>
          </div>

          <ManafardDivider />

          <div className="mt-6 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl bg-[#F5F5F5] transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right font-bold text-[#0E1629] hover:bg-[#EBEBEB]/60 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#757575] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#E50062]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-black/5 bg-white/70 px-5 py-4 text-sm leading-7 text-[#525252]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

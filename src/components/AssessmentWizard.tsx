"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Globe,
  Sparkles,
  Target,
  UserPlus,
  Wand2,
} from "lucide-react";
import { AssessmentInput } from "@/types/assessment";
import { DEMO_PLASCO_INPUT } from "@/lib/assessment-engine";

interface AssessmentWizardProps {
  initialData: AssessmentInput;
  onComplete: (data: AssessmentInput) => void;
  onCancel: () => void;
}

const STEPS = [
  { id: 1, title: "هویت و بلوغ کسب‌وکار", icon: Building2 },
  { id: 2, title: "دارایی‌های دیجیتال فعلی", icon: Globe },
  { id: 3, title: "رفتار مشتری و اهداف", icon: Target },
  { id: 4, title: "اطلاعات تکمیلی (اختیاری)", icon: UserPlus },
];

export default function AssessmentWizard({
  initialData,
  onComplete,
  onCancel,
}: AssessmentWizardProps) {
  const [step, setStep] = useState<number>(1);
  const [form, setForm] = useState<AssessmentInput>(initialData);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const updateField = <K extends keyof AssessmentInput>(
    key: K,
    value: AssessmentInput[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleFillDemo = () => {
    setForm(DEMO_PLASCO_INPUT);
    setErrorMsg("");
  };

  const handleNext = () => {
    if (step === 1) {
      if (!form.businessName.trim() || !form.industry.trim() || !form.city.trim()) {
        setErrorMsg("لطفاً نام کسب‌وکار، حوزه فعالیت و شهر را وارد کنید.");
        return;
      }
    }
    if (step < 4) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onComplete(form);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      setErrorMsg("");
    } else {
      onCancel();
    }
  };

  const progressPercent = (step / 4) * 100;

  return (
    <main className="flex-1 bg-[#EBEBEB] py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Top Bar with subtle Demo Fill Button */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-[#E50062]">
              مرحله {step} از ۴
            </span>
            <h1 className="mt-0.5 text-xl font-bold text-[#0E1629] sm:text-2xl">
              {STEPS[step - 1].title}
            </h1>
          </div>

          <button
            type="button"
            onClick={handleFillDemo}
            title="پر کردن سریع فرم با اطلاعات نمونه فروشگاه پلاسکو"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#E0F0FF] px-3.5 py-2 text-xs font-bold text-[#114DD4] shadow-xs transition-all hover:bg-[#114DD4] hover:text-white cursor-pointer"
          >
            <Wand2 className="h-3.5 w-3.5" />
            <span>پر کردن دمو (کیس پلاسکو)</span>
          </button>
        </div>

        {/* Progress Bar & Step Indicators */}
        <div className="mb-8">
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/80 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-l from-[#E50062] to-[#114DD4] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {STEPS.map((s) => {
              const Icon = s.icon;
              const isCompleted = step > s.id;
              const isCurrent = step === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    if (s.id < step) setStep(s.id);
                  }}
                  className={`flex items-center gap-2 rounded-xl p-2.5 text-right transition-all ${
                    isCurrent
                      ? "bg-white shadow-sm ring-2 ring-[#114DD4]"
                      : isCompleted
                      ? "bg-white/90 text-[#008A52] shadow-xs cursor-pointer"
                      : "bg-white/50 text-[#757575] cursor-default"
                  }`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      isCurrent
                        ? "bg-[#114DD4] text-white"
                        : isCompleted
                        ? "bg-[#00A862] text-white"
                        : "bg-[#EBEBEB] text-[#757575]"
                    }`}
                  >
                    {isCompleted ? <Check className="h-4 w-4" /> : <Icon className="h-3.5 w-3.5" />}
                  </div>
                  <span className="hidden text-xs font-bold sm:block truncate">
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="animate-fade-in rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-8">
          {errorMsg && (
            <div className="mb-6 rounded-xl bg-[#E50062]/10 px-4 py-3 text-sm font-bold text-[#A00045]">
              {errorMsg}
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                    نام کسب‌وکار <span className="text-[#E50062]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.businessName}
                    onChange={(e) => updateField("businessName", e.target.value)}
                    placeholder="مثلاً: فروشگاه پلاسکو، کلینیک مهر..."
                    className="manafard-input w-full px-4 py-3 text-[15px] text-black placeholder:text-[#7A7A7A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                    حوزه فعالیت / صنف <span className="text-[#E50062]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                    placeholder="مثلاً: لوازم پلاستیکی و آشپزخانه، کلینیک زیبایی..."
                    className="manafard-input w-full px-4 py-3 text-[15px] text-black placeholder:text-[#7A7A7A]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                    شهر محل فعالیت <span className="text-[#E50062]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="مثلاً: شیراز، تهران، اصفهان..."
                    className="manafard-input w-full px-4 py-3 text-[15px] text-black placeholder:text-[#7A7A7A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                    محدوده بازار هدف
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { value: "local", label: "محلی / شهری" },
                      { value: "nationwide", label: "سراسر کشور" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() =>
                          updateField("targetMarket", opt.value as AssessmentInput["targetMarket"])
                        }
                        className={`rounded-xl px-3 py-3 text-xs font-bold transition-all cursor-pointer ${
                          form.targetMarket === opt.value
                            ? "bg-[#114DD4] text-white shadow-[0_4px_12px_rgba(17,77,212,0.25)]"
                            : "bg-[#F5F5F5] text-[#292929] hover:bg-[#E0F0FF]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                    سابقه فعالیت کسب‌وکار
                  </label>
                  <select
                    value={form.yearsInBusiness}
                    onChange={(e) =>
                      updateField(
                        "yearsInBusiness",
                        e.target.value as AssessmentInput["yearsInBusiness"]
                      )
                    }
                    className="manafard-input w-full px-4 py-3 text-[15px] text-black"
                  >
                    <option value="under1">زیر ۱ سال</option>
                    <option value="1to5">۱ تا ۵ سال</option>
                    <option value="5to15">۵ تا ۱۵ سال</option>
                    <option value="above15">بالای ۱۵ سال</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                    تعداد اعضای تیم
                  </label>
                  <select
                    value={form.teamSize}
                    onChange={(e) =>
                      updateField("teamSize", e.target.value as AssessmentInput["teamSize"])
                    }
                    className="manafard-input w-full px-4 py-3 text-[15px] text-black"
                  >
                    <option value="1to3">۱ تا ۳ نفر</option>
                    <option value="4to10">۴ تا ۱۰ نفر</option>
                    <option value="above10">بالای ۱۰ نفر</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                    مدل فروش فعلی
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "in_person", label: "فقط حضوری" },
                      { value: "online", label: "فقط آنلاین" },
                      { value: "hybrid", label: "ترکیبی" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() =>
                          updateField("salesModel", opt.value as AssessmentInput["salesModel"])
                        }
                        className={`rounded-xl px-2 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                          form.salesModel === opt.value
                            ? "bg-[#114DD4] text-white shadow-[0_4px_12px_rgba(17,77,212,0.25)]"
                            : "bg-[#F5F5F5] text-[#292929] hover:bg-[#E0F0FF]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                    نوع مشتریان
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "b2c", label: "مصرف‌کننده (B2C)" },
                      { value: "b2b", label: "شرکتی (B2B)" },
                      { value: "both", label: "هر دو" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() =>
                          updateField("customerType", opt.value as AssessmentInput["customerType"])
                        }
                        className={`rounded-xl px-2 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                          form.customerType === opt.value
                            ? "bg-[#114DD4] text-white shadow-[0_4px_12px_rgba(17,77,212,0.25)]"
                            : "bg-[#F5F5F5] text-[#292929] hover:bg-[#E0F0FF]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-7">
              <div>
                <label className="mb-3 block text-sm font-bold text-[#0E1629]">
                  ۱. وضعیت فعلی وب‌سایت شما چیست؟
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      value: "none",
                      title: "نداریم",
                      desc: "هنوز وب‌سایتی راه‌اندازی نکرده‌ایم",
                    },
                    {
                      value: "old_no_traffic",
                      title: "داریم ولی قدیمی و بدون ورودی",
                      desc: "سایت هست اما مشتری از آن نمی‌آید",
                    },
                    {
                      value: "active_pro",
                      title: "فعال و حرفه‌ای",
                      desc: "سایت به‌روز است و سفارش/ورودی دارد",
                    },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        updateField("websiteStatus", opt.value as AssessmentInput["websiteStatus"])
                      }
                      className={`flex flex-col items-start rounded-2xl p-4 text-right transition-all cursor-pointer ${
                        form.websiteStatus === opt.value
                          ? "bg-[#E0F0FF]/70 ring-2 ring-[#114DD4]"
                          : "bg-[#F5F5F5] hover:bg-[#EBEBEB]/80"
                      }`}
                    >
                      <span className="text-sm font-bold text-[#0E1629]">{opt.title}</span>
                      <span className="mt-1 text-xs leading-5 text-[#757575]">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-[#0E1629]">
                  ۲. وضعیت شبکه‌های اجتماعی (اینستاگرام و...)؟
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      value: "active_instagram",
                      title: "فعال در اینستاگرام",
                      desc: "انتشار منظم پست/استوری و تعامل با مخاطب",
                    },
                    {
                      value: "semi_active",
                      title: "نیمه‌فعال",
                      desc: "پیج داریم اما تولید محتوا نامنظم است",
                    },
                    {
                      value: "none",
                      title: "نداریم",
                      desc: "در شبکه‌های اجتماعی فعالیتی نداریم",
                    },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        updateField("socialStatus", opt.value as AssessmentInput["socialStatus"])
                      }
                      className={`flex flex-col items-start rounded-2xl p-4 text-right transition-all cursor-pointer ${
                        form.socialStatus === opt.value
                          ? "bg-[#E0F0FF]/70 ring-2 ring-[#114DD4]"
                          : "bg-[#F5F5F5] hover:bg-[#EBEBEB]/80"
                      }`}
                    >
                      <span className="text-sm font-bold text-[#0E1629]">{opt.title}</span>
                      <span className="mt-1 text-xs leading-5 text-[#757575]">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-[#0E1629]">
                  ۳. تجربه قبلی در تبلیغات دیجیتال؟
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      value: "none",
                      title: "هیچ هزینه‌ای نکرده‌ایم",
                      desc: "تاکنون تبلیغات آنلاین انجام نداده‌ایم",
                    },
                    {
                      value: "instagram_only",
                      title: "فقط تبلیغات اینستاگرام",
                      desc: "تجربه تبلیغ در پیج‌ها و اینفلوئنسرها",
                    },
                    {
                      value: "google_and_seo",
                      title: "گوگل ادز و سئو",
                      desc: "تبلیغ در جستجوی گوگل یا سرمایه‌گذاری روی سئو",
                    },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        updateField("adsExperience", opt.value as AssessmentInput["adsExperience"])
                      }
                      className={`flex flex-col items-start rounded-2xl p-4 text-right transition-all cursor-pointer ${
                        form.adsExperience === opt.value
                          ? "bg-[#E0F0FF]/70 ring-2 ring-[#114DD4]"
                          : "bg-[#F5F5F5] hover:bg-[#EBEBEB]/80"
                      }`}
                    >
                      <span className="text-sm font-bold text-[#0E1629]">{opt.title}</span>
                      <span className="mt-1 text-xs leading-5 text-[#757575]">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-7">
              <div>
                <label className="mb-3 block text-sm font-bold text-[#0E1629]">
                  ۱. مشتریان در حال حاضر چگونه شما را پیدا می‌کنند؟
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { value: "reputation", label: "اعتبار محلی و معرفی مشتریان قبلی" },
                    { value: "passersby", label: "مراجعه حضوری و رهگذرها" },
                    { value: "instagram", label: "اینستاگرام و شبکه‌های اجتماعی" },
                    { value: "google", label: "جستجو در گوگل و نقشه" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        updateField(
                          "discoveryChannel",
                          opt.value as AssessmentInput["discoveryChannel"]
                        )
                      }
                      className={`rounded-2xl px-4 py-3.5 text-right text-sm font-bold transition-all cursor-pointer ${
                        form.discoveryChannel === opt.value
                          ? "bg-[#E0F0FF]/70 text-[#114DD4] ring-2 ring-[#114DD4]"
                          : "bg-[#F5F5F5] text-[#292929] hover:bg-[#EBEBEB]/80"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-[#0E1629]">
                  ۲. آیا تا به حال مشتریان سراغ وب‌سایت یا سفارش آنلاین شما را گرفته‌اند؟
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { value: "yes_sometimes", label: "بله، گاهی" },
                    { value: "yes_often", label: "بله، زیاد" },
                    { value: "no", label: "خیر" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        updateField(
                          "websiteRequestFreq",
                          opt.value as AssessmentInput["websiteRequestFreq"]
                        )
                      }
                      className={`rounded-2xl px-4 py-3.5 text-center text-sm font-bold transition-all cursor-pointer ${
                        form.websiteRequestFreq === opt.value
                          ? "bg-[#E0F0FF]/70 text-[#114DD4] ring-2 ring-[#114DD4]"
                          : "bg-[#F5F5F5] text-[#292929] hover:bg-[#EBEBEB]/80"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-[#0E1629]">
                  ۳. مهم‌ترین هدف شما برای ۶ ماه آینده چیست؟
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { value: "local_customers", label: "جذب مشتری بیشتر در شهر خودمان" },
                    { value: "new_markets", label: "ورود به بازارهای جدید" },
                    { value: "brand_trust", label: "افزایش اعتماد و برندسازی" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        updateField("primaryGoal", opt.value as AssessmentInput["primaryGoal"])
                      }
                      className={`rounded-2xl px-4 py-3.5 text-right text-sm font-bold transition-all cursor-pointer ${
                        form.primaryGoal === opt.value
                          ? "bg-[#E0F0FF]/70 text-[#114DD4] ring-2 ring-[#114DD4]"
                          : "bg-[#F5F5F5] text-[#292929] hover:bg-[#EBEBEB]/80"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-[#E0F0FF]/60 p-4 text-sm text-[#0E1629]">
                <span className="font-bold text-[#114DD4]">کاملاً اختیاری:</span> اگر آیدی
                اینستاگرام یا نام رقبای خود را وارد کنید، گزارش دقیق‌تر می‌شود. در غیر این
                صورت می‌توانید مستقیماً دکمه «مشاهده نتیجه ارزیابی» یا «عبور» را بزنید.
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                  آیدی پیج اینستاگرام (اختیاری)
                </label>
                <input
                  type="text"
                  dir="ltr"
                  value={form.instagramHandle || ""}
                  onChange={(e) => updateField("instagramHandle", e.target.value)}
                  placeholder="e.g. Plascopedar"
                  className="manafard-input w-full px-4 py-3 text-left text-[15px] text-black placeholder:text-[#7A7A7A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-bold text-[#0E1629]">
                  نام ۱ یا ۲ رقیب شناخته‌شده در بازار شما (اختیاری)
                </label>
                <input
                  type="text"
                  value={form.competitors || ""}
                  onChange={(e) => updateField("competitors", e.target.value)}
                  placeholder="مثلاً: پلاسکو کالکشن، پلاسکو پردیس..."
                  className="manafard-input w-full px-4 py-3 text-[15px] text-black placeholder:text-[#7A7A7A]"
                />
              </div>
            </div>
          )}

          {/* Footer Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#EBEBEB] pt-6">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#F5F5F5] px-5 py-3 text-sm font-bold text-[#292929] transition-colors hover:bg-[#EBEBEB] cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
              <span>{step === 1 ? "بازگشت به خانه" : "مرحله قبل"}</span>
            </button>

            <div className="flex items-center gap-3">
              {step === 4 && (
                <button
                  type="button"
                  onClick={() => onComplete(form)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-[#757575] transition-colors hover:bg-[#F5F5F5] hover:text-[#0E1629] cursor-pointer"
                >
                  عبور و دریافت گزارش
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="manafard-cta inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold text-white active:scale-[0.98] cursor-pointer"
              >
                {step === 4 ? (
                  <>
                    <Sparkles className="h-4 w-4" />
                    <span>مشاهده نتیجه ارزیابی</span>
                  </>
                ) : (
                  <>
                    <span>مرحله بعد</span>
                    <ArrowLeft className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

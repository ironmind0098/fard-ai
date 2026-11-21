"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  CalendarRange,
  CheckCircle2,
  Edit3,
  KeyRound,
  Lock,
  LockOpen,
  MapPin,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { AssessmentReport, LeadInfo, TrafficLightLevel } from "@/types/assessment";
import ScoreGauge from "./ScoreGauge";
import { ManafardDivider } from "./ManafardBrand";

interface ReportDashboardProps {
  report: AssessmentReport;
  initialUnlocked: boolean;
  analysisSource?: "gemini" | "local_fallback";
  onEditAnswers: () => void;
  onStartNewAssessment: () => void;
  onUnlockSuccess?: (lead: LeadInfo) => void;
}

function getTrafficLightBadge(level: TrafficLightLevel, statusText: string) {
  if (level === "green") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00A862]/10 px-3 py-1 text-xs font-bold text-[#008A52] ring-1 ring-inset ring-[#00A862]/25">
        <span aria-hidden="true">🟢</span>
        <span>{statusText}</span>
      </span>
    );
  }
  if (level === "yellow") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 ring-1 ring-inset ring-amber-600/20">
        <span aria-hidden="true">🟡</span>
        <span>{statusText}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E50062]/10 px-3 py-1 text-xs font-bold text-[#A00045] ring-1 ring-inset ring-[#E50062]/25">
      <span aria-hidden="true">🔴</span>
      <span>{statusText}</span>
    </span>
  );
}

export default function ReportDashboard({
  report,
  initialUnlocked,
  analysisSource,
  onEditAnswers,
  onStartNewAssessment,
  onUnlockSuccess,
}: ReportDashboardProps) {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(initialUnlocked);
  const [fullName, setFullName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [socialOrWhatsapp, setSocialOrWhatsapp] = useState<string>("");
  const [formError, setFormError] = useState<string>("");
  const [unlockedLead, setUnlockedLead] = useState<LeadInfo | null>(null);

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedMobile = mobile.replace(/\s+/g, "").trim();
    if (!fullName.trim()) {
      setFormError("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return;
    }
    if (!/^0?9\d{9}$/.test(cleanedMobile) && cleanedMobile.length < 10) {
      setFormError("لطفاً یک شماره موبایل معتبر (مثلاً 09123456789) وارد کنید.");
      return;
    }

    const leadData: LeadInfo = {
      fullName: fullName.trim(),
      mobile: cleanedMobile,
      socialOrWhatsapp: socialOrWhatsapp.trim() || undefined,
    };
    setUnlockedLead(leadData);
    setIsUnlocked(true);
    setFormError("");
    if (onUnlockSuccess) onUnlockSuccess(leadData);
  };

  return (
    <main className="flex-1 bg-[#EBEBEB] py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Action Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {report.isSampleDemo ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#114DD4] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>نمونه گزارش واقعی: کیس فروشگاه پلاسکو (مسعود فقیهی)</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00A862] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs">
                <LockOpen className="h-3.5 w-3.5" />
                <span>
                  {analysisSource === "gemini"
                    ? "تحلیل زنده توسط ایجنت fardAi (هوش مصنوعی)"
                    : "گزارش اختصاصی آماده شد"}
                </span>
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {!report.isSampleDemo && (
              <button
                type="button"
                onClick={onEditAnswers}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-[#292929] shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-colors hover:bg-[#E0F0FF] hover:text-[#114DD4] cursor-pointer"
              >
                <Edit3 className="h-3.5 w-3.5" />
                <span>ویرایش پاسخ‌ها</span>
              </button>
            )}
            <button
              type="button"
              onClick={onStartNewAssessment}
              className="manafard-cta inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white cursor-pointer"
            >
              <span>{report.isSampleDemo ? "ارزیابی کسب‌وکار خودتان" : "ارزیابی جدید"}</span>
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* LAYER 1: UNLOCKED IMMEDIATELY */}
        <section className="space-y-6">
          {/* Score & Business Identity Card */}
          <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="grid items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-4 md:border-l md:border-[#EBEBEB] md:pl-6">
                <ScoreGauge score={report.score} badge={report.scoreBadge} />
              </div>

              <div className="md:col-span-8">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#114DD4]">
                  <span>{report.archetypeTitle}</span>
                </div>

                <h1 className="mt-1.5 text-2xl font-bold text-[#0E1629] sm:text-3xl">
                  {report.businessSummary.name}
                  {report.businessSummary.ownerOrManager && (
                    <span className="mr-2 text-lg font-medium text-[#757575]">
                      (مدیریت: {report.businessSummary.ownerOrManager})
                    </span>
                  )}
                </h1>

                {/* Summary Pills */}
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-[#292929]">
                  <span className="inline-flex items-center gap-1 rounded-xl bg-[#F5F5F5] px-3 py-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#114DD4]" />
                    {report.businessSummary.city}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-xl bg-[#F5F5F5] px-3 py-1.5">
                    <CalendarRange className="h-3.5 w-3.5 text-[#114DD4]" />
                    {report.businessSummary.yearsLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-xl bg-[#F5F5F5] px-3 py-1.5">
                    <Users className="h-3.5 w-3.5 text-[#114DD4]" />
                    {report.businessSummary.teamLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-xl bg-[#F5F5F5] px-3 py-1.5">
                    {report.businessSummary.websiteLabel}
                  </span>
                  {report.businessSummary.instagramHandle && (
                    <span
                      dir="ltr"
                      className="inline-flex items-center gap-1 rounded-xl bg-[#E0F0FF] px-3 py-1.5 text-[#114DD4]"
                    >
                      @{report.businessSummary.instagramHandle}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-7 text-[#525252] sm:text-base">
                  {report.scoreSummary}
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Phase-1 Recommendation Card */}
          <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E50062] px-3.5 py-1 text-xs font-bold text-white">
              <Target className="h-3.5 w-3.5" />
              <span>{report.phase1Recommendation.badge}</span>
            </div>

            <h2 className="mt-4 text-xl font-bold leading-9 text-[#0E1629] sm:text-2xl">
              {report.phase1Recommendation.headline}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#525252] sm:text-base">
              {report.phase1Recommendation.rationale}
            </p>

            {/* Funnel Visualization */}
            <div className="mt-6 rounded-2xl bg-[#F5F5F5] p-4 sm:p-5">
              <div className="mb-3 text-xs font-bold text-[#757575]">
                قیف پیشنهادی رشد دیجیتال (از ظرفیت فعلی تا فروش پایدار):
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {report.phase1Recommendation.recommendedFunnel.map((stepText, idx) => (
                  <React.Fragment key={stepText}>
                    <div className="rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-[#0E1629] shadow-[0_2px_6px_rgba(0,0,0,0.05)] sm:text-sm">
                      <span className="ml-1.5 text-[#114DD4]">{idx + 1}.</span>
                      {stepText}
                    </div>
                    {idx < report.phase1Recommendation.recommendedFunnel.length - 1 && (
                      <ArrowLeft className="h-4 w-4 shrink-0 text-[#E50062]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Traffic-Light Status Table */}
          <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div className="border-b border-[#EBEBEB] px-6 py-5">
              <h2 className="text-lg font-bold text-[#0E1629]">
                جدول وضعیت چراغ‌راهنمایی زیرساخت دیجیتال
              </h2>
              <p className="mt-1 text-xs text-[#757575]">
                ارزیابی دقیق ۶ شاخص کلیدی کسب‌وکار شما در مقایسه با استاندارد بازار
              </p>
            </div>

            <div className="divide-y divide-[#EBEBEB]">
              {report.trafficLights.map((item) => (
                <div
                  key={item.id}
                  className="grid items-center gap-3 px-6 py-4 transition-colors hover:bg-[#F5F5F5]/60 sm:grid-cols-12"
                >
                  <div className="sm:col-span-3">
                    <span className="text-sm font-bold text-[#0E1629]">
                      {item.label}
                    </span>
                  </div>
                  <div className="sm:col-span-3">
                    {getTrafficLightBadge(item.level, item.statusText)}
                  </div>
                  <div className="sm:col-span-6">
                    <p className="text-xs leading-6 text-[#525252] sm:text-sm">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths vs Improvement Areas */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A862]/15 text-[#008A52]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0E1629]">
                  نقاط قوت و سرمایه‌های فعلی شما
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {report.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm leading-6 text-[#292929]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A862]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E50062]/12 text-[#E50062]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0E1629]">
                  گلوگاه‌ها و فرصت‌های نیازمند اقدام
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {report.improvementAreas.map((gap) => (
                  <li key={gap} className="flex items-start gap-2.5 text-sm leading-6 text-[#292929]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E50062]" />
                    <span>{gap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* LAYER 2: LEAD CAPTURE GATE OR UNLOCKED FULL REPORT */}
        <section className="mt-10">
          {!isUnlocked ? (
            <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
              {/* Blurred Preview Background */}
              <div
                aria-hidden="true"
                className="pointer-events-none select-none space-y-6 p-6 opacity-45 blur-md sm:p-8"
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {report.competitors.slice(0, 3).map((comp) => (
                    <div
                      key={comp.name}
                      className="rounded-2xl bg-[#F5F5F5] p-5"
                    >
                      <div className="h-4 w-32 rounded bg-slate-300" />
                      <div className="mt-3 h-3 w-full rounded bg-slate-200" />
                      <div className="mt-2 h-3 w-4/5 rounded bg-slate-200" />
                      <div className="mt-4 h-10 w-full rounded bg-[#E0F0FF]" />
                    </div>
                  ))}
                </div>
                <div className="h-40 rounded-2xl bg-[#F5F5F5] p-5" />
              </div>

              {/* Gate Overlay Form */}
              <div className="relative z-10 -mt-56 flex items-center justify-center px-4 pb-10 sm:-mt-64 sm:px-6">
                <div className="w-full max-w-xl rounded-[24px] bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#114DD4] text-white shadow-md shadow-[#114DD4]/25">
                    <Lock className="h-6 w-6" />
                  </div>

                  <div className="mt-4 text-center">
                    <h2 className="text-xl font-bold text-[#0E1629] sm:text-2xl">
                      بازگشایی گزارش کامل رقبا و نقشه راه ۶ ماهه
                    </h2>
                    <p className="mt-2 text-xs leading-6 text-[#525252] sm:text-sm">
                      بخش‌های قفل‌شده شامل{" "}
                      <strong className="text-[#0E1629]">
                        تحلیل ۳ رقیب برتر حوزه شما در گوگل و اینستاگرام
                      </strong>{" "}
                      و{" "}
                      <strong className="text-[#0E1629]">
                        نقشه راه اجرایی ۶ ماهه + کلمات کلیدی پولساز
                      </strong>{" "}
                      بلافاصله پس از ثبت اطلاعات زیر باز می‌شوند.
                    </p>
                  </div>

                  <form onSubmit={handleUnlockSubmit} className="mt-6 space-y-4">
                    {formError && (
                      <div className="rounded-xl bg-[#E50062]/10 px-4 py-2.5 text-xs font-bold text-[#A00045]">
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="mb-1.5 block text-[13px] font-bold text-[#0E1629]">
                        نام و نام خانوادگی <span className="text-[#E50062]">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="مثلاً: مسعود فقیهی"
                        className="manafard-input w-full px-4 py-3 text-[15px] text-black placeholder:text-[#7A7A7A]"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[13px] font-bold text-[#0E1629]">
                        شماره موبایل <span className="text-[#E50062]">*</span>
                      </label>
                      <input
                        type="tel"
                        dir="ltr"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="09123456789"
                        className="manafard-input w-full px-4 py-3 text-left text-[15px] text-black placeholder:text-[#7A7A7A]"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[13px] font-bold text-[#0E1629]">
                        واتساپ یا آیدی اینستاگرام (اختیاری)
                      </label>
                      <input
                        type="text"
                        dir="ltr"
                        value={socialOrWhatsapp}
                        onChange={(e) => setSocialOrWhatsapp(e.target.value)}
                        placeholder="@yourpage یا شماره واتساپ"
                        className="manafard-input w-full px-4 py-3 text-left text-[15px] text-black placeholder:text-[#7A7A7A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="manafard-cta flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white active:scale-[0.99] cursor-pointer"
                    >
                      <KeyRound className="h-4 w-4" />
                      <span>مشاهده فوری تحلیل رقبا و نقشه راه ۶ ماهه</span>
                    </button>

                    <p className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-[#757575]">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#00A862]" />
                      <span>
                        اطلاعات شما نزد آژانس مانافرد محرمانه می‌ماند و تماس تبلیغاتی مزاحم نخواهید داشت.
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in space-y-8">
              {unlockedLead && (
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#00A862]/10 px-5 py-3.5 text-xs font-bold text-[#008A52] sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A862]" />
                    <span>
                      {unlockedLead.fullName} عزیز، گزارش کامل تحلیل رقبا و نقشه راه ۶ ماهه
                      شما با موفقیت بازگشایی شد.
                    </span>
                  </div>
                </div>
              )}

              <ManafardDivider label="تحلیل رقبا و نقشه راه ۶ ماهه" />

              {/* Competitor Analysis Cards */}
              <div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-[#0E1629]">
                    تحلیل رقبای شناخته‌شده شما
                  </h2>
                  <p className="mt-1 text-xs text-[#757575] sm:text-sm">
                    بررسی نقاط قوت رقبا و فرصت طلایی تمایز برای {report.businessSummary.name}
                  </p>
                </div>

                <div
                  className={`grid gap-5 ${
                    report.competitors.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"
                  }`}
                >
                  {report.competitors.map((comp) => (
                    <div
                      key={comp.name}
                      className="flex flex-col justify-between rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base font-bold text-[#0E1629]">
                            {comp.name}
                          </h3>
                          <span className="shrink-0 rounded-full bg-[#E0F0FF] px-2.5 py-1 text-[11px] font-bold text-[#114DD4]">
                            {comp.tag}
                          </span>
                        </div>

                        <div className="mt-4 space-y-3 text-xs leading-6 sm:text-sm">
                          <div>
                            <span className="font-bold text-[#008A52]">نقطه قوت رقیب: </span>
                            <span className="text-[#525252]">{comp.strength}</span>
                          </div>
                          <div>
                            <span className="font-bold text-[#E50062]">شکاف / ضعف: </span>
                            <span className="text-[#525252]">{comp.weaknessOrGap}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl bg-[#E0F0FF]/55 p-3.5 text-xs leading-6 text-[#0E1629]">
                        <strong className="font-bold text-[#114DD4]">فرصت شما: </strong>
                        {comp.ourOpportunity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keyword Gap */}
              <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-8">
                <h2 className="text-xl font-bold text-[#0E1629]">
                  شکاف کلمات کلیدی: کجا می‌توانید اول شوید؟
                </h2>
                <p className="mt-1 text-xs text-[#757575] sm:text-sm">
                  عبارت‌هایی که مشتریان همین صنف و شهر جستجو می‌کنند، به‌همراه سطح رقابت.
                </p>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[520px] text-right text-sm">
                    <thead>
                      <tr className="border-b border-[#EBEBEB] text-xs text-[#757575]">
                        <th className="py-2 font-bold">عبارت جستجو</th>
                        <th className="py-2 font-bold">نیت جستجو</th>
                        <th className="py-2 font-bold">رقابت</th>
                        <th className="py-2 font-bold">رقبا حضور دارند؟</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EBEBEB]">
                      {report.keywordGap.map((k) => (
                        <tr key={k.keyword}>
                          <td className="py-3 font-bold text-[#0E1629]">{k.keyword}</td>
                          <td className="py-3">
                            <span
                              className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                                k.intent === "خرید فوری"
                                  ? "bg-[#00A862]/10 text-[#008A52]"
                                  : "bg-[#E0F0FF] text-[#114DD4]"
                              }`}
                            >
                              {k.intent}
                            </span>
                          </td>
                          <td className="py-3 text-xs font-bold text-[#292929]">{k.competition}</td>
                          <td
                            className={`py-3 text-xs font-bold ${
                              k.competitorPresent ? "text-[#757575]" : "text-[#008A52]"
                            }`}
                          >
                            {k.competitorPresent ? "بله" : "خیر، فرصت خالی"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Revenue opportunity estimate */}
              <div className="rounded-[24px] bg-[#0E1629] p-6 text-white sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-bold">ظرفیت جذب مشتری در صورت رتبه اول</h2>
                  <span className="rounded-full bg-[#E50062] px-3 py-1 text-[11px] font-bold">
                    برآورد fardAi (تخمینی)
                  </span>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-xs text-blue-100/80">جستجوی ماهانه</div>
                    <div className="mt-1 text-2xl font-bold">
                      {report.opportunity.monthlySearchesMin.toLocaleString("fa-IR")} تا{" "}
                      {report.opportunity.monthlySearchesMax.toLocaleString("fa-IR")}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-xs text-blue-100/80">نرخ تماس یا مراجعه</div>
                    <div className="mt-1 text-2xl font-bold">
                      {report.opportunity.contactRateMin.toLocaleString("fa-IR")}٪ تا{" "}
                      {report.opportunity.contactRateMax.toLocaleString("fa-IR")}٪
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#E50062] p-4">
                    <div className="text-xs text-white/80">مشتری بالقوه در ماه</div>
                    <div className="mt-1 text-2xl font-bold">
                      {Math.round(
                        (report.opportunity.monthlySearchesMin * report.opportunity.contactRateMin) / 100
                      ).toLocaleString("fa-IR")}{" "}
                      تا{" "}
                      {Math.round(
                        (report.opportunity.monthlySearchesMax * report.opportunity.contactRateMax) / 100
                      ).toLocaleString("fa-IR")}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-6 text-blue-100/80">
                  {report.opportunity.note} این اعداد تخمین هوش مصنوعی هستند و از داده زنده گوگل
                  گرفته نشده‌اند.
                </p>
              </div>

              {/* 6-Month Actionable Roadmap */}
              <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#0E1629]">
                    نقشه راه اجرایی ۶ ماهه (گام‌به‌گام)
                  </h2>
                  <p className="mt-1 text-xs text-[#757575] sm:text-sm">
                    طراحی‌شده متناسب با ظرفیت اجرایی {report.businessSummary.teamLabel} بدون
                    تحمیل هزینه‌های اضافی
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {report.roadmap.map((phase) => (
                    <div
                      key={phase.phase}
                      className="flex flex-col rounded-2xl bg-[#F5F5F5] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="rounded-lg bg-[#114DD4] px-2.5 py-1 text-xs font-bold text-white">
                          {phase.phase}
                        </span>
                        <span className="text-xs font-bold text-[#757575]">
                          {phase.timeframe}
                        </span>
                      </div>

                      <h3 className="mt-3 text-base font-bold text-[#0E1629]">
                        {phase.title}
                      </h3>
                      <p className="mt-1 text-xs font-bold text-[#E50062]">
                        تمرکز: {phase.focus}
                      </p>

                      <ul className="mt-4 space-y-2.5 border-t border-black/5 pt-4">
                        {phase.actions.map((act) => (
                          <li
                            key={act}
                            className="flex items-start gap-2 text-xs leading-6 text-[#292929]"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00A862]" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* High-Intent Money Keywords */}
              <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-8">
                <div className="flex items-center gap-2.5">
                  <Search className="h-5 w-5 text-[#114DD4]" />
                  <h2 className="text-lg font-bold text-[#0E1629]">
                    کلمات کلیدی پولساز پیشنهادی در گوگل
                  </h2>
                </div>
                <p className="mt-1 text-xs text-[#757575] sm:text-sm">
                  عباراتی که مشتریان آماده خرید در گوگل جستجو می‌کنند و باید در فاز ۱ و ۲
                  تصاحب شوند:
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {report.moneyKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#E0F0FF]/70 px-3.5 py-2 text-xs font-bold text-[#114DD4] sm:text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E50062]" />
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Agency Consultation CTA */}
              <div className="flex flex-col items-center justify-between gap-5 rounded-[24px] bg-[#0E1629] p-6 text-white sm:flex-row sm:p-8">
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">
                    آماده اجرای فاز اول برای {report.businessSummary.name} هستید؟
                  </h3>
                  <p className="mt-1.5 text-xs leading-6 text-slate-300 sm:text-sm">
                    کارشناسان آژانس مانافرد در یک جلسه ۳۰ دقیقه‌ای رایگان، دقیقاً همین نقشه
                    راه را با زمان‌بندی و بودجه شفاف با شما مرور می‌کنند.
                  </p>
                </div>
                <a
                  href="#consultation-requested"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "درخواست جلسه هم‌فکری شما با تیم مانافرد ثبت شد! همکاران ما به زودی با شما تماس می‌گیرند."
                    );
                  }}
                  className="manafard-cta inline-flex shrink-0 items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>درخواست جلسه هم‌فکری رایگان</span>
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

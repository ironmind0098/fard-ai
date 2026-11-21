"use client";

import React, { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import LandingView from "@/components/LandingView";
import AssessmentWizard from "@/components/AssessmentWizard";
import ReportDashboard from "@/components/ReportDashboard";
import { ManafardLogo } from "@/components/ManafardBrand";
import { AssessmentInput, AssessmentReport } from "@/types/assessment";
import {
  generateAssessmentReport,
  SAMPLE_PLASCO_REPORT,
} from "@/lib/assessment-engine";

const INITIAL_INPUT: AssessmentInput = {
  businessName: "",
  industry: "",
  city: "",
  targetMarket: "local",
  yearsInBusiness: "1to5",
  teamSize: "1to3",
  salesModel: "in_person",
  customerType: "b2c",
  websiteStatus: "none",
  socialStatus: "semi_active",
  adsExperience: "none",
  discoveryChannel: "reputation",
  websiteRequestFreq: "yes_sometimes",
  primaryGoal: "local_customers",
  instagramHandle: "",
  competitors: "",
};

type ActiveView = "landing" | "wizard" | "analyzing" | "report";

export default function HomePage() {
  const [activeView, setActiveView] = useState<ActiveView>("landing");
  const [wizardInput, setWizardInput] = useState<AssessmentInput>(INITIAL_INPUT);
  const [activeReport, setActiveReport] = useState<AssessmentReport | null>(null);
  const [reportUnlocked, setReportUnlocked] = useState<boolean>(false);
  const [analysisSource, setAnalysisSource] = useState<"gemini" | "local_fallback">(
    "local_fallback"
  );

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartAssessment = () => {
    setActiveView("wizard");
    scrollTop();
  };

  const handleStartFreshAssessment = () => {
    setWizardInput(INITIAL_INPUT);
    setActiveView("wizard");
    scrollTop();
  };

  const handleOpenSampleReport = () => {
    setActiveReport(SAMPLE_PLASCO_REPORT);
    setReportUnlocked(true);
    setAnalysisSource("local_fallback");
    setActiveView("report");
    scrollTop();
  };

  const handleCompleteWizard = async (data: AssessmentInput) => {
    setWizardInput(data);
    setActiveView("analyzing");
    scrollTop();

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const payload = (await res.json()) as {
        report?: AssessmentReport;
        source?: "gemini" | "local_fallback";
      };

      if (payload.report) {
        setActiveReport(payload.report);
        setAnalysisSource(payload.source || "local_fallback");
      } else {
        setActiveReport(generateAssessmentReport(data));
        setAnalysisSource("local_fallback");
      }
    } catch {
      setActiveReport(generateAssessmentReport(data));
      setAnalysisSource("local_fallback");
    }

    setReportUnlocked(false);
    setActiveView("report");
    scrollTop();
  };

  const handleEditAnswers = () => {
    setActiveView("wizard");
    scrollTop();
  };

  const handleGoHome = () => {
    setActiveView("landing");
    scrollTop();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#EBEBEB]">
      <Header
        activeView={activeView === "analyzing" ? "wizard" : activeView}
        onStartAssessment={handleStartAssessment}
        onOpenSampleReport={handleOpenSampleReport}
        onGoHome={handleGoHome}
      />

      {activeView === "landing" && (
        <LandingView
          onStartAssessment={handleStartAssessment}
          onOpenSampleReport={handleOpenSampleReport}
        />
      )}

      {activeView === "wizard" && (
        <AssessmentWizard
          initialData={wizardInput}
          onComplete={handleCompleteWizard}
          onCancel={handleGoHome}
        />
      )}

      {activeView === "analyzing" && (
        <main className="flex flex-1 items-center justify-center bg-[#EBEBEB] px-4 py-16">
          <div className="w-full max-w-lg rounded-[24px] bg-white p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E0F0FF] text-[#114DD4]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#E50062]/10 px-3 py-1 text-xs font-bold text-[#E50062]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>ایجنت fardAi در حال پردازش</span>
            </div>

            <h2 className="mt-3 text-xl font-bold text-[#0E1629] sm:text-2xl">
              در حال تحلیل اختصاصی «{wizardInput.businessName || "کسب‌وکار شما"}»
            </h2>
            <p className="mt-2.5 text-sm leading-7 text-[#525252]">
              ایجنت <span dir="ltr" className="font-bold text-[#114DD4]">fardAi</span> در حال
              بررسی شرایط بازار {wizardInput.city || "شهر شما"}، ارزیابی رقبا و تدوین
              نقشه راه ۶ ماهه متناسب با شغل شماست...
            </p>
          </div>
        </main>
      )}

      {activeView === "report" && activeReport && (
        <ReportDashboard
          report={activeReport}
          initialUnlocked={reportUnlocked}
          analysisSource={analysisSource}
          onEditAnswers={handleEditAnswers}
          onStartNewAssessment={handleStartFreshAssessment}
        />
      )}

      {/* Royal Blue Geometric Footer matching manafard.com */}
      <footer className="manafard-footer-bg mt-8 rounded-t-[32px] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="space-y-2">
            <ManafardLogo inverted />
            <p className="max-w-md text-xs leading-6 text-blue-100/90">
              آژانس دیجیتال مارکتینگ مانافرد؛ طراحی سایت، سئو محلی و استراتژی رشد
              دیجیتال متناسب با ظرفیت واقعی کسب‌وکارهای ایرانی.
            </p>
          </div>
          <div className="text-xs text-blue-100/90 md:text-left">
            <p className="font-bold text-white">شهر هوشمند فرد — با قدرت ایجنت fardAi</p>
            <p className="mt-1">طراحی‌شده با رویکرد ارزش‌محور (Value-First)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { ManafardLogo } from "./ManafardBrand";

interface HeaderProps {
  onStartAssessment: () => void;
  onOpenSampleReport: () => void;
  onGoHome: () => void;
  activeView: "landing" | "wizard" | "report";
}

export default function Header({
  onStartAssessment,
  onOpenSampleReport,
  onGoHome,
  activeView,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={onGoHome}
          className="transition-opacity hover:opacity-85 cursor-pointer"
        >
          <ManafardLogo />
        </button>

        {/* Nav Links */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#292929] md:flex">
          {activeView === "landing" ? (
            <>
              <a
                href="#how-it-works"
                className="transition-colors hover:text-[#114DD4]"
              >
                نحوه کار
              </a>
              <button
                type="button"
                onClick={onOpenSampleReport}
                className="transition-colors hover:text-[#114DD4] cursor-pointer"
              >
                نمونه گزارش
              </button>
              <a
                href="#faq"
                className="transition-colors hover:text-[#114DD4]"
              >
                سوالات متداول
              </a>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={onGoHome}
                className="transition-colors hover:text-[#114DD4] cursor-pointer"
              >
                صفحه اصلی
              </button>
              <button
                type="button"
                onClick={onOpenSampleReport}
                className="transition-colors hover:text-[#114DD4] cursor-pointer"
              >
                نمونه گزارش واقعی
              </button>
            </>
          )}
        </nav>

        {/* Primary CTA */}
        <div className="flex items-center gap-2.5">
          {activeView !== "report" && (
            <button
              type="button"
              onClick={onOpenSampleReport}
              className="hidden rounded-2xl border border-[#114DD4]/20 bg-[#E0F0FF]/60 px-3.5 py-2 text-xs font-bold text-[#114DD4] transition-all hover:bg-[#E0F0FF] sm:inline-flex md:hidden cursor-pointer"
            >
              نمونه گزارش
            </button>
          )}
          <button
            type="button"
            onClick={onStartAssessment}
            className="manafard-cta inline-flex items-center gap-1.5 rounded-2xl px-4 py-2.5 text-xs font-bold text-white active:scale-[0.98] sm:px-5 sm:text-sm cursor-pointer"
          >
            <span>شروع ارزیابی رایگان</span>
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

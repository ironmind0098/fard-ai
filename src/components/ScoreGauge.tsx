"use client";

import React from "react";

interface ScoreGaugeProps {
  score: number;
  badge: string;
}

export default function ScoreGauge({ score, badge }: ScoreGaugeProps) {
  const clamped = Math.max(0, Math.min(100, score));
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (clamped / 100) * circumference;

  const colorClass =
    clamped >= 70
      ? "text-[#00A862]"
      : clamped >= 45
      ? "text-[#114DD4]"
      : "text-[#E50062]";

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative flex h-36 w-36 items-center justify-center">
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 140 140">
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="12"
            className="text-[#EBEBEB]"
          />
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`${colorClass} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-baseline gap-0.5" dir="ltr">
            <span className="text-3xl font-extrabold tracking-tight text-[#0E1629]">
              {clamped}
            </span>
            <span className="text-sm font-medium text-[#757575]">/100</span>
          </div>
          <span className="mt-0.5 text-[11px] font-medium text-[#757575]">
            امتیاز آمادگی دیجیتال
          </span>
        </div>
      </div>

      <span className="mt-3 inline-flex items-center rounded-full bg-[#00A862]/10 px-3.5 py-1 text-xs font-bold text-[#008A52] ring-1 ring-inset ring-[#00A862]/25">
        {badge}
      </span>
    </div>
  );
}

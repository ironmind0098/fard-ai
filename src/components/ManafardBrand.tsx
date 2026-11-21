import React from "react";

export function ManafardLogo({ inverted = false }: { inverted?: boolean }) {
  const strokeColor = inverted ? "#FFFFFF" : "#0E1629";
  const textColor = inverted ? "text-white" : "text-[#0E1629]";
  const subColor = inverted ? "text-blue-100/80" : "text-[#757575]";

  return (
    <div className="flex items-center gap-3">
      {/* Circular Geometric Monogram inspired by manafard.com */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <circle cx="22" cy="22" r="19" stroke={strokeColor} strokeWidth="2" />
        <path
          d="M22 3V41M10 22H34M22 12H33"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="33" cy="12" r="3" fill="#E50062" />
      </svg>

      <div className="text-right">
        <div className="flex items-center gap-2">
          <span className={`text-base font-bold tracking-tight sm:text-lg ${textColor}`}>
            شهر هوشمند فرد
          </span>
          <span
            dir="ltr"
            className="rounded-md bg-[#E50062] px-2 py-0.5 text-[11px] font-bold tracking-wide text-white"
          >
            fardAi
          </span>
        </div>
        <p className={`hidden text-[11px] sm:block ${subColor}`}>
          دستیار هوشمند رشد دیجیتال کسب‌وکار
        </p>
      </div>
    </div>
  );
}

export function ManafardDivider({ label }: { label?: string }) {
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-[#EBEBEB]" />
      <div className="flex items-center gap-2 text-xs font-bold text-[#757575]">
        <span className="inline-block h-2 w-2 rotate-45 bg-[#114DD4]" />
        {label && <span className="text-[#0E1629]">{label}</span>}
        <span className="inline-block h-2 w-2 rotate-45 bg-[#E50062]" />
      </div>
      <div className="h-px flex-1 bg-[#EBEBEB]" />
    </div>
  );
}

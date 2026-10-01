"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calculator, Newspaper, Download, AlertCircle, ShieldCheck, TrendingUp, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TopBar() {
  const { lang, setLang, strings } = useLanguage();

  return (
    <div className="bg-[#081325] text-slate-200 text-xs py-2 px-4 sm:px-6 border-b border-slate-700/70 relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left: Contact Hotline, Licensing, Heritage Badge & DSE Stock */}
        <div className="flex items-center gap-x-3 gap-y-1.5 overflow-x-auto no-scrollbar">
          {/* Hotline micro-pill */}
          <a
            href="tel:+8809609200555"
            className="flex items-center space-x-1.5 bg-nhfil-blue/15 hover:bg-nhfil-blue/25 text-white px-2.5 py-1 rounded-md border border-nhfil-blue/30 transition-colors font-semibold whitespace-nowrap group text-[11px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-nhfil-blue animate-pulse shrink-0" />
            <Phone className="w-2.5 h-2.5 text-nhfil-blue group-hover:scale-110 transition-transform" />
            <span className="tracking-tight">{strings.topbar.hotline}</span>
          </a>
          
          <span className="h-3 w-px bg-slate-700/80 hidden sm:inline-block shrink-0" />
          
          <div className="hidden sm:flex items-center space-x-1.5 text-slate-300 whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-[11px] text-slate-300">{strings.topbar.licensing}</span>
          </div>

          <span className="h-3 w-px bg-slate-700/80 hidden 2xl:inline-block shrink-0" />

          {/* 25+ Years Heritage Badge */}
          <div className="hidden 2xl:flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] font-bold tracking-tight shadow-[0_0_10px_rgba(245,158,11,0.12)] whitespace-nowrap">
            <Award className="w-3 h-3 text-amber-400 shrink-0" />
            <span>{lang === "bn" ? "২৫+ বছরের আর্থিক ঐতিহ্য" : "25+ Years of Heritage"}</span>
          </div>

          <span className="h-3 w-px bg-slate-700/80 hidden md:inline-block shrink-0" />

          {/* DSE Stock Indicator */}
          <div className="hidden md:flex items-center space-x-1.5 bg-slate-900/80 hover:bg-slate-900 transition-colors px-2.5 py-1 rounded-md border border-slate-700/80 text-[11px] whitespace-nowrap shadow-2xs">
            <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold uppercase tracking-wider">LIVE</span>
            <span className="text-slate-400 font-bold">{strings.topbar.dseLabel}</span>
            <span className="font-extrabold text-white">NHFIL</span>
            <span className="text-emerald-400 font-bold flex items-center">
              <TrendingUp className="w-3 h-3 mr-0.5" />
              {lang === "bn" ? "৳ ৩৮.৬০ (+২.১২%)" : "৳ 38.60 (+2.12%)"}
            </span>
          </div>
        </div>

        {/* Right: Quick Tools & Notice & Language Switcher */}
        <div className="flex items-center space-x-2.5 sm:space-x-3.5 text-slate-300 text-[11px] sm:text-xs shrink-0">
          <Link
            href="/calculator"
            className="flex items-center space-x-1 hover:text-white transition-colors whitespace-nowrap"
          >
            <Calculator className="w-3 h-3 text-nhfil-blue" />
            <span>{strings.topbar.calculator}</span>
          </Link>
          <Link
            href="/notice-board"
            className="flex items-center space-x-1 hover:text-white transition-colors hidden sm:flex whitespace-nowrap"
          >
            <Newspaper className="w-3 h-3 text-nhfil-blue" />
            <span>{strings.topbar.notices}</span>
          </Link>
          <Link
            href="/interest-rates"
            className="flex items-center space-x-1 hover:text-white transition-colors hidden md:flex whitespace-nowrap"
          >
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-[10px]">
              {strings.topbar.rates}
            </span>
          </Link>
          <Link
            href="/downloads"
            className="flex items-center space-x-1 hover:text-white transition-colors hidden lg:flex whitespace-nowrap"
          >
            <Download className="w-3 h-3 text-nhfil-blue" />
            <span>{strings.topbar.downloads}</span>
          </Link>
          <Link
            href="/contact-us#complain"
            className="flex items-center space-x-1 hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            <AlertCircle className="w-3 h-3 text-amber-400" />
            <span className="text-amber-300/90 font-medium whitespace-nowrap">{strings.topbar.complain}</span>
          </Link>

          <span className="h-3 w-px bg-slate-700/80 hidden sm:inline-block shrink-0" />

          {/* Bilingual Switcher */}
          <div className="flex items-center bg-slate-900 rounded-md p-0.5 border border-slate-700 shadow-2xs shrink-0">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider transition-all ${
                lang === "en"
                  ? "bg-nhfil-blue text-white shadow-[0_0_8px_rgba(0,159,225,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("bn")}
              className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider transition-all ${
                lang === "bn"
                  ? "bg-nhfil-blue text-white shadow-[0_0_8px_rgba(0,159,225,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              বাংলা
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

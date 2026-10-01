"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  PiggyBank,
  Moon,
  Briefcase,
  Calculator,
  Compass,
  Download,
  FileCheck2,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function QuickServices() {
  const { lang, strings } = useLanguage();

  const pillars = [
    {
      title: lang === "bn" ? "গৃহঋণ ও ফ্ল্যাট অর্থায়ন" : "Home Mortgage Loans",
      tagline: lang === "bn" ? "ফ্ল্যাট ক্রয়, বাড়ি নির্মাণ ও প্লট অর্জন" : "Apartment, Construction & Land",
      desc: lang === "bn"
        ? "৭০% পর্যন্ত অর্থায়ন, ২০ বছর মেয়াদ, শহর ও প্রবাসী বাংলাদেশীদের জন্য বিশেষ সুযোগ।"
        : "Up to 70% financing, 20 years tenure, competitive interest rates for urban & NRB buyers.",
      icon: <Home className="w-6 h-6 text-nhfil-blue" />,
      href: "/loans",
      badge: lang === "bn" ? "প্রধান সেবা" : "Flagship Service",
      bgLight: "bg-blue-50/60",
      borderHover: "hover:border-nhfil-blue",
    },
    {
      title: lang === "bn" ? "আমানত ও সঞ্চয় স্কিম" : "Deposit & Savings Schemes",
      tagline: lang === "bn" ? "কোটিপতি, মিলিয়নেয়ার ও ফিক্সড টিডিআর" : "Kotipoti, Millionaire & Fixed TDR",
      desc: lang === "bn"
        ? "১.০০ কোটি টাকা পর্যন্ত সুনিশ্চিত সম্পদ সৃষ্টি, সর্বোচ্চ এনবিএফআই মুনাফার হার ও আমানতের বিপরীতে ৯০% ঋণ।"
        : "Guaranteed wealth creation up to BDT 1.00 Crore, highest NBFI return rates & 90% loan against deposit.",
      icon: <PiggyBank className="w-6 h-6 text-amber-600" />,
      href: "/deposits",
      badge: lang === "bn" ? "উচ্চ মুনাফা" : "High Yield",
      bgLight: "bg-amber-50/60",
      borderHover: "hover:border-amber-400",
    },
    {
      title: lang === "bn" ? "ইসলামিক ব্যাংকিং উইং" : "Islamic Banking Wing",
      tagline: lang === "bn" ? "১০০% হালাল শরীয়াহ ভিত্তিক বিনিয়োগ" : "100% Halal Shariah Financing",
      desc: lang === "bn"
        ? "সুদবিহীন মুদারাবা আমানত ও এইচপিএসএম আবাসন অংশীদারি, প্রখ্যাত শরীয়াহ স্কলারদের দ্বারা পরিচালিত।"
        : "Riba-free Mudaraba profit-sharing deposits & HPSM home co-ownership supervised by Islamic jurists.",
      icon: <Moon className="w-6 h-6 text-emerald-600" />,
      href: "/islamic",
      badge: lang === "bn" ? "শরীয়াহ অনুমোদিত" : "Shariah Supervised",
      bgLight: "bg-emerald-50/60",
      borderHover: "hover:border-emerald-400",
    },
    {
      title: lang === "bn" ? "এসএমই ও কর্পোরেট ফাইন্যান্স" : "SME & Corporate Finance",
      tagline: lang === "bn" ? "স্থানীয় উদ্যোগ ও শিল্প সমৃদ্ধি" : "Empowering Local Enterprise Growth",
      desc: lang === "bn"
        ? "চলতি মূলধন, নারী উদ্যোক্তা ঋণ (৭.০%), শিল্প যন্ত্রপাতির জন্য লিজ ফাইন্যান্স ও জাইকা পুনঃঅর্থায়ন।"
        : "Working capital, women entrepreneur loans (7.0%), lease finance for industrial machinery & JICA fund.",
      icon: <Briefcase className="w-6 h-6 text-sky-600" />,
      href: "/loans#sme",
      badge: lang === "bn" ? "রিয়াতি মুনাফা" : "Concessional Rates",
      bgLight: "bg-sky-50/60",
      borderHover: "hover:border-sky-400",
    },
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar) => (
          <Link
            key={pillar.title}
            href={pillar.href}
            className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-slate-200 transition-all duration-300 flex flex-col justify-between group ${pillar.borderHover}`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.bgLight}`}>
                  {pillar.icon}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-nhfil-blue transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs font-semibold text-nhfil-blue-700 mt-0.5">
                {pillar.tagline}
              </p>
              <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                {descFormat(pillar.desc)}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-nhfil-navy group-hover:text-nhfil-blue transition-colors">
              <span>{lang === "bn" ? "বিস্তারিত দেখুন" : "View Solutions"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Utility Shortcut Strip */}
      <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-700">
        <Link
          href="/calculator"
          className="flex items-center space-x-2 hover:text-nhfil-blue transition-colors py-1"
        >
          <div className="w-7 h-7 rounded-lg bg-nhfil-blue/10 flex items-center justify-center text-nhfil-blue">
            <Calculator className="w-3.5 h-3.5" />
          </div>
          <span>{lang === "bn" ? "ইএমআই হিসাব করুন" : "Calculate EMI"}</span>
        </Link>
        <span className="text-slate-200 hidden md:inline">|</span>
        <Link
          href="/location"
          className="flex items-center space-x-2 hover:text-nhfil-blue transition-colors py-1"
        >
          <div className="w-7 h-7 rounded-lg bg-nhfil-blue/10 flex items-center justify-center text-nhfil-blue">
            <Compass className="w-3.5 h-3.5" />
          </div>
          <span>{lang === "bn" ? "সারাদেশে ৯টি শাখা" : "Locate 9 Branches"}</span>
        </Link>
        <span className="text-slate-200 hidden md:inline">|</span>
        <Link
          href="/downloads"
          className="flex items-center space-x-2 hover:text-nhfil-blue transition-colors py-1"
        >
          <div className="w-7 h-7 rounded-lg bg-nhfil-blue/10 flex items-center justify-center text-nhfil-blue">
            <Download className="w-3.5 h-3.5" />
          </div>
          <span>{lang === "bn" ? "ফরম ও ডাউনলোড" : "Account Forms"}</span>
        </Link>
        <span className="text-slate-200 hidden md:inline">|</span>
        <Link
          href="/apply"
          className="flex items-center space-x-2 hover:text-nhfil-blue transition-colors py-1"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <FileCheck2 className="w-3.5 h-3.5" />
          </div>
          <span>{lang === "bn" ? "অনলাইনে সরাসরি আবেদন" : "Direct Online Application"}</span>
        </Link>
      </div>
    </section>
  );
}

function descFormat(text: string) {
  return text;
}

"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { depositSchemes } from "@/data/deposits";
import { formatBDT } from "@/lib/utils";
import {
  PiggyBank,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Calculator,
  ArrowRight,
  Phone,
  Sparkles,
  ChevronRight
} from "lucide-react";
import ApplyModal from "@/components/tools/ApplyModal";
import SafeImage from "@/components/ui/SafeImage";
import JsonLd from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DepositDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const scheme = depositSchemes.find((p) => p.id === resolvedParams.id);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  if (!scheme) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "DepositAccount",
    "name": scheme.title,
    "description": scheme.description,
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": "National Housing Finance PLC",
      "url": "https://www.nationalhousingbd.com"
    },
    "currency": "BDT",
    "annualPercentageRate": scheme.indicativeReturnRate,
    "interestRate": {
      "@type": "QuantitativeValue",
      "value": scheme.indicativeReturnRate,
      "unitText": "PERCENT"
    }
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <JsonLd data={productSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/deposits" className="hover:text-nhfil-blue">
            Deposit Schemes
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">{scheme.title}</span>
        </div>

        {/* Hero Card */}
        <div className="relative rounded-3xl overflow-hidden bg-nhfil-navy text-white shadow-xl mb-12">
          <div className="absolute inset-0 z-0">
            <SafeImage
              src={scheme.image}
              alt={scheme.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-nhfil-navy/95 to-slate-900/90" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{scheme.categoryName}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              {scheme.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {scheme.description}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400">Indicative Return</span>
                <p className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">{scheme.indicativeReturnRate}% p.a.*</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400">Min. Installment</span>
                <p className="text-base sm:text-lg font-black text-amber-400 mt-0.5">{formatBDT(scheme.minDepositBDT)}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Loan Facility</span>
                <p className="text-base sm:text-lg font-black text-nhfil-blue mt-0.5">Up to 90%</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Open This Scheme</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/calculator"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-sm border border-white/20 transition-all flex items-center space-x-2"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Calculate Deposit Growth</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* Features */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span>Scheme Benefits & Highlights</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scheme.highlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tenure Horizons */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-heading">
                Available Tenure Horizons
              </h2>
              <p className="text-xs text-slate-600">
                You can select from the following investment tenures based on your life milestones:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {scheme.tenureOptions.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-heading">
                Eligibility Criteria
              </h2>
              <ul className="space-y-2 text-xs text-slate-600">
                {scheme.eligibility.map((el, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nhfil-blue shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documentation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <FileText className="w-5 h-5" />
                </div>
                <span>Required Documentation Checklist</span>
              </h2>
              <ul className="space-y-2 text-xs text-slate-600">
                {scheme.requiredDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Side Desk */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              <div className="text-center pb-4 border-b border-slate-100">
                <span className="text-xs uppercase font-bold text-slate-400">Account Opening</span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mt-1">
                  Start Your Wealth Plan
                </h3>
                <p className="text-xs text-slate-500 mt-2">
                  Open your scheme digitally or visit any of our 9 regional branches.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <span>Open Scheme Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+8809609200555"
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-nhfil-blue" />
                  <span>Deposit Desk: +88 09609 200555</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-xs text-amber-900 space-y-1">
                <p className="font-bold flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>NBFI Trust & Safety</span>
                </p>
                <p className="text-[11px] leading-relaxed">
                  Supervised under Bangladesh Bank prudential financial regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        defaultProductType="deposit"
        defaultProductName={scheme.title}
      />
    </div>
  );
}

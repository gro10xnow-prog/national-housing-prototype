"use client";

import React, { useState } from "react";
import Link from "next/link";
import { islamicProducts } from "@/data/islamic";
import {
  Moon,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Phone,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award
} from "lucide-react";
import ApplyModal from "@/components/tools/ApplyModal";

export default function IslamicWingPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "deposit" | "investment">("all");
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const filtered = islamicProducts.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Islamic Header Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white shadow-2xl p-8 sm:p-14 mb-16">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <Moon className="w-3.5 h-3.5" />
              <span>Certified Shariah Banking Wing</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Islamic Banking & Financing (ইন্টারনেশনাল ইসলামিক উইং)
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed text-justify">
              National Housing Islamic Banking operates in strict conformity with the rules and principles of Islamic Shariah. Free from Riba (interest), Gharar (excessive uncertainty), and Maysir (gambling), we channel your savings solely into productive halal socio-economic investments.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Apply for Islamic Financing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#shariah"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-sm border border-white/20 transition-all"
              >
                Shariah Supervisory Committee
              </a>
            </div>
          </div>
        </div>

        {/* Product Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === "all"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            All Islamic Products ({islamicProducts.length})
          </button>
          <button
            onClick={() => setActiveCategory("deposit")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === "deposit"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            Mudaraba Deposits (4)
          </button>
          <button
            onClick={() => setActiveCategory("investment")}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === "investment"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            HPSM Investments & Home (3)
          </button>
        </div>

        {/* Islamic Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] uppercase">
                    {prod.categoryName}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 font-serif italic">
                    {prod.arabicConcept}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                  {prod.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {prod.description}
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 mb-6 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Shariah Structure</span>
                    <span className="font-bold text-emerald-800 text-right">{prod.shariahBasis}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Tenure</span>
                    <span className="font-bold text-slate-900">{prod.tenure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Profit Sharing / Rental</span>
                    <span className="font-bold text-slate-900">{prod.profitSharingRatio}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {prod.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Apply for this Islamic Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Shariah Supervisory Committee Section */}
        <div id="shariah" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Independent Governance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Shariah Supervisory Committee
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Our Islamic Wing is strictly regulated by an autonomous Shariah Supervisory Committee composed of eminent Islamic scholars, Faqihs (Islamic jurists), and certified Islamic banking professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900">Contractual Audits</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                All Mudaraba agreements, HPSM deeds, and profit-sharing weightage formulas are vetted and certified prior to deployment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900">Zero Riba Quarantine</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Complete ring-fencing of Islamic deposits ensuring zero co-mingling with conventional banking funds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <Award className="w-6 h-6 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900">Annual Shariah Audit</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Annual comprehensive Shariah audit report published alongside National Housing Finance PLC's Annual Report.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison: Islamic vs Conventional Framework */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Clarity & Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-2">
              Islamic Banking vs Conventional Finance
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Understand the core theological and contractual distinctions governing your money.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/70 text-slate-700 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Feature / Dimension</th>
                  <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">Islamic Wing (NHFIL)</th>
                  <th className="py-3 px-4 text-slate-700">Conventional Banking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Contractual Basis</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium bg-emerald-50/20">Partnership & Co-ownership (Shirkatul Melk)</td>
                  <td className="py-3.5 px-4 text-slate-600">Debtor and Creditor relationship (Loan)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Earnings / Return</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium bg-emerald-50/20">Rent on asset & Profit Sharing Ratio (PSR)</td>
                  <td className="py-3.5 px-4 text-slate-600">Fixed or floating interest rate (Riba)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Asset Backing</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium bg-emerald-50/20">100% tangible physical asset / property backing</td>
                  <td className="py-3.5 px-4 text-slate-600">Money itself is treated as a commodity</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Default Charges</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium bg-emerald-50/20">Channeled strictly to approved Charity Funds</td>
                  <td className="py-3.5 px-4 text-slate-600">Retained as institution income / revenue</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">Audit & Supervision</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-medium bg-emerald-50/20">Independent Shariah Supervisory Committee</td>
                  <td className="py-3.5 px-4 text-slate-600">Conventional internal & external statutory audit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        defaultProductName="Islamic Financing (HPSM / Mudaraba)"
      />
    </div>
  );
}

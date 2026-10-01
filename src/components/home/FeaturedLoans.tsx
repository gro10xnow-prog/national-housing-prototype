"use client";

import React, { useState } from "react";
import Link from "next/link";
import { loanProducts } from "@/data/loans";
import { formatBDT } from "@/lib/utils";
import { ArrowRight, Check, ChevronRight, Home, Calculator, Percent } from "lucide-react";
import SafeImage from "../ui/SafeImage";

export default function FeaturedLoans() {
  const [activeTab, setActiveTab] = useState<"all" | "home" | "sme" | "term">("home");

  const filteredLoans =
    activeTab === "all"
      ? loanProducts.slice(0, 6)
      : loanProducts.filter((l) => l.category === activeTab).slice(0, 6);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Home className="w-3.5 h-3.5" />
            <span>Financing Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Find Loan Products We Offer
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            We match you with specialized financing programs tailored to your property aspirations, commercial expansions, and SME milestones with market-leading transparency.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "home"
                  ? "bg-nhfil-blue text-white shadow-md shadow-nhfil-blue/25"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              Home Mortgage Loans
            </button>
            <button
              onClick={() => setActiveTab("sme")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "sme"
                  ? "bg-nhfil-blue text-white shadow-md shadow-nhfil-blue/25"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              SME Finance Schemes
            </button>
            <button
              onClick={() => setActiveTab("term")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "term"
                  ? "bg-nhfil-blue text-white shadow-md shadow-nhfil-blue/25"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              Term & Lease Finance
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "all"
                  ? "bg-nhfil-blue text-white shadow-md shadow-nhfil-blue/25"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              View All (17 Products)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLoans.map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-xl hover:-translate-y-1.5 hover:border-nhfil-blue/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image & Category Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <SafeImage
                    src={loan.image}
                    alt={loan.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-nhfil-navy/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {loan.categoryName}
                    </span>
                  </div>

                  {loan.popular && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-heading drop-shadow-sm">
                      {loan.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {loan.description}
                  </p>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Max Tenure</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5">{loan.maxTenureYears} Years</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Financing</p>
                      <p className="text-xs font-bold text-nhfil-blue mt-0.5">Up to {loan.maxFinancingPercent}%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Rate (APR)</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5">{loan.indicativeRate}%*</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-1">
                    {loan.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                <Link
                  href={`/calculator?amount=${loan.minAmountBDT}&rate=${loan.indicativeRate}&tenure=${loan.maxTenureYears}`}
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-all"
                >
                  <Calculator className="w-3.5 h-3.5 text-nhfil-blue" />
                  <span>EMI Calc</span>
                </Link>

                <Link
                  href={`/loans/${loan.id}`}
                  className="px-4 py-2 rounded-xl bg-nhfil-blue hover:bg-nhfil-blue-600 active:scale-95 text-white text-xs font-bold flex items-center space-x-1 shadow-sm transition-all"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Loans Hub CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/loans"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-nhfil-navy hover:bg-nhfil-blue text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <span>Explore Complete Loan Catalog (17 Products)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

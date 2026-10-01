"use client";

import React from "react";
import Link from "next/link";
import { depositSchemes } from "@/data/deposits";
import { formatBDT } from "@/lib/utils";
import { PiggyBank, ArrowRight, CheckCircle2, TrendingUp, Sparkles, ChevronRight } from "lucide-react";
import SafeImage from "../ui/SafeImage";

export default function FeaturedDeposits() {
  const topSchemes = depositSchemes.slice(0, 6);

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <PiggyBank className="w-3.5 h-3.5" />
            <span>High-Yield Wealth Creation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Find Deposit Schemes We Offer
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Save your valuable money today to build a prosperous future tomorrow. Choose from our specialized wealth schemes with compound return certainty and up to 90% loan facility.
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl ${
                scheme.id === "10"
                  ? "border-amber-400 bg-white shadow-xl relative"
                  : "bg-white border-slate-200 shadow-card hover:border-nhfil-blue/40"
              }`}
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <SafeImage
                    src={scheme.image}
                    alt={scheme.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-nhfil-navy/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {scheme.categoryName}
                    </span>
                  </div>
                  {scheme.id === "10" && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Flagship 1 Cr</span>
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-heading drop-shadow-sm">{scheme.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {scheme.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-medium">Indicative Profit Yield</span>
                      <span className="font-bold text-emerald-600 text-sm">{scheme.indicativeReturnRate}% p.a.*</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-medium">Min. Deposit</span>
                      <span className="font-bold text-slate-900">{formatBDT(scheme.minDepositBDT)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-medium">Tenure Options</span>
                      <span className="font-semibold text-slate-700">{scheme.tenureOptions.slice(0, 3).join(", ")}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-1.5 mb-2">
                    {scheme.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <Link
                  href={`/deposits/${scheme.id}`}
                  className="text-xs font-bold text-slate-900 hover:text-nhfil-blue flex items-center space-x-1"
                >
                  <span>Learn Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/apply"
                  className={`px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-all ${
                    scheme.id === "10"
                      ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md shadow-amber-500/20"
                      : "bg-nhfil-blue hover:bg-nhfil-blue-600 text-white shadow-sm"
                  }`}
                >
                  Open Scheme
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Deposits Link */}
        <div className="mt-12 text-center">
          <Link
            href="/deposits"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-nhfil-blue text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <span>Explore All Deposit Schemes & Term Deposits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

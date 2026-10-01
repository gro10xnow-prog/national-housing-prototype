"use client";

import React, { useState } from "react";
import Link from "next/link";
import { depositSchemes, DepositScheme } from "@/data/deposits";
import { formatBDT } from "@/lib/utils";
import {
  PiggyBank,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Search,
  Sparkles,
  ArrowRight
} from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

export default function DepositsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = depositSchemes.filter((scheme) => {
    const matchesCat = selectedCategory === "all" || scheme.category === selectedCategory;
    const matchesQuery =
      searchQuery === "" ||
      scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <PiggyBank className="w-4 h-4" />
            <span>Wealth & Savings Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Deposit Schemes & Term Investments
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Grow your hard-earned savings with market-leading compound profit yields, central bank regulatory protection, and priority access to home loan facilities.
          </p>

          {/* Search & Tabs */}
          <div className="mt-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search deposit scheme..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-sm"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {[
                { id: "all", label: "All Schemes (10)" },
                { id: "scheme", label: "Monthly Schemes (6)" },
                { id: "fixed", label: "Fixed Deposits - TDR (4)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === tab.id
                      ? "bg-amber-500 text-white shadow-md shadow-amber-500/25"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Deposit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((scheme) => (
            <div
              key={scheme.id}
              className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                scheme.id === "10"
                  ? "border-amber-300 shadow-xl relative"
                  : "bg-white border-slate-200 shadow-card hover:shadow-card-hover"
              }`}
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
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
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold">
                        Flagship
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-heading drop-shadow-sm">{scheme.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-6">
                    {scheme.description}
                  </p>

                <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Indicative Return</span>
                    <span className="font-bold text-emerald-600 text-sm">{scheme.indicativeReturnRate}% p.a.*</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Min. Deposit / Installment</span>
                    <span className="font-bold text-slate-900">{formatBDT(scheme.minDepositBDT)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Tenure Horizons</span>
                    <span className="font-semibold text-slate-700">{scheme.tenureOptions.slice(0, 3).join(", ")}...</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {scheme.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
              <Link
                href={`/deposits/${scheme.id}`}
                className="text-xs font-bold text-slate-900 hover:text-nhfil-blue flex items-center space-x-1"
              >
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/apply"
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  scheme.id === "10"
                    ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md"
                    : "bg-nhfil-blue hover:bg-nhfil-blue-600 text-white shadow-sm"
                }`}
              >
                Open Scheme
              </Link>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

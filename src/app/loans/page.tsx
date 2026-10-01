"use client";

import React, { useState } from "react";
import Link from "next/link";
import { loanProducts, LoanProduct } from "@/data/loans";
import { formatBDT } from "@/lib/utils";
import {
  Home,
  Check,
  ChevronRight,
  Calculator,
  Search,
  SlidersHorizontal,
  Building,
  Briefcase
} from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

export default function LoansHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = loanProducts.filter((loan) => {
    const matchesCat = selectedCategory === "all" || loan.category === selectedCategory;
    const matchesQuery =
      searchQuery === "" ||
      loan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Home className="w-4 h-4" />
            <span>Financing Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Loans & Mortgage Financing
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            National Housing Finance PLC provides comprehensive home mortgage loans, corporate term funding, and subsidized SME facilities across Bangladesh.
          </p>

          {/* Search & Tabs */}
          <div className="mt-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search loan by name or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50 shadow-sm"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {[
                { id: "all", label: "All Loans (17)" },
                { id: "home", label: "Home Mortgage Loans (9)" },
                { id: "sme", label: "SME Finance (6)" },
                { id: "term", label: "Term & Lease Finance (2)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === tab.id
                      ? "bg-nhfil-blue text-white shadow-md shadow-nhfil-blue/25"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loan Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <SafeImage
                    src={loan.image}
                    alt={loan.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
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
                    <h3 className="text-lg font-bold font-heading">{loan.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {loan.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Tenure</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5">{loan.maxTenureYears} Yrs</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Financing</p>
                      <p className="text-xs font-bold text-nhfil-blue mt-0.5">Up to {loan.maxFinancingPercent}%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">Rate</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5">{loan.indicativeRate}%*</p>
                    </div>
                  </div>

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

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                <Link
                  href={`/calculator?amount=${loan.minAmountBDT}&rate=${loan.indicativeRate}&tenure=${loan.maxTenureYears}`}
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                >
                  <Calculator className="w-3.5 h-3.5 text-nhfil-blue" />
                  <span>Calculate EMI</span>
                </Link>

                <Link
                  href={`/loans/${loan.id}`}
                  className="px-4 py-2 rounded-xl bg-nhfil-blue hover:bg-nhfil-blue-600 text-white text-xs font-bold flex items-center space-x-1 shadow-sm transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

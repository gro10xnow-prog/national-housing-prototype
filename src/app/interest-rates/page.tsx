"use client";

import React, { useState } from "react";
import Link from "next/link";
import { interestRatesData } from "@/data/rates";
import { Percent, ShieldCheck, ChevronRight, Calculator, FileText, CheckCircle2 } from "lucide-react";

export default function InterestRatesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = interestRatesData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Schedule of Rates</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <Percent className="w-4 h-4" />
            <span>Published Tariff & Charges</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Schedule of Interest & Profit Rates
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Indicative lending and deposit returns in compliance with Bangladesh Bank Guidelines. Effective as of <strong>January 2026</strong>.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Rates" },
              { id: "home", label: "Home Loans" },
              { id: "deposit", label: "Deposit Schemes" },
              { id: "sme", label: "SME & Commercial" },
              { id: "islamic", label: "Islamic Wing" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === tab.id
                    ? "bg-nhfil-navy text-white shadow-md"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rate Schedule Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 text-slate-700 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Product / Facility</th>
                  <th className="py-4 px-4">Tenure Range</th>
                  <th className="py-4 px-4">Indicative Rate / Yield</th>
                  <th className="py-4 px-6">Special Features & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-nhfil-blue shrink-0" />
                        <span>{item.productName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600 font-medium">
                      {item.minTenure} - {item.maxTenure}
                    </td>
                    <td className="py-4 px-4 font-black text-nhfil-blue whitespace-nowrap">
                      {item.rateRange}
                    </td>
                    <td className="py-4 px-6 text-slate-500 text-xs">
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>* Rates are subject to market conditions and regulatory circulars of Bangladesh Bank.</span>
            <Link href="/calculator" className="font-bold text-nhfil-blue hover:underline flex items-center space-x-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulate in Calculator &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure Notice */}
        <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3.5 text-xs text-nhfil-navy">
          <ShieldCheck className="w-5 h-5 text-nhfil-blue shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">Schedule of Charges & Regulatory Transparency:</h3>
            <p className="leading-relaxed text-slate-600">
              National Housing Finance PLC does not assess undisclosed appraisal charges. A complete schedule of fees (documentation charges, CIB processing fees at actuals, and stamp duty) is furnished with the formal sanction letter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

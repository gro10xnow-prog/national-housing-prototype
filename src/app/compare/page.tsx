"use client";

import React, { useState } from "react";
import Link from "next/link";
import { loanProducts, LoanProduct } from "@/data/loans";
import { depositSchemes, DepositScheme } from "@/data/deposits";
import {
  GitCompare,
  CheckCircle2,
  XCircle,
  Calculator,
  FileCheck2,
  ChevronRight,
  TrendingUp,
  Landmark,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  ShieldCheck,
  Percent
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ComparePage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"loans" | "deposits">("loans");

  // Selected loans (default first 2)
  const [selectedLoanIds, setSelectedLoanIds] = useState<string[]>([
    loanProducts[0].id,
    loanProducts[1] ? loanProducts[1].id : loanProducts[0].id
  ]);

  // Selected deposits (default first 2)
  const [selectedDepositIds, setSelectedDepositIds] = useState<string[]>([
    depositSchemes[0].id,
    depositSchemes[1] ? depositSchemes[1].id : depositSchemes[0].id
  ]);

  const handleLoanChange = (index: number, newId: string) => {
    const updated = [...selectedLoanIds];
    updated[index] = newId;
    setSelectedLoanIds(updated);
  };

  const handleDepositChange = (index: number, newId: string) => {
    const updated = [...selectedDepositIds];
    updated[index] = newId;
    setSelectedDepositIds(updated);
  };

  const addColumn = () => {
    if (activeTab === "loans") {
      if (selectedLoanIds.length < 3) {
        const unused = loanProducts.find((p) => !selectedLoanIds.includes(p.id));
        if (unused) setSelectedLoanIds([...selectedLoanIds, unused.id]);
      }
    } else {
      if (selectedDepositIds.length < 3) {
        const unused = depositSchemes.find((p) => !selectedDepositIds.includes(p.id));
        if (unused) setSelectedDepositIds([...selectedDepositIds, unused.id]);
      }
    }
  };

  const removeColumn = (index: number) => {
    if (activeTab === "loans") {
      if (selectedLoanIds.length > 2) {
        setSelectedLoanIds(selectedLoanIds.filter((_, i) => i !== index));
      }
    } else {
      if (selectedDepositIds.length > 2) {
        setSelectedDepositIds(selectedDepositIds.filter((_, i) => i !== index));
      }
    }
  };

  const selectedLoans = selectedLoanIds
    .map((id) => loanProducts.find((p) => p.id === id))
    .filter(Boolean) as LoanProduct[];

  const selectedDeposits = selectedDepositIds
    .map((id) => depositSchemes.find((p) => p.id === id))
    .filter(Boolean) as DepositScheme[];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            {lang === "bn" ? "হোম" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">
            {lang === "bn" ? "পণ্য তুলনা ম্যাট্রিক্স" : "Product Comparison Matrix"}
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <GitCompare className="w-4 h-4" />
            <span>{lang === "bn" ? "তুলনামূলক বিশ্লেষণ" : "Comparative Analysis"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            {lang === "bn" ? "পণ্যসমূহের পাশাপাশি তুলনা" : "Side-by-Side Product Comparison"}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === "bn"
              ? "আপনার আর্থিক লক্ষ্যের সাথে সবচেয়ে মানানসই ঋণ বা আমানত স্কিমটি নির্বাচন করতে সর্বোচ্চ ৩টি পণ্যের মেয়াদের সুবিধা, সুদের হার ও শর্তাবলী যাচাই করুন।"
              : "Evaluate repayment tenures, financing ceilings, interest rates, and eligibility criteria side-by-side to choose your ideal financial product."}
          </p>

          {/* Mode Switch Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="flex bg-slate-200/80 p-1.5 rounded-2xl max-w-md w-full">
              <button
                type="button"
                onClick={() => setActiveTab("loans")}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 ${
                  activeTab === "loans"
                    ? "bg-white text-nhfil-navy shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Landmark className="w-4 h-4 text-nhfil-blue" />
                <span>{lang === "bn" ? "গৃহ ও বাণিজ্যিক ঋণ" : "Mortgage & Loans"}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("deposits")}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 ${
                  activeTab === "deposits"
                    ? "bg-white text-nhfil-navy shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>{lang === "bn" ? "আমানত ও কোটিপতি স্কিম" : "Savings & Deposits"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Top Selector Header Row */}
          <div className="p-6 sm:p-8 bg-slate-50/80 border-b border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {lang === "bn" ? "পণ্য নির্বাচন করুন (সর্বোচ্চ ৩টি):" : "Select Facilities to Compare (Up to 3):"}
              </span>
              {((activeTab === "loans" && selectedLoanIds.length < 3) ||
                (activeTab === "deposits" && selectedDepositIds.length < 3)) && (
                <button
                  onClick={addColumn}
                  className="text-xs font-bold text-nhfil-blue hover:text-nhfil-navy transition-colors flex items-center space-x-1"
                >
                  <span>+ {lang === "bn" ? "আরেকটি পণ্য যোগ করুন" : "Add 3rd Product"}</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeTab === "loans"
                ? selectedLoans.map((loan, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue">
                          Loan Option {idx + 1}
                        </span>
                        {selectedLoans.length > 2 && (
                          <button
                            onClick={() => removeColumn(idx)}
                            className="text-xs text-red-500 hover:text-red-700 font-semibold"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <select
                        value={loan.id}
                        onChange={(e) => handleLoanChange(idx, e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
                      >
                        {loanProducts.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))
                : selectedDeposits.map((dep, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                          Deposit Option {idx + 1}
                        </span>
                        {selectedDeposits.length > 2 && (
                          <button
                            onClick={() => removeColumn(idx)}
                            className="text-xs text-red-500 hover:text-red-700 font-semibold"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <select
                        value={dep.id}
                        onChange={(e) => handleDepositChange(idx, e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
                      >
                        {depositSchemes.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
            </div>
          </div>

          {/* Matrix Rows */}
          {activeTab === "loans" ? (
            <div className="divide-y divide-slate-100">
              {/* Row: Maximum Tenure */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "সর্বোচ্চ ঋণ পরিশোধের মেয়াদ" : "Repayment Tenure"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Maximum Tenure</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedLoans.map((loan) => (
                    <div key={loan.id} className="text-sm font-semibold text-slate-800">
                      <span className="text-lg font-black text-nhfil-navy">{loan.maxTenureYears} Years</span>
                      <p className="text-xs text-slate-500">Flexible 1 to {loan.maxTenureYears} yrs</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row: Max Financing Ratio */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "ঋণের সর্বোচ্চ সীমা (এলটিভি)" : "Financing Ceiling"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Loan-To-Value (LTV)</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedLoans.map((loan) => (
                    <div key={loan.id} className="text-sm font-semibold text-slate-800">
                      <span className="text-lg font-black text-nhfil-blue">Up to {loan.maxFinancingPercent}%</span>
                      <p className="text-xs text-slate-500">Of registered property valuation</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row: Interest Rate Basis */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "সুদের হার কাঠামো" : "Interest Rate Basis"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Reducing Balance Rate</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedLoans.map((loan) => (
                    <div key={loan.id} className="text-sm font-semibold text-slate-800">
                      <span className="text-base font-black text-slate-900">
                        {loan.indicativeRate ? `From ${loan.indicativeRate}% (SMART Linked)` : "SMART + Spread"}
                      </span>
                      <p className="text-xs text-slate-500">Monthly reducing balance method</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row: Target Borrowers */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "উদ্দিষ্ট ঋণগ্রহীতা" : "Target Segment"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Eligibility Profile</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedLoans.map((loan) => (
                    <div key={loan.id} className="text-xs text-slate-600 leading-relaxed">
                      Salaried Executives, Business Entrepreneurs, Landlords, Doctors, and Non-Resident Bangladeshis (NRB).
                    </div>
                  ))}
                </div>
              </div>

              {/* Row: Key Features */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-start hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "প্রধান সুবিধাসমূহ" : "Key Advantages"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Product Highlights</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedLoans.map((loan) => (
                    <div key={loan.id} className="space-y-1.5">
                      {loan.highlights?.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start space-x-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-6 bg-slate-50/50 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-1">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {lang === "bn" ? "পরবর্তী পদক্ষেপ" : "Next Steps"}
                  </p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedLoans.map((loan) => (
                    <div key={loan.id} className="space-y-2">
                      <Link
                        href={`/calculator?tenure=${loan.maxTenureYears}&product=${encodeURIComponent(loan.title)}`}
                        className="w-full py-2.5 px-3 bg-nhfil-navy hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                      >
                        <Calculator className="w-3.5 h-3.5 text-nhfil-blue" />
                        <span>Calculate EMI</span>
                      </Link>
                      <Link
                        href={`/apply?product=${encodeURIComponent(loan.title)}`}
                        className="w-full py-2.5 px-3 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                      >
                        <FileCheck2 className="w-3.5 h-3.5" />
                        <span>Apply Online</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {/* Row: Minimum Amount */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "ন্যূনতম প্রাথমিক আমানত" : "Initial Investment"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Minimum Deposit</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedDeposits.map((dep) => (
                    <div key={dep.id} className="text-sm font-semibold text-slate-800">
                      <span className="text-lg font-black text-emerald-600">
                        BDT {dep.minDepositBDT?.toLocaleString() || "10,000"}
                      </span>
                      <p className="text-xs text-slate-500">Accessible initial amount</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row: Tenure Options */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "মেয়াদকাল সুবিধা" : "Tenure Options"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Maturity Horizon</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedDeposits.map((dep) => (
                    <div key={dep.id} className="text-sm font-semibold text-slate-800">
                      <span className="text-base font-black text-slate-900">
                        {dep.tenureOptions?.slice(0, 3).join(", ") || "3 mos - 5 yrs"}
                      </span>
                      <p className="text-xs text-slate-500">Auto-renewal option available</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row: Payout Frequency */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "মুনাফা প্রদান কাঠামো" : "Return / Profit Structure"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Payout Frequency</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedDeposits.map((dep) => (
                    <div key={dep.id} className="text-sm font-semibold text-slate-800">
                      <span className="text-base font-bold text-nhfil-navy">
                        {dep.highlights?.[0] || "Maturity Payout"}
                      </span>
                      <p className="text-xs text-slate-500">Direct BEFTN / NPSB transfer to bank</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row: Loan Against Deposit */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === "bn" ? "আমানতের বিপরীতে ঋণ" : "Liquidity Cushion"}
                  </span>
                  <p className="text-sm font-bold text-slate-900">Loan Against Deposit</p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedDeposits.map((dep) => (
                    <div key={dep.id} className="text-xs text-slate-700 font-semibold flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Up to 90% Loan Against Deposit (LAD) without breaking term</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-6 bg-slate-50/50 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-1">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {lang === "bn" ? "পরবর্তী পদক্ষেপ" : "Next Steps"}
                  </p>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedDeposits.map((dep) => (
                    <div key={dep.id} className="space-y-2">
                      <Link
                        href={`/apply?product=${encodeURIComponent(dep.title)}`}
                        className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                      >
                        <FileCheck2 className="w-3.5 h-3.5" />
                        <span>Open Scheme Online</span>
                      </Link>
                      <Link
                        href={`/deposits/${dep.id}`}
                        className="w-full py-2 px-3 border border-slate-200 hover:border-nhfil-blue text-slate-700 text-xs font-bold rounded-xl flex items-center justify-center space-x-1 transition-colors"
                      >
                        <span>Full Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

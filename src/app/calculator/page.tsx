"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  calculateLoanEmi,
  calculateTermDeposit,
  calculateRecurringDeposit,
  calculateReverseDeposit
} from "@/lib/calculations";
import { formatBDT, formatBDTLarge } from "@/lib/utils";
import {
  Calculator,
  PiggyBank,
  CheckCircle2,
  Printer,
  ArrowRight,
  TrendingUp,
  Download,
  Info,
  Target,
  Sparkles
} from "lucide-react";
import ApplyModal from "@/components/tools/ApplyModal";
import { useLanguage } from "@/context/LanguageContext";
import PrintAmortization from "@/components/tools/PrintAmortization";

function CalculatorContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const initialAmount = Number(searchParams.get("amount")) || 3000000;
  const initialRate = Number(searchParams.get("rate")) || 9.5;
  const initialTenure = Number(searchParams.get("tenure")) || 15;

  const [activeTab, setActiveTab] = useState<"loan" | "savings" | "goal">("loan");

  // Loan State
  const [loanAmount, setLoanAmount] = useState(initialAmount);
  const [loanRate, setLoanRate] = useState(initialRate);
  const [loanTenure, setLoanTenure] = useState(initialTenure);

  // Savings State
  const [savingsMode, setSavingsMode] = useState<"recurring" | "fixed">("recurring");
  const [savingsAmount, setSavingsAmount] = useState(15000); // 15k/mo or 5 Lakh fixed
  const [savingsRate, setSavingsRate] = useState(9.5);
  const [savingsTenure, setSavingsTenure] = useState(10); // 10 years

  // Goal (Reverse Kotipoti) State
  const [targetGoal, setTargetGoal] = useState(10000000); // 1 Crore (10M)
  const [goalTenure, setGoalTenure] = useState(10); // 10 years
  const [goalRate, setGoalRate] = useState(9.5);

  const [isApplyOpen, setIsApplyOpen] = useState(false);

  // Sync loan params to URL for easy bookmarking & sharing
  useEffect(() => {
    if (activeTab === "loan" && typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("amount", loanAmount.toString());
      url.searchParams.set("rate", loanRate.toString());
      url.searchParams.set("tenure", loanTenure.toString());
      window.history.replaceState({}, "", url.toString());
    }
  }, [activeTab, loanAmount, loanRate, loanTenure]);

  // Calculations
  const emiData = useMemo(() => {
    return calculateLoanEmi(loanAmount, loanRate, loanTenure);
  }, [loanAmount, loanRate, loanTenure]);

  const savingsData = useMemo(() => {
    if (savingsMode === "recurring") {
      return calculateRecurringDeposit(savingsAmount, savingsRate, savingsTenure);
    } else {
      return calculateTermDeposit(savingsAmount, savingsRate, savingsTenure);
    }
  }, [savingsMode, savingsAmount, savingsRate, savingsTenure]);

  const goalData = useMemo(() => {
    return calculateReverseDeposit(targetGoal, goalRate, goalTenure);
  }, [targetGoal, goalRate, goalTenure]);

  // EMI Rate Sensitivity Matrix (e.g. 9.0%, 9.5%, 10.0%, 10.5%)
  const rateComparisons = useMemo(() => {
    const rates = [9.0, 9.5, 10.0, 10.5];
    return rates.map((r) => {
      const res = calculateLoanEmi(loanAmount, r, loanTenure);
      return {
        rate: r,
        monthlyEmi: res.monthlyEmi,
        totalInterest: res.totalInterest,
      };
    });
  }, [loanAmount, loanTenure]);

  return (
    <>
      <div className="py-12 bg-slate-50 min-h-screen print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Breadcrumb & Title */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4" />
            <span>Interactive Financial Planning</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Financial Calculators & Estimators
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Calculate your monthly loan installment, simulate deposit wealth growth, or discover the required savings to become a Kotipoti.
          </p>

          {/* Calculator Mode Switch */}
          <div className="flex flex-wrap bg-slate-200 p-1.5 rounded-2xl max-w-lg mx-auto mt-8 gap-1">
            <button
              onClick={() => setActiveTab("loan")}
              className={`flex-1 min-w-[130px] py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
                activeTab === "loan"
                  ? "bg-white text-nhfil-navy shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-nhfil-blue" />
              <span>Loan EMI</span>
            </button>
            <button
              onClick={() => setActiveTab("savings")}
              className={`flex-1 min-w-[130px] py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
                activeTab === "savings"
                  ? "bg-white text-nhfil-navy shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <PiggyBank className="w-3.5 h-3.5 text-amber-500" />
              <span>Savings Growth</span>
            </button>
            <button
              onClick={() => setActiveTab("goal")}
              className={`flex-1 min-w-[130px] py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
                activeTab === "goal"
                  ? "bg-white text-nhfil-navy shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Target className="w-3.5 h-3.5 text-emerald-500" />
              <span>Kotipoti Goal</span>
            </button>
          </div>
        </div>

        {/* 1. LOAN CALCULATOR VIEW */}
        {activeTab === "loan" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sliders Control Panel */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card space-y-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-lg font-bold text-slate-900 font-heading">
                    Adjust Loan Parameters
                  </h2>
                  <span className="text-xs text-slate-500 font-medium">Real-Time Forecast</span>
                </div>

                {/* Amount Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-700">Loan Amount</span>
                    <span className="text-xl font-bold text-nhfil-blue">
                      {formatBDT(loanAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={500000}
                    max={25000000}
                    step={100000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>৳ 5 Lakh</span>
                    <span>{formatBDTLarge(loanAmount)}</span>
                    <span>৳ 2.5 Crore</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-700">Loan Tenure</span>
                    <span className="text-xl font-bold text-amber-600">
                      {loanTenure} Years ({loanTenure * 12} Months)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={25}
                    step={1}
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>1 Year</span>
                    <span>12 Years</span>
                    <span>25 Years</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-700">Interest Rate (APR)</span>
                    <span className="text-xl font-bold text-emerald-600">
                      {loanRate.toFixed(2)}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={16}
                    step={0.25}
                    value={loanRate}
                    onChange={(e) => setLoanRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>6.0% (JICA/SME)</span>
                    <span>9.5% (Standard Home)</span>
                    <span>16.0%</span>
                  </div>
                </div>

                {/* Rate Sensitivity Matrix */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Rate Sensitivity Analysis (Same Amount & Tenure)
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {rateComparisons.map((c) => (
                      <div
                        key={c.rate}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          loanRate === c.rate
                            ? "bg-nhfil-blue/10 border-nhfil-blue"
                            : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <span className="text-[11px] font-bold text-slate-600">{c.rate.toFixed(1)}% APR</span>
                        <p className="text-xs font-bold text-slate-900 mt-0.5">{formatBDT(c.monthlyEmi)}/mo</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start space-x-3 text-xs text-nhfil-navy">
                  <Info className="w-5 h-5 text-nhfil-blue shrink-0 mt-0.5" />
                  <p>
                    <strong>Standard NBFI Guideline:</strong> Interest is calculated on monthly reducing balance method. Early settlement and partial capital lump-sum adjustments are available at NHFIL branches.
                  </p>
                </div>
              </div>

              {/* Loan Summary Card */}
              <div className="lg:col-span-5 bg-nhfil-navy text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                <div className="text-center pb-6 border-b border-slate-700">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    Monthly Installment (EMI)
                  </span>
                  <div className="text-4xl sm:text-5xl font-black font-heading mt-2 text-nhfil-blue">
                    {formatBDT(emiData.monthlyEmi)}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Per Month for {loanTenure} Years</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Principal Borrowed</span>
                    <span className="font-bold text-white">{formatBDT(emiData.totalPrincipal)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Total Interest Payable</span>
                    <span className="font-bold text-amber-400">{formatBDT(emiData.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between text-xs pt-3 border-t border-slate-700">
                    <span className="text-slate-200 font-bold">Total Payment (Principal + Interest)</span>
                    <span className="font-black text-white text-sm">{formatBDT(emiData.totalPayment)}</span>
                  </div>

                  {/* Ratio bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Principal: {emiData.principalPercent}%</span>
                      <span>Interest: {emiData.interestPercent}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                      <div
                        style={{ width: `${emiData.principalPercent}%` }}
                        className="bg-nhfil-blue transition-all"
                      />
                      <div
                        style={{ width: `${emiData.interestPercent}%` }}
                        className="bg-amber-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => setIsApplyOpen(true)}
                    className="w-full py-3.5 bg-gradient-to-r from-nhfil-blue to-nhfil-blue-600 hover:from-nhfil-blue-600 hover:to-nhfil-navy text-white font-bold text-sm rounded-xl shadow-lg shadow-nhfil-blue/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{lang === "bn" ? "এই ঋণের জন্য আবেদন করুন" : "Apply For This Loan"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <Printer className="w-3.5 h-3.5 text-nhfil-blue" />
                    <span>{lang === "bn" ? "অফিসিয়াল কোটেশন প্রিন্ট / পিডিএফ" : "Print / PDF Quotation Letterhead"}</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    {lang === "bn" ? "প্রাথমিক মূল্যায়নে কোনো প্রসেসিং ফি প্রযোজ্য নয়।" : "No processing fee charged during preliminary appraisal."}
                  </p>
                </div>
              </div>
            </div>

            {/* Amortization Schedule Table */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-100 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {lang === "bn" ? "বাৎসরিক ঋণ পরিশোধ তফসিল (Amortization)" : "Year-by-Year Amortization Schedule"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === "bn"
                      ? "সময়ানুযায়ী মূলধন ও সুদের হ্রাসমান পরিশোধ বিভাজন।"
                      : "Repayment breakdown showing principal reduction over time."}
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center space-x-2 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>{lang === "bn" ? "তফসিল প্রিন্ট / পিডিএফ" : "Print Schedule / PDF"}</span>
                </button>
              </div>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-700 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Year</th>
                      <th className="py-3 px-4">Opening Balance</th>
                      <th className="py-3 px-4">Principal Paid</th>
                      <th className="py-3 px-4">Interest Paid</th>
                      <th className="py-3 px-4">Total Paid (Yearly)</th>
                      <th className="py-3 px-4">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {emiData.schedule.map((row) => (
                      <tr key={row.year} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-bold text-nhfil-navy">Year {row.year}</td>
                        <td className="py-3 px-4 font-medium text-slate-600">{formatBDT(row.openingBalance)}</td>
                        <td className="py-3 px-4 font-bold text-emerald-600">{formatBDT(row.principalPaid)}</td>
                        <td className="py-3 px-4 font-bold text-amber-600">{formatBDT(row.interestPaid)}</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">{formatBDT(row.totalPaid)}</td>
                        <td className="py-3 px-4 font-bold text-nhfil-navy">{formatBDT(row.closingBalance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 2. SAVINGS & DEPOSIT CALCULATOR VIEW */}
        {activeTab === "savings" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inputs */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card space-y-8">
              <div className="flex bg-slate-100 p-1.5 rounded-xl max-w-sm">
                <button
                  onClick={() => {
                    setSavingsMode("recurring");
                    setSavingsAmount(15000);
                  }}
                  className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    savingsMode === "recurring"
                      ? "bg-white text-nhfil-navy shadow-sm"
                      : "text-slate-600"
                  }`}
                >
                  Monthly Scheme (Kotipoti)
                </button>
                <button
                  onClick={() => {
                    setSavingsMode("fixed");
                    setSavingsAmount(500000);
                  }}
                  className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    savingsMode === "fixed"
                      ? "bg-white text-nhfil-navy shadow-sm"
                      : "text-slate-600"
                  }`}
                >
                  Fixed Term Deposit (TDR)
                </button>
              </div>

              {/* Amount Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">
                    {savingsMode === "recurring" ? "Monthly Installment Deposit" : "Initial Lump-Sum Deposit"}
                  </span>
                  <span className="text-xl font-bold text-amber-600">
                    {formatBDT(savingsAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={savingsMode === "recurring" ? 1000 : 50000}
                  max={savingsMode === "recurring" ? 100000 : 10000000}
                  step={savingsMode === "recurring" ? 500 : 50000}
                  value={savingsAmount}
                  onChange={(e) => setSavingsAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>{savingsMode === "recurring" ? "৳ 1,000" : "৳ 50,000"}</span>
                  <span>{formatBDTLarge(savingsAmount)}</span>
                  <span>{savingsMode === "recurring" ? "৳ 1 Lakh/mo" : "৳ 1 Crore"}</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">Deposit Tenure</span>
                  <span className="text-xl font-bold text-nhfil-blue">
                    {savingsTenure} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={savingsMode === "recurring" ? 20 : 5}
                  step={1}
                  value={savingsTenure}
                  onChange={(e) => setSavingsTenure(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>1 Year</span>
                  <span>{savingsMode === "recurring" ? "10 Years" : "3 Years"}</span>
                  <span>{savingsMode === "recurring" ? "20 Years" : "5 Years"}</span>
                </div>
              </div>

              {/* Profit Rate Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">Indicative Profit Rate</span>
                  <span className="text-xl font-bold text-emerald-600">
                    {savingsRate.toFixed(2)}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={7}
                  max={12}
                  step={0.25}
                  value={savingsRate}
                  onChange={(e) => setSavingsRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>7.0%</span>
                  <span>9.5% (Standard)</span>
                  <span>12.0%</span>
                </div>
              </div>
            </div>

            {/* Savings Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-amber-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div className="text-center pb-6 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  Estimated Total Maturity Value
                </span>
                <div className="text-4xl sm:text-5xl font-black font-heading mt-2 text-amber-400">
                  {formatBDT(savingsData.totalMaturityValue)}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  At the end of {savingsTenure} Years ({formatBDTLarge(savingsData.totalMaturityValue)})
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Total Money Deposited</span>
                  <span className="font-bold text-white">{formatBDT(savingsData.totalDeposited)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Total Estimated Profit Yield</span>
                  <span className="font-bold text-emerald-400">+{formatBDT(savingsData.estimatedReturn)}</span>
                </div>
                <div className="flex justify-between text-xs pt-3 border-t border-white/10">
                  <span className="text-slate-200 font-bold">Profit Percentage</span>
                  <span className="font-black text-amber-300 text-sm">~ {savingsData.profitPercent}% of Maturity</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  Open This Deposit Scheme
                </button>
                <p className="text-center text-[11px] text-slate-400">
                  Backed by Bangladesh Bank licensed NBFI safety standards.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3. GOAL / REVERSE KOTIPOTI CALCULATOR */}
        {activeTab === "goal" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card space-y-8">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-lg font-bold text-slate-900 font-heading">
                  Reverse Goal Planner: How to Reach Your Wealth Target
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Specify your dream target milestone, and we will calculate the required monthly installment.
                </p>
              </div>

              {/* Target Milestone */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">Target Maturity Milestone</span>
                  <span className="text-xl font-bold text-emerald-600">
                    {formatBDT(targetGoal)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={20000000}
                  step={500000}
                  value={targetGoal}
                  onChange={(e) => setTargetGoal(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>৳ 10 Lakh (Millionaire)</span>
                  <span>{formatBDTLarge(targetGoal)}</span>
                  <span>৳ 2.0 Crore (Multi-Kotipoti)</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">Investment Horizon (Tenure)</span>
                  <span className="text-xl font-bold text-nhfil-blue">
                    {goalTenure} Years ({goalTenure * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={20}
                  step={1}
                  value={goalTenure}
                  onChange={(e) => setGoalTenure(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>3 Years</span>
                  <span>10 Years</span>
                  <span>20 Years</span>
                </div>
              </div>

              {/* Compounding Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">Expected Profit Rate</span>
                  <span className="text-xl font-bold text-amber-600">
                    {goalRate.toFixed(2)}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={7}
                  max={12}
                  step={0.25}
                  value={goalRate}
                  onChange={(e) => setGoalRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>7.0%</span>
                  <span>9.5% (Kotipoti Benchmark)</span>
                  <span>12.0%</span>
                </div>
              </div>
            </div>

            {/* Goal Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div className="text-center pb-6 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  Required Monthly Contribution
                </span>
                <div className="text-4xl sm:text-5xl font-black font-heading mt-2 text-emerald-400">
                  {formatBDT(goalData.requiredMonthlyDeposit)}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Per month for {goalTenure} Years to achieve {formatBDTLarge(targetGoal)}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Target Milestone</span>
                  <span className="font-bold text-white">{formatBDT(goalData.targetAmount)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Your Total Self-Savings</span>
                  <span className="font-bold text-slate-200">{formatBDT(goalData.totalSelfContribution)}</span>
                </div>
                <div className="flex justify-between text-xs pt-3 border-t border-white/10">
                  <span className="text-slate-200 font-bold">Compounded Wealth Bonus</span>
                  <span className="font-black text-emerald-400 text-sm">+{formatBDT(goalData.totalInterestEarned)}</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  Start Kotipoti Scheme Now
                </button>
                <p className="text-center text-[11px] text-slate-400">
                  Auto-debit available through BEFTN with any scheduled bank in Bangladesh.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

        <ApplyModal
          isOpen={isApplyOpen}
          onClose={() => setIsApplyOpen(false)}
          defaultProductType={activeTab === "loan" ? "loan" : "deposit"}
        />
      </div>

      {/* Official Printable Quotation & Amortization Schedule Letterhead */}
      <PrintAmortization
        loanAmount={loanAmount}
        loanRate={loanRate}
        loanTenure={loanTenure}
        monthlyEmi={emiData.monthlyEmi}
        totalPrincipal={emiData.totalPrincipal}
        totalInterest={emiData.totalInterest}
        totalPayment={emiData.totalPayment}
        schedule={emiData.schedule}
      />
    </>
  );
}

export default function CalculatorPage() {
  return (
    <Suspense
      fallback={
        <div className="py-12 bg-slate-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 animate-pulse space-y-8">
            <div className="h-8 bg-slate-200 rounded-2xl w-64 mx-auto"></div>
            <div className="h-12 bg-slate-200 rounded-2xl w-96 mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 h-96 bg-white rounded-3xl border border-slate-200 p-8"></div>
              <div className="lg:col-span-5 h-96 bg-nhfil-navy rounded-3xl p-8"></div>
            </div>
          </div>
        </div>
      }
    >
      <CalculatorContent />
    </Suspense>
  );
}

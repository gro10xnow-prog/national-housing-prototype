"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { calculateLoanEmi } from "@/lib/calculations";
import { formatBDT, formatBDTLarge } from "@/lib/utils";
import { Calculator, ArrowRight, ShieldCheck, Sparkles, Sliders } from "lucide-react";
import ApplyModal from "../tools/ApplyModal";

export default function InteractiveCalcPreview() {
  const [loanAmount, setLoanAmount] = useState(3000000); // 30 Lakh default
  const [interestRate, setInterestRate] = useState(9.5); // 9.5%
  const [tenureYears, setTenureYears] = useState(15); // 15 Years
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const emiData = useMemo(() => {
    return calculateLoanEmi(loanAmount, interestRate, tenureYears);
  }, [loanAmount, interestRate, tenureYears]);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-nhfil-navy via-nhfil-navy-light to-nhfil-navy text-white relative overflow-hidden">
        {/* Glow Accents */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-nhfil-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-nhfil-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Explanatory & Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-nhfil-blue-200">
                <Calculator className="w-3.5 h-3.5 text-nhfil-blue" />
                <span>Smart Financial Tools</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
                Plan Your Repayments with Real-Time Accuracy
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Adjust loan parameters below to instantly forecast your monthly EMI installment, total interest payable, and optimal tenure before submitting your application.
              </p>

              {/* Sliders Container */}
              <div className="space-y-6 pt-4 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl">
                {/* 1. Loan Amount Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-semibold">Desired Loan Amount</span>
                    <span className="text-lg font-bold text-nhfil-blue">
                      {formatBDT(loanAmount)} ({formatBDTLarge(loanAmount)})
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
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>৳ 5 Lakh</span>
                    <span>৳ 1.5 Crore</span>
                    <span>৳ 2.5 Crore</span>
                  </div>
                </div>

                {/* 2. Tenure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-semibold">Loan Period / Tenure</span>
                    <span className="text-lg font-bold text-amber-400">
                      {tenureYears} Years ({tenureYears * 12} Months)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={25}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>1 Year</span>
                    <span>10 Years</span>
                    <span>25 Years</span>
                  </div>
                </div>

                {/* 3. Interest Rate Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-semibold">Indicative Interest Rate</span>
                    <span className="text-lg font-bold text-emerald-400">
                      {interestRate.toFixed(2)}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min={7}
                    max={16}
                    step={0.25}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>7.0% (Subsidized)</span>
                    <span>9.5% (Standard)</span>
                    <span>16.0%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Results Display Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl space-y-6">
                <div className="text-center pb-6 border-b border-white/10">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    Calculated Monthly Installment (EMI)
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white font-heading mt-2 text-nhfil-blue">
                    {formatBDT(emiData.monthlyEmi)}
                    <span className="text-sm font-normal text-slate-300"> / month</span>
                  </div>
                </div>

                {/* Distribution Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">Total Principal Amount</span>
                    <span className="font-bold text-white">{formatBDT(emiData.totalPrincipal)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">Total Interest Payable</span>
                    <span className="font-bold text-amber-400">{formatBDT(emiData.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-white/10">
                    <span className="text-slate-200 font-bold">Total Repayment Value</span>
                    <span className="font-black text-white text-sm">{formatBDT(emiData.totalPayment)}</span>
                  </div>

                  {/* Ratio Visual Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-[10px] text-slate-300">
                      <span>Principal: {emiData.principalPercent}%</span>
                      <span>Interest: {emiData.interestPercent}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-700/80 rounded-full overflow-hidden flex">
                      <div
                        style={{ width: `${emiData.principalPercent}%` }}
                        className="bg-nhfil-blue transition-all duration-300"
                        title="Principal Ratio"
                      />
                      <div
                        style={{ width: `${emiData.interestPercent}%` }}
                        className="bg-amber-400 transition-all duration-300"
                        title="Interest Ratio"
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => setIsApplyOpen(true)}
                    className="w-full py-3.5 bg-gradient-to-r from-nhfil-blue to-nhfil-blue-600 hover:from-nhfil-blue-600 hover:to-nhfil-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-nhfil-blue/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Apply For This Loan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href={`/calculator?amount=${loanAmount}&rate=${interestRate}&tenure=${tenureYears}`}
                    className="w-full py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl text-center block transition-colors border border-white/15"
                  >
                    View Year-by-Year Amortization Schedule Table
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        defaultProductName={`Home Loan (${formatBDTLarge(loanAmount)})`}
      />
    </>
  );
}

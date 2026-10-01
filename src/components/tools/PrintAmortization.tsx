"use client";

import React from "react";
import Image from "next/image";
import { formatBDTLocale, toBengaliNumerals } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { AmortizationYear } from "@/lib/calculations";

interface PrintAmortizationProps {
  loanAmount: number;
  loanRate: number;
  loanTenure: number;
  monthlyEmi: number;
  totalPrincipal: number;
  totalInterest: number;
  totalPayment: number;
  schedule: AmortizationYear[];
  applicantName?: string;
}

export default function PrintAmortization({
  loanAmount,
  loanRate,
  loanTenure,
  monthlyEmi,
  totalPrincipal,
  totalInterest,
  totalPayment,
  schedule,
  applicantName = "Valued Customer",
}: PrintAmortizationProps) {
  const { lang } = useLanguage();
  const today = new Date().toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const quoteRef = `NHFIL-LQ-${Math.floor(100000 + (loanAmount % 900000))}`;

  return (
    <div className="print-only text-slate-900 font-sans p-4">
      {/* Official Header / Letterhead */}
      <div className="border-b-2 border-nhfil-navy pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3.5">
            <Image
              src="/logo.png"
              alt="National Housing Finance PLC"
              width={1024}
              height={704}
              className="h-14 w-auto object-contain shrink-0"
            />
            <div className="border-l border-slate-300 pl-3.5">
              <h1 className="text-xl font-black text-nhfil-navy tracking-tight leading-tight">
                NATIONAL HOUSING FINANCE PLC
              </h1>
              <p className="text-[10px] text-slate-600 font-medium">
                Licensed Non-Banking Financial Institution &bull; Bangladesh Bank FI-08 &bull; Established 1998
              </p>
              <p className="text-[9px] text-slate-500">
                Corporate Head Office: Concord Baksh Tower (7th Floor), Plot 11-A, Road 48, Gulshan-2, Dhaka-1212
              </p>
            </div>
          </div>
          <div className="text-right text-xs">
            <span className="inline-block px-2.5 py-1 bg-slate-100 rounded text-slate-800 font-bold uppercase text-[9px] tracking-wider mb-1">
              {lang === "bn" ? "অফিসিয়াল ঋণ কোটেশন" : "Official Loan Quotation"}
            </span>
            <p className="font-mono font-bold text-slate-700 text-[11px]">{quoteRef}</p>
            <p className="text-[10px] text-slate-500">{today}</p>
          </div>
        </div>
      </div>

      {/* Quotation Title & Client Particulars */}
      <div className="mb-6 flex justify-between items-end bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
        <div>
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
            {lang === "bn" ? "প্রস্তুতকৃত গ্রাহক" : "Prepared For"}
          </span>
          <p className="font-bold text-slate-900 text-sm">{applicantName}</p>
          <p className="text-[11px] text-slate-600">
            {lang === "bn" ? "সুবিধা: আবাসন ও সাধারণ গৃহঋণ" : "Facility: Home Mortgage Financing"}
          </p>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
            {lang === "bn" ? "বৈধতার মেয়াদ" : "Quotation Validity"}
          </span>
          <p className="font-semibold text-slate-800 text-[11px]">
            {lang === "bn" ? "প্রদানের তারিখ হতে ৩০ দিন" : "30 Days from issuance"}
          </p>
        </div>
      </div>

      {/* Key Financial Parameters Grid */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="p-3 rounded-lg border border-slate-200 bg-white">
          <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">
            {lang === "bn" ? "অনুমোদিত ঋণ মূলধন" : "Principal Financed"}
          </span>
          <span className="text-sm font-black text-slate-900 mt-0.5 block">
            {formatBDTLocale(loanAmount, lang)}
          </span>
        </div>

        <div className="p-3 rounded-lg border border-slate-200 bg-white">
          <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">
            {lang === "bn" ? "সুদের হার (বাৎসরিক)" : "Interest Rate (p.a.)"}
          </span>
          <span className="text-sm font-black text-nhfil-navy mt-0.5 block">
            {lang === "bn" ? toBengaliNumerals(loanRate.toFixed(2)) + "%" : `${loanRate.toFixed(2)}%`}
          </span>
          <span className="text-[8px] text-slate-400">
            {lang === "bn" ? "মাসিক হ্রাসমান ব্যালেন্স" : "Monthly Reducing"}
          </span>
        </div>

        <div className="p-3 rounded-lg border border-slate-200 bg-white">
          <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">
            {lang === "bn" ? "ঋণ পরিশোধের মেয়াদ" : "Repayment Tenure"}
          </span>
          <span className="text-sm font-black text-slate-900 mt-0.5 block">
            {lang === "bn"
              ? `${toBengaliNumerals(loanTenure)} বছর (${toBengaliNumerals(loanTenure * 12)} কিস্তি)`
              : `${loanTenure} Yrs (${loanTenure * 12} Mos)`}
          </span>
        </div>

        <div className="p-3 rounded-lg border-2 border-nhfil-navy bg-slate-50">
          <span className="text-[9px] text-nhfil-navy uppercase font-bold tracking-wider block">
            {lang === "bn" ? "প্রাক্কলিত মাসিক কিস্তি" : "Monthly Installment"}
          </span>
          <span className="text-sm font-black text-nhfil-navy mt-0.5 block">
            {formatBDTLocale(monthlyEmi, lang)}
          </span>
          <span className="text-[8px] text-slate-500">
            {lang === "bn" ? "প্রতি মাসে প্রদেয়" : "Per Month"}
          </span>
        </div>
      </div>

      {/* Total Aggregates */}
      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-100 border border-slate-200 mb-6 text-xs font-semibold">
        <div>
          <span className="text-slate-500 text-[10px] uppercase font-bold mr-2">
            {lang === "bn" ? "মোট প্রদেয় সুদ:" : "Total Interest:"}
          </span>
          <span className="text-slate-900 font-bold">{formatBDTLocale(totalInterest, lang)}</span>
        </div>
        <div>
          <span className="text-slate-500 text-[10px] uppercase font-bold mr-2">
            {lang === "bn" ? "মোট পরিশোধ (আসল + সুদ):" : "Total Outflow (Principal + Interest):"}
          </span>
          <span className="text-nhfil-navy font-black">{formatBDTLocale(totalPayment, lang)}</span>
        </div>
      </div>

      {/* Amortization Schedule Table */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 border-b border-slate-200 pb-1">
          {lang === "bn" ? "বাৎসরিক ঋণ পরিশোধ তফসিল (Amortization Schedule)" : "Year-by-Year Loan Amortization Schedule"}
        </h3>
        <table className="w-full text-[10px] border-collapse border border-slate-300">
          <thead>
            <tr className="bg-slate-200 text-slate-800 uppercase font-bold">
              <th className="border border-slate-300 p-1.5 text-center">
                {lang === "bn" ? "বছর" : "Year"}
              </th>
              <th className="border border-slate-300 p-1.5 text-right">
                {lang === "bn" ? "প্রারম্ভিক স্থিতি" : "Opening Principal"}
              </th>
              <th className="border border-slate-300 p-1.5 text-right">
                {lang === "bn" ? "পরিশোধিত আসল" : "Principal Repaid"}
              </th>
              <th className="border border-slate-300 p-1.5 text-right">
                {lang === "bn" ? "পরিশোধিত সুদ" : "Interest Paid"}
              </th>
              <th className="border border-slate-300 p-1.5 text-right">
                {lang === "bn" ? "বাৎসরিক মোট কিস্তি" : "Total Annual EMI"}
              </th>
              <th className="border border-slate-300 p-1.5 text-right">
                {lang === "bn" ? "সমাপনী স্থিতি" : "Closing Balance"}
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.year} className="even:bg-slate-50 print-break-inside-avoid">
                <td className="border border-slate-300 p-1.5 text-center font-bold">
                  {lang === "bn" ? toBengaliNumerals(row.year) : row.year}
                </td>
                <td className="border border-slate-300 p-1.5 text-right font-mono">
                  {formatBDTLocale(row.openingBalance, lang)}
                </td>
                <td className="border border-slate-300 p-1.5 text-right font-mono text-slate-800 font-semibold">
                  {formatBDTLocale(row.principalPaid, lang)}
                </td>
                <td className="border border-slate-300 p-1.5 text-right font-mono text-slate-700">
                  {formatBDTLocale(row.interestPaid, lang)}
                </td>
                <td className="border border-slate-300 p-1.5 text-right font-mono font-bold text-slate-900">
                  {formatBDTLocale(row.totalPaid, lang)}
                </td>
                <td className="border border-slate-300 p-1.5 text-right font-mono font-bold text-nhfil-navy">
                  {formatBDTLocale(row.closingBalance, lang)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimers & Notes */}
      <div className="p-2.5 rounded border border-slate-200 bg-slate-50 text-[9px] text-slate-600 mb-8 leading-tight print-break-inside-avoid">
        <p className="font-bold text-slate-700 mb-0.5">
          {lang === "bn" ? "গুরুত্বপূর্ণ শর্তাবলী ও নির্দেশিকা:" : "Statutory Terms & Notes:"}
        </p>
        <p>
          {lang === "bn"
            ? "১. এই হিসাবটি একটি প্রাথমিক প্রাক্কলন এবং এটি আনুষ্ঠানিক ঋণ মঞ্জুরিপত্র (Sanction Letter) হিসেবে গণ্য হবে না। ২. সুদ ও মুনাফার হার বাংলাদেশ ব্যাংকের সংশ্লিষ্ট নির্দেশনা ও চুক্তির শর্তানুসারে পরিবর্তনযোগ্য। ৩. অনুমোদনের পূর্বে প্রয়োজনীয় কাগজপত্র, ক্রেডিট রিপোর্ট (CIB) ও সম্পত্তি মূল্যায়ন সম্পন্ন করা বাধ্যতামূলক।"
            : "1. This computation is an illustrative quotation and does not constitute a formal sanction letter or contractual commitment. 2. Interest rate is calculated on a reducing monthly balance and subject to Bangladesh Bank regulatory guidelines and NHFIL sanction terms. 3. Final approval is subject to CIB clearance, legal title vetting, and valuation appraisal."}
        </p>
      </div>

      {/* Official Signature Blocks */}
      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-300 text-center text-[10px] print-break-inside-avoid">
        <div>
          <div className="border-b border-slate-400 mb-1 h-10"></div>
          <p className="font-bold text-slate-800">
            {lang === "bn" ? "প্রস্তুতকারক কর্মকর্তা" : "Prepared By"}
          </p>
          <p className="text-slate-500 text-[9px]">National Housing Finance PLC</p>
        </div>
        <div>
          <div className="border-b border-slate-400 mb-1 h-10"></div>
          <p className="font-bold text-slate-800">
            {lang === "bn" ? "যাচাইকারী / শাখা ব্যবস্থাপক" : "Verified By (Branch Manager)"}
          </p>
          <p className="text-slate-500 text-[9px]">Seal & Signature</p>
        </div>
        <div>
          <div className="border-b border-slate-400 mb-1 h-10"></div>
          <p className="font-bold text-slate-800">
            {lang === "bn" ? "আবেদনকারী গ্রাহকের স্বাক্ষর" : "Applicant Acknowledgement"}
          </p>
          <p className="text-slate-500 text-[9px]">Date: ________________</p>
        </div>
      </div>

      {/* Footer Hotline */}
      <div className="text-center text-[8px] text-slate-400 pt-6">
        Customer Support Hotline: +88 09609 200555 &bull; Web: www.nationalhousingbd.com &bull; Email: info@nationalhousingbd.com
      </div>
    </div>
  );
}

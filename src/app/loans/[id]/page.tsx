"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loanProducts } from "@/data/loans";
import { formatBDT } from "@/lib/utils";
import {
  Home,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Calculator,
  ArrowRight,
  Phone,
  Briefcase,
  User,
  ChevronRight
} from "lucide-react";
import ApplyModal from "@/components/tools/ApplyModal";
import SafeImage from "@/components/ui/SafeImage";
import JsonLd from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function LoanDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const loan = loanProducts.find((p) => p.id === resolvedParams.id);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  if (!loan) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": loan.title,
    "description": loan.description,
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": "National Housing Finance PLC",
      "url": "https://www.nationalhousingbd.com"
    },
    "category": "Home Mortgage & Term Loans",
    "currency": "BDT",
    "annualPercentageRate": loan.indicativeRate,
    "feesAndCommissionsSpecification": "Bangladesh Bank SMART aligned interest rate",
    "interestRate": {
      "@type": "QuantitativeValue",
      "value": loan.indicativeRate,
      "unitText": "PERCENT"
    }
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <JsonLd data={productSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/loans" className="hover:text-nhfil-blue">
            Loan Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">{loan.title}</span>
        </div>

        {/* Hero Card for Product */}
        <div className="relative rounded-3xl overflow-hidden bg-nhfil-navy text-white shadow-xl mb-12">
          <div className="absolute inset-0 z-0">
            <SafeImage
              src={loan.image}
              alt={loan.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-nhfil-navy via-nhfil-navy/95 to-nhfil-navy-light/90" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nhfil-blue/20 text-nhfil-blue-200 text-xs font-bold uppercase tracking-wider">
              <span>{loan.categoryName}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              {loan.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {loan.description}
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400">Financing</span>
                <p className="text-base sm:text-lg font-black text-nhfil-blue mt-0.5">Up to {loan.maxFinancingPercent}%</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400">Max Tenure</span>
                <p className="text-base sm:text-lg font-black text-amber-400 mt-0.5">{loan.maxTenureYears} Years</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400">Interest Rate</span>
                <p className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">{loan.indicativeRate}% p.a.*</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400">Loan Limit</span>
                <p className="text-base sm:text-lg font-black text-white mt-0.5">Up to ৳ 2.5 Cr</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-6 py-3.5 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Apply for this Loan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href={`/calculator?amount=${loan.minAmountBDT}&rate=${loan.indicativeRate}&tenure=${loan.maxTenureYears}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-sm border border-white/20 transition-all flex items-center space-x-2"
              >
                <Calculator className="w-4 h-4 text-nhfil-blue" />
                <span>Calculate Repayment EMI</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Section 1: Features & Highlights */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-nhfil-blue/10 flex items-center justify-center text-nhfil-blue">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span>Product Features & Privileges</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loan.highlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Eligibility Criteria */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <User className="w-5 h-5" />
                </div>
                <span>Eligibility Criteria</span>
              </h2>

              <ul className="space-y-3">
                {loan.eligibility.map((crit, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-nhfil-blue shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{crit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Required Documentation Checklist */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <FileText className="w-5 h-5" />
                </div>
                <span>Required Documentation Checklist</span>
              </h2>

              {/* Salaried checklist */}
              {loan.salariedDocs.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-nhfil-navy flex items-center space-x-1.5">
                    <User className="w-4 h-4 text-nhfil-blue" />
                    <span>For Salaried Professionals</span>
                  </h3>
                  <div className="space-y-2 pl-4 border-l-2 border-nhfil-blue">
                    {loan.salariedDocs.map((doc, idx) => (
                      <p key={idx} className="text-xs text-slate-600">
                        &bull; {doc}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Business checklist */}
              {loan.businessDocs.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-nhfil-navy flex items-center space-x-1.5">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                    <span>For Self-Employed & Business Owners</span>
                  </h3>
                  <div className="space-y-2 pl-4 border-l-2 border-amber-400">
                    {loan.businessDocs.map((doc, idx) => (
                      <p key={idx} className="text-xs text-slate-600">
                        &bull; {doc}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Property documents */}
              {loan.otherDocs.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-nhfil-navy flex items-center space-x-1.5">
                    <Home className="w-4 h-4 text-emerald-600" />
                    <span>Property Title & Municipal Documents</span>
                  </h3>
                  <div className="space-y-2 pl-4 border-l-2 border-emerald-400">
                    {loan.otherDocs.map((doc, idx) => (
                      <p key={idx} className="text-xs text-slate-600">
                        &bull; {doc}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Section 4: Security & Collateral Requirements */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span>Security & Collateral Requirements</span>
              </h2>
              <ul className="space-y-2">
                {loan.security.map((sec, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky Quick Action Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              <div className="text-center pb-4 border-b border-slate-100">
                <span className="text-xs uppercase font-bold text-slate-400">Inquiry Desk</span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mt-1">
                  Ready to take the next step?
                </h3>
                <p className="text-xs text-slate-500 mt-2">
                  Our credit advisory team will assist with document collection and title verification.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-3.5 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <span>Apply Online Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+8809609200555"
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-nhfil-blue" />
                  <span>Call Hotline: +88 09609 200555</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
                <p className="font-bold text-slate-900">Branch Locations:</p>
                <p>Visit us in Dhaka, Chattogram, Gazipur, Bogura, Rangpur, Rajshahi, or Feni.</p>
                <Link href="/location" className="text-nhfil-blue font-semibold hover:underline inline-block pt-1">
                  Locate nearest branch &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        defaultProductName={loan.title}
      />
    </div>
  );
}

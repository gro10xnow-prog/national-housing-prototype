import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, ChevronRight, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AML & CFT Compliance Policy",
  description: "Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) framework of National Housing Finance PLC.",
};

export default function AmlPolicyPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">AML & CFT Policy</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Statutory Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            AML & CFT Compliance Framework
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Policy statement on Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) under BFIU directives.
          </p>
        </div>

        {/* Policy Content Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              1. Institutional Commitment to AML/CFT Standards
            </h2>
            <p className="text-justify text-xs sm:text-sm">
              National Housing Finance PLC is fully committed to upholding the highest integrity standards in preventing the use of its financial products, services, or branch network for money laundering, illicit property transactions, or terrorist financing.
            </p>
            <p className="text-justify text-xs sm:text-sm">
              Our framework adheres strictly to the <strong>Money Laundering Prevention Act 2012 (as amended)</strong>, the <strong>Anti-Terrorism Act 2009 (as amended)</strong>, and all corresponding Master Circulars issued by the <strong>Bangladesh Financial Intelligence Unit (BFIU)</strong> of Bangladesh Bank.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              2. Robust Know Your Customer (KYC) & Customer Due Diligence (CDD)
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5">
              <li>Mandatory verification of authentic National ID Cards (NID) / Smart Cards / Valid Passports using national database integration prior to account activation.</li>
              <li>Verification of Source of Funds (SOF) and verifiable tax returns / business documentation for all large-value deposit placements and loan equity contributions.</li>
              <li>Enhanced Due Diligence (EDD) for Politically Exposed Persons (PEPs), high-net-worth foreign individuals, and high-risk business sectors.</li>
              <li>Beneficial ownership identification for corporate and institutional accounts.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              3. Central Compliance Unit (CCU)
            </h2>
            <p className="text-justify text-xs sm:text-sm">
              A dedicated <strong>Central Compliance Committee (CCC)</strong> headed by the Chief Anti-Money Laundering Compliance Officer (CAMLCO) directly monitors transaction thresholds, screens sanctions lists (UN Security Council Resolutions), and conducts regular AML compliance audits across all 9 regional branches.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              4. Suspicious Activity Reporting (SAR / STR)
            </h2>
            <p className="text-justify text-xs sm:text-sm">
              Under statutory obligation, any transaction deemed inconsistent with the customer&apos;s legitimate profile or presenting hallmarks of illicit concealment is reported promptly to the Bangladesh Financial Intelligence Unit (BFIU) through secure official channels.
            </p>
          </section>
        </div>

        {/* Contact Strip */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <p className="font-bold text-sm">Anti-Money Laundering Compliance Desk</p>
            <p className="text-slate-400 mt-0.5">Corporate Head Office &bull; camlco@nationalhousingbd.com</p>
          </div>
          <Link
            href="/downloads"
            className="px-5 py-2.5 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold rounded-xl transition-colors shrink-0"
          >
            Download KYC Update Form
          </Link>
        </div>
      </div>
    </div>
  );
}

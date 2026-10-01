import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  FileText,
  UserCheck,
  Phone,
  Mail,
  Building2,
  ExternalLink
} from "lucide-react";
import type { Metadata } from "next";
import GrievanceForm from "@/components/tools/GrievanceForm";

export const metadata: Metadata = {
  title: "Citizen's Charter & Grievance Redressal (GRS) | National Housing Finance PLC",
  description: "Bangladesh Bank mandated Citizen's Charter, standard turnaround times (TAT), customer rights, and online Grievance Redressal System (GRS).",
};

export default function CitizenCharterPage() {
  const commitments = [
    {
      service: "Home Loan Application Appraisal & Sanction",
      serviceBn: "গৃহঋণ আবেদন মূল্যায়ন ও মঞ্জুরি",
      standardTAT: "7 to 10 Working Days",
      requirements: "Subject to complete submission of clean title documents and income verification.",
    },
    {
      service: "Loan Disbursement (First Tranche)",
      serviceBn: "ঋণ বিতরণ (প্রথম কিস্তি)",
      standardTAT: "3 to 5 Working Days",
      requirements: "Post execution of Registered Mortgage, irrevocable power of attorney, and legal vetting.",
    },
    {
      service: "SME / Small Business Loan Appraisal",
      serviceBn: "এসএমই ও ক্ষুদ্র ব্যবসা ঋণ মূল্যায়ন",
      standardTAT: "5 to 7 Working Days",
      requirements: "Following branch physical verification of business premises and stock valuation.",
    },
    {
      service: "Opening of Fixed Deposit (TDR) / Kotipoti Scheme",
      serviceBn: "মেয়াদী আমানত / কোটিপতি স্কিম হিসাব খোলা",
      standardTAT: "Same Day (Within 2 Hours)",
      requirements: "Upon receipt of completed KYC form, NID copy, nominee photo, and cleared funds.",
    },
    {
      service: "Issuance of Account Statement / Balance Certificate",
      serviceBn: "হিসাব বিবরণী বা স্থিতি সনদপত্র প্রদান",
      standardTAT: "Instant / Same Day",
      requirements: "Available upon written request at any branch counter.",
    },
    {
      service: "Loan Closure & Title Deed Redemption",
      serviceBn: "ঋণ সমাপ্তি ও মূল দলিল ফেরত প্রদান",
      standardTAT: "10 to 15 Working Days",
      requirements: "Following full settlement of outstanding balance and redemption deed execution.",
    },
    {
      service: "Customer Grievance & Complain Resolution (GRS)",
      serviceBn: "গ্রাহক অভিযোগ নিষ্পত্তি (জিআরএস)",
      standardTAT: "Maximum 7 Working Days",
      requirements: "Formal acknowledgment within 24 hours of lodgment at grievance desk.",
    },
  ];

  const groOfficers = [
    {
      role: "Designated Focal Point Officer (GRO)",
      name: "Md. Mahbubur Rahman",
      designation: "Vice President & Head of Operations & Compliance",
      phone: "+88 02 9670612-4 Ext: 118",
      email: "complain@nationalhousingbd.com",
      address: "National Plaza (7th Floor), 109 Bir Uttam C.R. Dutta Road, Dhaka-1205"
    },
    {
      role: "Appellate Authority",
      name: "Mohammad Shamsul Islam",
      designation: "Managing Director & CEO",
      phone: "+88 02 9670612-4 Ext: 101",
      email: "md@nationalhousingbd.com",
      address: "Corporate Head Office, Dhaka-1205"
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Citizen&apos;s Charter & GRS</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Service Commitment Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Citizen&apos;s Charter & Grievance Redressal (GRS)
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In compliance with Bangladesh Bank regulatory directives, National Housing Finance PLC publishes its standard service commitments, turnaround times (TAT), customer rights, and online complaint resolution system.
          </p>
        </div>

        {/* Table of Service Commitments */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Standard Service Delivery Timeline (Turnaround Time - TAT)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Applicable across all 9 nationwide branches and corporate head offices under Bangladesh Bank FI Guidelines.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/70 text-slate-700 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Service Category</th>
                  <th className="py-4 px-4 whitespace-nowrap">Standard Timeline (TAT)</th>
                  <th className="py-4 px-6">Prerequisite Conditions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {commitments.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <div>
                          <span>{item.service}</span>
                          <p className="text-[11px] font-normal text-slate-400">{item.serviceBn}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-bold text-nhfil-blue whitespace-nowrap">
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.standardTAT}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 text-xs">
                      {item.requirements}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Rights & Fair Treatment */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-nhfil-blue">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-bold text-base text-slate-900 font-heading">
              Customer Rights & Banking Fair Treatment Principles
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 block font-semibold">1. Right to Full Transparency</strong>
              <p>Borrowers and depositors have the uncompromised right to receive clear, written loan terms, schedules of charges, and SMART-linked rate calculation details before execution.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 block font-semibold">2. Financial Privacy & Confidentiality</strong>
              <p>All personal particulars, account statements, and mortgage collateral disclosures are strictly protected under banking secrecy and privacy mandates.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 block font-semibold">3. Free Amortization Statements</strong>
              <p>Borrowers are entitled to receive on-demand official amortization schedules illustrating principal vs. interest breakdown without levy of fees.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 block font-semibold">4. Non-Discriminatory Service</strong>
              <p>Equal access to financing irrespective of gender, regional origin, or religion, fostering inclusive national housing development.</p>
            </div>
          </div>
        </div>

        {/* Interactive Grievance Form (GRS) */}
        <GrievanceForm />

        {/* Designated Grievance Redressal Officers (GRO) */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <UserCheck className="w-5 h-5 text-nhfil-blue" />
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              Designated Grievance Redressal Officers (GRO)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groOfficers.map((gro, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card space-y-3"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {gro.role}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{gro.name}</h3>
                  <p className="text-xs text-nhfil-blue font-semibold">{gro.designation}</p>
                </div>
                <div className="space-y-1 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <p className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{gro.phone}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{gro.email}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{gro.address}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External Escalation Notice */}
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-600">
          <div className="space-y-1">
            <strong className="text-slate-900 font-bold block text-sm">
              External Escalation to Central Bank
            </strong>
            <p className="max-w-2xl leading-relaxed">
              If an amicable resolution is not reached within 7 working days, customers are legally entitled to lodge complaints directly with the <strong>Financial Integrity and Customer Services Department (FICSD)</strong>, Bangladesh Bank, Motijheel C/A, Dhaka-1000.
            </p>
          </div>
          <a
            href="https://www.bb.org.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold rounded-xl flex items-center space-x-1.5 shrink-0 transition-colors shadow-2xs"
          >
            <span>Visit Bangladesh Bank FICSD</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  FileText,
  Download,
  Calendar,
  ShieldCheck,
  ChevronRight,
  Landmark,
  PieChart
} from "lucide-react";

export default function InvestorRelationsPage() {
  const financialReports = [
    { year: "2025", title: "Annual Report 2025 (Audited)", size: "8.4 MB", date: "April 2026" },
    { year: "2024", title: "Annual Report 2024 (Audited)", size: "7.9 MB", date: "April 2025" },
    { year: "2023", title: "Annual Report 2023 (Audited)", size: "7.5 MB", date: "April 2024" },
    { year: "2022", title: "Annual Report 2022 (Audited)", size: "6.8 MB", date: "April 2023" },
  ];

  const quarterlyReports = [
    { period: "Q2 2026", title: "Half-Yearly Un-Audited Financial Statements (Jan-Jun 2026)", date: "July 28, 2026" },
    { period: "Q1 2026", title: "First Quarter Un-Audited Financial Statements (Jan-Mar 2026)", date: "May 12, 2026" },
    { period: "Q3 2025", title: "Third Quarter Un-Audited Financial Statements (Jul-Sep 2025)", date: "November 14, 2025" },
  ];

  const shareholding = [
    { category: "Sponsors & Directors", percentage: "53.82%", color: "bg-nhfil-navy" },
    { category: "Institutional Investors", percentage: "18.45%", color: "bg-nhfil-blue" },
    { category: "General Public", percentage: "27.42%", color: "bg-amber-500" },
    { category: "Foreign Investors", percentage: "0.31%", color: "bg-emerald-500" },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Investor Relations</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Market Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Investor Relations & Disclosures
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Statutory financial reports, corporate governance disclosures, AGM notices, and shareholding records of National Housing Finance PLC.
          </p>
        </div>

        {/* Shareholding Structure Widget */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
          <div className="flex items-center space-x-3">
            <PieChart className="w-6 h-6 text-nhfil-blue" />
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              Shareholding Pattern & Equity Distribution
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {shareholding.map((sh, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-xs text-slate-500 font-medium">{sh.category}</span>
                <p className="text-2xl font-black text-slate-900 font-heading">{sh.percentage}</p>
              </div>
            ))}
          </div>

          {/* Visual Percentage Bar */}
          <div className="h-3 w-full rounded-full overflow-hidden flex">
            {shareholding.map((sh, idx) => (
              <div
                key={idx}
                style={{ width: sh.percentage }}
                className={`${sh.color}`}
                title={`${sh.category}: ${sh.percentage}`}
              />
            ))}
          </div>
        </div>

        {/* Annual Audited Financial Reports */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
          <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center space-x-2">
            <FileText className="w-5 h-5 text-nhfil-blue" />
            <span>Audited Annual Reports</span>
          </h2>

          <div className="divide-y divide-slate-100">
            {financialReports.map((rep) => (
              <div
                key={rep.year}
                className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-slate-50 px-2 rounded-xl transition-colors"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{rep.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Published: {rep.date} &bull; File Size: {rep.size}
                  </p>
                </div>

                <a
                  href={`https://www.nationalhousingbd.com/financial-report`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white text-xs font-bold rounded-xl flex items-center space-x-2 transition-colors shrink-0 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quarterly Financial Disclosures */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
          <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-amber-500" />
            <span>Quarterly Financial Disclosures (PSI)</span>
          </h2>

          <div className="divide-y divide-slate-100">
            {quarterlyReports.map((q, idx) => (
              <div
                key={idx}
                className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-slate-50 px-2 rounded-xl transition-colors"
              >
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-700 uppercase">
                    {q.period}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">{q.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Released: {q.date}</p>
                </div>

                <a
                  href={`https://www.nationalhousingbd.com/financial-report`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-slate-200 hover:border-nhfil-blue text-slate-700 hover:text-nhfil-blue text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition-colors shrink-0"
                >
                  <Download className="w-3 h-3" />
                  <span>View Statement</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Investor Relations Contact Desk */}
        <div className="bg-nhfil-navy text-white rounded-3xl p-8 sm:p-10 space-y-4">
          <h3 className="text-xl font-bold font-heading">
            Share & Investor Relations Department
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            National Plaza (7th & 8th floor), 109 Bir Uttam C.R. Dutta Road, Dhaka-1205 &bull; Phone: +88 02 9670612-4 Ext: 141 &bull; Email: share@nationalhousingbd.com
          </p>
        </div>
      </div>
    </div>
  );
}

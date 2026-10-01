"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, FileText, ChevronRight, ShieldCheck, Printer, Eye } from "lucide-react";
import PrintApplicationForm from "@/components/tools/PrintApplicationForm";
import { useLanguage } from "@/context/LanguageContext";

export default function DownloadsPage() {
  const { lang } = useLanguage();
  const [selectedForm, setSelectedForm] = useState<{ title: string; category: string } | null>(null);

  const downloadCategories = [
    {
      category: lang === "bn" ? "ঋণ ও অর্থায়ন আবেদন ফরম" : "Loan & Financing Application Forms",
      forms: [
        { title: lang === "bn" ? "গৃহঋণ ও ফ্ল্যাট ক্রয় আবেদন ফরম" : "Home Loan Application Form (Retail & Flat Purchase)", size: "450 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "বাড়ি নির্মাণ ব্যয় প্রাক্কলন ও মাইলস্টোন ফরম" : "Self Construction Estimate & Milestone Form", size: "380 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "ক্ষুদ্র ও মাঝারি ব্যবসা (এসএমই) ঋণ প্রস্তাবনা ফরম" : "SME / SONIRVOR Business Loan Proposal Form", size: "520 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "প্রবাসী বাংলাদেশী (এনআরবি) পাওয়ার অব অ্যাটর্নি ফরম" : "NRB Home Financing Power of Attorney Format", size: "290 KB", date: "Updated 2026" },
      ],
    },
    {
      category: lang === "bn" ? "আমানত ও সঞ্চয় স্কিম আবেদন ফরম" : "Deposit & Scheme Opening Forms",
      forms: [
        { title: lang === "bn" ? "একক / যৌথ মেয়াদী আমানত হিসাব খোলার ফরম" : "Individual / Joint Deposit Account Opening Form", size: "320 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "ন্যাশনাল হাউজিং কোটিপতি স্কিম আবেদন ফরম" : "National Housing Kotipoti Scheme Application Form", size: "280 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "প্রাতিষ্ঠানিক / কর্পোরেট ফিক্সড ডিপোজিট (টিডিআর) ফরম" : "Institutional / Corporate Term Deposit (TDR) Form", size: "410 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "মনোনীত ব্যক্তি (নমিনী) সংযোজন ও পরিবর্তন ফরম" : "Nominee Designation & Change Form", size: "190 KB", date: "Updated 2026" },
      ],
    },
    {
      category: lang === "bn" ? "ইসলামিক ব্যাংকিং উইং ফরম" : "Islamic Wing Account Forms",
      forms: [
        { title: lang === "bn" ? "মুদারাবা আমানত হিসাব খোলার ফরম" : "Mudaraba Deposit Account Opening Form", size: "360 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "এইচপিএসএম ইসলামী আবাসন বিনিয়োগ প্রস্তাব ফরম" : "HPSM Islamic Home Investment Proposal Form", size: "490 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "শরীয়াহ সুপারভাইজরি কমিটি সনদ ও ঘোষণা" : "Shariah Supervisory Committee Declaration Certificate", size: "210 KB", date: "Updated 2026" },
      ],
    },
    {
      category: lang === "bn" ? "গ্রাহক সেবা ও কেওয়াইসি (KYC) ফরম" : "Customer Service & KYC Forms",
      forms: [
        { title: lang === "bn" ? "গ্রাহক তথ্য ও কেওয়াইসি প্রোফাইল হালনাগাদ ফরম" : "Customer Information & KYC Profile Update Form", size: "250 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "বিইএফটিএন / অটো-ডেবিট কিস্তি পরিশোধ আদেশ ফরম" : "BEFTN / Auto-Debit Standing Instruction Mandate", size: "220 KB", date: "Updated 2026" },
        { title: lang === "bn" ? "গ্রাহক অভিযোগ ও মতামত দাখিল ফরম" : "Customer Complaint & Grievance Lodgment Form", size: "180 KB", date: "Updated 2026" },
      ],
    },
  ];

  return (
    <>
      <div className="py-12 bg-slate-50 min-h-screen print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-nhfil-blue">
              {lang === "bn" ? "হোম" : "Home"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">
              {lang === "bn" ? "ফরম ও ডাউনলোড" : "Forms & Downloads"}
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
              <Download className="w-4 h-4" />
              <span>{lang === "bn" ? "ডাউনলোড ও প্রিন্ট সেন্টার" : "Download & Print Center"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
              {lang === "bn" ? "আবেদন ফরম ও দলিলাদি" : "Application Forms & Documents"}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === "bn"
                ? "শাখায় যাওয়ার পূর্বেই প্রিন্টযোগ্য অফিশিয়াল আবেদন ফরম, কেওয়াইসি প্রোফাইল এবং ম্যান্ডেট ফরম ডাউনলোড ও প্রস্তুত করুন।"
                : "Download printable application forms, KYC formats, and mandate documents to prepare your submission before visiting any NHFIL branch."}
            </p>
          </div>

          <div className="space-y-8">
            {downloadCategories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
                <h2 className="text-lg font-bold text-slate-900 font-heading pb-3 border-b border-slate-100 flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-nhfil-blue" />
                  <span>{cat.category}</span>
                </h2>

                <div className="divide-y divide-slate-100">
                  {cat.forms.map((item, fIdx) => (
                    <div key={fIdx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 px-3 rounded-xl transition-colors gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{item.date} &bull; PDF ({item.size})</p>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <button
                          onClick={() => setSelectedForm({ title: item.title, category: cat.category })}
                          className="px-4 py-2 bg-nhfil-blue hover:bg-nhfil-navy text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 transition-colors shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{lang === "bn" ? "প্রিভিউ ও প্রিন্ট" : "Preview & Print"}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Printable Form Viewer Modal */}
      {selectedForm && (
        <PrintApplicationForm
          formTitle={selectedForm.title}
          category={selectedForm.category}
          onClose={() => setSelectedForm(null)}
          isModal={true}
        />
      )}
    </>
  );
}

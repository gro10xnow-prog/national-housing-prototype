"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqsData } from "@/data/faq";
import { HelpCircle, ChevronDown, ChevronRight, Phone, MessageSquare, Search } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItem, setOpenItem] = useState<string | null>(faqsData[0].id);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const filtered = faqsData.filter((faq) => {
    const matchesCat = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={faqSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Frequently Asked Questions</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Help Center & Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Find immediate answers regarding loan limits, Kotipoti maturity, required property title documents, and Islamic financing terms.
          </p>

          {/* Search Box */}
          <div className="relative pt-4 max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-7" />
            <input
              type="text"
              placeholder="Search your question (e.g., NRB, tenure, Kotipoti)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 pt-3">
            {[
              { id: "all", label: "All Topics" },
              { id: "home-loans", label: "Home Loans" },
              { id: "deposits", label: "Deposits & Kotipoti" },
              { id: "sme-finance", label: "SME Finance" },
              { id: "islamic", label: "Islamic Wing" },
              { id: "general", label: "General & Licensing" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-nhfil-blue text-white shadow-sm"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another keyword or call our hotline.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-nhfil-blue tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                      {item.question}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openItem === item.id ? "rotate-180 text-nhfil-blue" : ""
                    }`}
                  />
                </button>

                {openItem === item.id && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Still have questions? */}
        <div className="p-8 rounded-3xl bg-nhfil-navy text-white text-center space-y-4 shadow-lg">
          <h2 className="text-xl font-bold font-heading">Still Have a Specific Question?</h2>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Our specialized relationship managers across 9 regional branches are eager to consult with you directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="tel:+8809609200555"
              className="px-5 py-2.5 rounded-xl bg-nhfil-blue hover:bg-nhfil-blue-600 font-bold text-xs flex items-center space-x-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +88 09609 200555</span>
            </a>
            <Link
              href="/contact-us"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-xs flex items-center space-x-1.5 transition-colors border border-white/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Submit Inquiry Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

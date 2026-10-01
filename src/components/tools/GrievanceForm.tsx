"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Send,
  Building,
  User,
  Phone,
  Mail,
  FileText,
  Copy,
  Check,
  ShieldCheck
} from "lucide-react";
import { branches } from "@/data/branches";
import { useLanguage } from "@/context/LanguageContext";

export default function GrievanceForm() {
  const { lang } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [grsId, setGrsId] = useState("");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "Corporate Head Office (Gulshan)",
    category: "Service Delay & Turnaround Time",
    accountNumber: "",
    details: ""
  });

  const categories = [
    "Service Delay & Turnaround Time",
    "Home Loan Appraisal / Documentation Query",
    "Interest Rate Calculation & Statement Dispute",
    "Deposit Account Opening / Closure Issue",
    "Staff Conduct & Branch Customer Service",
    "Website & Digital Portal Functionality",
    "Other Grievances"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = "NHFIL-GRS-" + new Date().getFullYear() + "-" + Math.floor(100000 + Math.random() * 900000);
    setGrsId(randomId);
    setIsSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(grsId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center space-y-6 animate-fade-in-up">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-900 font-heading">
            {lang === "bn" ? "অভিযোগ সফলভাবে নিবন্ধিত হয়েছে" : "Grievance Formally Registered"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            {lang === "bn"
              ? "আপনার অভিযোগটি বাংলাদেশ ব্যাংকের জিআরএস নির্দেশিকা অনুযায়ী সেন্ট্রাল কমপ্লেন সেলে ফরোয়ার্ড করা হয়েছে।"
              : "Your grievance has been logged in our central complaint management repository under Bangladesh Bank GRS guidelines."}
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
              {lang === "bn" ? "জিআরএস ট্র্যাকিং নম্বর" : "GRS Tracking Number"}
            </span>
            <button
              onClick={handleCopy}
              className="text-xs font-bold text-nhfil-blue hover:text-nhfil-navy flex items-center space-x-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy Number"}</span>
            </button>
          </div>
          <p className="text-2xl font-mono font-black text-nhfil-navy">{grsId}</p>
          <div className="text-xs text-slate-500 pt-2 border-t border-slate-200 space-y-1">
            <p>&bull; Complainant: <strong className="text-slate-800">{formData.name}</strong></p>
            <p>&bull; Assigned Branch: <strong className="text-slate-800">{formData.branch}</strong></p>
            <p>&bull; Maximum Resolution SLA: <strong className="text-emerald-700">7 Working Days</strong></p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors"
          >
            {lang === "bn" ? "আরেকটি অভিযোগ জমা দিন" : "Submit Another Grievance"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 space-y-6">
      <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 font-heading">
            {lang === "bn" ? "অনলাইন অভিযোগ দায়ের ফরম (GRS Desk)" : "Online Grievance Submission Desk (GRS)"}
          </h2>
          <p className="text-xs text-slate-500">
            {lang === "bn"
              ? "বাংলাদেশ ব্যাংকের নির্দেশিকা অনুযায়ী ৭ কার্যদিবসের মধ্যে প্রতিকারের নিশ্চয়তা।"
              : "Compliant with Bangladesh Bank Customer Interest Protection directives. Guaranteed resolution within 7 working days."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {lang === "bn" ? "অভিযোগকারীর পুরো নাম *" : "Complainant Full Name *"}
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mohammad Tariqul Islam"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {lang === "bn" ? "মোবাইল নম্বর *" : "Contact Mobile Number *"}
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 01712-XXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {lang === "bn" ? "ইমেইল ঠিকানা *" : "Email Address *"}
            </label>
            <input
              type="email"
              required
              placeholder="e.g. tariqul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {lang === "bn" ? "সংশ্লিষ্ট শাখা অফিস *" : "Concerned Branch Office *"}
            </label>
            <select
              value={formData.branch}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
            >
              {branches.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name} ({b.city})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {lang === "bn" ? "অভিযোগের ধরন *" : "Grievance Category *"}
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {lang === "bn" ? "হিসাব বা ঋণ রেফারেন্স নম্বর (যদি থাকে)" : "Account / Loan Ref Number (Optional)"}
            </label>
            <input
              type="text"
              placeholder="e.g. NHFIL-123456 or Account No."
              value={formData.accountNumber}
              onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            {lang === "bn" ? "অভিযোগের বিস্তারিত বিবরণ *" : "Grievance Details & Factual Summary *"}
          </label>
          <textarea
            required
            rows={4}
            placeholder="Please describe the incident, dates, officer involved (if any), and desired resolution..."
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>{lang === "bn" ? "অভিযোগ আনুষ্ঠানিকভাবে জমা দিন" : "Submit Formal Grievance (GRS)"}</span>
        </button>
      </form>
    </div>
  );
}

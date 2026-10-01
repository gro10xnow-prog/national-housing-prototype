"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  ExternalLink,
  ChevronRight,
  Landmark
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang, strings } = useLanguage();

  return (
    <footer className="bg-nhfil-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section: Corporate Overview & Trust Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="p-2 bg-white rounded-xl shadow-md border border-white/20 shrink-0">
                <Image
                  src="/logo.png"
                  alt="National Housing Finance PLC"
                  width={1024}
                  height={704}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">
                  NATIONAL HOUSING
                </h3>
                <p className="text-xs text-nhfil-blue font-semibold uppercase tracking-wider">
                  Finance PLC &bull; NHFIL
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed text-justify">
              {lang === "bn"
                ? strings.footer.brandTagline
                : "National Housing Finance PLC is a premier non-banking financial institution (NBFI) incorporated in 1998, licensed by Bangladesh Bank under the Financial Institutions Act 1993, and publicly listed on the Dhaka Stock Exchange (DSE) and Chittagong Stock Exchange (CSE)."}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-semibold text-emerald-400 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "বাংলাদেশ ব্যাংক লাইসেন্সপ্রাপ্ত" : "Bangladesh Bank Licensed"}</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-semibold text-amber-400 flex items-center space-x-1">
                <Award className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "এ+ ক্রেডিট রেটিং প্রাপ্ত" : "A+ Credit Rating"}</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-semibold text-nhfil-blue flex items-center space-x-1">
                <Landmark className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "ডিএসই ও সিএসই তালিকাভুক্ত" : "DSE & CSE Listed"}</span>
              </span>
            </div>
          </div>

          {/* Quick Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Col 1: Loan Solutions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center space-x-1.5 border-b border-slate-800 pb-2">
                <span>{strings.footer.colLoans}</span>
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/loans/5" className="hover:text-nhfil-blue transition-colors">
                    Flat Purchase Loan
                  </Link>
                </li>
                <li>
                  <Link href="/loans/11" className="hover:text-nhfil-blue transition-colors">
                    Self Construction
                  </Link>
                </li>
                <li>
                  <Link href="/loans/13" className="hover:text-nhfil-blue transition-colors">
                    NRB Home Financing
                  </Link>
                </li>
                <li>
                  <Link href="/loans/12" className="hover:text-nhfil-blue transition-colors">
                    Group Home Loan
                  </Link>
                </li>
                <li>
                  <Link href="/loans/14" className="hover:text-nhfil-blue transition-colors">
                    Renovation Loan
                  </Link>
                </li>
                <li>
                  <Link href="/loans/21" className="hover:text-nhfil-blue transition-colors">
                    SONIRVOR SME
                  </Link>
                </li>
                <li>
                  <Link href="/loans/20" className="hover:text-nhfil-blue transition-colors">
                    Lease Finance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Deposit Schemes */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center space-x-1.5 border-b border-slate-800 pb-2">
                <span>{strings.footer.colDeposits}</span>
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/deposits/10" className="hover:text-nhfil-blue transition-colors text-amber-300 font-semibold">
                    {lang === "bn" ? "কোটিপতি স্কিম" : "Kotipoti Scheme"}
                  </Link>
                </li>
                <li>
                  <Link href="/deposits/9" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "মিলিয়নেয়ার স্কিম" : "Millionaire Scheme"}
                  </Link>
                </li>
                <li>
                  <Link href="/deposits/7" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "মাসিক সঞ্চয় (এমএসএস)" : "Monthly Savings (MSS)"}
                  </Link>
                </li>
                <li>
                  <Link href="/deposits/6" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "মেয়াদী আমানত (টিডিআর)" : "Term Deposit (TDR)"}
                  </Link>
                </li>
                <li>
                  <Link href="/deposits/8" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "মেয়াদী আয় স্কিম" : "Periodical Income"}
                  </Link>
                </li>
                <li>
                  <Link href="/deposits/5" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "মহিলা সঞ্চয়" : "Mohila Savings"}
                  </Link>
                </li>
                <li>
                  <Link href="/deposits/4" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "সিনিয়র সিটিজেন টিডিআর" : "Senior Citizen TDR"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Islamic Banking */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center space-x-1.5 border-b border-slate-800 pb-2">
                <span>{strings.footer.colIslamic}</span>
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/islamic" className="hover:text-emerald-400 transition-colors">
                    {lang === "bn" ? "ইসলামিক উইং পরিচিতি" : "Islamic Wing Overview"}
                  </Link>
                </li>
                <li>
                  <Link href="/islamic#deposits" className="hover:text-emerald-400 transition-colors">
                    {lang === "bn" ? "মুদারাবা মেয়াদী আমানত" : "Mudaraba Term Deposits"}
                  </Link>
                </li>
                <li>
                  <Link href="/islamic#deposits" className="hover:text-emerald-400 transition-colors">
                    {lang === "bn" ? "মুদারাবা কোটিপতি" : "Mudaraba Kotipoti"}
                  </Link>
                </li>
                <li>
                  <Link href="/islamic#deposits" className="hover:text-emerald-400 transition-colors">
                    {lang === "bn" ? "মুদারাবা হজ্ব স্কিম" : "Mudaraba Hajj Scheme"}
                  </Link>
                </li>
                <li>
                  <Link href="/islamic#financing" className="hover:text-emerald-400 transition-colors">
                    {lang === "bn" ? "এইচপিএসএম গৃহ বিনিয়োগ" : "HPSM Home Financing"}
                  </Link>
                </li>
                <li>
                  <Link href="/islamic#shariah" className="hover:text-emerald-400 transition-colors">
                    {lang === "bn" ? "শরীয়াহ সুপারভাইজরি কমিটি" : "Shariah Board"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Corporate & Compliance */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center space-x-1.5 border-b border-slate-800 pb-2">
                <span>{strings.footer.colGovernance}</span>
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/notice-board" className="hover:text-amber-400 font-semibold transition-colors">
                    {lang === "bn" ? "অফিসিয়াল নোটিশ বোর্ড" : "Official Notice Board"}
                  </Link>
                </li>
                <li>
                  <Link href="/interest-rates" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "মুনাফা ও সুদের তালিকা" : "Schedule of Rates"}
                  </Link>
                </li>
                <li>
                  <Link href="/citizen-charter" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "সিটিজেন চার্টার" : "Citizen's Charter"}
                  </Link>
                </li>
                <li>
                  <Link href="/aml-policy" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "এএমএল ও সিএফটি নীতিমালা" : "AML/CFT Compliance"}
                  </Link>
                </li>
                <li>
                  <Link href="/csr" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "সিএসআর কার্যক্রম" : "CSR Initiatives"}
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "ক্যারিয়ার সুযোগ" : "Career Opportunities"}
                  </Link>
                </li>
                <li>
                  <Link href="/track-application" className="hover:text-emerald-400 font-semibold transition-colors">
                    {lang === "bn" ? "আবেদনের স্থিতি ট্র্যাকিং" : "Track Application Status"}
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "পণ্য তুলনা ম্যাট্রিক্স" : "Compare Loan & Deposits"}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-nhfil-blue transition-colors">
                    {lang === "bn" ? "সাধারণ প্রশ্নোত্তর" : "Frequently Asked Questions"}
                  </Link>
                </li>
                <li>
                  <Link href="/citizen-charter" className="hover:text-amber-400 transition-colors">
                    {lang === "bn" ? "অভিযোগ প্রতিকার সেল (GRS)" : "Grievance Redressal (GRS)"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section: Branch Network & Head Offices */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-slate-800 text-xs">
          <div className="space-y-1.5">
            <p className="font-bold text-white flex items-center space-x-1.5">
              <Building2 className="w-3.5 h-3.5 text-nhfil-blue" />
              <span>{lang === "bn" ? strings.footer.corporateOfficeTitle : "Corporate Head Office"}</span>
            </p>
            <p className="text-slate-400">
              {lang === "bn"
                ? "কনকর্ড বখশ টাওয়ার (৮ম তলা), প্লট ১১-এ, রোড ৪৮, ব্লক সিডব্লিউএন (এ), গুলশান-২, ঢাকা-১২১২"
                : "Concord Baksh Tower (7th floor), Plot 11-A, Road 48, Block CWN (A), Gulshan-2, Dhaka-1212"}
            </p>
            <p className="text-nhfil-blue">
              {lang === "bn" ? "হটলাইন: +৮৮ ০৯৬০৯ ২০০৫৫৫ • info@nationalhousingbd.com" : "Hotline: +88 09609 200555 • info@nationalhousingbd.com"}
            </p>
          </div>

          <div className="space-y-1.5">
            <p className="font-bold text-white flex items-center space-x-1.5">
              <Building2 className="w-3.5 h-3.5 text-nhfil-blue" />
              <span>{lang === "bn" ? strings.footer.headOfficeTitle : "Registered Head Office"}</span>
            </p>
            <p className="text-slate-400">
              {lang === "bn"
                ? "ন্যাশনাল প্লাজা (৭ম ও ৮ম তলা), ১০৯ বীর উত্তম সি.আর. দত্ত রোড, ঢাকা-১২০৫"
                : "National Plaza (7th & 8th floor), 109 Bir Uttam C.R. Dutta Road, Dhaka-1205"}
            </p>
            <p className="text-slate-400">Tel: +88 02 9670612-4 &bull; Fax: +88 02 9671016</p>
          </div>

          <div className="space-y-1.5">
            <p className="font-bold text-white flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-nhfil-blue" />
              <span>{lang === "bn" ? "সারাদেশে শাখা নেটওয়ার্ক" : "Nationwide Presence"}</span>
            </p>
            <p className="text-slate-400">
              {lang === "bn"
                ? "ঢাকা (প্রধান, গুলশান, মতিঝিল), চট্টগ্রাম, গাজীপুর, বগুড়া, রংপুর, রাজশাহী এবং ফেনী শাখা।"
                : "Branches operating in: Dhaka (Principal, Gulshan, Motijheel), Chattogram, Gazipur, Bogura, Rangpur, Rajshahi, and Feni."}
            </p>
            <Link href="/location" className="text-nhfil-blue hover:underline font-semibold inline-flex items-center space-x-1">
              <span>{lang === "bn" ? "সকল শাখার ঠিকানা ও ব্যবস্থাপক দেখুন" : "View all branch addresses & managers"}</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright & Accreditation */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {lang === "bn" ? strings.footer.rightsReserved : "National Housing Finance PLC. All rights reserved."}
          </p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/investor-relations" className="hover:text-slate-300">
              {lang === "bn" ? "নিয়ন্ত্রক প্রকাশনা" : "Regulatory Disclosures"}
            </Link>
            <Link href="/contact-us" className="hover:text-slate-300">
              {lang === "bn" ? "সিটিজেন চার্টার" : "Citizen Charter"}
            </Link>
            <Link href="/contact-us#complain" className="hover:text-slate-300">
              {lang === "bn" ? "গ্রাহক অধিকার" : "Customer Rights"}
            </Link>
            <Link href="/calculator" className="hover:text-slate-300">
              {lang === "bn" ? "ইএমআই ক্যালকুলেটর" : "EMI Calculator"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

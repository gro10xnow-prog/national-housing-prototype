"use client";

import React from "react";
import Image from "next/image";
import { formatBDTLocale } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface PrintReceiptProps {
  referenceId: string;
  productType: "loan" | "deposit";
  selectedProduct: string;
  desiredAmount: string;
  preferredBranch: string;
  applicantName: string;
  contactNumber: string;
  email?: string;
  district: string;
  address: string;
}

export default function PrintReceipt({
  referenceId,
  productType,
  selectedProduct,
  desiredAmount,
  preferredBranch,
  applicantName,
  contactNumber,
  email,
  district,
  address,
}: PrintReceiptProps) {
  const { lang } = useLanguage();
  const submissionDate = new Date().toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="print-only text-slate-900 font-sans p-6 border-2 border-slate-300 rounded-xl max-w-3xl mx-auto my-4">
      {/* Institution Letterhead */}
      <div className="border-b-2 border-nhfil-navy pb-4 mb-4 flex justify-between items-start">
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
              Bangladesh Bank Licensed Non-Banking Financial Institution &bull; FI-08 &bull; Est. 1998
            </p>
            <p className="text-[9px] text-slate-500">
              Corporate Office: Concord Baksh Tower (7th Floor), Plot 11-A, Road 48, Gulshan-2, Dhaka-1212
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded font-bold uppercase text-[10px] tracking-wider mb-1">
            {lang === "bn" ? "আবেদন প্রাপ্তিস্বীকার পত্র" : "Application Acknowledgement Receipt"}
          </span>
          <p className="text-[10px] text-slate-500">{submissionDate}</p>
        </div>
      </div>

      {/* Prominent Reference Stamp */}
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 flex justify-between items-center">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
            {lang === "bn" ? "আবেদন ট্র্যাকিং রেফারেন্স আইডি" : "Application Tracking Reference ID"}
          </span>
          <span className="text-2xl font-mono font-black text-nhfil-navy tracking-wider">
            {referenceId}
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
            {lang === "bn" ? "আবেদন স্ট্যাটাস" : "Filing Status"}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-nhfil-navy">
            {lang === "bn" ? "প্রাথমিক পর্যায়ে গৃহীত" : "Logged for Appraisal"}
          </span>
        </div>
      </div>

      {/* Applicant & Facility Particulars */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
        <div className="border border-slate-200 rounded-lg p-3 space-y-1.5 bg-white">
          <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 uppercase tracking-wider text-[10px] text-nhfil-navy">
            {lang === "bn" ? "আবেদনকারীর তথ্য" : "Applicant Particulars"}
          </h3>
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "পূর্ণ নাম: " : "Full Name: "}</span>
            <strong className="text-slate-900">{applicantName || "N/A"}</strong>
          </p>
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "যোগাযোগ নম্বর: " : "Phone: "}</span>
            <strong className="text-slate-900 font-mono">{contactNumber || "N/A"}</strong>
          </p>
          {email && (
            <p>
              <span className="text-slate-500 font-medium">Email: </span>
              <span className="text-slate-900">{email}</span>
            </p>
          )}
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "জেলা: " : "District: "}</span>
            <span className="text-slate-900">{district}</span>
          </p>
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "যোগাযোগের ঠিকানা: " : "Address: "}</span>
            <span className="text-slate-800">{address || "N/A"}</span>
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-3 space-y-1.5 bg-white">
          <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1 uppercase tracking-wider text-[10px] text-nhfil-navy">
            {lang === "bn" ? "আবেদনকৃত আর্থিক সুবিধা" : "Facility Particulars"}
          </h3>
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "সুবিধার ধরন: " : "Category: "}</span>
            <strong className="text-slate-900">
              {productType === "loan"
                ? lang === "bn" ? "গৃহ ও বাণিজ্যিক ঋণ" : "Mortgage / Financing"
                : lang === "bn" ? "আমানত ও সঞ্চয় স্কিম" : "Deposit / Wealth Scheme"}
            </strong>
          </p>
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "নির্দিষ্ট স্কিম: " : "Product Name: "}</span>
            <strong className="text-nhfil-blue">{selectedProduct}</strong>
          </p>
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "আবেদনকৃত পরিমাণ: " : "Desired Amount: "}</span>
            <strong className="text-slate-900 font-mono">{desiredAmount || "As per policy"}</strong>
          </p>
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "দায়িত্বপ্রাপ্ত শাখা: " : "Assigned Branch: "}</span>
            <strong className="text-slate-900">{preferredBranch}</strong>
          </p>
          <p>
            <span className="text-slate-500 font-medium">{lang === "bn" ? "শাখা হটলাইন: " : "Branch Contact: "}</span>
            <span className="text-slate-700 font-mono">+88 09609 200555</span>
          </p>
        </div>
      </div>

      {/* Next Steps & SLA */}
      <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-[10px] text-slate-700 mb-6 space-y-1">
        <p className="font-bold text-slate-900">
          {lang === "bn" ? "পরবর্তী পদক্ষেপ ও সার্ভিস গ্যারান্টি (SLA):" : "Next Steps & Customer SLA:"}
        </p>
        <p>
          {lang === "bn"
            ? "১. আমাদের দায়িত্বপ্রাপ্ত রিলেশনশিপ অফিসার আগামী ১ কার্যদিবসের মধ্যে আপনার সাথে যোগাযোগ করে প্রাথমিক পরামর্শ ও চেকলিস্ট প্রদান করবেন। ২. আবেদন ট্র্যাকিং বা যেকোনো জিজ্ঞাসায় আপনার রেফারেন্স আইডি উল্লেখ করুন।"
            : "1. An assigned Relationship Officer will contact you within 1 business day for document verification and initial appraisal. 2. Please quote this reference ID for any status inquiries at your regional branch."}
        </p>
      </div>

      {/* Official Signatures */}
      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-300 text-center text-[10px]">
        <div>
          <div className="border-b border-slate-400 mb-1 h-8"></div>
          <p className="font-bold text-slate-800">
            {lang === "bn" ? "আবেদনকারীর স্বাক্ষর" : "Applicant Signature"}
          </p>
          <p className="text-slate-400 text-[9px]">{submissionDate}</p>
        </div>
        <div>
          <div className="border-b border-slate-400 mb-1 h-8"></div>
          <p className="font-bold text-slate-800">
            {lang === "bn" ? "শাখা গ্রহণকারী সিল ও স্বাক্ষর" : "Branch Receiving Seal & Sign"}
          </p>
          <p className="text-slate-400 text-[9px]">National Housing Finance PLC</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[8px] text-slate-400 pt-6">
        Registered Head Office: National Plaza (7th Floor), 109 Bir Uttam C.R. Dutta Road, Dhaka-1205 &bull; Hotline: +88 09609 200555
      </div>
    </div>
  );
}

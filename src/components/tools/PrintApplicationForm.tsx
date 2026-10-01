"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Printer, X } from "lucide-react";

interface PrintApplicationFormProps {
  formTitle: string;
  category: string;
  onClose?: () => void;
  isModal?: boolean;
}

export default function PrintApplicationForm({
  formTitle,
  category,
  onClose,
  isModal = false,
}: PrintApplicationFormProps) {
  const { lang } = useLanguage();

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModal]);

  // Dismiss on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    if (isModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModal, onClose]);

  const currentDate = new Date().toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const content = (
    <div className="bg-white text-slate-900 font-sans p-6 sm:p-8 max-w-4xl mx-auto border border-slate-300 rounded-xl shadow-lg print:border-none print:shadow-none print:p-0">
      {/* On-screen Action Toolbar (Hidden in Print) */}
      {isModal && (
        <div className="flex justify-between items-center pb-4 mb-6 border-b border-slate-200 print:hidden">
          <div>
            <h3 className="text-base font-bold text-slate-900">{formTitle}</h3>
            <p className="text-xs text-slate-500">Official Physical Application Package &bull; Ready to Print</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-nhfil-navy hover:bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center space-x-2 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4 text-nhfil-blue" />
              <span>{lang === "bn" ? "প্রিন্ট / পিডিএফ সংরক্ষণ" : "Print / Save PDF"}</span>
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* PAGE 1 */}
      <div className="print-break-inside-avoid">
        {/* Header / Brandmark */}
        <div className="border-b-2 border-nhfil-navy pb-3 mb-4 flex justify-between items-start">
          <div className="flex items-center space-x-3.5">
            <Image
              src="/logo.png"
              alt="National Housing Finance PLC"
              width={1024}
              height={704}
              className="h-14 w-auto object-contain shrink-0"
            />
            <div className="border-l border-slate-300 pl-3.5">
              <h1 className="text-xl font-black text-nhfil-navy tracking-tight">
                NATIONAL HOUSING FINANCE PLC
              </h1>
              <p className="text-[10px] text-slate-600 font-medium">
                Licensed by Bangladesh Bank under Financial Institutions Act 1993 &bull; FI-08 &bull; Est. 1998
              </p>
              <p className="text-[9px] text-slate-500">
                Corporate Head Office: Concord Baksh Tower (7th floor), Plot 11-A, Road 48, Gulshan-2, Dhaka-1212
              </p>
            </div>
          </div>

          {/* Photo Box */}
          <div className="border-2 border-dashed border-slate-300 w-24 h-28 flex flex-col items-center justify-center text-center p-1 rounded bg-slate-50">
            <span className="text-[8px] text-slate-400 uppercase font-semibold leading-tight">
              Affix 1 Passport Size Photograph (Attested)
            </span>
          </div>
        </div>

        {/* Form Title Banner */}
        <div className="bg-slate-100 border border-slate-200 py-2 px-4 rounded text-center mb-4">
          <h2 className="text-sm font-black uppercase tracking-wider text-nhfil-navy">
            {formTitle}
          </h2>
          <p className="text-[10px] text-slate-600">
            Category: {category} &bull; Issue Version: 2026/R-01
          </p>
        </div>

        {/* Branch & Application Meta */}
        <div className="grid grid-cols-3 gap-3 mb-4 text-[10px]">
          <div className="border border-slate-300 p-2 rounded">
            <span className="font-bold text-slate-600 block">Regional Branch:</span>
            <span className="block border-b border-dotted border-slate-400 h-4 mt-1"></span>
          </div>
          <div className="border border-slate-300 p-2 rounded">
            <span className="font-bold text-slate-600 block">Application Ref / A/C No:</span>
            <span className="block border-b border-dotted border-slate-400 h-4 mt-1"></span>
          </div>
          <div className="border border-slate-300 p-2 rounded">
            <span className="font-bold text-slate-600 block">Date of Submission:</span>
            <span className="block border-b border-dotted border-slate-400 h-4 mt-1 font-mono">{currentDate}</span>
          </div>
        </div>

        {/* SECTION 1: APPLICANT PARTICULARS */}
        <div className="border border-slate-300 rounded mb-4 overflow-hidden text-[10px]">
          <div className="bg-slate-200 px-3 py-1 font-bold text-slate-800 uppercase tracking-wider">
            1. Applicant Personal Particulars
          </div>
          <div className="p-3 space-y-2.5">
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-3 text-slate-600 font-semibold">Full Name (English Block Letters):</span>
              <div className="col-span-9 border-b border-dotted border-slate-400 h-4"></div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-3 text-slate-600 font-semibold">নাম (বাংলায়):</span>
              <div className="col-span-9 border-b border-dotted border-slate-400 h-4"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Father&apos;s Name:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Mother&apos;s Name:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Spouse Name:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Date of Birth:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Gender:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">National ID (NID):</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">TIN / E-TIN:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Mobile Phone:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
            </div>
            <div className="flex space-x-2">
              <span className="text-slate-600 font-semibold">Present / Mailing Address:</span>
              <span className="flex-1 border-b border-dotted border-slate-400"></span>
            </div>
            <div className="flex space-x-2">
              <span className="text-slate-600 font-semibold">Permanent Address:</span>
              <span className="flex-1 border-b border-dotted border-slate-400"></span>
            </div>
          </div>
        </div>

        {/* SECTION 2: PROFESSION & INCOME */}
        <div className="border border-slate-300 rounded mb-4 overflow-hidden text-[10px]">
          <div className="bg-slate-200 px-3 py-1 font-bold text-slate-800 uppercase tracking-wider">
            2. Occupation & Financial Source
          </div>
          <div className="p-3 space-y-2.5">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Profession:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Organization / Firm:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Designation:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Gross Monthly Income:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Other Income (Rent/etc):</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-2">
                <span className="text-slate-600 font-semibold">Bank & A/C No:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: NOMINEE & BENEFICIARY */}
        <div className="border border-slate-300 rounded mb-4 overflow-hidden text-[10px]">
          <div className="bg-slate-200 px-3 py-1 font-bold text-slate-800 uppercase tracking-wider">
            3. Nominee Particulars (As per Bank Company Act / BB Directives)
          </div>
          <div className="p-3 space-y-2.5">
            <div className="grid grid-cols-4 gap-2">
              <div className="flex space-x-1 col-span-2">
                <span className="text-slate-600 font-semibold">Nominee Name:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-1">
                <span className="text-slate-600 font-semibold">Relation:</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
              <div className="flex space-x-1">
                <span className="text-slate-600 font-semibold">Share (%):</span>
                <span className="flex-1 border-b border-dotted border-slate-400"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2 / CHECKLIST & SIGNATURES */}
      <div className="print-break-before print-break-inside-avoid pt-2">
        {/* SECTION 4: DOCUMENT CHECKLIST */}
        <div className="border border-slate-300 rounded mb-4 overflow-hidden text-[10px]">
          <div className="bg-slate-200 px-3 py-1 font-bold text-slate-800 uppercase tracking-wider">
            4. Required Enclosures Checklist (Tick as Applicable)
          </div>
          <div className="p-3 grid grid-cols-2 gap-2 text-slate-700">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span>Attested Copy of National ID / Passport / Driving License</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span>3 Copies of Recent Passport Size Photographs (Attested)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span>E-TIN Certificate & Latest Tax Return Acknowledgement Receipt</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span>Salary Certificate / Pay Slip (Latest 3 Months)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span>Bank Statement for the Last 12 Months (Original / Certified)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span>Valid Trade License / MOA / Form XII (For Business Applicants)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span>Allotment Letter / Registered Deed / Mutation / Bia Deeds (Mortgage)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-3.5 h-3.5 rounded" />
              <span>Approved Building Plan & Rajuk / CDA / KDA Permission</span>
            </label>
          </div>
        </div>

        {/* SECTION 5: DECLARATIONS */}
        <div className="border border-slate-300 rounded mb-6 p-3 text-[9px] text-slate-600 leading-tight">
          <p className="font-bold text-slate-800 mb-1">Applicant Declaration & Undertaking:</p>
          <p>
            I/We hereby declare that all particulars, answers, and statements provided in this application form and attached enclosures are true, correct, and complete in all respects. I/We authorize National Housing Finance PLC to obtain and verify any credit information through Bangladesh Bank Credit Information Bureau (CIB) or third-party verifiers. I/We agree to be governed by the applicable rules and terms of sanction established by the institution.
          </p>
        </div>

        {/* SIGNATURE BLOCKS */}
        <div className="grid grid-cols-3 gap-6 pt-6 border-t-2 border-slate-300 text-center text-[10px]">
          <div>
            <div className="border-b border-slate-400 mb-1 h-10"></div>
            <p className="font-bold text-slate-800">Signature of Principal Applicant</p>
            <p className="text-slate-400 text-[9px]">Date: __________________</p>
          </div>
          <div>
            <div className="border-b border-slate-400 mb-1 h-10"></div>
            <p className="font-bold text-slate-800">Signature of Joint Applicant / Nominee</p>
            <p className="text-slate-400 text-[9px]">Date: __________________</p>
          </div>
          <div>
            <div className="border-b border-slate-400 mb-1 h-10"></div>
            <p className="font-bold text-slate-800">Branch Receiving Officer</p>
            <p className="text-slate-400 text-[9px]">Seal & Initial: __________________</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-[8px] text-slate-400 pt-6">
          National Housing Finance PLC &bull; Hotline: +88 09609 200555 &bull; info@nationalhousingbd.com &bull; www.nationalhousingbd.com
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-label="Physical Application Form Modal"
        className="fixed inset-0 z-50 overflow-y-auto bg-nhfil-navy-deep/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      >
        <div className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-fade-in-up">
          {content}
        </div>
      </div>
    );
  }

  return content;
}

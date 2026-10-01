"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, FileText } from "lucide-react";
import ApplyModal from "../tools/ApplyModal";

export default function FloatingContact() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end space-y-2 select-none" role="complementary" aria-label="Quick Contact Actions">
        {/* Apply Online Vertical Button */}
        <button
          onClick={() => setIsApplyOpen(true)}
          aria-label="Apply Online for Loan or Deposit"
          className="bg-nhfil-blue hover:bg-nhfil-blue-600 active:scale-95 text-white font-bold py-3.5 px-2.5 rounded-l-xl shadow-xl flex items-center space-x-1.5 transition-all transform hover:-translate-x-1.5 group relative"
        >
          <span className="absolute -top-1 -left-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <FileText className="w-4 h-4 text-white" />
          <span className="text-[11px] font-black uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">
            Apply Online
          </span>
        </button>

        {/* Call Us Button */}
        <a
          href="tel:+8809609200555"
          title="Call Hotline: +88 09609 200555"
          aria-label="Call Hotline +88 09609 200555"
          className="bg-nhfil-navy hover:bg-nhfil-blue active:scale-95 text-white p-3 rounded-l-xl shadow-xl transition-all transform hover:-translate-x-1.5 flex items-center group relative"
        >
          <Phone className="w-4 h-4" />
          <span className="absolute right-full mr-2 px-3 py-1.5 bg-nhfil-navy text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            +88 09609 200555
          </span>
        </a>

        {/* Locate Us */}
        <Link
          href="/location"
          title="Find Nearest Branch"
          aria-label="Locate 9 branches across Bangladesh"
          className="bg-nhfil-navy hover:bg-nhfil-blue active:scale-95 text-white p-3 rounded-l-xl shadow-xl transition-all transform hover:-translate-x-1.5 flex items-center group relative"
        >
          <MapPin className="w-4 h-4" />
          <span className="absolute right-full mr-2 px-3 py-1.5 bg-nhfil-navy text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            Locate Branches (9)
          </span>
        </Link>

        {/* Message Us */}
        <Link
          href="/contact-us"
          title="Send a Message"
          aria-label="Send a message or complaint to National Housing"
          className="bg-nhfil-navy hover:bg-nhfil-blue active:scale-95 text-white p-3 rounded-l-xl shadow-xl transition-all transform hover:-translate-x-1.5 flex items-center group relative"
        >
          <Mail className="w-4 h-4" />
          <span className="absolute right-full mr-2 px-3 py-1.5 bg-nhfil-navy text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            Message Us
          </span>
        </Link>
      </div>

      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}

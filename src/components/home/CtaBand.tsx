"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Phone, ShieldCheck } from "lucide-react";
import ApplyModal from "../tools/ApplyModal";

export default function CtaBand() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-nhfil-navy via-nhfil-navy-light to-nhfil-blue py-16 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-amber-300">
                Pioneering Housing Finance Since 1998
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight leading-tight">
                Ready to Take the Next Step Toward Your Own Home?
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Connect with our dedicated credit relationship managers for pre-qualification, title evaluation, and hassle-free documentation.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Apply Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/calculator"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
              >
                <Calculator className="w-4 h-4 text-nhfil-blue" />
                <span>Calculate EMI</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}

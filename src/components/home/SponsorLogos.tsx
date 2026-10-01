import React from "react";
import { ShieldCheck, Building2, Landmark, Award } from "lucide-react";

export default function SponsorLogos() {
  const sponsors = [
    { name: "National Life Insurance Co. Ltd.", badge: "Apex Life Insurer" },
    { name: "Sadharan Bima Corporation (SBC)", badge: "State-Owned Entity" },
    { name: "Reliance Insurance Ltd.", badge: "Leading General Insurer" },
    { name: "United Insurance Co. Ltd.", badge: "Institutional Sponsor" },
    { name: "Eastern Insurance Co. Ltd.", badge: "Founding Shareholder" },
    { name: "Bangladesh General Insurance (BGIC)", badge: "First General Insurer" },
    { name: "Borak Travels (Pvt.) Ltd.", badge: "Corporate Shareholder" },
  ];

  return (
    <div className="bg-slate-100/80 border-y border-slate-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
            Backed by Bangladesh&apos;s Apex Institutional Sponsors & Government Insurance Corp
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {sponsors.map((sp, idx) => (
            <div
              key={idx}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center space-x-2.5 hover:border-nhfil-blue/50 hover:shadow-card transition-all"
            >
              <div className="w-6 h-6 rounded-lg bg-nhfil-navy/5 flex items-center justify-center text-nhfil-navy font-bold text-xs">
                <Landmark className="w-3.5 h-3.5 text-nhfil-blue" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 line-clamp-1">{sp.name}</p>
                <p className="text-[10px] text-slate-500 font-medium">{sp.badge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Heart, Users, ShieldCheck, GraduationCap, Leaf, ChevronRight, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility (CSR)",
  description: "Corporate Social Responsibility initiatives, community support, education, and health programs by National Housing Finance PLC.",
};

export default function CsrPage() {
  const pillars = [
    {
      icon: <GraduationCap className="w-6 h-6 text-nhfil-blue" />,
      title: "Education & Youth Upliftment",
      desc: "Merit-based scholarships for underprivileged students in public universities and financial literacy workshops in suburban colleges.",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Healthcare & Disaster Relief",
      desc: "Direct emergency assistance during natural floods, winter cold-wave relief distribution in northern districts, and contribution to specialized hospital wings.",
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: "Women & Micro-Enterprise Empowerment",
      desc: "Providing subsidized financial advisory and seed assistance to female artisans and rural weavers through community micro-SME programs.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      title: "Green & Sustainable Housing",
      desc: "Promoting solar-rooftop housing developments, energy-efficient building materials, and urban tree plantation drives across residential societies.",
    },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">CSR Initiatives</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Community & Social Impact</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Corporate Social Responsibility
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Building homes is only part of our duty. NHFIL is deeply dedicated to creating lasting social value and empowering vulnerable communities across Bangladesh.
          </p>
        </div>

        {/* CSR Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Story */}
        <div className="bg-gradient-to-r from-nhfil-navy via-nhfil-navy-light to-nhfil-blue rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Winter Relief Drive 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading">
            Warmth for Northern Bangladesh: 2,500+ Families Reached
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
            In collaboration with local community administrations in Rangpur, Kurigram, and Bogura, NHFIL distributed quality blankets and essential warm wear directly to destitute families living near the Teesta river basins.
          </p>
        </div>

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            href="/company-profile"
            className="inline-flex items-center space-x-2 text-xs font-bold text-nhfil-blue hover:underline uppercase tracking-wider"
          >
            <span>Learn more about our Corporate Heritage &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

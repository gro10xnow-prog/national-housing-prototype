import React from "react";
import Link from "next/link";
import {
  Compass,
  Target,
  CheckCircle2,
  ShieldCheck,
  Users,
  Award,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function MissionVisionPage() {
  const missionPoints = [
    "Equal Housing Lender to all, irrespective of caste, creed, and sex.",
    "Offer quickest service to the satisfaction of customer with the latest technology.",
    "Create innovative products to cater to the market needs at competitive price.",
    "Form a high quality team of satisfied and motivated employees.",
    "Ensure a steady return on shareholders' equity.",
  ];

  const coreValues = [
    { title: "Highest Business Ethics", desc: "Uncompromising integrity, transparency, and strict statutory compliance in all dealings." },
    { title: "Customer Centricity", desc: "Listening, understanding, and delivering financial solutions that empower family stability." },
    { title: "Social Impact & Inclusion", desc: "Broadening homeownership opportunities and supporting women and cottage entrepreneurs." },
    { title: "Technological Excellence", desc: "Modern digital tools, streamlined document appraisal, and prompt client service." },
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
          <Link href="/company-profile" className="hover:text-nhfil-blue">
            About Us
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Mission & Vision</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Guiding Principles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Vision, Mission & Core Values
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The enduring ethical philosophy shaping National Housing Finance PLC&apos;s commitment to the nation.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-nhfil-navy via-nhfil-navy-light to-nhfil-blue rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Corporate Vision</span>
          </div>
          <blockquote className="text-xl sm:text-2xl font-bold font-heading leading-relaxed italic text-white/95">
            &ldquo;To be a role-model financial institution with corporate social responsibility contributing to social growth through maintaining the highest standard of business ethics. In doing so, the company would add value to the wealth of the society.&rdquo;
          </blockquote>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>Our Mission</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            Five Strategic Commitments
          </h2>

          <div className="space-y-4">
            {missionPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-3.5 text-sm sm:text-base text-slate-800 font-medium"
              >
                <div className="w-7 h-7 rounded-xl bg-nhfil-blue/10 flex items-center justify-center text-nhfil-blue font-bold text-xs shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-heading text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreValues.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2"
              >
                <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{v.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

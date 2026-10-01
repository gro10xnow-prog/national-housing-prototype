import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Users,
  Award,
  Clock,
  TrendingUp,
  FileCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function WhyChooseUs() {
  const stats = [
    { value: "25+", label: "Years of Trust", desc: "Incorporated in August 1998" },
    { value: "9", label: "Strategic Branches", desc: "Serving Dhaka & divisional hubs" },
    { value: "A+", label: "Credit Rating", desc: "Top-tier institutional safety" },
    { value: "৳ 50B+", label: "Financing Impact", desc: "Disbursed to homes & enterprises" },
  ];

  const features = [
    {
      title: "Bangladesh Bank Licensed Institution",
      desc: "Operating strictly under the Financial Institutions Act 1993 with utmost governance, audit rigor, and regulatory compliance.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Transparent & Fast-Track Processing",
      desc: "Transparent fee structure with zero hidden levies. Dedicated credit relationship officers guide your documentation from start to finish.",
      icon: <Clock className="w-5 h-5 text-nhfil-blue" />,
    },
    {
      title: "Equal Housing Opportunity for All",
      desc: "Committed to broadening housing ownership regardless of caste, creed, or gender across urban and emerging divisional hubs.",
      icon: <Users className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Comprehensive Product Suite",
      desc: "From specialized urban apartment loans and artisan micro-SME support to Shariah-compliant Islamic financing under one trusted roof.",
      icon: <Award className="w-5 h-5 text-sky-500" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-center shadow-card border border-slate-200/80 hover:border-nhfil-blue/50 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-black text-nhfil-navy font-heading">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-nhfil-blue uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Feature Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Choose National Housing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading leading-tight">
              A Specialized Financial Partner Dedicated to Your Family's Security
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              National Housing Finance PLC is always ready to stand beside you as one of the leading specialized home loan and savings providers of the country. Sponsored by leading insurance companies, banks, and conglomerates, our corporate governance ensures your life's capital is in safe, honorable hands.
            </p>

            <div className="pt-2">
              <Link
                href="/company-profile"
                className="inline-flex items-center space-x-2 text-xs font-bold text-nhfil-blue hover:text-nhfil-navy transition-colors uppercase tracking-wider"
              >
                <span>Read Full Company Profile & History</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

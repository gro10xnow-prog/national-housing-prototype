import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Award,
  TrendingUp,
  Heart,
  GraduationCap,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Building
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Life at NHFIL",
  description: "Explore career opportunities, workplace culture, benefits, and professional development at National Housing Finance PLC.",
};

export default function CareerHubPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      title: "Performance Recognition",
      desc: "Meritocratic appraisals, annual incentive bonuses, and transparent promotions.",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-nhfil-blue" />,
      title: "Continuous Professional Training",
      desc: "Sponsored certifications with BIBM, BAB, and leadership management development.",
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      title: "Healthcare & Life Insurance",
      desc: "Comprehensive hospitalization cover, outpatient benefits, and family medical coverage.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      title: "Retirement Security",
      desc: "Recognized Contributory Provident Fund (CPF), Gratuity scheme, and welfare funds.",
    },
    {
      icon: <Building className="w-5 h-5 text-sky-500" />,
      title: "Staff Housing & Loan Facilities",
      desc: "Subsidized staff home loans and car financing schemes for eligible employees.",
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-500" />,
      title: "Collaborative Work Culture",
      desc: "An ethical, collegial atmosphere that respects work-life harmony and personal well-being.",
    },
  ];

  const careerTracks = [
    {
      track: "Retail Mortgage & Credit Appraisal",
      roles: "Relationship Managers, Credit Analysts, Property Appraisers, Branch Managers",
    },
    {
      track: "Islamic Financing Division",
      roles: "Mudaraba Product Specialists, Shariah Compliance Officers, Murabaha Managers",
    },
    {
      track: "SME & Corporate Finance",
      roles: "Corporate Relationship Managers, Financial Analysts, Project Evaluators",
    },
    {
      track: "Technology & Digital Operations",
      roles: "Core Banking Specialists, Cybersecurity Analysts, Systems Engineers",
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
          <span className="font-semibold text-slate-800">Careers</span>
        </div>

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-nhfil-navy text-white p-8 sm:p-14 shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nhfil-blue/20 text-nhfil-blue-200 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Join our institutional journey</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Build a Rewarding Career in Housing Finance
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At National Housing Finance PLC, we believe our people are the driving force behind 25+ years of institutional trust. Explore a dynamic career helping thousands of families realize their homeownership dreams.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/vacancy-announcement"
                className="px-6 py-3 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <span>View Current Vacancies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:career@nationalhousingbd.com"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all"
              >
                Drop Resume (General Pool)
              </a>
            </div>
          </div>
        </div>

        {/* Why Work With Us (Benefits Grid) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Why National Housing?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We offer comprehensive compensation packages, clear growth trajectories, and an environment rooted in the highest business ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-card transition-all space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{b.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Growth Tracks */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            Core Professional Career Tracks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {careerTracks.map((trk, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="text-xs font-bold text-nhfil-blue uppercase tracking-wider">
                  Track 0{idx + 1}
                </span>
                <h3 className="font-bold text-slate-900 text-sm">{trk.track}</h3>
                <p className="text-xs text-slate-500">{trk.roles}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vacancies Banner */}
        <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-bold text-base text-slate-900 font-heading">
              Ready to take the next step in your career?
            </h3>
            <p className="text-xs text-slate-600">
              Check our active job openings across branch and corporate departments.
            </p>
          </div>
          <Link
            href="/vacancy-announcement"
            className="px-6 py-3 bg-nhfil-navy hover:bg-nhfil-blue text-white font-bold text-xs rounded-xl transition-colors shrink-0 shadow-md"
          >
            Explore Active Openings &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

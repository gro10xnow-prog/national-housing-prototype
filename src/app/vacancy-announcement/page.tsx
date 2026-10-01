import React from "react";
import Link from "next/link";
import { Briefcase, MapPin, Calendar, Clock, ChevronRight, Mail, Users, CheckCircle2 } from "lucide-react";

export default function CareerPage() {
  const openings = [
    {
      title: "Senior Credit Relationship Officer / Branch Manager",
      department: "Retail Credit & Mortgage Lending",
      location: "Chattogram / Rajshahi Branches",
      experience: "5 - 8 Years in Banking / NBFI",
      deadline: "October 15, 2026",
      type: "Full-Time",
    },
    {
      title: "Executive - Islamic Banking Division",
      department: "Islamic Wing",
      location: "Corporate Head Office (Dhaka)",
      experience: "2 - 4 Years in Islamic Financing (HPSM / Mudaraba)",
      deadline: "October 20, 2026",
      type: "Full-Time",
    },
    {
      title: "Senior Officer - IT & Core Banking Systems",
      department: "Information Technology",
      location: "Corporate Head Office (Dhaka)",
      experience: "3 - 5 Years in Banking Software & Infrastructure",
      deadline: "October 25, 2026",
      type: "Full-Time",
    },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Careers & Vacancies</span>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Career Opportunities at NHFIL
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Build your professional career with one of Bangladesh&apos;s leading specialized housing financial institutions with performance culture and career growth.
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 text-center">
            <Users className="w-8 h-8 text-nhfil-blue mx-auto mb-2" />
            <h3 className="font-bold text-slate-900">Meritocratic Culture</h3>
            <p className="text-xs text-slate-500">Equal opportunities and performance incentives across all departments.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 text-center">
            <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <h3 className="font-bold text-slate-900">Training & Upskilling</h3>
            <p className="text-xs text-slate-500">Continuous professional development through BIBM and institute programs.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 text-center">
            <CheckCircle2 className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <h3 className="font-bold text-slate-900">Competitive Compensation</h3>
            <p className="text-xs text-slate-500">Industry-standard benefits, provident fund, gratuity, and healthcare cover.</p>
          </div>
        </div>

        {/* Current Job Openings */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            Current Vacancies
          </h2>

          <div className="space-y-4">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-nhfil-blue transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="space-y-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue font-bold text-[10px] uppercase">
                    {job.type} &bull; {job.department}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </span>
                    <span>&bull;</span>
                    <span>Experience: {job.experience}</span>
                    <span>&bull;</span>
                    <span className="text-amber-600 font-medium">Deadline: {job.deadline}</span>
                  </div>
                </div>

                <a
                  href={`mailto:career@nationalhousingbd.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="px-5 py-2.5 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-xs rounded-xl transition-all shadow-sm shrink-0"
                >
                  Apply via Email
                </a>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-nhfil-navy">
            <p>
              Interested candidates meeting the criteria are requested to email their detailed resume along with a recent photograph to: <strong className="text-nhfil-blue">career@nationalhousingbd.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

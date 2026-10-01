"use client";

import React, { useState } from "react";
import Link from "next/link";
import { directors, Director } from "@/data/directors";
import { Users, ShieldCheck, ChevronRight, Award, Building, Filter } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

export default function BoardOfDirectorsPage() {
  const [filter, setFilter] = useState<"all" | "ec" | "ac">("all");

  const filteredDirectors = directors.filter((d) => {
    if (filter === "all") return true;
    if (filter === "ec") return d.committee?.toLowerCase().includes("executive");
    if (filter === "ac") return d.committee?.toLowerCase().includes("audit");
    return true;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
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
          <span className="font-semibold text-slate-800">Board of Directors</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Corporate Governance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Honorable Board of Directors
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Distinguished leaders representing Bangladesh&apos;s apex financial institutions, insurance corporations, and public administration.
          </p>

          {/* Committee Filter Tabs */}
          <div className="flex justify-center gap-2 pt-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "all"
                  ? "bg-nhfil-navy text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              All Directors ({directors.length})
            </button>
            <button
              onClick={() => setFilter("ec")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "ec"
                  ? "bg-nhfil-navy text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              Executive Committee
            </button>
            <button
              onClick={() => setFilter("ac")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "ac"
                  ? "bg-nhfil-navy text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              Audit Committee
            </button>
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDirectors.map((director) => (
            <div
              key={director.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden bg-slate-100 shadow-md">
                  <SafeImage
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="144px"
                    fallbackSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="text-center space-y-1 mb-4">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {director.name}
                  </h3>
                  <div className="text-xs font-bold text-nhfil-blue uppercase tracking-wider">
                    {director.role}
                  </div>
                  {director.representation && (
                    <p className="text-xs text-slate-500 italic">
                      {director.representation}
                    </p>
                  )}
                  {director.committee && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-700">
                      {director.committee}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 text-justify leading-relaxed pt-2 border-t border-slate-100">
                  {director.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

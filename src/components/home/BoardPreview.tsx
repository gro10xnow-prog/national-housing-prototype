"use client";

import React from "react";
import Link from "next/link";
import { directors } from "@/data/directors";
import { Users, ArrowRight, ShieldCheck, Award } from "lucide-react";
import SafeImage from "../ui/SafeImage";

export default function BoardPreview() {
  const featuredDirectors = directors.slice(0, 4);

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nhfil-navy/5 text-nhfil-navy text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5 text-nhfil-blue" />
              <span>Institutional Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Honorable Board of Directors
            </h2>
            <p className="text-slate-600 mt-2 text-sm max-w-xl">
              Distinguished leaders representing Bangladesh's apex insurance institutions, business chambers, and the government civil service.
            </p>
          </div>

          <Link
            href="/board-of-directors"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-nhfil-blue hover:border-nhfil-blue text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>View Full Board & Management</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Featured Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDirectors.map((director) => (
            <div
              key={director.id}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group"
            >
              <div>
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-2xl overflow-hidden bg-slate-200 shadow-md">
                  <SafeImage
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="112px"
                    fallbackSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {director.name}
                  </h3>
                  <div className="text-xs font-bold text-nhfil-blue mt-0.5">
                    {director.role}
                  </div>
                  {director.representation && (
                    <p className="text-[11px] text-slate-500 mt-1 font-medium italic">
                      {director.representation}
                    </p>
                  )}
                  {director.committee && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-slate-200/80 text-[10px] font-semibold text-slate-700">
                      {director.committee}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 mt-4 text-justify leading-relaxed">
                  {director.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 text-center">
                <Link
                  href="/board-of-directors"
                  className="text-xs font-bold text-nhfil-navy hover:text-nhfil-blue transition-colors"
                >
                  Read Full Bio &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { newsNoticesData } from "@/data/news";
import { Newspaper, Calendar, Download, Pin, ChevronRight, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notice Board & Announcements",
  description: "Official notices, AGM announcements, dividend declarations, and corporate disclosures of National Housing Finance PLC.",
};

export default function NoticeBoardPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Notice Board</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-4 h-4" />
            <span>Corporate Communications</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Official Notice Board & Circulars
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Statutory notifications, shareholder meetings, dividend declarations, regulatory updates, and public disclosures from National Housing Finance PLC.
          </p>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {newsNoticesData.map((notice) => (
            <div
              key={notice.id}
              className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-200 ${
                notice.pinned
                  ? "border-nhfil-blue/40 shadow-card hover:border-nhfil-blue"
                  : "border-slate-200 shadow-sm hover:shadow-card"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center space-x-2">
                  {notice.pinned && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-nhfil-blue text-white text-[10px] font-bold uppercase">
                      <Pin className="w-3 h-3" />
                      <span>Pinned</span>
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                    {notice.category}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{notice.date}</span>
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-2">
                {notice.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {notice.summary}
              </p>

              {notice.fileUrl && (
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    PDF Document {notice.fileSize ? `(${notice.fileSize})` : ""}
                  </span>
                  <a
                    href={notice.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 bg-slate-100 hover:bg-nhfil-blue hover:text-white text-slate-700 text-xs font-bold rounded-xl transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official PDF</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Share Department Contact */}
        <div className="p-6 rounded-3xl bg-nhfil-navy text-white flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <p className="font-bold text-sm">Need certified copies or archive shareholder circulars?</p>
            <p className="text-slate-300 mt-0.5">Contact Share & Corporate Affairs Department &bull; share@nationalhousingbd.com</p>
          </div>
          <Link
            href="/contact-us"
            className="px-5 py-2.5 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold rounded-xl transition-colors shrink-0"
          >
            Contact Department
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { newsNoticesData } from "@/data/news";
import { Newspaper, Calendar, ArrowRight, Download, Bell, Pin } from "lucide-react";

export default function LatestNews() {
  const featuredNotices = newsNoticesData.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider mb-3">
              <Bell className="w-3.5 h-3.5" />
              <span>Announcements & Media</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
              News Bulletin & Regulatory Notices
            </h2>
            <p className="text-slate-600 mt-2 text-sm max-w-xl">
              Stay up-to-date with statutory disclosures, AGM circulars, dividend announcements, and corporate media.
            </p>
          </div>

          <Link
            href="/notice-board"
            className="inline-flex items-center space-x-2 text-xs font-bold text-nhfil-blue hover:text-nhfil-navy uppercase tracking-wider transition-colors"
          >
            <span>View All Notices & Circulars</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Notice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <div className="flex items-center space-x-1.5">
                    {notice.pinned && (
                      <span className="p-1 rounded-full bg-nhfil-blue/10 text-nhfil-blue">
                        <Pin className="w-3 h-3" />
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]">
                      {notice.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400 text-[11px]">
                    <Calendar className="w-3 h-3" />
                    <span>{notice.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-heading mb-2 group-hover:text-nhfil-blue transition-colors">
                  <Link href="/notice-board">{notice.title}</Link>
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {notice.fileSize ? `PDF (${notice.fileSize})` : "Circular"}
                </span>
                <Link
                  href="/notice-board"
                  className="font-bold text-nhfil-blue hover:text-nhfil-navy flex items-center space-x-1"
                >
                  <span>Read Full Notice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

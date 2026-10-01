import React from "react";
import Link from "next/link";
import { Home, Search, Compass, Calculator, ArrowRight, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 bg-slate-50 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-nhfil-blue/10 flex items-center justify-center mx-auto text-nhfil-blue">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-nhfil-blue">
            Error 404 &bull; Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            Looking for a Financial Service?
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us guide you back to the right destination.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <Link
            href="/loans"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-nhfil-blue hover:shadow-card transition-all text-center group"
          >
            <Home className="w-5 h-5 text-nhfil-blue mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-slate-800">Home Loans</span>
          </Link>

          <Link
            href="/deposits"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-nhfil-blue hover:shadow-card transition-all text-center group"
          >
            <Compass className="w-5 h-5 text-amber-500 mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-slate-800">Deposit Schemes</span>
          </Link>

          <Link
            href="/calculator"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-nhfil-blue hover:shadow-card transition-all text-center group col-span-2 sm:col-span-1"
          >
            <Calculator className="w-5 h-5 text-emerald-500 mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-slate-800">EMI Calculator</span>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-nhfil-navy hover:bg-nhfil-blue text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

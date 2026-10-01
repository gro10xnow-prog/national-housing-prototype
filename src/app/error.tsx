"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home, Phone, Mail, ArrowRight } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to institutional monitoring
    console.error("Institutional Error Boundary caught exception:", error);
  }, [error]);

  return (
    <div className="py-20 bg-slate-50 min-h-[75vh] flex items-center justify-center p-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600">
            System Incident Recovery Desk
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Temporary Service Interruption
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Our secure banking portal encountered an unexpected exception while processing this request. Our technical operations desk has been notified.
          </p>
        </div>

        {error.digest && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-500 font-mono inline-block">
            Incident Reference: <strong className="text-slate-800">{error.digest}</strong>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-nhfil-blue hover:bg-nhfil-blue-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload & Try Again</span>
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Emergency Assistance */}
        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center space-x-1.5 text-slate-700">
            <Phone className="w-3.5 h-3.5 text-nhfil-blue" />
            <span>Hotline: <strong>+88 09609 200555</strong></span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-700">
            <Mail className="w-3.5 h-3.5 text-nhfil-blue" />
            <span>Support: <strong>it@nationalhousingbd.com</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}

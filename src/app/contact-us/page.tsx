"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Home Loan Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Contact Us</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Connect with NHFIL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Get in Touch with Our Team
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have an inquiry regarding loan eligibility, opening a Kotipoti scheme, or need assistance? Reach out to our team or visit our offices.
          </p>
        </div>

        {/* Contact Form & Head Office Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
            <h2 className="text-2xl font-bold text-slate-900 font-heading mb-6">
              Write to Us
            </h2>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Message Sent!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Our customer support representative will get back to you at {formData.email || formData.phone} within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-nhfil-blue text-white rounded-xl text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanvir Ahmed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. tanvir@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 01712-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                  >
                    <option value="Home Loan Inquiry">Home Mortgage Loan Inquiry</option>
                    <option value="SME Finance Inquiry">SME / Commercial Loan Inquiry</option>
                    <option value="Kotipoti / Deposit Scheme">Kotipoti or Deposit Scheme</option>
                    <option value="Islamic Banking Inquiry">Islamic Wing (HPSM / Mudaraba)</option>
                    <option value="Investor Inquiry">Investor Relations / Share Inquiry</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist your financing or deposit needs?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Key Offices Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Corporate Head Office */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card space-y-3">
              <span className="text-[10px] uppercase font-bold text-nhfil-blue tracking-wider">
                Principal Headquarters
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Corporate Head Office
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Concord Baksh Tower (7th floor), Plot: 11-A, Road No.- 48, Block- CWN (A), Gulshan- 2, Dhaka- 1212
              </p>
              <div className="pt-2 text-xs space-y-1.5 text-slate-700">
                <p className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-nhfil-blue" />
                  <span className="font-semibold">+88 09609 200555</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-nhfil-blue" />
                  <span>info@nationalhousingbd.com</span>
                </p>
              </div>
            </div>

            {/* Registered Head Office */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card space-y-3">
              <span className="text-[10px] uppercase font-bold text-nhfil-blue tracking-wider">
                Statutory Headquarters
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Registered Head Office
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                National Plaza (7th & 8th floor), 109 Bir Uttam C.R. Dutta Road, Dhaka-1205
              </p>
              <div className="pt-2 text-xs space-y-1.5 text-slate-700">
                <p className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-nhfil-blue" />
                  <span>88-02-9670612-4, 88-02-9677181-2</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-nhfil-blue" />
                  <span>share@nationalhousingbd.com</span>
                </p>
              </div>
            </div>

            {/* Customer Grievance / Complain Cell */}
            <div id="complain" className="bg-amber-50/70 p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-amber-800">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-bold font-heading">
                  Customer Grievance & Complain Cell
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                National Housing maintains a zero-tolerance policy towards customer dissatisfaction. If your concern is not addressed at the branch level, please escalate directly:
              </p>
              <div className="text-xs text-slate-800 space-y-1 font-semibold pt-1">
                <p>Hotline: +88 09609 200555 &bull; Ext: Grievance Desk</p>
                <p>Email: complain@nationalhousingbd.com</p>
                <p className="text-[11px] text-slate-500 font-normal">
                  You may also lodge complaints with the Financial Integrity & Customer Services Department (FICSD) of Bangladesh Bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

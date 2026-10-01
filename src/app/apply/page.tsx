"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loanProducts } from "@/data/loans";
import { depositSchemes } from "@/data/deposits";
import { branches } from "@/data/branches";
import PrintReceipt from "@/components/tools/PrintReceipt";
import {
  FileCheck2,
  CheckCircle2,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronRight,
  Copy,
  Check,
  Send,
  ExternalLink,
  Printer,
  Compass
} from "lucide-react";

const BANGLADESH_DISTRICTS = [
  "Dhaka", "Chattogram", "Gazipur", "Bogura", "Rangpur", "Rajshahi", "Feni",
  "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Brahmanbaria",
  "Chandpur", "Chapainawabganj", "Chuadanga", "Cox's Bazar", "Cumilla", "Dinajpur",
  "Faridpur", "Gaibandha", "Gopalganj", "Habiganj", "Jamalpur", "Jashore",
  "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachhari", "Khulna", "Kishoreganj",
  "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura",
  "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon",
  "Narail", "Narayanganj", "Narsingdi", "Natore", "Netrokona", "Nilphamari",
  "Noakhali", "Pabna", "Panchagarh", "Patuakhali", "Pirojpur", "Rajbari",
  "Rangamati", "Satkhira", "Shariatpur", "Sherpur", "Sirajgonj", "Sunamganj",
  "Sylhet", "Tangail", "Thakurgaon"
];

export default function ApplyPage() {
  const [productType, setProductType] = useState<"loan" | "deposit">("loan");
  const [selectedProduct, setSelectedProduct] = useState(loanProducts[0].title);
  const [profession, setProfession] = useState<"business" | "service" | "other">("business");
  const [desiredAmount, setDesiredAmount] = useState("");
  const [preferredBranch, setPreferredBranch] = useState("Corporate Head Office (Gulshan)");
  const [nidNumber, setNidNumber] = useState("");
  const [copied, setCopied] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "Dhaka",
    contactNumber: "",
    email: "",
    businessName: "",
    businessAddress: "",
    businessSector: "",
    businessExperience: "",
    companyName: "",
    companyAddress: "",
    companyDesignation: "",
    otherProfession: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "NHFIL-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomRef);
    setIsSubmitted(true);

    try {
      const record = {
        referenceId: randomRef,
        name: formData.name,
        contactNumber: formData.contactNumber,
        email: formData.email,
        product: selectedProduct,
        productType,
        amount: desiredAmount || "As per policy",
        branch: preferredBranch,
        submittedAt: new Date().toISOString(),
        currentStage: 2,
        notes: "Application registered. Preliminary desk assessment initiated."
      };
      const existing = JSON.parse(localStorage.getItem("nhfil_applications") || "[]");
      localStorage.setItem("nhfil_applications", JSON.stringify([record, ...existing.slice(0, 9)]));
    } catch {
      // LocalStorage tolerance
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Online Application</span>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <FileCheck2 className="w-4 h-4" />
            <span>Digital Processing Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Apply Online for Financing or Deposits
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Please fill in your primary particulars so our regional credit relationship team can immediately initiate preliminary appraisal.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {isSubmitted ? (
            <div className="p-8 sm:p-14 text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Application Successfully Registered!
                </h2>
                <p className="text-sm text-slate-600 max-w-lg mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your request for{" "}
                  <strong className="text-nhfil-blue">{selectedProduct}</strong> has been logged and assigned to our{" "}
                  <strong>{preferredBranch}</strong> team.
                </p>
              </div>

              {/* Reference Card with Copy */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Application Reference ID
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-xs font-bold text-nhfil-blue hover:text-nhfil-navy flex items-center space-x-1"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied to clipboard!" : "Copy ID"}</span>
                  </button>
                </div>
                <p className="text-3xl font-mono font-black text-nhfil-navy">{referenceId}</p>
                <div className="text-xs text-slate-500 pt-2 border-t border-slate-200 space-y-1">
                  <p>&bull; Desired Amount: <strong className="text-slate-800">{desiredAmount || "As per policy"}</strong></p>
                  <p>&bull; Assigned Officer will contact: <strong className="text-slate-800">{formData.contactNumber}</strong></p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => router.push(`/track-application?ref=${referenceId}`)}
                  className="px-5 py-3 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <Compass className="w-4 h-4" />
                  <span>Track Status in Real-Time</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-5 py-3 bg-nhfil-navy hover:bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <Printer className="w-4 h-4 text-nhfil-blue" />
                  <span>Print Receipt Slip</span>
                </button>

                <a
                  href={`https://wa.me/8801713045255?text=${encodeURIComponent(
                    `Hello National Housing Finance, I submitted an application for ${selectedProduct}. My reference ID is ${referenceId}. Name: ${formData.name}, Contact: ${formData.contactNumber}, Amount: ${desiredAmount}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Notify WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl text-xs transition-colors"
                >
                  Submit Another
                </button>
              </div>

              {/* Printable Receipt rendering */}
              <PrintReceipt
                referenceId={referenceId}
                applicantName={formData.name}
                contactNumber={formData.contactNumber}
                selectedProduct={selectedProduct}
                productType={productType}
                desiredAmount={desiredAmount || "As per policy"}
                preferredBranch={preferredBranch}
                email={formData.email}
                district={formData.district}
                address={formData.address}
              />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              {/* Product Type Switch */}
              <div className="flex bg-slate-100 p-1.5 rounded-2xl max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => {
                    setProductType("loan");
                    setSelectedProduct(loanProducts[0].title);
                  }}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase rounded-xl transition-all ${
                    productType === "loan"
                      ? "bg-white text-nhfil-navy shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Home & SME Loans
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setProductType("deposit");
                    setSelectedProduct(depositSchemes[0].title);
                  }}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase rounded-xl transition-all ${
                    productType === "deposit"
                      ? "bg-white text-nhfil-navy shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Deposit & Kotipoti
                </button>
              </div>

              {/* Product Selection & Desired Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Facility *
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                    required
                  >
                    {productType === "loan"
                      ? loanProducts.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))
                      : depositSchemes.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Desired Amount (BDT) *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ৳ 35,00,000"
                    required
                    value={desiredAmount}
                    onChange={(e) => setDesiredAmount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Preferred Branch & NID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Branch Office *
                  </label>
                  <select
                    value={preferredBranch}
                    onChange={(e) => setPreferredBranch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                    required
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name} ({b.city})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    NID / Smart Card Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="10 / 13 / 17 digit NID"
                    value={nidNumber}
                    onChange={(e) => setNidNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohammad Tanvir Rahman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mobile Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 01712-XXXXXX"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. tanvir@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your District *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                  >
                    {BANGLADESH_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Present Residential Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Apartment/House, Road, Area, City"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm"
                />
              </div>

              {/* Occupation Type */}
              <div className="pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Occupation / Professional Background *
                </label>
                <div className="flex gap-2">
                  {(["business", "service", "other"] as const).map((prof) => (
                    <button
                      key={prof}
                      type="button"
                      onClick={() => setProfession(prof)}
                      className={`flex-1 py-2.5 text-xs font-bold uppercase rounded-xl border transition-all ${
                        profession === prof
                          ? "bg-nhfil-navy text-white border-nhfil-navy shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {prof === "service" ? "Salaried Service" : prof === "business" ? "Business Owner" : "Other / NRB"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Fields */}
              {profession === "business" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <input
                    type="text"
                    placeholder="Business Enterprise Name *"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Nature of Business Sector *"
                    required
                    value={formData.businessSector}
                    onChange={(e) => setFormData({ ...formData, businessSector: e.target.value })}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
              )}

              {profession === "service" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <input
                    type="text"
                    placeholder="Employer / Company Name *"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Your Official Designation *"
                    required
                    value={formData.companyDesignation}
                    onChange={(e) => setFormData({ ...formData, companyDesignation: e.target.value })}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
              )}

              {profession === "other" && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <input
                    type="text"
                    placeholder="Specify Profession / NRB Country *"
                    required
                    value={formData.otherProfession}
                    onChange={(e) => setFormData({ ...formData, otherProfession: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Digital Application</span>
                </button>
                <p className="text-center text-xs text-slate-400 mt-3">
                  Preliminary appraisal is free. No upfront fee assessed before formal sanction.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

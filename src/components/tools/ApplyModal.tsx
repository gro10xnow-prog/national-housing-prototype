"use client";

import React, { useState, useEffect } from "react";
import { loanProducts } from "@/data/loans";
import { depositSchemes } from "@/data/deposits";
import { branches } from "@/data/branches";
import { useRouter } from "next/navigation";
import {
  X,
  CheckCircle2,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  FileText,
  Copy,
  Check,
  Send,
  ExternalLink,
  Printer,
  Compass
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import PrintReceipt from "./PrintReceipt";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProductType?: "loan" | "deposit";
  defaultProductName?: string;
}

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

export default function ApplyModal({
  isOpen,
  onClose,
  defaultProductType = "loan",
  defaultProductName = "Flat Purchase Loan",
}: ApplyModalProps) {
  const { lang } = useLanguage();
  const router = useRouter();
  const [productType, setProductType] = useState<"loan" | "deposit">(defaultProductType);
  const [selectedProduct, setSelectedProduct] = useState(defaultProductName);
  const [profession, setProfession] = useState<"business" | "service" | "other">("business");
  const [desiredAmount, setDesiredAmount] = useState("");
  const [preferredBranch, setPreferredBranch] = useState("Corporate Head Office (Gulshan)");
  const [nidNumber, setNidNumber] = useState("");
  const [copied, setCopied] = useState(false);

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

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
      // LocalStorage access tolerance
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 overflow-y-auto bg-nhfil-navy-deep/80 backdrop-blur-sm flex items-center justify-center p-4 print:hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden transform transition-all animate-fade-in-up">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-nhfil-navy via-nhfil-navy-light to-nhfil-blue p-6 text-white relative">
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 id="modal-title" className="text-xl font-bold font-heading">
                  {productType === "loan"
                    ? lang === "bn"
                      ? "ঋণ / গৃহ অর্থায়নের আবেদন"
                      : "Apply for Financing"
                    : lang === "bn"
                    ? "আমানত হিসাব খোলার আবেদন"
                    : "Open a Deposit Scheme"}
                </h2>
              <p className="text-xs text-white/80">
                National Housing Finance PLC &bull;{" "}
                {lang === "bn"
                  ? "দ্রুত ডিজিটাল আবেদন প্রক্রিয়া"
                  : "Fast-Track Digital Application"}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[82vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1 font-heading">
                  {lang === "bn" ? "আবেদন সফলভাবে গৃহীত হয়েছে!" : "Application Logged!"}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  {lang === "bn" ? (
                    <>
                      ধন্যবাদ, <strong className="text-slate-900">{formData.name || "গ্রাহক"}</strong>। আপনার{" "}
                      <strong className="text-nhfil-blue font-bold">{selectedProduct}</strong>-এর আবেদন আমাদের{" "}
                      <strong>{preferredBranch}</strong> শাখায় পাঠানো হয়েছে।
                    </>
                  ) : (
                    <>
                      Thank you, <strong className="text-slate-900">{formData.name || "Customer"}</strong>. Your application for{" "}
                      <strong className="text-nhfil-blue font-bold">{selectedProduct}</strong> has been assigned to our{" "}
                      <strong>{preferredBranch}</strong> team.
                    </>
                  )}
                </p>
              </div>

              {/* Reference Card with Copy */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                    {lang === "bn" ? "আবেদন রেফারেন্স নম্বর" : "Application Reference ID"}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-xs font-bold text-nhfil-blue hover:text-nhfil-navy flex items-center space-x-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? (lang === "bn" ? "কপি হয়েছে!" : "Copied!") : (lang === "bn" ? "কপি করুন" : "Copy")}</span>
                  </button>
                </div>
                <p className="text-2xl font-mono font-black text-nhfil-navy">{referenceId}</p>
                <p className="text-xs text-slate-500 pt-1 border-t border-slate-200">
                  {lang === "bn" ? (
                    <>আমাদের দায়িত্বপ্রাপ্ত কর্মকর্তা ১ কার্যদিবসের মধ্যে <strong>{formData.contactNumber}</strong> নম্বরে যোগাযোগ করবেন।</>
                  ) : (
                    <>Officer will call at <strong>{formData.contactNumber}</strong> within 1 business day.</>
                  )}
                </p>
              </div>

              {/* Direct Instant Action Links */}
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    handleReset();
                    router.push(`/track-application?ref=${referenceId}`);
                  }}
                  className="px-5 py-2.5 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{lang === "bn" ? "আবেদনের অগ্রগতি ট্র্যাক করুন" : "Track Status Online"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-nhfil-navy hover:bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5 text-nhfil-blue" />
                  <span>{lang === "bn" ? "প্রাপ্তিস্বীকার রসিদ প্রিন্ট / পিডিএফ" : "Print Acknowledgement Slip"}</span>
                </button>

                <a
                  href={`https://wa.me/8801713045255?text=${encodeURIComponent(
                    `Hello National Housing, I submitted an online application for ${selectedProduct}. My reference ID is ${referenceId}. Name: ${formData.name}, Phone: ${formData.contactNumber}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === "bn" ? "হোয়াটসঅ্যাপে অবহিত করুন" : "Notify via WhatsApp"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl text-xs transition-colors"
                >
                  {lang === "bn" ? "সম্পন্ন ও বন্ধ করুন" : "Done & Close"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Selector Switch */}
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => {
                    setProductType("loan");
                    setSelectedProduct(loanProducts[0].title);
                  }}
                  className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    productType === "loan"
                      ? "bg-white text-nhfil-navy shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {lang === "bn" ? "ঋণ / গৃহ অর্থায়ন" : "Loan / Home Financing"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setProductType("deposit");
                    setSelectedProduct(depositSchemes[0].title);
                  }}
                  className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                    productType === "deposit"
                      ? "bg-white text-nhfil-navy shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {lang === "bn" ? "আমানত / সঞ্চয় স্কিম" : "Deposit / Savings Scheme"}
                </button>
              </div>

              {/* Product Select Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Facility / Product *
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Desired Amount (BDT) *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ৳ 35,00,000"
                    required
                    value={desiredAmount}
                    onChange={(e) => setDesiredAmount(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
                  />
                </div>
              </div>

              {/* Preferred Branch & NID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Regional Branch *
                  </label>
                  <select
                    value={preferredBranch}
                    onChange={(e) => setPreferredBranch(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    NID / Smart Card Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="10 / 13 / 17 digit NID"
                    value={nidNumber}
                    onChange={(e) => setNidNumber(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Tanvir Ahmed"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. 01712-XXXXXX"
                      required
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="e.g. tanvir@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your District *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Present Residential Address *
                </label>
                <input
                  type="text"
                  placeholder="Apartment/House, Road, Area, City"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
                />
              </div>

              {/* Profession Section */}
              <div className="pt-2 border-t border-slate-100">
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Occupation / Profession *
                </label>
                <div className="flex gap-2">
                  {(["business", "service", "other"] as const).map((prof) => (
                    <button
                      key={prof}
                      type="button"
                      onClick={() => setProfession(prof)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-xl border capitalize transition-all ${
                        profession === prof
                          ? "bg-nhfil-navy text-white border-nhfil-navy shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {prof === "service" ? "Salaried Service" : prof === "business" ? "Business / Trade" : "Other / NRB"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Profession Fields */}
              {profession === "business" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <input
                    type="text"
                    placeholder="Business Enterprise Name *"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Nature of Business / Sector *"
                    required
                    value={formData.businessSector}
                    onChange={(e) => setFormData({ ...formData, businessSector: e.target.value })}
                    className="px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              )}

              {profession === "service" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <input
                    type="text"
                    placeholder="Employer / Company Name *"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Your Official Designation *"
                    required
                    value={formData.companyDesignation}
                    onChange={(e) => setFormData({ ...formData, companyDesignation: e.target.value })}
                    className="px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              )}

              {profession === "other" && (
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <input
                    type="text"
                    placeholder="Specify Profession / NRB Country *"
                    required
                    value={formData.otherProfession}
                    onChange={(e) => setFormData({ ...formData, otherProfession: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === "bn" ? "অনলাইনে আবেদন দাখিল করুন" : "Submit Digital Application"}</span>
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  {lang === "bn"
                    ? "প্রাথমিক মূল্যায়ন সম্পূর্ণ বিনামূল্যে। অনুমোদনের পূর্বে কোনো অগ্রিম ফি প্রযোজ্য নয়।"
                    : "Preliminary appraisal is free. No upfront fee assessed before formal sanction."}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>

    {isSubmitted && (
        <PrintReceipt
          referenceId={referenceId}
          productType={productType}
          selectedProduct={selectedProduct}
          desiredAmount={desiredAmount}
          preferredBranch={preferredBranch}
          applicantName={formData.name}
          contactNumber={formData.contactNumber}
          email={formData.email}
          district={formData.district}
          address={formData.address}
        />
      )}
    </>
  );
}

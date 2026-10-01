"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight, Award } from "lucide-react";
import ApplyModal from "../tools/ApplyModal";
import SafeImage from "../ui/SafeImage";
import { useLanguage } from "@/context/LanguageContext";

const slidesEn = [
  {
    id: 1,
    badge: "Specialized Home Loan Provider",
    title: "Make Your Dream Home a Reality",
    subtitle:
      "Financing up to 70% of your apartment or house with customized tenures up to 20 years and fast-track branch approval.",
    ctaPrimary: "Explore Home Loans",
    ctaPrimaryLink: "/loans/5",
    ctaSecondary: "Calculate EMI",
    ctaSecondaryLink: "/calculator",
    stat: "Up to 70%",
    statLabel: "Financing Available",
    accentColor: "text-nhfil-blue",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    badge: "Premier Wealth Creation Scheme",
    title: "National Housing Kotipoti Scheme",
    subtitle:
      "Amass a guaranteed corpus of BDT 1.00 Crore (10 Million) through disciplined, affordable monthly contributions.",
    ctaPrimary: "Open Kotipoti Scheme",
    ctaPrimaryLink: "/deposits/10",
    ctaSecondary: "View Deposit Schemes",
    ctaSecondaryLink: "/deposits",
    stat: "BDT 1.00 Cr",
    statLabel: "Target Maturity Corpus",
    accentColor: "text-amber-400",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    badge: "Non-Resident Bangladeshi (NRB) Service",
    title: "Invest in Your Homeland from Abroad",
    subtitle:
      "Exclusive mortgage financing for expatriates in North America, Europe, Middle East & Asia with dedicated attorney assistance.",
    ctaPrimary: "NRB Home Financing",
    ctaPrimaryLink: "/loans/13",
    ctaSecondary: "Apply Online",
    ctaSecondaryLink: "/apply",
    stat: "Global NRB",
    statLabel: "Digital Processing",
    accentColor: "text-sky-400",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    badge: "Islamic Banking Wing",
    title: "100% Shariah-Compliant Financing",
    subtitle:
      "Riba-free HPSM home & commercial financing and Mudaraba profit-sharing deposits supervised by our Shariah Board.",
    ctaPrimary: "Explore Islamic Wing",
    ctaPrimaryLink: "/islamic",
    ctaSecondary: "Shariah Committee",
    ctaSecondaryLink: "/islamic#shariah",
    stat: "Halal & Pure",
    statLabel: "Certified Riba-Free",
    accentColor: "text-emerald-400",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1920&q=80",
  },
];

const slidesBn = [
  {
    id: 1,
    badge: "বিশেষায়িত গৃহঋণ প্রতিষ্ঠান",
    title: "আপনার স্বপ্নের আবাসন বাস্তবায়ন করুন",
    subtitle:
      "ফ্ল্যাট ক্রয় ও বাড়ি নির্মাণে ৭০% পর্যন্ত দীর্ঘমেয়াদী ঋণ সুবিধা, ২০ বছর পর্যন্ত মেয়াদ এবং দ্রুততম শাখায় অনুমোদন।",
    ctaPrimary: "গৃহঋণ সুবিধাসমূহ",
    ctaPrimaryLink: "/loans/5",
    ctaSecondary: "ইএমআই হিসাব করুন",
    ctaSecondaryLink: "/calculator",
    stat: "৭০% পর্যন্ত",
    statLabel: "সর্বোচ্চ ঋণ সুবিধা",
    accentColor: "text-nhfil-blue",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    badge: "শীর্ষস্থানীয় সঞ্চয় পরিকল্পনা",
    title: "ন্যাশনাল হাউজিং কোটিপতি স্কিম",
    subtitle:
      "নিয়মিত ও সাশ্রয়ী মাসিক কিস্তিতে চক্রবৃদ্ধি মুনাফায় ১ কোটি টাকার কাঙ্ক্ষিত আর্থিক তহবিল গড়ে তুলুন।",
    ctaPrimary: "কোটিপতি স্কিম খুলুন",
    ctaPrimaryLink: "/deposits/10",
    ctaSecondary: "আমানত স্কিমসমূহ",
    ctaSecondaryLink: "/deposits",
    stat: "১.০০ কোটি ৳",
    statLabel: "মেয়াদপূর্তির লক্ষ্য তহবিল",
    accentColor: "text-amber-400",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    badge: "প্রবাসী বাংলাদেশী (এনআরবি) সেবা",
    title: "বিদেশ থেকেও গড়ে তুলুন স্বদেশের নিজস্ব ঠিকানা",
    subtitle:
      "উত্তর আমেরিকা, ইউরোপ, মধ্যপ্রাচ্য ও এশিয়ায় অবস্থানরত প্রবাসীদের জন্য বিশেষ হোম লোন ও আইনি সহায়তা সুবিধা।",
    ctaPrimary: "প্রবাসী গৃহঋণ",
    ctaPrimaryLink: "/loans/13",
    ctaSecondary: "অনলাইন আবেদন",
    ctaSecondaryLink: "/apply",
    stat: "গ্লোবাল এনআরবি",
    statLabel: "ডিজিটাল আবেদন প্রক্রিয়া",
    accentColor: "text-sky-400",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    badge: "ইসলামিক ব্যাংকিং উইং",
    title: "১০০% শরীয়াহসম্মত ইসলামী আর্থিক সেবা",
    subtitle:
      "সুদবিহীন মুদারাবা মুনাফা বণ্টনমূলক আমানত এবং এইচপিএসএম গৃহ বিনিয়োগ, যা শরীয়াহ সুপারভাইজরি কমিটি দ্বারা অনুমোদিত।",
    ctaPrimary: "ইসলামিক উইং দেখুন",
    ctaPrimaryLink: "/islamic",
    ctaSecondary: "শরীয়াহ কমিটি",
    ctaSecondaryLink: "/islamic#shariah",
    stat: "হালাল ও বিশুদ্ধ",
    statLabel: "সুদমুক্ত শরীয়াহ সনদ",
    accentColor: "text-emerald-400",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HeroSlider() {
  const { lang } = useLanguage();
  const slides = lang === "bn" ? slidesBn : slidesEn;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <>
      <section
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative overflow-hidden bg-nhfil-navy-deep min-h-[580px] lg:min-h-[640px] flex items-center"
      >
        {/* Background Optimized Image with Layered Gradient */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={slide.image}
            alt={slide.title}
            fill
            priority={currentSlide === 0}
            sizes="100vw"
            className="object-cover opacity-25 scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nhfil-navy-deep via-nhfil-navy/95 to-nhfil-navy/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{slide.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href={slide.ctaPrimaryLink}
                  className="px-6 py-3.5 rounded-xl bg-nhfil-blue hover:bg-nhfil-blue-600 text-white font-bold text-sm shadow-xl shadow-nhfil-blue/30 hover:shadow-2xl transition-all flex items-center space-x-2 group"
                >
                  <span>{slide.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={slide.ctaSecondaryLink}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-sm transition-all flex items-center space-x-2"
                >
                  <Calculator className="w-4 h-4 text-nhfil-blue" />
                  <span>{slide.ctaSecondary}</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300/80 border-t border-white/10">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Licensed under Bangladesh Bank FI Act 1993</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-nhfil-blue" />
                  <span>A+ Credit Rating (CRAB / CRISL)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>25+ Years Serving Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Right Card Metric */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-full max-w-sm rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl text-white space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                      {lang === "bn" ? "প্রধান বৈশিষ্ট্য" : "Key Advantage"}
                    </span>
                    <div className={`text-4xl font-black font-heading mt-1 ${slide.accentColor}`}>
                      {slide.stat}
                    </div>
                    <p className="text-xs text-slate-300 mt-1">{slide.statLabel}</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-nhfil-blue" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                  <p className="text-xs text-slate-300 font-medium">
                    {lang === "bn" ? "দ্রুত কিস্তির পূর্বানুমান" : "Quick Calculator Estimate"}
                  </p>
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span>
                      {lang === "bn" ? "গৃহঋণ ৩০ লাখ ৳ @ ১৫ বছর" : "Home Loan ৳ 30 Lakh @ 15 Yrs"}
                    </span>
                    <span className="text-nhfil-blue">
                      {lang === "bn" ? "~ ৩০,৪২৮ ৳/মাস" : "~ ৳ 30,428/mo"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-3 bg-gradient-to-r from-nhfil-blue to-nhfil-blue-600 hover:from-nhfil-blue-600 hover:to-nhfil-navy text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all"
                >
                  {lang === "bn" ? "অনলাইনে সরাসরি আবেদন" : "Apply Online Now"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Navigation Dots & Arrows */}
        <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center space-x-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex space-x-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx ? "w-8 bg-nhfil-blue" : "w-2 bg-white/30"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
}

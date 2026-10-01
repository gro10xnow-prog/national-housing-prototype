import React from "react";
import { Star, Quote, CheckCircle2, MapPin } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Engr. Tanvir Morshed",
      location: "Uttara, Dhaka",
      loanType: "Flat Purchase Loan",
      quote:
        "Buying an apartment in Dhaka can be overwhelming with paperwork. The NHFIL Uttara branch team guided me through title deed verification, municipal clearances, and fast sanction within 8 working days.",
      rating: 5,
    },
    {
      name: "Dr. Farzana Yasmin",
      location: "Nasirabad, Chattogram",
      loanType: "SONIRVOR NARI & Home Loan",
      quote:
        "As a female medical practitioner, finding an NBFI that treats women entrepreneurs with genuine dignity and competitive rates was refreshing. NHFIL financed both my clinic diagnostic room and residence.",
      rating: 5,
    },
    {
      name: "Khandaker Rafiqul Islam",
      location: "Bogura Town",
      loanType: "National Housing Kotipoti Scheme",
      quote:
        "I started a Kotipoti Scheme 10 years ago with manageable monthly savings. The compound return transparency and prompt branch customer service gave me total peace of mind.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Stories of Homeownership & Trust
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Thousands of families, business owners, and expatriates have realized their lifelong property and wealth milestones with National Housing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="w-8 h-8 text-nhfil-blue/20 absolute right-6 top-6" />

              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <h4 className="text-sm font-bold text-slate-900 font-heading">{t.name}</h4>
                <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{t.location}</span>
                  </span>
                  <span className="font-semibold text-nhfil-blue">{t.loanType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

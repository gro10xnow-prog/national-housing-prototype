import React from "react";
import Link from "next/link";
import {
  Building2,
  Calendar,
  Award,
  ShieldCheck,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Users,
  ChevronRight
} from "lucide-react";

export default function CompanyProfilePage() {
  const milestones = [
    { year: "August 1998", event: "Incorporated as a Public Limited Company under the Companies Act 1994." },
    { year: "December 1998", event: "Obtained formal NBFI operating license from Bangladesh Bank under Financial Institutions Act 1993." },
    { year: "2008", event: "Initial Public Offering (IPO) successfully floated to general investors and listed on DSE and CSE." },
    { year: "2023", event: "Celebrated 25 Years of Excellence in specialized home mortgage and institutional financing." },
    { year: "Present", event: "Operating 9 strategic regional branches with thousands of satisfied homeowners nationwide." },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-nhfil-blue">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Company Profile</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Corporate Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Company Profile & History
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            National Housing Finance PLC &bull; Pioneering housing finance and sustainable wealth generation in Bangladesh since 1998.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-6 text-slate-700 leading-relaxed text-justify text-sm sm:text-base">
          <p>
            <strong>National Housing Finance PLC</strong> is a private sector housing finance company incorporated in <strong>August 1998</strong> as a public limited company under the Companies Act 1994. The Company obtained license from Bangladesh Bank under the Financial Institutions Act, 1993 in <strong>December 1998</strong>.
          </p>

          <p>
            The main objectives of the Company are to carry on the business of financing the acquisition, construction, development and purchase of houses, plots, apartments, real estates, commercial spaces etc. with a view to providing finance for peoples&apos; basic need for shelter, enhance the housing stock of the country, and promote affordable home ownership.
          </p>

          <p>
            In addition to specialized housing mortgage loans, NHFIL is actively involved in accepting term deposits and savings schemes, SME financing, Project financing, Lease financing, and Term loan facilities to corporate and commercial clients. Our lease financing facility empowers industries to procure capital machinery, industrial generators, medical equipment, and commercial vehicles without straining operational liquidity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 not-prose">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs uppercase font-bold text-slate-500">Authorized Capital</span>
              <p className="text-xl sm:text-2xl font-black text-nhfil-navy mt-1">BDT 2,000 Million</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs uppercase font-bold text-slate-500">Paid-up Capital</span>
              <p className="text-xl sm:text-2xl font-black text-nhfil-blue mt-1">BDT 1,170.31 Million</p>
            </div>
          </div>

          <p>
            NHFIL floated its shares in 2008 to general investors through an Initial Public Offering (IPO) and is listed with the <strong>Dhaka Stock Exchange Limited (DSE)</strong> and <strong>Chittagong Stock Exchange Limited (CSE)</strong>. The Company operates with <strong>Nine (9) branches</strong> covering Dhaka, Chattogram, Bogura, Rangpur, Gazipur, Feni, and Rajshahi districts.
          </p>
        </div>

        {/* Milestone Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-heading">
            Key Corporate Milestones
          </h2>
          <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 pl-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative space-y-1">
                <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-nhfil-blue border-2 border-white ring-2 ring-nhfil-blue/20" />
                <span className="text-xs font-bold uppercase tracking-wider text-nhfil-blue">
                  {m.year}
                </span>
                <p className="text-sm font-semibold text-slate-800">{m.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <Link
            href="/mission-vision"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-nhfil-blue hover:shadow-card-hover transition-all text-center group"
          >
            <ShieldCheck className="w-8 h-8 text-nhfil-blue mx-auto mb-2" />
            <h3 className="font-bold text-slate-900 group-hover:text-nhfil-blue">Mission & Vision</h3>
            <p className="text-xs text-slate-500 mt-1">Our ethical values & purpose</p>
          </Link>

          <Link
            href="/board-of-directors"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-nhfil-blue hover:shadow-card-hover transition-all text-center group"
          >
            <Users className="w-8 h-8 text-nhfil-blue mx-auto mb-2" />
            <h3 className="font-bold text-slate-900 group-hover:text-nhfil-blue">Board of Directors</h3>
            <p className="text-xs text-slate-500 mt-1">Honorable leadership & bios</p>
          </Link>

          <Link
            href="/location"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-nhfil-blue hover:shadow-card-hover transition-all text-center group"
          >
            <MapPin className="w-8 h-8 text-nhfil-blue mx-auto mb-2" />
            <h3 className="font-bold text-slate-900 group-hover:text-nhfil-blue">Branch Network (9)</h3>
            <p className="text-xs text-slate-500 mt-1">Locate offices across Bangladesh</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

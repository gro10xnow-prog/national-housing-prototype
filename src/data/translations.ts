export type Language = "en" | "bn";

export interface Translations {
  topbar: {
    hotline: string;
    licensing: string;
    dseLabel: string;
    calculator: string;
    notices: string;
    rates: string;
    downloads: string;
    complain: string;
  };
  nav: {
    home: string;
    aboutUs: string;
    loans: string;
    deposits: string;
    islamicWing: string;
    calculators: string;
    investorRelations: string;
    locateUs: string;
    applyOnline: string;
    callNow: string;
  };
  quickServices: {
    badge: string;
    title: string;
    subtitle: string;
    homeLoansTitle: string;
    homeLoansDesc: string;
    kotipotiTitle: string;
    kotipotiDesc: string;
    islamicTitle: string;
    islamicDesc: string;
    calcTitle: string;
    calcDesc: string;
    branchesTitle: string;
    branchesDesc: string;
  };
  common: {
    viewDetails: string;
    calculateEmi: string;
    applyNow: string;
    applyOnline: string;
    openScheme: string;
    learnMore: string;
    popular: string;
    tenure: string;
    rate: string;
    financing: string;
    years: string;
    months: string;
    searchPlaceholder: string;
    all: string;
  };
  footer: {
    brandTagline: string;
    colLoans: string;
    colDeposits: string;
    colIslamic: string;
    colGovernance: string;
    rightsReserved: string;
    headOfficeTitle: string;
    corporateOfficeTitle: string;
    helpDeskTitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    topbar: {
      hotline: "+88 09609 200555",
      licensing: "Bangladesh Bank FI-08 • A+ Credit Rated",
      dseLabel: "DSE:",
      calculator: "EMI Calculator",
      notices: "Notice Board",
      rates: "Rates",
      downloads: "Downloads",
      complain: "Complain Cell",
    },
    nav: {
      home: "Home",
      aboutUs: "About Us",
      loans: "Loans",
      deposits: "Deposits",
      islamicWing: "Islamic Wing",
      calculators: "Calculators",
      investorRelations: "Investor Relations",
      locateUs: "Locate Us",
      applyOnline: "Apply Online",
      callNow: "Call Hotline",
    },
    quickServices: {
      badge: "Quick Portals & Solutions",
      title: "Direct Gateway to Our Key Financial Facilities",
      subtitle: "Instant navigation to our most in-demand home financing products, high-yield deposit schemes, and digital advisory tools.",
      homeLoansTitle: "Home Mortgage Loans",
      homeLoansDesc: "Up to 70% financing for flat purchase, building, and plot acquisition.",
      kotipotiTitle: "Kotipoti Scheme",
      kotipotiDesc: "Accumulate BDT 1 Crore through disciplined compounding savings.",
      islamicTitle: "Shariah Islamic Wing",
      islamicDesc: "100% Riba-free HPSM home financing and Mudaraba term deposits.",
      calcTitle: "Interactive EMI Calc",
      calcDesc: "Simulate monthly installments, amortizations, and Kotipoti maturity.",
      branchesTitle: "9 Branch Locations",
      branchesDesc: "Direct customer service in Dhaka, Chattogram, Bogura, and Rangpur.",
    },
    common: {
      viewDetails: "View Details",
      calculateEmi: "Calculate EMI",
      applyNow: "Apply Now",
      applyOnline: "Apply Online Now",
      openScheme: "Open Scheme",
      learnMore: "Learn More",
      popular: "Popular",
      tenure: "Tenure",
      rate: "Rate",
      financing: "Financing",
      years: "Years",
      months: "Months",
      searchPlaceholder: "Search by keyword...",
      all: "All",
    },
    footer: {
      brandTagline:
        "National Housing Finance PLC is a leading Non-Banking Financial Institution (NBFI) incorporated in 1998, licensed by Bangladesh Bank, and listed on the Dhaka & Chittagong Stock Exchanges.",
      colLoans: "Loans & Mortgages",
      colDeposits: "Savings & Deposits",
      colIslamic: "Islamic Wing",
      colGovernance: "Governance & Notices",
      rightsReserved: "National Housing Finance PLC. All rights reserved.",
      headOfficeTitle: "Registered Head Office",
      corporateOfficeTitle: "Corporate Head Office",
      helpDeskTitle: "Customer Care & Hotline",
    },
  },
  bn: {
    topbar: {
      hotline: "+৮৮ ০৯৬০৯ ২০০৫৫৫",
      licensing: "বাংলাদেশ ব্যাংক এফআই-০৮ • এ+ ক্রেডিট রেটিং প্রাপ্ত",
      dseLabel: "ডিএসই:",
      calculator: "ইএমআই ক্যালকুলেটর",
      notices: "নোটিশ বোর্ড",
      rates: "সুদের হার",
      downloads: "ডাউনলোড",
      complain: "অভিযোগ সেল",
    },
    nav: {
      home: "হোম",
      aboutUs: "আমাদের পরিচিতি",
      loans: "ঋণ সুবিধাসমূহ",
      deposits: "আমানত স্কিম",
      islamicWing: "ইসলামিক উইং",
      calculators: "ক্যালকুলেটর",
      investorRelations: "বিনিয়োগকারী তথ্য",
      locateUs: "শাখা সমূহ",
      applyOnline: "অনলাইনে আবেদন",
      callNow: "হটলাইন কল",
    },
    quickServices: {
      badge: "দ্রুত সেবা ও পোর্টাল",
      title: "আমাদের প্রধান আর্থিক সেবাসমূহের সরাসরি গেটওয়ে",
      subtitle: "আবাসন গৃহঋণ, উচ্চ মুনাফার আমানত স্কিম এবং ডিজিটাল আর্থিক পরামর্শক টুলের তাৎক্ষণিক সেবা।",
      homeLoansTitle: "গৃহঋণ ও ফ্ল্যাট ক্রয়",
      homeLoansDesc: "ফ্ল্যাট ক্রয়, বাড়ি নির্মাণ ও প্লট অর্জনে ৭০% পর্যন্ত দীর্ঘমেয়াদী ঋণ সুবিধা।",
      kotipotiTitle: "কোটিপতি ডিপোজিট স্কিম",
      kotipotiDesc: "নিয়মিত সঞ্চয়ে চক্রবৃদ্ধি মুনাফায় ১ কোটি টাকা অর্জনের বিশ্বস্ত পরিকল্পনা।",
      islamicTitle: "শরীয়াহ ইসলামিক উইং",
      islamicDesc: "সম্পূর্ণ সুদবিহীন এইচপিএসএম বিনিয়োগ এবং মুদারাবা আমানত হিসাব।",
      calcTitle: "ইন্টারেক্টিভ ক্যালকুলেটর",
      calcDesc: "মাসিক কিস্তি (EMI), পরিশোধ তালিকা এবং কোটিপতি লক্ষ্যমাত্রা হিসাব করুন।",
      branchesTitle: "সারাদেশে ৯টি শাখা",
      branchesDesc: "ঢাকা, চট্টগ্রাম, গাজীপুর, বগুড়া, রংপুর এবং রাজশাহীতে শাখা সেবা।",
    },
    common: {
      viewDetails: "বিস্তারিত দেখুন",
      calculateEmi: "কিস্তি হিসাব করুন",
      applyNow: "আবেদন করুন",
      applyOnline: "অনলাইনে আবেদন করুন",
      openScheme: "হিসাব খুলুন",
      learnMore: "আরও জানুন",
      popular: "জনপ্রিয়",
      tenure: "মেয়াদ",
      rate: "হার",
      financing: "অর্থায়ন",
      years: "বছর",
      months: "মাস",
      searchPlaceholder: "কীওয়ার্ড দিয়ে অনুসন্ধান করুন...",
      all: "সকল",
    },
    footer: {
      brandTagline:
        "ন্যাশনাল হাউজিং ফাইন্যান্স পিএলসি ১৯৯৮ সালে প্রতিষ্ঠিত বাংলাদেশ ব্যাংক অনুমোদিত একটি শীর্ষস্থানীয় আর্থিক প্রতিষ্ঠান, যা ঢাকা ও চট্টগ্রাম স্টক এক্সচেঞ্জে তালিকাভুক্ত।",
      colLoans: "ঋণ ও মর্টগেজ",
      colDeposits: "আমানত ও সঞ্চয়",
      colIslamic: "ইসলামিক উইং",
      colGovernance: "সুশাসন ও নোটিশ",
      rightsReserved: "ন্যাশনাল হাউজিং ফাইন্যান্স পিএলসি। সর্বস্বত্ব সংরক্ষিত।",
      headOfficeTitle: "নিবন্ধিত প্রধান কার্যালয়",
      corporateOfficeTitle: "কর্পোরেট প্রধান কার্যালয়",
      helpDeskTitle: "গ্রাহক সেবা ও হটলাইন",
    },
  },
};

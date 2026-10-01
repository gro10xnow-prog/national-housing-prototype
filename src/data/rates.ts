export interface RateItem {
  category: "home" | "sme" | "term" | "deposit" | "islamic";
  productName: string;
  minTenure: string;
  maxTenure: string;
  rateRange: string;
  effectiveDate: string;
  notes?: string;
}

export const interestRatesData: RateItem[] = [
  // Home Loans
  {
    category: "home",
    productName: "Flat / Apartment Purchase Loan",
    minTenure: "1 Year",
    maxTenure: "20 Years",
    rateRange: "9.50% - 10.50%",
    effectiveDate: "January 2026",
    notes: "Variable or 2-year fixed options available. Monthly reducing balance.",
  },
  {
    category: "home",
    productName: "Self Construction / Building Construction",
    minTenure: "1 Year",
    maxTenure: "20 Years",
    rateRange: "9.75% - 10.75%",
    effectiveDate: "January 2026",
    notes: "Stage-wise disbursement based on civil engineer milestone certificates.",
  },
  {
    category: "home",
    productName: "Non-Resident Bangladeshi (NRB) Home Financing",
    minTenure: "1 Year",
    maxTenure: "20 Years",
    rateRange: "9.50% - 10.50%",
    effectiveDate: "January 2026",
    notes: "Exclusively for expatriates remitting through legal banking channels.",
  },
  {
    category: "home",
    productName: "Home Renovation & Extension Loan",
    minTenure: "1 Year",
    maxTenure: "10 Years",
    rateRange: "10.00% - 11.00%",
    effectiveDate: "January 2026",
    notes: "Quick appraisal for existing homeowner refurbishments.",
  },
  {
    category: "home",
    productName: "Housing Plot Purchase Loan",
    minTenure: "1 Year",
    maxTenure: "15 Years",
    rateRange: "10.50% - 11.50%",
    effectiveDate: "January 2026",
    notes: "For approved RAJUK, CDA, KDA, RDA, or private approved housing schemes.",
  },

  // SME Finance
  {
    category: "sme",
    productName: "SONIRVOR NARI (Women Entrepreneurs)",
    minTenure: "1 Year",
    maxTenure: "5 Years",
    rateRange: "7.00% - 8.00%",
    effectiveDate: "January 2026",
    notes: "Special subsidized Bangladesh Bank refinancing facility.",
  },
  {
    category: "sme",
    productName: "SONIRVOR (Small Enterprise Loan)",
    minTenure: "1 Year",
    maxTenure: "5 Years",
    rateRange: "10.50% - 12.00%",
    effectiveDate: "January 2026",
    notes: "Working capital and equipment loans for verified retail/trade operations.",
  },
  {
    category: "sme",
    productName: "JICA Two-Step Safety & Efficiency Facility",
    minTenure: "3 Years",
    maxTenure: "10 Years",
    rateRange: "6.00% - 7.50%",
    effectiveDate: "January 2026",
    notes: "Low-cost development fund for fire, electrical & building safety upgrades.",
  },

  // Term & Lease
  {
    category: "term",
    productName: "Lease Finance (Machinery & Vehicles)",
    minTenure: "2 Years",
    maxTenure: "5 Years",
    rateRange: "11.00% - 12.50%",
    effectiveDate: "January 2026",
    notes: "For industrial generators, medical equipment, and commercial fleets.",
  },

  // Deposit Schemes
  {
    category: "deposit",
    productName: "Term Deposit Receipt (TDR) - 3 Months",
    minTenure: "3 Months",
    maxTenure: "3 Months",
    rateRange: "8.50% p.a.",
    effectiveDate: "January 2026",
    notes: "Quarterly compounding interest payout.",
  },
  {
    category: "deposit",
    productName: "Term Deposit Receipt (TDR) - 6 Months",
    minTenure: "6 Months",
    maxTenure: "6 Months",
    rateRange: "8.75% p.a.",
    effectiveDate: "January 2026",
    notes: "Quarterly compounding interest payout.",
  },
  {
    category: "deposit",
    productName: "Term Deposit Receipt (TDR) - 1 Year & Above",
    minTenure: "12 Months",
    maxTenure: "36 Months",
    rateRange: "9.25% - 9.75% p.a.",
    effectiveDate: "January 2026",
    notes: "Highest NBFI yield with premature overdraft eligibility.",
  },
  {
    category: "deposit",
    productName: "National Housing Kotipoti Scheme",
    minTenure: "5 Years",
    maxTenure: "20 Years",
    rateRange: "9.50% p.a. (Compounded)",
    effectiveDate: "January 2026",
    notes: "Target maturity BDT 1.00 Crore via monthly disciplined savings.",
  },
  {
    category: "deposit",
    productName: "Senior Citizen Special Term Deposit",
    minTenure: "1 Year",
    maxTenure: "3 Years",
    rateRange: "9.75% - 10.00% p.a.",
    effectiveDate: "January 2026",
    notes: "0.25% bonus rate for citizens aged 60+.",
  },

  // Islamic Wing
  {
    category: "islamic",
    productName: "HPSM Home & Apartment Investment",
    minTenure: "1 Year",
    maxTenure: "20 Years",
    rateRange: "9.50% - 10.25% (Profit Rent)",
    effectiveDate: "January 2026",
    notes: "Hire Purchase Shirkatul Melk (Co-ownership) certified Riba-free.",
  },
  {
    category: "islamic",
    productName: "Mudaraba Term Deposit (MTDR)",
    minTenure: "3 Months",
    maxTenure: "3 Years",
    rateRange: "Provisional 8.75% - 9.50%",
    effectiveDate: "January 2026",
    notes: "Profit sharing weightage ratio (PSR) declared semi-annually.",
  },
];

export interface IslamicProduct {
  id: string;
  category: "deposit" | "investment";
  categoryName: string;
  title: string;
  arabicConcept: string;
  tagline: string;
  description: string;
  features: string[];
  profitSharingRatio: string;
  tenure: string;
  shariahBasis: string;
}

export const islamicProducts: IslamicProduct[] = [
  // --- ISLAMIC DEPOSIT PRODUCTS (MUDARABA) ---
  {
    id: "mudaraba-term-deposit",
    category: "deposit",
    categoryName: "Islamic Term Deposits",
    title: "Mudaraba Term Deposit Receipt (MTDR)",
    arabicConcept: "Mudaraba (مضاربة)",
    tagline: "Shariah-compliant profit-sharing term deposits for ethical returns.",
    description: "Operated strictly under the Mudaraba partnership mode where the client acts as the 'Sahib-Al-Mal' (fund provider) and NHFIL acts as the 'Mudarib' (fund manager). Funds are exclusively deployed into halal investments, and earned profits are shared according to a pre-agreed Profit Sharing Ratio (PSR).",
    features: [
      "Strictly interest-free (Riba-free) verified by Shariah Supervisory Committee",
      "Tenures available: 3, 6, 12, 24, and 36 months",
      "Competitive provisional weightage and profit rates",
      "Auto-renewal facility on Shariah-compliant terms"
    ],
    profitSharingRatio: "Up to 85% to Depositor, 15% to Mudarib",
    tenure: "3 to 36 Months",
    shariahBasis: "Mudaraba Islamic Partnership Contract",
  },
  {
    id: "mudaraba-kotipoti-scheme",
    category: "deposit",
    categoryName: "Islamic Scheme Deposits",
    title: "Mudaraba Probable Kotipoti Scheme",
    arabicConcept: "Mudaraba (مضاربة)",
    tagline: "Achieve the BDT 1 Crore financial goal through ethical halal compounding.",
    description: "An ethical path to building a BDT 1.00 Crore corpus via disciplined monthly Mudaraba deposits, free from conventional usury and invested solely in productive halal industries.",
    features: [
      "Target corpus: BDT 1.00 Crore",
      "Tenures: 5 to 20 years",
      "Profit calculated monthly on daily product basis and credited semi-annually",
      "Shariah-approved investment deployment"
    ],
    profitSharingRatio: "85:15 (Depositor : NHFIL)",
    tenure: "5 to 20 Years",
    shariahBasis: "Mudaraba Muqayyada",
  },
  {
    id: "mudaraba-hajj-scheme",
    category: "deposit",
    categoryName: "Islamic Scheme Deposits",
    title: "Mudaraba Hajj Deposit Scheme",
    arabicConcept: "Mudaraba (مضاربة)",
    tagline: "Systematically fulfill your sacred pilgrimage obligation with halal earnings.",
    description: "Designed to assist Muslims in planning and funding Holy Hajj and Umrah pilgrimages through regular monthly installments, safeguarding religious intentions with pure halal profit.",
    features: [
      "Tenures: 1 to 10 years matching your planned pilgrimage year",
      "Priority assistance with registered Hajj agencies upon maturity",
      "Zero account maintenance fees as an act of service"
    ],
    profitSharingRatio: "85:15 (Depositor : NHFIL)",
    tenure: "1 to 10 Years",
    shariahBasis: "Mudaraba with specific ethical intent",
  },
  {
    id: "mudaraba-monthly-saving",
    category: "deposit",
    categoryName: "Islamic Scheme Deposits",
    title: "Mudaraba Monthly Savings Scheme (MMSS)",
    arabicConcept: "Mudaraba (مضاربة)",
    tagline: "Monthly halal savings for family welfare and security.",
    description: "The Islamic alternative to conventional MSS. Save monthly installments in small denominations and earn halal profit distributions certified by our Shariah scholars.",
    features: [
      "Installments from BDT 1,000 to BDT 50,000",
      "Tenures: 3, 5, 8, and 10 years",
      "Compounded monthly profit attribution"
    ],
    profitSharingRatio: "80:20 (Depositor : NHFIL)",
    tenure: "3 to 10 Years",
    shariahBasis: "Mudaraba Partnership",
  },

  // --- ISLAMIC INVESTMENT & FINANCING (HPSM) ---
  {
    id: "hpsm-home-investment",
    category: "investment",
    categoryName: "Islamic Home Financing",
    title: "HPSM - Apartment & Home Purchase",
    arabicConcept: "Hire Purchase under Shirkatul Melk (HPSM)",
    tagline: "Co-own and buy your residential apartment through Islamic partnership.",
    description: "Under HPSM, NHFIL and the customer jointly purchase the property as partners (Shirkatul Melk). NHFIL rents its proportionate undivided share to the customer (Ijara), while the customer gradually purchases NHFIL's share in monthly units until full ownership is transferred.",
    features: [
      "Financing up to 70% of total property purchase price",
      "Tenure up to 20 years",
      "Completely Riba-free lease rental and equity buyout mechanism",
      "No hidden compounding interest or unfair penal levies"
    ],
    profitSharingRatio: "Fixed rental rate based on agreed valuation",
    tenure: "Up to 20 Years",
    shariahBasis: "Shirkatul Melk (Co-ownership) & Ijara (Lease)",
  },
  {
    id: "hpsm-self-construction",
    category: "investment",
    categoryName: "Islamic Home Financing",
    title: "HPSM - House Construction & Renovation",
    arabicConcept: "Hire Purchase under Shirkatul Melk & Istisna",
    tagline: "Construct your dream home on your land through halal Islamic financing.",
    description: "Finance the construction or complete structural renovation of your residential property on your own freehold land in full harmony with Islamic jurisprudence.",
    features: [
      "Stage-wise disbursement matched with certified construction progress",
      "Tenure up to 20 years",
      "Transparent rental payments starting only after completion"
    ],
    profitSharingRatio: "Rental determined upon valuation",
    tenure: "Up to 20 Years",
    shariahBasis: "Istisna followed by HPSM",
  },
  {
    id: "hpsm-commercial-investment",
    category: "investment",
    categoryName: "Islamic Commercial Financing",
    title: "HPSM - Commercial Building & Machinery",
    arabicConcept: "Hire Purchase under Shirkatul Melk (HPSM)",
    tagline: "Halal financing for commercial spaces, industrial plants, and capital machinery.",
    description: "Enables businesses and entrepreneurs to procure industrial machinery, commercial transport, and corporate office spaces through Shariah-compliant asset co-ownership.",
    features: [
      "Financing up to 80% of machinery invoice value",
      "Tenures: 2 to 7 years",
      "Direct asset verification by Islamic banking inspection team"
    ],
    profitSharingRatio: "Asset lease rate agreed upfront",
    tenure: "2 to 7 Years",
    shariahBasis: "HPSM / Ijara wa Iqtina",
  },
];

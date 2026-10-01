export interface LoanProduct {
  id: string;
  category: "home" | "term" | "sme";
  categoryName: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  maxTenureYears: number;
  maxFinancingPercent: number;
  indicativeRate: number;
  minAmountBDT: number;
  maxAmountBDT: number;
  eligibility: string[];
  security: string[];
  salariedDocs: string[];
  businessDocs: string[];
  otherDocs: string[];
  image: string;
  popular?: boolean;
}

export const loanProducts: LoanProduct[] = [
  // --- HOME MORTGAGE LOANS ---
  {
    id: "5",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "Flat Purchase Loan",
    tagline: "Realize your dream of owning your desired apartment in urban Bangladesh.",
    description: "NHFIL helps realize your dream of owning your desired Apartment. Flat Purchase Loan will support you to buy apartments in Dhaka, Gazipur, Chittagong, Feni, Rajshahi, Bogura, and Rangpur with flexible tenures and competitive profit rates.",
    highlights: [
      "Up to 70% of total property value financed",
      "Flexible repayment tenure up to 20 years",
      "Competitive fixed and semi-variable interest rates",
      "Early settlement & partial payment facilities",
      "Prompt processing with dedicated relationship managers"
    ],
    maxTenureYears: 20,
    maxFinancingPercent: 70,
    indicativeRate: 9.5,
    minAmountBDT: 1000000,
    maxAmountBDT: 25000000,
    eligibility: [
      "Age: Minimum 24 years, maximum 60 years at loan maturity",
      "Bangladeshi citizen residing locally or abroad (NRB)",
      "Regular earning from a sustainable employment or business",
      "Minimum 2 years of continuous work experience or 3 years of business operations"
    ],
    security: [
      "Registered first mortgage of the flat/apartment with registered power of attorney",
      "Personal guarantee of spouse or acceptable guarantor"
    ],
    salariedDocs: [
      "Employment Certificate stating designation and length of service",
      "Latest salary slip or salary certificate showing all deductions",
      "Updated CV / Bio-data and National ID card copy",
      "Bank statement for the last 12 months reflecting salary credits"
    ],
    businessDocs: [
      "Valid Trade License of the business for the last 3 years",
      "Copies of Tax Returns and assessment orders for the last 3 years",
      "Audited Balance Sheet & Profit & Loss statements for last 3 years",
      "Bank statement of business and personal accounts for last 12 months"
    ],
    otherDocs: [
      "Allotment letter or Sale Agreement with developer",
      "Approved building plan from RAJUK / CDA / RDA / City Corporation",
      "Copy of Title Deed and Mutation Porcha"
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: "11",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "Self Construction Loan",
    tagline: "Build your dream home on your freehold land at your own pace.",
    description: "NHFIL helps you build your dream house on your own land. Self Construction loan supports you to construct modern residential houses, multi-story buildings, or independent duplexes with phased disbursement matching your construction stages.",
    highlights: [
      "Stage-wise disbursements aligned with construction milestones",
      "Tenure up to 20 years",
      "Financing up to 70% of estimated construction budget",
      "Technical guidance on construction estimation"
    ],
    maxTenureYears: 20,
    maxFinancingPercent: 70,
    indicativeRate: 9.75,
    minAmountBDT: 1500000,
    maxAmountBDT: 30000000,
    eligibility: [
      "Age: 24 to 60 years",
      "Clear, marketable ownership of the land free from legal encumbrance",
      "Demonstrated repayment capacity through business or employment"
    ],
    security: [
      "Registered mortgage of the freehold land and proposed structure",
      "Original title documents deposited with NHFIL"
    ],
    salariedDocs: [
      "Proof of employment, salary certificate, and 12-month bank statements",
      "Architectural design and RAJUK / local municipal approval"
    ],
    businessDocs: [
      "Trade license, TIN, IT returns for 3 years, 12-month business bank statements"
    ],
    otherDocs: [
      "Approved building plan and approved structural estimate from certified engineer",
      "Original CS, SA, RS, BS Porchas, Mutation, and DCR"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: "12",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "Group Home Loan",
    tagline: "Empowering groups, colleagues, and families to co-purchase and build.",
    description: "The price of land in Dhaka and major cities is challenging for individuals. NHFIL's Group Home Loan empowers groups of colleagues, professionals, or relatives to collectively acquire land and build customized apartment complexes together.",
    highlights: [
      "Tailored for groups of 4 to 20 co-owners",
      "Joint land purchase and multi-unit construction financing",
      "Independent individual loans allocated per apartment unit",
      "Tenures up to 20 years"
    ],
    maxTenureYears: 20,
    maxFinancingPercent: 70,
    indicativeRate: 9.5,
    minAmountBDT: 2000000,
    maxAmountBDT: 50000000,
    eligibility: [
      "Co-borrowers must have documented regular income and mutual formal agreement",
      "Ages 24 to 60 years"
    ],
    security: [
      "Joint mortgage of total land undivided proportionate share per member"
    ],
    salariedDocs: ["Standard salaried documentation for each participating member"],
    businessDocs: ["Standard business verification for self-employed members"],
    otherDocs: ["Group memorandum / mutual agreement and master architectural plan"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "13",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "NRB Home Financing Scheme",
    tagline: "Dedicated mortgage financing for Non-Resident Bangladeshis worldwide.",
    description: "Designed exclusively for non-resident Bangladeshis working across North America, Europe, the Middle East, and Asia-Pacific. Secure an asset back home with transparent documentation, attorney handling, and remittance-based repayment.",
    highlights: [
      "Apply from anywhere in the world through digital processing",
      "Repayment via foreign remittance accounts with attractive profit terms",
      "Designate a local attorney or power of attorney holder in Bangladesh",
      "Financing up to BDT 2.5 Crore"
    ],
    maxTenureYears: 15,
    maxFinancingPercent: 70,
    indicativeRate: 9.25,
    minAmountBDT: 1500000,
    maxAmountBDT: 25000000,
    eligibility: [
      "Bangladeshi citizens residing and legally working abroad for at least 3 years",
      "Valid work permit/visa and embassy-attested papers"
    ],
    security: [
      "Registered first charge mortgage on the property purchased in Bangladesh"
    ],
    salariedDocs: [
      "Valid passport, work permit/visa, employment contract",
      "Salary slips attested by Bangladesh Embassy / High Commission or bank verification",
      "Foreign bank statement of 12 months showing salary credits"
    ],
    businessDocs: [
      "Foreign trade license or company registration, overseas bank statements"
    ],
    otherDocs: [
      "Registered Power of Attorney executed and endorsed by the Ministry of Foreign Affairs"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: "14",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "Renovation & Remodeling Loan",
    tagline: "Upgrade, modernize, and furnish your existing home or apartment.",
    description: "NHFIL helps you decorate and modernize your existing residential home or apartment. Whether remodeling kitchens, upgrading interiors, replacing fixtures, or adding floor extensions, our Renovation Loan offers swift approval and easy terms.",
    highlights: [
      "Loan amount based on interior design estimates",
      "Tenure up to 10 years",
      "Financing up to BDT 50 Lakhs",
      "Fast processing within 5-7 working days"
    ],
    maxTenureYears: 10,
    maxFinancingPercent: 80,
    indicativeRate: 10.0,
    minAmountBDT: 500000,
    maxAmountBDT: 5000000,
    eligibility: [
      "Homeowners holding existing clear title or clean mortgage status",
      "Regular verifiable income source"
    ],
    security: [
      "Mortgage of the property being renovated or lien on financial securities"
    ],
    salariedDocs: ["Income documents, 12 months bank statements, ownership deeds"],
    businessDocs: ["Business trade license, 12 months bank statements"],
    otherDocs: ["Detailed renovation cost estimate and interior renovation proposal"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "15",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "Housing Plot Purchase Loan",
    tagline: "Secure residential land plots in approved city developer zones.",
    description: "Finance the purchase of demarcated residential plots in approved government or private housing projects across Dhaka, Chattogram, and major divisional cities.",
    highlights: [
      "Financing up to 50% of the recognized plot purchase price",
      "Tenure up to 15 years",
      "Valid for approved housing schemes (e.g. RAJUK, Bashundhara, Purbachal)"
    ],
    maxTenureYears: 15,
    maxFinancingPercent: 50,
    indicativeRate: 10.25,
    minAmountBDT: 1000000,
    maxAmountBDT: 20000000,
    eligibility: ["Citizens aged 24 to 60 with stable business or corporate tenure"],
    security: ["Registered mortgage of the acquired residential plot"],
    salariedDocs: ["12-month bank statements, employment letter, NID"],
    businessDocs: ["Trade license, TIN certificates, 3-year financial track record"],
    otherDocs: ["Allotment papers, site map, and project approval from authorities"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "16",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "Commercial Space Purchase Loan",
    tagline: "Acquire offices, retail outlets, and commercial floors.",
    description: "Support for doctors, lawyers, chartered accountants, IT firms, and businesses to purchase dedicated commercial offices, chambers, and business spaces.",
    highlights: [
      "Tenure up to 15 years",
      "Financing up to 60% of commercial asset valuation",
      "Tailored for both corporate entities and self-employed professionals"
    ],
    maxTenureYears: 15,
    maxFinancingPercent: 60,
    indicativeRate: 10.5,
    minAmountBDT: 2000000,
    maxAmountBDT: 40000000,
    eligibility: ["Established businesses with minimum 3 years of commercial track record"],
    security: ["Mortgage of the commercial property being purchased"],
    salariedDocs: ["Professional practice certificates, bank statements"],
    businessDocs: ["Audited financial reports, MOA/AOA, trade license, TIN"],
    otherDocs: ["Developer sale agreement and building commercial permits"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "17",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "Any Purpose Property Loan",
    tagline: "Unlock liquidity from your existing property for any personal need.",
    description: "Leverage your built residential or commercial real estate equity to fund children's overseas education, medical needs, business expansion, or personal capital requirements.",
    highlights: [
      "Flexible usage of funds without rigid end-use restrictions",
      "Up to 50% of the market value of your existing unencumbered property",
      "Tenure up to 10 years"
    ],
    maxTenureYears: 10,
    maxFinancingPercent: 50,
    indicativeRate: 11.0,
    minAmountBDT: 1000000,
    maxAmountBDT: 15000000,
    eligibility: ["Property owners with free title and verified repayment capacity"],
    security: ["Registered mortgage on the owned residential property"],
    salariedDocs: ["Proof of employment and income history"],
    businessDocs: ["Business credentials and bank cash flow records"],
    otherDocs: ["Property ownership documents and valuation report"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "18",
    category: "home",
    categoryName: "Home Mortgage Loans",
    title: "Real Estate Project Loan",
    tagline: "Syndicated and direct developer financing for residential projects.",
    description: "Structured project finance for reputable developers and construction entities to execute multi-unit residential apartment developments and modern communities.",
    highlights: [
      "Customized milestone disbursements",
      "Special developer terms and co-marketing agreements with NHFIL",
      "Comprehensive project appraisal by expert engineers"
    ],
    maxTenureYears: 5,
    maxFinancingPercent: 60,
    indicativeRate: 11.5,
    minAmountBDT: 10000000,
    maxAmountBDT: 100000000,
    eligibility: ["REHAB registered developers with proven delivery history"],
    security: ["First charge on project land and construction receivables"],
    salariedDocs: [],
    businessDocs: ["Company profiles, audit reports for 5 years, bank credit line certs"],
    otherDocs: ["RAJUK/CDA approvals, soil test, detailed architectural drawings"],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
  },

  // --- TERM LOANS ---
  {
    id: "19",
    category: "term",
    categoryName: "Term Loans",
    title: "Term Finance",
    tagline: "Long-term and medium-term liquidity for enterprise capital expansion.",
    description: "Medium to long-term funding solutions designed for corporate clients to facilitate capacity expansion, factory setup, infrastructure modernization, and operational growth.",
    highlights: [
      "Tenure: 1 to 5 years tailored to your company's cash flow",
      "Flexible amortization structures (monthly/quarterly)",
      "Competitive corporate financing rates"
    ],
    maxTenureYears: 5,
    maxFinancingPercent: 75,
    indicativeRate: 10.75,
    minAmountBDT: 5000000,
    maxAmountBDT: 100000000,
    eligibility: ["Corporates and enterprises with minimum 3 years of audited profitability"],
    security: ["Hypothecation of assets, corporate guarantee, mortgage of property"],
    salariedDocs: [],
    businessDocs: ["Audited accounts for 3 years, MOA, Board resolution, bank solvency"],
    otherDocs: ["Feasibility report and projected cash flows"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "20",
    category: "term",
    categoryName: "Term Loans",
    title: "Lease Finance",
    tagline: "Procure capital machinery, industrial equipment, and commercial vehicles.",
    description: "Lease finance facility offered to corporate and SME clients to procure capital machinery, factory equipment, industrial generators, medical diagnostic equipment, buses, and commercial transport without depleting working capital.",
    highlights: [
      "Tax efficiency through lease rental deductibility",
      "Direct asset financing up to 80% of invoice value",
      "Tenure matching asset depreciation cycles (2 to 5 years)",
      "Option to purchase equipment upon lease termination at salvage value"
    ],
    maxTenureYears: 5,
    maxFinancingPercent: 80,
    indicativeRate: 10.5,
    minAmountBDT: 2000000,
    maxAmountBDT: 50000000,
    eligibility: ["Industrial manufacturers, transport companies, and healthcare providers"],
    security: ["Ownership of leased equipment registered under NHFIL, personal guarantees"],
    salariedDocs: [],
    businessDocs: ["Proforma invoices of equipment, company credentials, bank history"],
    otherDocs: ["Technical catalog and installation viability specs"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },

  // --- SME FINANCE ---
  {
    id: "21",
    category: "sme",
    categoryName: "SME Finance",
    title: "SONIRVOR (Small Business Loan)",
    tagline: "Fueling the growth of thriving local entrepreneurs and retailers.",
    description: "Tailored for small enterprises to expand inventory, upgrade workshop machinery, or bridge seasonal working capital gaps with hassle-free collateral requirements.",
    highlights: [
      "Minimal documentation and simplified appraisal",
      "Repayment schedules synced with trade cycle",
      "Fast-track approval within 7 days"
    ],
    maxTenureYears: 3,
    maxFinancingPercent: 80,
    indicativeRate: 10.0,
    minAmountBDT: 500000,
    maxAmountBDT: 5000000,
    eligibility: ["Sole proprietors and partners in business for at least 2 years"],
    security: ["Hypothecation of trading stock, personal and third-party guarantees"],
    salariedDocs: [],
    businessDocs: ["Trade license, rent agreement of shop/factory, 1-year bank statement"],
    otherDocs: ["Supplier bills, stock valuation report"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: "22",
    category: "sme",
    categoryName: "SME Finance",
    title: "SONIRVOR NARI (Women Entrepreneurs)",
    tagline: "Concessional financing empowering women-led ventures and startups.",
    description: "Dedicated financing initiative providing subsidized interest rates and advisory support for women entrepreneurs heading trading, boutique, service, catering, and tech enterprises.",
    highlights: [
      "Concessionary interest rates backed by Bangladesh Bank refinance schemes",
      "Grace periods on initial repayments",
      "Complimentary financial literacy and accounting workshops"
    ],
    maxTenureYears: 5,
    maxFinancingPercent: 85,
    indicativeRate: 7.0,
    minAmountBDT: 300000,
    maxAmountBDT: 5000000,
    eligibility: ["Enterprise owned at least 51% by a female entrepreneur"],
    security: ["Personal guarantee, mortgage-free limits available for eligible sectors"],
    salariedDocs: [],
    businessDocs: ["Trade license in female proprietor's name, bank account statement"],
    otherDocs: ["National ID, business photographs, and enterprise description"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: "23",
    category: "sme",
    categoryName: "SME Finance",
    title: "JAGARON (Medium Enterprise Loan)",
    tagline: "Catalyzing expansion for manufacturing and technology enterprises.",
    description: "Comprehensive medium-enterprise financing package assisting manufacturing plants, packaging units, and IT service providers to expand footprint and meet larger contracts.",
    highlights: [
      "Loan limits up to BDT 2 Crore",
      "Flexible revolving or term loan formats",
      "Custom amortizations matching receivable cycles"
    ],
    maxTenureYears: 5,
    maxFinancingPercent: 75,
    indicativeRate: 10.5,
    minAmountBDT: 2000000,
    maxAmountBDT: 20000000,
    eligibility: ["Mid-sized registered firms with audited accounts for 2+ years"],
    security: ["Mortgage of factory/office property or machinery hypothecation"],
    salariedDocs: [],
    businessDocs: ["Audited balance sheets, TIN, VAT registration, 12 months bank records"],
    otherDocs: ["Work orders, client contracts, and inventory audit"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "24",
    category: "sme",
    categoryName: "SME Finance",
    title: "KRISTI (Cottage & Artisan Scheme)",
    tagline: "Preserving heritage and supporting cottage handloom and handicraft sectors.",
    description: "Micro-SME financing crafted for traditional artisans, pottery, handloom, jute goods producers, and cottage craftsmen throughout Bangladesh.",
    highlights: [
      "Low installment burden",
      "Fast local branch sanctioning",
      "Special seasonal working capital top-ups before Eid and festive seasons"
    ],
    maxTenureYears: 3,
    maxFinancingPercent: 90,
    indicativeRate: 8.5,
    minAmountBDT: 200000,
    maxAmountBDT: 1500000,
    eligibility: ["Artisans and micro producers with recognized craftsmanship"],
    security: ["Personal & community reference guarantees"],
    salariedDocs: [],
    businessDocs: ["Trade license or union parishad certification, NID"],
    otherDocs: ["Production sample verification"],
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "25",
    category: "sme",
    categoryName: "SME Finance",
    title: "SME for Agro Processing Industries",
    tagline: "Strengthening food security and agribusiness value chains.",
    description: "Financing modern food processing, cold storage, dairy, poultry, flour mills, seed packaging, and agricultural automation facilities across rural and peri-urban hubs.",
    highlights: [
      "Special refinance rate privileges under Bangladesh Bank Agro-Fund",
      "Seasonal moratorium options during harvesting periods",
      "Financing for modern cold storage equipment and refrigerated transport"
    ],
    maxTenureYears: 7,
    maxFinancingPercent: 80,
    indicativeRate: 7.5,
    minAmountBDT: 1000000,
    maxAmountBDT: 30000000,
    eligibility: ["Agro-processing units, cold chain operators, and registered dairy/fisheries"],
    security: ["Land & plant mortgage, hypothecation of stored agro commodities"],
    salariedDocs: [],
    businessDocs: ["Agro trade license, environmental clearance (if applicable), 2-year statements"],
    otherDocs: ["Storage capacity assessment, supply contracts"],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "26",
    category: "sme",
    categoryName: "SME Finance",
    title: "Loan under JICA Fund",
    tagline: "Low-cost concessionary funding under the Japan International Cooperation Agency.",
    description: "Specialized financial facility channeled through JICA funds to enhance environmental standards, energy efficiency, factory workplace safety, and building retrofitting in the manufacturing sector.",
    highlights: [
      "Extremely attractive subsidized interest rate",
      "Long repayment horizon up to 10 years",
      "Supports solar rooftop installations, fire safety upgrades, and effluent treatment (ETP)"
    ],
    maxTenureYears: 10,
    maxFinancingPercent: 85,
    indicativeRate: 6.5,
    minAmountBDT: 5000000,
    maxAmountBDT: 50000000,
    eligibility: ["Manufacturing export industries complying with JICA safety guidelines"],
    security: ["Corporate assets, first charge mortgage, JICA compliance covenants"],
    salariedDocs: [],
    businessDocs: ["JICA project proposal, environmental clearance, audited financials"],
    otherDocs: ["Safety audit certificate, equipment supplier warranties"],
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80",
  },
];

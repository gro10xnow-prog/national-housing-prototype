export interface DepositScheme {
  id: string;
  category: "fixed" | "scheme";
  categoryName: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  indicativeReturnRate: number;
  minDepositBDT: number;
  tenureOptions: string[];
  eligibility: string[];
  benefits: string[];
  requiredDocs: string[];
  popular?: boolean;
  image: string;
}

export const depositSchemes: DepositScheme[] = [
  // --- SCHEME DEPOSITS (MONTHLY / RECURRING) ---
  {
    id: "10",
    category: "scheme",
    categoryName: "Scheme Deposits",
    title: "National Housing Kotipoti Scheme",
    tagline: "Build a corpus of BDT 1.00 Crore (10 Million) with disciplined monthly savings.",
    description: "Anyone can realize the milestone of becoming a Kotipoti by opening a Kotipoti Scheme with NHFIL. Under this prestigious wealth-creation program, you will be the owner of BDT 1.00 (one) Crore upon completion of your selected tenure through convenient, affordable monthly contributions.",
    highlights: [
      "Guaranteed milestone target: BDT 1,00,00,000 (1 Crore)",
      "Flexible tenures from 5 years to 20 years",
      "Automatic standing instruction facility with all major scheduled banks",
      "Loan facility up to 90% against your accumulated deposit value",
      "Exemption from hidden account maintenance charges"
    ],
    indicativeReturnRate: 9.5,
    minDepositBDT: 15000,
    tenureOptions: ["5 Years", "8 Years", "10 Years", "12 Years", "15 Years", "20 Years"],
    eligibility: [
      "Any individual resident Bangladeshi aged 18 years or above",
      "Parents or legal guardians on behalf of minor children",
      "Non-Resident Bangladeshis (NRB) through remittance accounts"
    ],
    benefits: [
      "Highest compounding profit rate among leading NBFIs",
      "Emergency overdraft / loan facility without breaking your scheme",
      "Nominee protection and insurance coverage options",
      "Special priority queue for home loan applications upon maturity"
    ],
    requiredDocs: [
      "Duly completed Account Opening Form",
      "2 passport-sized photographs of applicant(s)",
      "Photocopy of National ID Card (NID) / Smart Card or Passport",
      "1 passport-sized photo & NID copy of designated Nominee",
      "Proof of address (recent utility bill copy)"
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "9",
    category: "scheme",
    categoryName: "Scheme Deposits",
    title: "Millionaire Scheme",
    tagline: "Become a Millionaire (BDT 10 Lakhs+) with flexible monthly installments.",
    description: "NHFIL Millionaire Scheme is a dedicated wealth-generation product designed to help middle-class professionals, businesspersons, and youths amass BDT 10,00,000 (Ten Lakhs) or more after a set horizon through structured monthly savings.",
    highlights: [
      "Target maturity corpus: BDT 10,00,000 to 50,00,000",
      "Tenure: 3, 5, 7, or 10 years",
      "Affordable monthly installments starting from BDT 4,500",
      "Loan against deposit available up to 90%"
    ],
    indicativeReturnRate: 9.25,
    minDepositBDT: 4500,
    tenureOptions: ["3 Years", "5 Years", "7 Years", "10 Years"],
    eligibility: [
      "Individual citizens of Bangladesh (Single or Joint accounts)",
      "Institutions, associations, and educational trust funds"
    ],
    benefits: [
      "Predictable return schedule protected from stock market volatility",
      "Simple automatic deductions via BEFTN/NPSB",
      "Enables down-payment readiness for future home acquisition"
    ],
    requiredDocs: [
      "Account Opening Form, 2 copies photo of applicant, NID / Passport, Nominee photo & NID"
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    category: "scheme",
    categoryName: "Scheme Deposits",
    title: "Monthly Savings Scheme (MSS)",
    tagline: "A proven, reliable monthly savings plan for families and working professionals.",
    description: "NHFIL's classic Monthly Savings Scheme (MSS) caters to every household's aspiration to secure future commitments—such as children's university fees, wedding arrangements, or purchasing residential plots.",
    highlights: [
      "Installment denominations: BDT 1,000, 2,500, 5,000, 10,000, 20,000 or multiples",
      "Flexible maturity tenures: 3, 5, 8, or 10 years",
      "Compounded returns with zero deposit forfeiture penalties on emergency exits"
    ],
    indicativeReturnRate: 9.0,
    minDepositBDT: 1000,
    tenureOptions: ["3 Years", "5 Years", "8 Years", "10 Years"],
    eligibility: ["All resident individuals and corporate payroll programs"],
    benefits: [
      "Builds resilient savings habits",
      "No penalty for occasional delayed installments within 60 days",
      "Direct credit to nominee upon maturity"
    ],
    requiredDocs: ["Applicant NID, 2 photos, Nominee NID & photo, e-TIN (if available)"],
    popular: true,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "1",
    category: "scheme",
    categoryName: "Scheme Deposits",
    title: "Housing Deposit Scheme",
    tagline: "Save today, and unlock 4X Home Loan facility tomorrow from NHFIL.",
    description: "A dual-benefit product: accumulate your down-payment through steady monthly deposits, and earn an exclusive entitlement to borrow up to 4 (four) times your accumulated savings as a preferential Home Loan from NHFIL upon maturity.",
    highlights: [
      "Direct pathway to homeownership",
      "Entitlement to 400% (4x) Home Loan facility based on matured balance",
      "Preferential home loan processing fee discount of 50%",
      "Tenure: 3, 5, or 7 years"
    ],
    indicativeReturnRate: 9.25,
    minDepositBDT: 5000,
    tenureOptions: ["3 Years", "5 Years", "7 Years"],
    eligibility: ["Aspiring apartment and home buyers across Bangladesh"],
    benefits: [
      "Guaranteed home loan appraisal priority upon completion",
      "Competitive compounding rates during the accumulation phase",
      "Dedicated mortgage advisory support throughout the tenure"
    ],
    requiredDocs: ["Applicant NID, photos, Nominee verification, income proof"],
    popular: true,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    category: "scheme",
    categoryName: "Scheme Deposits",
    title: "Mohila Savings Scheme",
    tagline: "Tailored exclusively for female depositors ensuring superior yields.",
    description: "Designed exclusively for women depositors to maximize financial independence, economic resilience, and secure higher returns on personal savings, household funds, or female entrepreneurial proceeds.",
    highlights: [
      "Higher profit margin (+0.25% premium above regular deposit rates)",
      "Complimentary locker facility discount (subject to branch availability)",
      "Installments from BDT 1,000 to BDT 50,000 per month",
      "Tenure: 2, 3, 5, or 7 years"
    ],
    indicativeReturnRate: 9.5,
    minDepositBDT: 1000,
    tenureOptions: ["2 Years", "3 Years", "5 Years", "7 Years"],
    eligibility: ["Female citizens of Bangladesh aged 18 and above"],
    benefits: [
      "Special female relationship manager desk",
      "90% loan entitlement against deposit for female-led businesses",
      "Full digital account tracking"
    ],
    requiredDocs: ["Female applicant NID, photos, Nominee NID and photo"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    category: "scheme",
    categoryName: "Scheme Deposits",
    title: "Education Pension Scheme",
    tagline: "Secure your child's higher education and medical/engineering milestones.",
    description: "For parents and guardians who wish to systematically save for their children's future university admission, overseas education, or professional coaching expenses with guaranteed payouts when needed.",
    highlights: [
      "Structured payout options coinciding with university entrance age",
      "Tenures: 5, 8, 10, or 12 years",
      "Bonus loyalty payout on completing full tenure without interruption"
    ],
    indicativeReturnRate: 9.25,
    minDepositBDT: 2000,
    tenureOptions: ["5 Years", "8 Years", "10 Years", "12 Years"],
    eligibility: ["Parents or legal guardians on behalf of minor children (age 0-16)"],
    benefits: [
      "Funds earmarked exclusively for educational goals",
      "Option to convert maturity into monthly educational pension stipends",
      "Exemption from premature closure fee for educational proof"
    ],
    requiredDocs: ["Parent/Guardian NID, child's digital birth certificate, photos"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },

  // --- FIXED DEPOSITS (LUMP SUM) ---
  {
    id: "6",
    category: "fixed",
    categoryName: "Fixed Deposits",
    title: "Term Deposit Receipt (TDR)",
    tagline: "Secure capital preservation with highest market yield and flexible maturity.",
    description: "NHFIL receives Fixed Term Deposits for tenures ranging from 3 months to 36 months, featuring automatic renewal options and top-tier credit rating security. Ideal for corporate liquidity, provident funds, and individual investors.",
    highlights: [
      "Tenures available: 3, 4, 5, 6, 9, 12, 15, 24, and 36 months",
      "Auto-renewal facility on maturity with compound rate protection",
      "Up to 90% instant overdraft / loan against deposit receipt",
      "Highest corporate credit safety standards (A+ / AA rating)"
    ],
    indicativeReturnRate: 9.75,
    minDepositBDT: 100000,
    tenureOptions: ["3 Months", "6 Months", "12 Months", "24 Months", "36 Months"],
    eligibility: ["Individuals, Joint accounts, Corporates, Trusts, Provident Funds"],
    benefits: [
      "Safety of funds regulated under Bangladesh Bank Financial Institutions Act",
      "Prompt interest disbursement directly to designated bank account",
      "Negotiable rates for institutional deposits exceeding BDT 1 Crore"
    ],
    requiredDocs: [
      "Account Opening Form, NID / Passport of depositors, Nominee NID & photo, e-TIN Certificate",
      "For institutions: Board Resolution, Trade License, MOA/AOA, Signatory list"
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    category: "fixed",
    categoryName: "Fixed Deposits",
    title: "Periodical Income Scheme",
    tagline: "Receive regular monthly, quarterly, or half-yearly income on your principal.",
    description: "A specialized fixed deposit program for retirees, pensioners, and wealth owners who require predictable regular cash flow on a monthly, quarterly, or semi-annual basis while keeping their principal deposit fully intact.",
    highlights: [
      "Choose your payout frequency: Monthly, Quarterly, or Half-Yearly",
      "Tenures: 1, 2, 3, or 5 years",
      "Direct BEFTN bank transfer on the 1st of every month",
      "Minimum deposit: BDT 1,00,000 and multiples thereof"
    ],
    indicativeReturnRate: 9.5,
    minDepositBDT: 100000,
    tenureOptions: ["1 Year", "2 Years", "3 Years", "5 Years"],
    eligibility: ["Retired persons, senior citizens, families managing rent replacement funds"],
    benefits: [
      "Zero hassle monthly income sent straight to your checking account",
      "Principal remains intact throughout the chosen term",
      "Avoids the volatility of dividend stocks and capital markets"
    ],
    requiredDocs: ["Depositor NID, photos, Nominee details, bank account proof for receiving payouts"],
    popular: true,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    category: "fixed",
    categoryName: "Fixed Deposits",
    title: "Senior Citizen Term Deposit",
    tagline: "Exclusive higher returns and personalized care for elderly citizens.",
    description: "Designed in recognition of senior citizens aged 60 and above, offering an additional profit incentive, dedicated priority counter service at branches, and doorstep documentation support.",
    highlights: [
      "Special bonus profit margin of +0.25% above standard TDR",
      "Tenures: 6 Months, 1 Year, 2 Years, or 3 Years",
      "Priority customer service across all 9 regional branches",
      "Option for monthly health check-up partner vouchers"
    ],
    indicativeReturnRate: 9.75,
    minDepositBDT: 100000,
    tenureOptions: ["6 Months", "1 Year", "2 Years", "3 Years"],
    eligibility: ["Bangladeshi citizens aged 60 years and above"],
    benefits: [
      "Personalized relationship officer assigned to each senior depositor",
      "Seamless renewal and payout mechanisms",
      "No queues at branch locations"
    ],
    requiredDocs: ["Proof of age (NID, Passport, or Pension book), 2 photos, Nominee NID"],
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    category: "fixed",
    categoryName: "Fixed Deposits",
    title: "Money Multiplier Scheme",
    tagline: "Double or triple your investment within a certified compounding horizon.",
    description: "Under this compounding scheme, your deposited capital multiplies over a predetermined duration with guaranteed return certainty and zero management deductions.",
    highlights: [
      "Double your money (Dwidwun) in certified tenure",
      "Triple your money (Tritwun) in extended horizon",
      "Minimum deposit: BDT 50,000 and any multiple",
      "Loan available against scheme up to 90%"
    ],
    indicativeReturnRate: 9.5,
    minDepositBDT: 50000,
    tenureOptions: ["Double in ~7.5 Years", "Triple in ~11.5 Years"],
    eligibility: ["Any individual or institutional investor"],
    benefits: [
      "Compound interest engine guarantees exponential growth",
      "Capital protected under central bank supervision",
      "Excellent gift for children's future or retirement nest egg"
    ],
    requiredDocs: ["Standard account opening form, NID, photos, and nominee documents"],
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
  },
];

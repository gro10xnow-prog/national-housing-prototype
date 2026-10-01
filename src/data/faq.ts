export interface FaqItem {
  id: string;
  category: "home-loans" | "sme-finance" | "deposits" | "islamic" | "general";
  categoryLabel: string;
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  // Home Loans
  {
    id: "hl-1",
    category: "home-loans",
    categoryLabel: "Home Mortgage Loans",
    question: "What is the maximum loan amount and tenure for a Flat Purchase Loan?",
    answer:
      "National Housing Finance PLC finances up to 70% of the total property value (flat plus registration cost) up to a maximum of BDT 25 Million (2.50 Crore). The maximum repayment tenure is up to 20 years, provided the applicant's age does not exceed 60-65 years at maturity.",
  },
  {
    id: "hl-2",
    category: "home-loans",
    categoryLabel: "Home Mortgage Loans",
    question: "Can Non-Resident Bangladeshis (NRBs) apply for a housing loan?",
    answer:
      "Yes! NHFIL has a dedicated NRB Home Financing program tailored for Bangladeshi expatriates working abroad. Applications can be initiated online and executed through an authorized local Power of Attorney (spouse, parent, or sibling) with authenticated Embassy paperwork.",
  },
  {
    id: "hl-3",
    category: "home-loans",
    categoryLabel: "Home Mortgage Loans",
    question: "Are early settlement or partial prepayments allowed?",
    answer:
      "Yes, early settlements and partial capital lump-sum payments are permitted after the initial lock-in period in accordance with Bangladesh Bank NBFI regulations. Prepayment reduces your principal and either lowers your monthly EMI or shortens your overall tenure.",
  },

  // SME Finance
  {
    id: "sme-1",
    category: "sme-finance",
    categoryLabel: "SME & Commercial Finance",
    question: "What is the SONIRVOR NARI scheme for women entrepreneurs?",
    answer:
      "SONIRVOR NARI is a dedicated refinancing program supported by Bangladesh Bank offering concessional interest rates (as low as 7.00% APR) and simplified collateral terms for female-owned small and medium business enterprises.",
  },
  {
    id: "sme-2",
    category: "sme-finance",
    categoryLabel: "SME & Commercial Finance",
    question: "What items can be financed under Lease Financing?",
    answer:
      "We finance commercial capital machinery, industrial generators, medical diagnostic equipment, and commercial transport fleets with repayment tenures ranging from 2 to 5 years.",
  },

  // Deposits
  {
    id: "dep-1",
    category: "deposits",
    categoryLabel: "Deposit & Scheme Savings",
    question: "How does the National Housing Kotipoti Scheme work?",
    answer:
      "The Kotipoti Scheme allows you to accumulate a guaranteed milestone corpus of BDT 1.00 Crore (10 Million). You select a comfortable monthly installment (e.g., BDT 15,000 to 80,000 depending on tenure from 5 to 20 years), and our compounding returns build up to the target amount at maturity.",
  },
  {
    id: "dep-2",
    category: "deposits",
    categoryLabel: "Deposit & Scheme Savings",
    question: "Can I take a loan against my deposit receipt (TDR)?",
    answer:
      "Yes. Depositors can avail an emergency loan/overdraft facility up to 90% of their accumulated deposit value without having to prematurely encash their scheme, ensuring interest yields continue to accrue.",
  },

  // Islamic
  {
    id: "isl-1",
    category: "islamic",
    categoryLabel: "Islamic Wing (Shariah-Compliant)",
    question: "What is Hire Purchase Shirkatul Melk (HPSM)?",
    answer:
      "HPSM is a co-ownership model approved by Islamic jurisprudence. NHFIL and the customer jointly purchase the property. The customer pays monthly rent (Ijara) for occupying the company's share while gradually purchasing the company's equity shares until full 100% ownership transfers to the client.",
  },
  {
    id: "isl-2",
    category: "islamic",
    categoryLabel: "Islamic Wing (Shariah-Compliant)",
    question: "Who oversees the Shariah compliance of the Islamic products?",
    answer:
      "All Islamic financing and Mudaraba deposit schemes are strictly scrutinized, approved, and supervised by an independent Shariah Supervisory Committee comprising renowned Islamic scholars, jurists, and Islamic banking experts.",
  },

  // General
  {
    id: "gen-1",
    category: "general",
    categoryLabel: "General & Account Services",
    question: "Is National Housing Finance PLC a licensed financial institution?",
    answer:
      "Yes, National Housing Finance PLC is a Non-Banking Financial Institution (NBFI) incorporated in August 1998, licensed by Bangladesh Bank under the Financial Institutions Act 1993, and listed on both the Dhaka Stock Exchange (DSE) and Chittagong Stock Exchange (CSE).",
  },
];

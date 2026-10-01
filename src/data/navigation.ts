export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
  children?: {
    heading: string;
    items: {
      label: string;
      href: string;
      description?: string;
      badge?: string;
    }[];
  }[];
}

export const navigationData: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/company-profile",
    children: [
      {
        heading: "Corporate Identity",
        items: [
          {
            label: "Company Profile",
            href: "/company-profile",
            description: "25+ years of housing finance heritage & institutional journey",
          },
          {
            label: "Mission, Vision & Values",
            href: "/mission-vision",
            description: "Guiding principles driving equal shelter access & social impact",
          },
          {
            label: "Board of Directors",
            href: "/board-of-directors",
            description: "Distinguished board representation from leading institutions",
          },
          {
            label: "CSR Initiatives",
            href: "/csr",
            description: "Healthcare, education, and cold relief community impact",
          },
        ],
      },
      {
        heading: "Governance & Compliance",
        items: [
          {
            label: "Citizen's Charter",
            href: "/citizen-charter",
            description: "Bangladesh Bank mandated standard turnaround times",
            badge: "Mandatory",
          },
          {
            label: "AML & CFT Framework",
            href: "/aml-policy",
            description: "Statutory anti-money laundering compliance declarations",
          },
          {
            label: "Careers at NHFIL",
            href: "/career",
            description: "Workplace culture, employee benefits & active vacancies",
            badge: "Hiring",
          },
          {
            label: "Frequently Asked Questions",
            href: "/faq",
            description: "Instant answers for loans, deposits, and documentation",
          },
        ],
      },
    ],
  },
  {
    label: "Loans",
    href: "/loans",
    children: [
      {
        heading: "Home Mortgage Loans",
        items: [
          { label: "Flat Purchase Loan", href: "/loans/5", description: "Finance your apartment purchase across cities" },
          { label: "Self Construction Loan", href: "/loans/11", description: "Build your dream home on your freehold land" },
          { label: "Group Home Loan", href: "/loans/12", description: "Co-purchase and develop multi-unit projects" },
          { label: "NRB Home Financing", href: "/loans/13", description: "Tailored mortgages for non-resident Bangladeshis", badge: "Global" },
          { label: "Renovation Loan", href: "/loans/14", description: "Remodel and upgrade your living spaces" },
          { label: "Housing Plot Purchase", href: "/loans/15", description: "Acquire approved residential land plots" },
        ],
      },
      {
        heading: "Commercial & Project",
        items: [
          { label: "Commercial Space Purchase", href: "/loans/16", description: "Own business offices and professional chambers" },
          { label: "Any Purpose Property Loan", href: "/loans/17", description: "Equity release for education or enterprise" },
          { label: "Real Estate Project Loan", href: "/loans/18", description: "Structured finance for property developers" },
          { label: "Term Finance", href: "/loans/19", description: "Medium & long term corporate funding" },
          { label: "Lease Finance", href: "/loans/20", description: "Procure capital machinery & commercial fleets" },
        ],
      },
      {
        heading: "SME Finance Schemes",
        items: [
          { label: "SONIRVOR (Small Business)", href: "/loans/21", description: "Working capital for retailers & distributors" },
          { label: "SONIRVOR NARI", href: "/loans/22", description: "Subsidized loans for female entrepreneurs", badge: "7.0% APR" },
          { label: "JAGARON", href: "/loans/23", description: "Growth capital for medium enterprise scale" },
          { label: "KRISTI", href: "/loans/24", description: "Micro-SME support for artisans & handicrafts" },
          { label: "Agro Processing Industries", href: "/loans/25", description: "Food processing & cold chain financing" },
          { label: "JICA Fund Facility", href: "/loans/26", description: "Low-cost industrial safety & green upgrade", badge: "Low Cost" },
        ],
      },
    ],
  },
  {
    label: "Deposits",
    href: "/deposits",
    children: [
      {
        heading: "Wealth Building Schemes",
        items: [
          { label: "National Housing Kotipoti Scheme", href: "/deposits/10", description: "Reach BDT 1 Crore through systematic savings", badge: "Most Popular" },
          { label: "Millionaire Scheme", href: "/deposits/9", description: "Achieve BDT 10 Lakhs+ with flexible tenures" },
          { label: "Monthly Savings Scheme (MSS)", href: "/deposits/7", description: "Classic household disciplined savings plan" },
          { label: "Housing Deposit Scheme", href: "/deposits/1", description: "Save down-payment & qualify for 4X home loan", badge: "Home Loan" },
          { label: "Mohila Savings Scheme", href: "/deposits/5", description: "Higher return yields exclusively for women" },
          { label: "Education Pension Scheme", href: "/deposits/3", description: "Targeted funds for university & career goals" },
        ],
      },
      {
        heading: "Fixed Deposits (TDR)",
        items: [
          { label: "Term Deposit Receipt (TDR)", href: "/deposits/6", description: "Highest yield capital protection (3-36 mos)" },
          { label: "Periodical Income Scheme", href: "/deposits/8", description: "Receive steady monthly or quarterly cash flow", badge: "Monthly Payout" },
          { label: "Senior Citizen Term Deposit", href: "/deposits/4", description: "Premium bonus rate & priority branch service" },
          { label: "Money Multiplier Scheme", href: "/deposits/2", description: "Double or triple your investment with zero risk" },
          { label: "Schedule of Rates", href: "/interest-rates", description: "Official published interest & profit rate sheet", badge: "Rates" },
        ],
      },
    ],
  },
  {
    label: "Islamic Wing",
    href: "/islamic",
    badge: "Shariah",
    children: [
      {
        heading: "Islamic Mudaraba Deposits",
        items: [
          { label: "Mudaraba Term Deposit (MTDR)", href: "/islamic#deposits", description: "Halal profit-sharing fixed deposit receipts" },
          { label: "Mudaraba Kotipoti Scheme", href: "/islamic#deposits", description: "Shariah-compliant BDT 1 Crore accumulation" },
          { label: "Mudaraba Monthly Savings (MMSS)", href: "/islamic#deposits", description: "Riba-free monthly recurring contributions" },
          { label: "Mudaraba Hajj Deposit Scheme", href: "/islamic#deposits", description: "Dedicated savings for Holy Hajj pilgrimage", badge: "Hajj" },
        ],
      },
      {
        heading: "Islamic Financing (HPSM)",
        items: [
          { label: "HPSM Apartment Purchase", href: "/islamic#financing", description: "Co-own and acquire your home through Ijara" },
          { label: "HPSM Self Construction", href: "/islamic#financing", description: "Shariah-certified building & renovation" },
          { label: "HPSM Commercial & Machinery", href: "/islamic#financing", description: "Procure factory equipment & office spaces" },
          { label: "Shariah Supervisory Committee", href: "/islamic#shariah", description: "Renowned Islamic scholars overseeing all products" },
        ],
      },
    ],
  },
  {
    label: "Calculators",
    href: "/calculator",
    children: [
      {
        heading: "Self-Service Banking Utilities",
        items: [
          { label: "EMI & Amortization Calculator", href: "/calculator", description: "Calculate monthly installment, total interest & printable quote", badge: "Quote" },
          { label: "Product Comparison Matrix", href: "/compare", description: "Side-by-side spec comparison for loans & deposits", badge: "New" },
          { label: "Track Application Status", href: "/track-application", description: "Real-time 5-stage underwriting progress tracker", badge: "Tracker" },
          { label: "Forms & Downloads Center", href: "/downloads", description: "Physical loan application packs & schedules of charges" },
        ],
      },
    ],
  },
  {
    label: "Investor Relations",
    href: "/investor-relations",
    children: [
      {
        heading: "Financial Reports & Notices",
        items: [
          { label: "Audited Annual Reports", href: "/investor-relations", description: "Complete annual balance sheets & audit notes" },
          { label: "Quarterly Financial Statements", href: "/investor-relations", description: "Half-yearly & un-audited PSI disclosures" },
          { label: "Official Notice Board", href: "/notice-board", description: "AGM notices, dividend payouts, and press circulars", badge: "Notices" },
          { label: "Shareholding Pattern", href: "/investor-relations#shareholding", description: "Institutional, sponsor, and public distribution" },
        ],
      },
    ],
  },
  {
    label: "Locate Us",
    href: "/location",
  },
];

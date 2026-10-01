export interface NewsNoticeItem {
  id: string;
  category: "Regulatory" | "AGM & Dividend" | "Product" | "CSR" | "General";
  title: string;
  date: string;
  summary: string;
  fileUrl?: string;
  fileSize?: string;
  pinned?: boolean;
}

export const newsNoticesData: NewsNoticeItem[] = [
  {
    id: "notice-1",
    category: "AGM & Dividend",
    title: "Notice of the 27th Annual General Meeting (AGM) of National Housing Finance PLC",
    date: "March 15, 2026",
    summary:
      "The 27th Annual General Meeting of the shareholders of National Housing Finance PLC will be held virtually using a digital platform on Thursday, April 30, 2026 at 11:00 AM.",
    fileUrl: "https://www.nationalhousingbd.com/financial-report",
    fileSize: "420 KB",
    pinned: true,
  },
  {
    id: "notice-2",
    category: "AGM & Dividend",
    title: "Recommendation of 10.00% Cash Dividend for the Financial Year Ended December 31, 2025",
    date: "March 10, 2026",
    summary:
      "The Board of Directors of National Housing Finance PLC has recommended a 10.00% Cash Dividend for the financial year ended December 31, 2025, subject to approval at the 27th AGM.",
    fileUrl: "https://www.nationalhousingbd.com/financial-report",
    fileSize: "280 KB",
    pinned: true,
  },
  {
    id: "notice-3",
    category: "Regulatory",
    title: "Credit Rating Surveillance Result: Long Term 'A+' and Short Term 'ST-2' with Stable Outlook",
    date: "February 22, 2026",
    summary:
      "Credit Rating Agency of Bangladesh Ltd. (CRAB) has reaffirmed the credit rating of National Housing Finance PLC as 'A+' in the long term and 'ST-2' in the short term based on audited financial statements.",
    fileUrl: "https://www.nationalhousingbd.com/financial-report",
    fileSize: "310 KB",
  },
  {
    id: "notice-4",
    category: "Product",
    title: "Enhanced Margin & Extended Tenure for Flat Purchase Loan in Regional Hubs",
    date: "January 18, 2026",
    summary:
      "NHFIL announces enhanced loan-to-value limits up to 70% and fast-track appraisal for apartment purchases in Chattogram, Bogura, Rangpur, and Rajshahi divisional metropolitan areas.",
  },
  {
    id: "notice-5",
    category: "CSR",
    title: "Distribution of Warm Clothing & Blankets among Underprivileged Families in Northern Bangladesh",
    date: "January 05, 2026",
    summary:
      "As part of its ongoing Corporate Social Responsibility (CSR) initiatives, National Housing Finance PLC distributed over 2,500 blankets to cold-stricken families through its Rangpur and Bogura branch teams.",
  },
  {
    id: "notice-6",
    category: "Regulatory",
    title: "Un-Audited Financial Statements for the Third Quarter (Q3) Ended September 30, 2025",
    date: "November 12, 2025",
    summary:
      "EPS was BDT 0.42 for July-September 2025 as against BDT 0.38 for the corresponding period of the previous year. Net Operating Cash Flow per Share (NOCFPS) stood at BDT 2.15.",
    fileUrl: "https://www.nationalhousingbd.com/financial-report",
    fileSize: "650 KB",
  },
];

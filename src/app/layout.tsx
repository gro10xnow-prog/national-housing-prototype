import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e2a47",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nationalhousingbd.com"),
  title: {
    default: "National Housing Finance PLC | Leading Home Loan & Deposit Institution",
    template: "%s | National Housing Finance PLC",
  },
  description:
    "National Housing Finance PLC (NHFIL) is an apex financial institution in Bangladesh licensed by Bangladesh Bank. Specialized in Home Mortgage Loans, SME Financing, Term Deposits, Kotipoti Scheme, and Shariah Islamic Banking.",
  keywords: [
    "National Housing Finance PLC",
    "NHFIL",
    "Home Loan Bangladesh",
    "Apartment Purchase Loan",
    "Kotipoti Scheme",
    "Deposit Scheme",
    "Islamic Home Finance",
    "EMI Calculator",
    "Dhaka Housing Loan",
    "NBFI Bangladesh",
  ],
  authors: [{ name: "National Housing Finance PLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nationalhousingbd.com",
    title: "National Housing Finance PLC | Specialized Home Mortgage & Wealth Generation",
    description:
      "Transforming homeownership in Bangladesh for over 25 years with competitive home loans, deposit schemes, and Shariah-compliant financing.",
    siteName: "National Housing Finance PLC",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "National Housing Finance PLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "National Housing Finance PLC",
    description: "Specialized Home Loan & Wealth Creation Institution in Bangladesh.",
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 antialiased selection:bg-nhfil-blue/20 selection:text-nhfil-navy">
        {/* Skip to Main Content Accessibility Anchor */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2.5 bg-nhfil-navy text-white text-xs font-bold rounded-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-nhfil-blue transition-all"
        >
          Skip to main content
        </a>

        <LanguageProvider>
          <TopBar />
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <FloatingContact />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

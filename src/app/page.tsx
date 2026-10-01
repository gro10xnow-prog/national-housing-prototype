import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import SponsorLogos from "@/components/home/SponsorLogos";
import QuickServices from "@/components/home/QuickServices";
import FeaturedLoans from "@/components/home/FeaturedLoans";
import InteractiveCalcPreview from "@/components/home/InteractiveCalcPreview";
import FeaturedDeposits from "@/components/home/FeaturedDeposits";
import CtaBand from "@/components/home/CtaBand";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import BoardPreview from "@/components/home/BoardPreview";
import LatestNews from "@/components/home/LatestNews";
import JsonLd from "@/components/seo/JsonLd";

export default function HomePage() {
  const corporateSchema = {
    "@context": "https://schema.org",
    "@type": "BankOrCreditUnion",
    "name": "National Housing Finance PLC",
    "alternateName": "NHFIL",
    "url": "https://www.nationalhousingbd.com",
    "logo": "https://www.nationalhousingbd.com/logo.png",
    "description":
      "National Housing Finance PLC is a specialized financial institution in Bangladesh licensed by Bangladesh Bank under Financial Institutions Act 1993, pioneering housing mortgage finance and wealth generation since 1998.",
    "foundingDate": "1998-08-18",
    "taxID": "Bangladesh Bank License: FI-08",
    "telephone": "+8809609200555",
    "email": "info@nationalhousingbd.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "National Plaza (7th & 8th Floor), 109 Bir Uttam C.R. Dutta Road",
      "addressLocality": "Dhaka",
      "postalCode": "1205",
      "addressCountry": "BD"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:30",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/nationalhousingbd",
      "https://www.linkedin.com/company/national-housing-finance-and-investments-limited"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={corporateSchema} />
      <HeroSlider />
      <SponsorLogos />
      <QuickServices />
      <FeaturedLoans />
      <InteractiveCalcPreview />
      <FeaturedDeposits />
      <CtaBand />
      <WhyChooseUs />
      <Testimonials />
      <BoardPreview />
      <LatestNews />
    </div>
  );
}

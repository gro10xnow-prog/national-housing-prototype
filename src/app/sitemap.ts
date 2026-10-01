import { MetadataRoute } from "next";
import { loanProducts } from "@/data/loans";
import { depositSchemes } from "@/data/deposits";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nationalhousingbd.com";

  const staticRoutes = [
    "",
    "/calculator",
    "/apply",
    "/track-application",
    "/compare",
    "/location",
    "/company-profile",
    "/mission-vision",
    "/board-of-directors",
    "/investor-relations",
    "/downloads",
    "/career",
    "/vacancy-announcement",
    "/notice-board",
    "/interest-rates",
    "/faq",
    "/citizen-charter",
    "/aml-policy",
    "/csr",
    "/contact-us",
    "/loans",
    "/deposits",
    "/islamic",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const loanRoutes = loanProducts.map((loan) => ({
    url: `${baseUrl}/loans/${loan.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const depositRoutes = depositSchemes.map((dep) => ({
    url: `${baseUrl}/deposits/${dep.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...loanRoutes, ...depositRoutes];
}

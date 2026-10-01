import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "National Housing Finance PLC",
    short_name: "NHFIL Portal",
    description: "Specialized housing mortgage loans, deposit schemes, and Islamic financing in Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0c2340",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    shortcuts: [
      {
        name: "Apply Online",
        url: "/apply",
        description: "Apply for Home Loans or Deposit Schemes online",
      },
      {
        name: "Track Application",
        url: "/track-application",
        description: "Check underwriting and sanction progress",
      },
      {
        name: "EMI Calculator",
        url: "/calculator",
        description: "Calculate monthly installment & amortization",
      },
      {
        name: "Branch Locator",
        url: "/location",
        description: "Locate branches and check live banking hours",
      },
    ],
  };
}

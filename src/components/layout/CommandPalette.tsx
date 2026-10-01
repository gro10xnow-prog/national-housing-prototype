"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loanProducts } from "@/data/loans";
import { depositSchemes } from "@/data/deposits";
import { branches } from "@/data/branches";
import {
  Search,
  X,
  Calculator,
  Building2,
  FileText,
  Shield,
  HelpCircle,
  Briefcase,
  ChevronRight,
  TrendingUp,
  Landmark,
  Compass,
  FileCheck2,
  GitCompare,
  ArrowRight
} from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: "Loans" | "Deposits" | "Islamic" | "Branches" | "Tools & Services" | "Corporate & Disclosures";
  href: string;
  icon: React.ElementType;
  badge?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Compile universal search index
  const allItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // Core Tools & Services
    items.push(
      {
        id: "tool-calc",
        title: "Loan EMI & Amortization Calculator",
        description: "Calculate monthly installment, total interest, and print official quotation letterhead",
        category: "Tools & Services",
        href: "/calculator",
        icon: Calculator,
        badge: "Interactive"
      },
      {
        id: "tool-apply",
        title: "Apply Online for Financing / Deposits",
        description: "Direct digital credit application desk with instant reference ID generation",
        category: "Tools & Services",
        href: "/apply",
        icon: FileCheck2,
        badge: "Fast Track"
      },
      {
        id: "tool-track",
        title: "Track Application Status",
        description: "Check underwriting and sanction progress using your Reference ID",
        category: "Tools & Services",
        href: "/track-application",
        icon: Compass,
        badge: "Self Service"
      },
      {
        id: "tool-compare",
        title: "Compare Financial Products",
        description: "Side-by-side comparison matrix for loan facilities and deposit schemes",
        category: "Tools & Services",
        href: "/compare",
        icon: GitCompare,
        badge: "New"
      },
      {
        id: "tool-downloads",
        title: "Forms & Downloads Center",
        description: "Download physical application forms, schedule of charges, and account opening packs",
        category: "Tools & Services",
        href: "/downloads",
        icon: FileText
      }
    );

    // Loan Products
    loanProducts.forEach((loan) => {
      items.push({
        id: `loan-${loan.id}`,
        title: loan.title,
        description: loan.tagline || loan.description,
        category: "Loans",
        href: `/loans/${loan.id}`,
        icon: Landmark,
        badge: `${loan.maxTenureYears} yrs max`
      });
    });

    // Deposit Schemes
    depositSchemes.forEach((dep) => {
      items.push({
        id: `dep-${dep.id}`,
        title: dep.title,
        description: dep.tagline || dep.description,
        category: "Deposits",
        href: `/deposits/${dep.id}`,
        icon: TrendingUp,
        badge: dep.highlights?.[0] || "Deposit"
      });
    });

    // Islamic Banking
    items.push(
      {
        id: "islamic-portal",
        title: "Islamic Shariah Window",
        description: "100% Shariah compliant Bai-Muajjal and Mudaraba financing and savings schemes",
        category: "Islamic",
        href: "/islamic",
        icon: Shield,
        badge: "Halal"
      },
      {
        id: "islamic-rates",
        title: "Islamic Profit Sharing Rates",
        description: "Provisional and final profit weightage ratios for Mudaraba depositors",
        category: "Islamic",
        href: "/islamic#rates",
        icon: TrendingUp
      }
    );

    // Branch Locator
    branches.forEach((b) => {
      items.push({
        id: `branch-${b.id}`,
        title: `${b.name} (${b.city})`,
        description: `${b.address} • Tel: ${b.phone}`,
        category: "Branches",
        href: "/location",
        icon: Building2,
        badge: b.type
      });
    });

    // Corporate & Governance
    items.push(
      {
        id: "corp-profile",
        title: "Company Profile & History",
        description: "Pioneering housing finance and wealth generation in Bangladesh since 1998",
        category: "Corporate & Disclosures",
        href: "/company-profile",
        icon: Building2
      },
      {
        id: "corp-board",
        title: "Board of Directors",
        description: "Distinguished board leadership representing institutional and sponsor shareholders",
        category: "Corporate & Disclosures",
        href: "/board-of-directors",
        icon: Briefcase
      },
      {
        id: "corp-investor",
        title: "Investor Relations & Audited Reports",
        description: "Annual reports, quarterly financial statements (PSI), and shareholding distribution",
        category: "Corporate & Disclosures",
        href: "/investor-relations",
        icon: TrendingUp
      },
      {
        id: "corp-citizen",
        title: "Citizen Charter & Grievance Redressal (GRS)",
        description: "Bangladesh Bank service standards and online customer complaint desk",
        category: "Corporate & Disclosures",
        href: "/citizen-charter",
        icon: Shield
      },
      {
        id: "corp-interest",
        title: "Schedule of Interest Rates",
        description: "Bangladesh Bank SMART aligned lending and deposit interest rate matrix",
        category: "Corporate & Disclosures",
        href: "/interest-rates",
        icon: FileText
      },
      {
        id: "corp-faq",
        title: "Frequently Asked Questions (FAQ)",
        description: "Quick answers regarding home loan eligibility, mortgage processing, and fixed deposits",
        category: "Corporate & Disclosures",
        href: "/faq",
        icon: HelpCircle
      },
      {
        id: "corp-career",
        title: "Career Opportunities",
        description: "Join the dedicated team at National Housing Finance PLC",
        category: "Corporate & Disclosures",
        href: "/career",
        icon: Briefcase
      }
    );

    return items;
  }, []);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 10);
    }
    const q = query.toLowerCase().trim();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [allItems, query]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard navigation inside the palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex].href);
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  // Scroll active item into view
  useEffect(() => {
    const activeEl = resultsContainerRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Universal Search and Command Palette"
      className="fixed inset-0 z-50 overflow-y-auto bg-nhfil-navy-deep/80 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 px-6 py-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-nhfil-blue shrink-0" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="search-results-list"
            aria-autocomplete="list"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search home loans, deposit schemes, branches, forms..."
            className="w-full text-base sm:text-lg font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-100 border border-slate-300 rounded-md">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Container */}
        <div
          id="search-results-list"
          role="listbox"
          ref={resultsContainerRef}
          className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-slate-100"
        >
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <Search className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500">
                Try searching for &quot;home loan&quot;, &quot;calculator&quot;, &quot;gulshan&quot;, or &quot;downloads&quot;.
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  data-index={idx}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(item.href)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-2xl flex items-center justify-between cursor-pointer transition-all ${
                    isSelected
                      ? "bg-nhfil-blue/10 border-l-4 border-nhfil-blue translate-x-1"
                      : "hover:bg-slate-50 border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex items-center space-x-3.5 min-w-0 pr-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-nhfil-blue text-white shadow-sm"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-slate-900 truncate">{item.title}</span>
                        {item.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-100 text-slate-700 shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{item.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="hidden md:inline-block text-[11px] font-medium text-slate-400">
                      {item.category}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-nhfil-blue translate-x-0.5" : "text-slate-300"
                      }`}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-semibold text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-semibold text-[10px]">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-semibold text-[10px]">Enter</kbd>
              <span>to select</span>
            </span>
          </div>
          <span>National Housing Search Engine</span>
        </div>
      </div>
    </div>
  );
}

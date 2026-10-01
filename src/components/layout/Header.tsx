"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Home,
  PiggyBank,
  Moon,
  Calculator,
  Compass,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Award,
  Search
} from "lucide-react";
import { navigationData, NavItem } from "@/data/navigation";
import ApplyModal from "../tools/ApplyModal";
import CommandPalette from "./CommandPalette";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { lang, strings } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Ctrl+K / Cmd+K shortcut for Spotlight Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const getMenuIcon = (label: string) => {
    switch (label) {
      case "About Us":
        return <Building2 className="w-4 h-4 text-nhfil-blue" />;
      case "Loans":
        return <Home className="w-4 h-4 text-nhfil-blue" />;
      case "Deposits":
        return <PiggyBank className="w-4 h-4 text-amber-500" />;
      case "Islamic Wing":
        return <Moon className="w-4 h-4 text-emerald-500" />;
      case "Calculators":
        return <Calculator className="w-4 h-4 text-nhfil-blue" />;
      case "Locate Us":
        return <Compass className="w-4 h-4 text-nhfil-blue" />;
      default:
        return null;
    }
  };

  const getLocalizedLabel = (label: string) => {
    if (lang !== "bn") {
      if (label === "Investor Relations") return "Investors";
      if (label === "Locate Us") return "Branches";
      return label;
    }
    switch (label) {
      case "Home":
        return strings.nav.home;
      case "About Us":
        return strings.nav.aboutUs;
      case "Loans":
        return strings.nav.loans;
      case "Deposits":
        return strings.nav.deposits;
      case "Islamic Wing":
        return strings.nav.islamicWing;
      case "Calculators":
        return strings.nav.calculators;
      case "Investor Relations":
        return strings.nav.investorRelations;
      case "Locate Us":
        return strings.nav.locateUs;
      default:
        return label;
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-lg border-b border-slate-200/80"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
            {/* Brand Logo & Corporate Lockup */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-2.5 sm:space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nhfil-blue rounded-xl py-1"
                aria-label="National Housing Finance PLC Home"
              >
                <div className="relative flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-emblem.png"
                    alt="National Housing Finance PLC Emblem"
                    width={840}
                    height={347}
                    priority
                    className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                      isScrolled ? "h-8 sm:h-9" : "h-9 sm:h-10 md:h-11"
                    }`}
                  />
                </div>
                <div className="hidden sm:flex flex-col justify-center border-l border-slate-200/80 pl-2.5 sm:pl-3">
                  <span className="text-sm sm:text-base font-black tracking-tight text-nhfil-navy leading-none">
                    NATIONAL HOUSING
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-nhfil-blue uppercase mt-1 leading-none">
                    Finance PLC &bull; NHFIL
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1" aria-label="Main Navigation">
              {navigationData.map((item) => {
                const isActive = pathname === item.href;
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && setActiveMegaMenu(item.label)}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup={hasChildren ? "true" : undefined}
                      aria-expanded={hasChildren ? activeMegaMenu === item.label : undefined}
                      className={`px-2 py-1.5 2xl:px-2.5 rounded-lg text-[11px] 2xl:text-xs font-bold uppercase tracking-wide whitespace-nowrap flex items-center space-x-1 transition-all ${
                        isActive
                          ? "text-nhfil-blue bg-nhfil-blue/5"
                          : "text-slate-700 hover:text-nhfil-blue hover:bg-slate-50"
                      }`}
                    >
                      <span>{getLocalizedLabel(item.label)}</span>
                      {item.badge && (
                        <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                          {item.badge}
                        </span>
                      )}
                      {hasChildren && (
                        <ChevronDown className="w-3.5 h-3.5 ml-0.5 transition-transform" />
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {hasChildren && activeMegaMenu === item.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-6 grid grid-cols-2 gap-6 glass-nav">
                          {item.children?.map((col, idx) => (
                            <div key={idx} className="space-y-3">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-nhfil-blue flex items-center space-x-2 pb-2 border-b border-slate-100">
                                {getMenuIcon(item.label)}
                                <span>{col.heading}</span>
                              </h4>
                              <div className="space-y-1">
                                {col.items.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className="block p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-semibold text-slate-800 group-hover:text-nhfil-blue transition-colors">
                                        {sub.label}
                                      </span>
                                      {sub.badge && (
                                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800 font-medium">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                    {sub.description && (
                                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                        {sub.description}
                                      </p>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center space-x-2 shrink-0">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 active:scale-95 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center space-x-1.5 transition-all border border-slate-200/60 shrink-0 whitespace-nowrap"
                aria-label="Search site (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden xl:inline">{lang === "bn" ? "অনুসন্ধান..." : "Search..."}</span>
              </button>

              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="shrink-0 relative group overflow-hidden px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-nhfil-blue to-nhfil-blue-600 hover:from-nhfil-blue-600 hover:to-nhfil-navy active:scale-[0.98] text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-nhfil-blue/20 hover:shadow-lg transition-all duration-200 flex items-center space-x-1.5 whitespace-nowrap"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>{strings.nav.applyOnline}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-1.5 xl:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
              >
                <Search className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-nhfil-blue active:scale-95 text-white text-xs font-bold uppercase shadow-sm sm:hidden"
              >
                {lang === "bn" ? "আবেদন" : "Apply"}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-3">
            {/* Mobile Search Quick Trigger */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-left text-xs font-medium text-slate-500 flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-slate-400" />
                <span>{lang === "bn" ? "সার্চ করুন পণ্য, শাখা বা ফরম..." : "Search products, branches, forms..."}</span>
              </span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-slate-300 rounded text-slate-400">⌘K</kbd>
            </button>
            {navigationData.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpanded === item.label;

              return (
                <div key={item.label} className="border-b border-slate-100 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-sm font-bold text-slate-900 py-1.5 block"
                    >
                      {getLocalizedLabel(item.label)}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : item.label)
                        }
                        className="p-1.5 text-slate-500 hover:text-nhfil-blue"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Expanded Sub-items in mobile */}
                  {hasChildren && isExpanded && (
                    <div className="pl-3 pt-2 space-y-3 bg-slate-50 rounded-xl p-3 mt-1">
                      {item.children?.map((group, gIdx) => (
                        <div key={gIdx} className="space-y-1.5">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-nhfil-blue">
                            {group.heading}
                          </p>
                          {group.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block text-xs text-slate-700 hover:text-nhfil-blue py-1"
                            >
                              &bull; {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsApplyModalOpen(true);
                }}
                className="w-full py-3 bg-nhfil-blue text-white font-bold rounded-xl text-center text-sm shadow-md"
              >
                {lang === "bn" ? "ঋণ বা আমানতের জন্য অনলাইন আবেদন" : "Apply Online for Loan / Deposit"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Application Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      {/* Universal Search Command Palette */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

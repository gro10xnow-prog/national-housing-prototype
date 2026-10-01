import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/**
 * Convert any standard integer/float string or number to authentic Bengali numerals
 */
export function toBengaliNumerals(value: number | string): string {
  if (value === undefined || value === null) return "";
  return value.toString().replace(/\d/g, (d) => BENGALI_DIGITS[parseInt(d, 10)]);
}

/**
 * Format currency in Bangladeshi Taka (BDT) with ৳ symbol and Bengali numbering commas (Lakh, Crore)
 */
export function formatBDT(amount: number): string {
  if (isNaN(amount)) return "৳ 0";
  
  // Format with standard Indian/Bangladeshi numbering system (Crore, Lakh, Thousand)
  const isNegative = amount < 0;
  const absAmount = Math.round(Math.abs(amount));
  const str = absAmount.toString();
  
  let result = "";
  if (str.length > 3) {
    const lastThree = str.substring(str.length - 3);
    const otherNumbers = str.substring(0, str.length - 3);
    const formattedOther = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    result = formattedOther + "," + lastThree;
  } else {
    result = str;
  }
  
  return (isNegative ? "-৳ " : "৳ ") + result;
}

/**
 * Convert number to friendly readable string (e.g., 50 Lakh, 1.2 Crore)
 */
export function formatBDTLarge(amount: number): string {
  if (amount >= 10000000) {
    const crore = (amount / 10000000).toFixed(2);
    return `৳ ${crore.replace(/\.00$/, "")} Crore`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2);
    return `৳ ${lakh.replace(/\.00$/, "")} Lakh`;
  }
  return formatBDT(amount);
}

/**
 * Format currency localized with support for Bengali numerals and terminology
 */
export function formatBDTLocale(amount: number, lang: "en" | "bn" = "en"): string {
  const formatted = formatBDT(amount);
  if (lang === "bn") {
    return toBengaliNumerals(formatted);
  }
  return formatted;
}

/**
 * Format large currency localized (e.g., ৳ ১.২ কোটি or ৳ ৫০ লাখ)
 */
export function formatBDTLargeLocale(amount: number, lang: "en" | "bn" = "en"): string {
  if (lang === "bn") {
    if (amount >= 10000000) {
      const crore = (amount / 10000000).toFixed(2);
      return `৳ ${toBengaliNumerals(crore.replace(/\.00$/, ""))} কোটি`;
    }
    if (amount >= 100000) {
      const lakh = (amount / 100000).toFixed(2);
      return `৳ ${toBengaliNumerals(lakh.replace(/\.00$/, ""))} লাখ`;
    }
    return toBengaliNumerals(formatBDT(amount));
  }
  return formatBDTLarge(amount);
}

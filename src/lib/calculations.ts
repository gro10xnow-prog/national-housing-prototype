export interface EmiResult {
  monthlyEmi: number;
  totalPrincipal: number;
  totalInterest: number;
  totalPayment: number;
  principalPercent: number;
  interestPercent: number;
  schedule: AmortizationYear[];
}

export interface AmortizationYear {
  year: number;
  openingBalance: number;
  principalPaid: number;
  interestPaid: number;
  totalPaid: number;
  closingBalance: number;
}

/**
 * Calculate Monthly EMI and Amortization Schedule
 * @param principal Loan Amount in BDT
 * @param annualRate Annual Interest Rate in % (e.g. 9.5)
 * @param tenureYears Loan Tenure in Years (e.g. 15)
 */
export function calculateLoanEmi(
  principal: number,
  annualRate: number,
  tenureYears: number
): EmiResult {
  const months = tenureYears * 12;
  const monthlyRate = annualRate / 12 / 100;

  if (principal <= 0 || annualRate <= 0 || tenureYears <= 0) {
    return {
      monthlyEmi: 0,
      totalPrincipal: principal,
      totalInterest: 0,
      totalPayment: principal,
      principalPercent: 100,
      interestPercent: 0,
      schedule: [],
    };
  }

  // EMI Formula: [P * r * (1 + r)^n] / [(1 + r)^n - 1]
  const factor = Math.pow(1 + monthlyRate, months);
  const emi = (principal * monthlyRate * factor) / (factor - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  // Yearly Amortization Schedule
  let balance = principal;
  const schedule: AmortizationYear[] = [];

  for (let year = 1; year <= tenureYears; year++) {
    const openingBalance = balance;
    let yearPrincipal = 0;
    let yearInterest = 0;

    for (let m = 1; m <= 12; m++) {
      const interestForMonth = balance * monthlyRate;
      const principalForMonth = emi - interestForMonth;
      yearInterest += interestForMonth;
      yearPrincipal += principalForMonth;
      balance = Math.max(0, balance - principalForMonth);
    }

    schedule.push({
      year,
      openingBalance: Math.round(openingBalance),
      principalPaid: Math.round(yearPrincipal),
      interestPaid: Math.round(yearInterest),
      totalPaid: Math.round(yearPrincipal + yearInterest),
      closingBalance: Math.round(balance),
    });
  }

  const principalPercent = Math.round((principal / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  return {
    monthlyEmi: Math.round(emi),
    totalPrincipal: Math.round(principal),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
    principalPercent,
    interestPercent,
    schedule,
  };
}

export interface SavingsResult {
  totalDeposited: number;
  estimatedReturn: number;
  totalMaturityValue: number;
  profitPercent: number;
}

/**
 * Calculate Fixed Term Deposit Maturity
 */
export function calculateTermDeposit(
  initialDeposit: number,
  annualRate: number,
  tenureYears: number
): SavingsResult {
  // Compound interest quarterly standard for Bangladesh NBFIs
  const n = 4; // 4 times a year
  const rate = annualRate / 100;
  const maturityValue = initialDeposit * Math.pow(1 + rate / n, n * tenureYears);
  const estimatedReturn = maturityValue - initialDeposit;
  const profitPercent = Math.round((estimatedReturn / maturityValue) * 100);

  return {
    totalDeposited: Math.round(initialDeposit),
    estimatedReturn: Math.round(estimatedReturn),
    totalMaturityValue: Math.round(maturityValue),
    profitPercent,
  };
}

/**
 * Calculate Recurring Monthly Deposit Scheme (MSS / Kotipoti / Millionaire)
 */
export function calculateRecurringDeposit(
  monthlyInstallment: number,
  annualRate: number,
  tenureYears: number
): SavingsResult {
  const months = tenureYears * 12;
  const r = annualRate / 100 / 12;
  
  // Future Value of an Annuity formula: M = P * [((1 + r)^n - 1) / r] * (1 + r)
  let maturityValue = 0;
  if (r > 0) {
    maturityValue = monthlyInstallment * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
  } else {
    maturityValue = monthlyInstallment * months;
  }

  const totalDeposited = monthlyInstallment * months;
  const estimatedReturn = maturityValue - totalDeposited;
  const profitPercent = Math.round((estimatedReturn / maturityValue) * 100);

  return {
    totalDeposited: Math.round(totalDeposited),
    estimatedReturn: Math.round(estimatedReturn),
    totalMaturityValue: Math.round(maturityValue),
    profitPercent,
  };
}

export interface ReverseGoalResult {
  requiredMonthlyDeposit: number;
  targetAmount: number;
  totalSelfContribution: number;
  totalInterestEarned: number;
}

/**
 * Calculate Monthly Deposit Needed to Reach a Target Milestone (e.g. 1 Crore)
 */
export function calculateReverseDeposit(
  targetMilestoneBDT: number,
  annualRate: number,
  tenureYears: number
): ReverseGoalResult {
  const months = tenureYears * 12;
  const r = annualRate / 100 / 12;

  let requiredMonthly = 0;
  if (r > 0) {
    const factor = ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    requiredMonthly = targetMilestoneBDT / factor;
  } else {
    requiredMonthly = targetMilestoneBDT / months;
  }

  const roundedMonthly = Math.round(requiredMonthly);
  const totalSelfContribution = roundedMonthly * months;
  const totalInterestEarned = targetMilestoneBDT - totalSelfContribution;

  return {
    requiredMonthlyDeposit: roundedMonthly,
    targetAmount: targetMilestoneBDT,
    totalSelfContribution,
    totalInterestEarned: Math.max(0, totalInterestEarned),
  };
}


export function calculatePlan({
  firstContribution,
  monthlyContribution,
  yearOfRepayment,
}) {
  let dataResult = [];

  for (let i = 0; i < yearOfRepayment; i++) {
    const monthInterest = (monthlyContribution += monthlyContribution * 0.1);
    const yearInter = (monthlyContribution += monthlyContribution * 0.1 * 12);
    const wholePlanInter = yearOfRepayment * 12 * monthInterest;
    const firstInvest = firstContribution;
    const yearContribution = monthlyContribution * 12 * 0.1;
    const wholePlanWithoutFirstContribution =
      yearOfRepayment * 12 * monthlyContribution;

    dataResult.push({
      yearOfRepaymentResult: i + 1,
      firstContributionResult: firstInvest,
      monthlyInterestResult: monthInterest,
      yearInterestResult: yearInter,
      interestResult: "10%",
      wholePlanInterestResult: wholePlanInter,
      yearContributionResult: yearContribution,
      wholePlanWithoutFirstContributionResult:
        wholePlanWithoutFirstContribution,
    });
  }

  return dataResult;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

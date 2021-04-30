import { EligibleCards } from "../../../Domain/EligibleCards";

export const eligibleResultTitles = {
  notSubmitted: `Please submit your application to check new cards eligibility`,
  submittedEmpty: `Unfortunately you're not eligible for any cards`,
  submittedNotEmpty: `Thanks for submitting your application, you are eligible for this cards:`
};

export const getEligibleResultTitle = (eligibleCards: EligibleCards, isSubmitted: boolean) => {
  if (!isSubmitted) {
    return eligibleResultTitles.notSubmitted;
  }
  if (eligibleCards.cards.length > 0) {
    return eligibleResultTitles.submittedNotEmpty;
  } else {
    return eligibleResultTitles.submittedEmpty;
  }
}

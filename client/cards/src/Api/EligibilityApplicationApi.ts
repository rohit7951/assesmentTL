import { Applicant } from "../Domain/Applicant";
import { EligibleCards } from "../Domain/EligibleCards";
import { validateRequiredInput } from "./ApiUtils";

export const CheckEligibility = async (
  applicant: Applicant
): Promise<EligibleCards> => {
  return new Promise((resolve, reject) => {
    const errors = [];
    if (validateRequiredInput(applicant.name)) {
      errors.push({ message: "Name is required." });
    }
    if (validateRequiredInput(applicant.email)) {
      errors.push({ message: "Email is required." });
    }
    if (validateRequiredInput(applicant.address)) {
      errors.push({ message: "Address is required." });
    }

    if (errors.length > 0) {
      return reject(errors);
    }

    let cards: string[] = [];

    switch (applicant.name.toLowerCase()) {
      case "boris":
        cards = ["C1"];
        break;
      case "theresa":
        cards = ["C2"];
        break;
      case "angela":
        cards = ["C1", "C2"];
        break;
      default:
        break;
    }

    return resolve({ cards });
  });
};

import React, { useState } from "react";
import { CheckEligibility } from "../../Api/EligibilityApplicationApi";
import View from "../../DesignSystem/View";
import { EligibleCards } from "../../Domain/EligibleCards";
import EligibilityApplication from "./EligibilityApplication";
import EligibilityResults from "./EligibilityResults";

const Eligibility = () => {

  const [eligibleCards, setEligibleCards] = useState<EligibleCards>({cards: []});
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <View>
      <EligibilityApplication newProductApply={CheckEligibility} setEligibleCards={(eligibleCards: EligibleCards) => {
        setEligibleCards(eligibleCards);
        setIsSubmitted(true);
      }} />
      <EligibilityResults eligibleCards={eligibleCards} isSubmitted={isSubmitted} />
    </View>
  );
};

export default Eligibility;

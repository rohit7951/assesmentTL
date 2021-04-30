import React from "react";
import styled from "styled-components";
import Card from "../../../DesignSystem/Card";
import Title from "../../../DesignSystem/Title";
import { EligibleCards } from "../../../Domain/EligibleCards";
import { getEligibleResultTitle } from "./EligibilityResultsTextUtils";

const ResultsWrapper = styled.div`
  flex: 1 1 auto;
  padding-top: 48px;
  justify-content: center;
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  eligibleCards: EligibleCards,
  isSubmitted: boolean
};

const EligibilityResults = ({eligibleCards, isSubmitted}: Props) => {

  return <ResultsWrapper>
    {
      <Title>{getEligibleResultTitle(eligibleCards, isSubmitted)}</Title>
    }
    {
      eligibleCards.cards.map((eligibleCard, index) => {
        return <Card key={index}>{eligibleCard}</Card>
      })
    }
  </ResultsWrapper>;
};

export default EligibilityResults;

import React from 'react';
import { render, screen } from '@testing-library/react';
import EligibilityResults from '../EligibilityResults';
import { eligibleResultTitles } from '../EligibilityResultsTextUtils';

test('renders list of eligible cards', () => {
  render(<EligibilityResults isSubmitted={false} eligibleCards={{cards: ["C1", "B2"]}} />);
  expect(screen.getByText(/C1/i)).toBeInTheDocument();
  expect(screen.getByText(/B2/i)).toBeInTheDocument();
});

test('renders correct text if user have not submitted yet', () => {
  render(<EligibilityResults isSubmitted={false} eligibleCards={{cards: []}} />);
  expect(screen.getByText(eligibleResultTitles.notSubmitted)).toBeInTheDocument();
});

test('renders correct text if user submitted and got cards', () => {
  render(<EligibilityResults isSubmitted={true} eligibleCards={{cards: ['C1']}} />);
  expect(screen.getByText(eligibleResultTitles.submittedNotEmpty)).toBeInTheDocument();
  expect(screen.getByText(/C1/i)).toBeInTheDocument();
});

test('renders correct text if user submitted and got empty result', () => {
  render(<EligibilityResults isSubmitted={true} eligibleCards={{cards: []}} />);
  expect(screen.getByText(eligibleResultTitles.submittedEmpty)).toBeInTheDocument();
});

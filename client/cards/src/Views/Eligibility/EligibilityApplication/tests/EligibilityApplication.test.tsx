
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EligibilityApplication from '../EligibilityApplication';

test('should invoke call back when user submit form', async () => {

    const setEligibleCards = jest.fn();
    const newProductApply = jest.fn();
    const wrapper = render(<EligibilityApplication newProductApply={newProductApply} setEligibleCards={setEligibleCards} />);

    fireEvent.click(wrapper.getByText("Submit"));
    await waitFor(() => expect(screen.getByTestId("FINISHED")).toBeInTheDocument());

    expect(setEligibleCards).toBeCalledTimes(1);
    expect(newProductApply).toBeCalledTimes(1);

});

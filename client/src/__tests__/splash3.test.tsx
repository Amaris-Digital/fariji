import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Splash3, { type Splash3Props } from '../components/Splash3';

describe('Splash3', () => {
  const mockOnNext = jest.fn();

  const defaultProps: Splash3Props = {
    onNext: mockOnNext,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onNext when Next button is clicked', () => {
    const { getByText } = render(React.createElement(Splash3, defaultProps));
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalled();
  });
});

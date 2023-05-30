import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Splash3, type SplashProps } from '../splash/Splash';

describe('Splash3', () => {
  const mockOnNext = jest.fn();

  const defaultProps: SplashProps = {
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

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Splash2, { Splash2Props } from '../components/Splash2';

describe('Splash2', () => {
  const mockOnNext = jest.fn();

  const defaultProps: Splash2Props = {
    onNext: mockOnNext,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onNext when Next button is clicked', () => {
    const { getByText } = render(React.createElement(Splash2, defaultProps));
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalled();
  });
});

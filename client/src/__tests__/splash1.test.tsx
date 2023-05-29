import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Splash1, { type Splash1Props } from '../components/Splash1';

describe('Splash1', () => {
  const mockOnNext = jest.fn();

  const defaultProps: Splash1Props = {
    onNext: mockOnNext,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onNext when Next button is clicked', () => {
    const { getByText } = render(React.createElement(Splash1, defaultProps));
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login';
import {mockNavigate} from '../../utils/navigation';
import {mutations} from "../../graphql/auth";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
     useNavigate: () => mockNavigate,
}));
jest.mock('../../assets/images/auth/login/far2.png', () => 'test-image');
jest.mock('../../assets/logo.svg', () => 'test-logo');
jest.mock('../../utils/config', () => ({
    serverURL: 'http://localhost:3000/graphql',
    storeToken: jest.fn(),
}));

global.alert = jest.fn();

describe('Login component', () => {

  // broken test
  test('should sign in successfully', async () => {
    const mockToken: string = 'mockToken'
    const mocks = [
      {
        request: {
          query: mutations.LOGIN,
          variables: {
            phone: 'mockPhone',
            password: 'mockPassword',
          },
        },
        result: {
          data: {
            signIn: {
              token: mockToken,
            },
          },
        },
      },
    ]

    const { getByLabelText, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </MemoryRouter>
      </MockedProvider>,
    )

    // Enter phone number and password
    fireEvent.change(getByLabelText('Phone number'), {
      target: { value: 'mockPhone' },
    })
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'mockPassword' },
    })

    // Click the Sign In button
    fireEvent.click(getByText('Sign In'))

    // Wait for the sign-in process to complete
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })
  })

  test('should display error message for wrong credentials', async () => {
    const mocks = [
      {
        request: {
          query: mutations.LOGIN,
          variables: {
            phone: 'mockPhone',
            password: 'mockPassword',
          },
        },
        result: {
          data: {
            signIn: {
              token: null,
            },
          },
        },
      },
    ]

    const { getByLabelText, getByText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </MemoryRouter>
      </MockedProvider>,
    )

    // Enter phone number and password
    fireEvent.change(getByLabelText('Phone number'), {
      target: { value: 'mockPhone' },
    })
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'mockPassword' },
    })

    // Click the Sign In button
    fireEvent.click(getByText('Sign In'))

    // Wait for the sign-in process to complete
    await waitFor(() => {
      expect(queryByText('You have entered a wrong phone number or password')).toBeInTheDocument()
    })
  })
})

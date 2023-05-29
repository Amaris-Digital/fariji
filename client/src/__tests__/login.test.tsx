import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Login, { SIGN_IN_MUTATION } from '../pages/Login'

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

global.alert = jest.fn()

describe('Login component', () => {
  
  test('should sign in successfully', async () => {
    const mockToken = 'mockToken'
    const mocks = [
      {
        request: {
          query: SIGN_IN_MUTATION,
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
            <Route path='/login' element={<Login />} />
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
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'))

    // Check if token is stored in localStorage
    expect(localStorage.getItem('token')).toBe(mockToken)
  })

  test('should display error message for wrong credentials', async () => {
    const mocks = [
      {
        request: {
          query: SIGN_IN_MUTATION,
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

    const { getByLabelText, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='/login' element={<Login />} />
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
    await waitFor(() =>
      expect(global.alert).toHaveBeenCalledWith(
        'You have entered a wrong phone number or password',
      ),
    )
  })
})

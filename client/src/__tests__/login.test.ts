import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { MockedProvider, MockedProviderProps } from '@apollo/client/testing'
import { MemoryRouter, Route } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import Login, { SIGN_IN_MUTATION } from '../pages/Login'

const mocks: MockedProviderProps['mocks'] = [
  {
    request: {
      query: SIGN_IN_MUTATION,
      variables: {
        phone: '1234567890',
        password: 'password123',
      },
    },
    result: {
      data: {
        signIn: {
          token: 'mockToken',
        },
      },
    },
  },
]

describe('Login Component', () => {
  test('successful sign-in redirects to home page', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/login']}>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/' render={() => <div>Home Page</div>} />
        </MemoryRouter>
      </MockedProvider>,
    )

    const phoneInput = screen.getByLabelText('Phone number') as HTMLInputElement
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement
    const signInButton = screen.getByRole('button', { name: 'Sign In' })

    fireEvent.change(phoneInput, { target: { value: '1234567890' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    await act(async () => {
      fireEvent.click(signInButton)
      await waitFor(() => screen.getByText('Home Page'))
    })

    expect(localStorage.getItem('token')).toBe('mockToken')
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })

  test('failed sign-in displays error alert', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/login']}>
          <Route path='/login'>
            <Login />
          </Route>
        </MemoryRouter>
      </MockedProvider>,
    )

    const phoneInput = screen.getByLabelText('Phone number') as HTMLInputElement
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement
    const signInButton = screen.getByRole('button', { name: 'Sign In' })

    fireEvent.change(phoneInput, { target: { value: '1234567890' } })
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } })

    await act(async () => {
      fireEvent.click(signInButton)
      await waitFor(() => screen.getByText('You have entered a wrong phone number or password'))
    })

    expect(window.alert).toHaveBeenCalledWith('You have entered a wrong phone number or password')
  })
})

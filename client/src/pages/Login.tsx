import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

export const SIGN_IN_MUTATION = gql`
  mutation signIn($phone: String!, $password: String!) {
    signIn(input: { phone: $phone, password: $password }) {
      token
    }
  }
`

const Login = () => {
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const [signInData, { loading, error }] = useMutation(SIGN_IN_MUTATION)

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()

    signInData({
      variables: { phone, password },
    })
      .then((response) => {
      
        const data = response.data.signIn
        if (data.token) {
          localStorage.setItem('token', data.token)
          navigate('/')
        } else {
          alert('You have entered a wrong phone number or password')
        }
      })
      .catch((error) => {
        console.error('Error signing in:', error)
      })
    setPhone('')
    setPassword('')
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='w-96 p-6 bg-white bg-opacity-70 rounded-2xl shadow-5xl border'>
        <div className='text-center'>
          <h2 className='font-fira text-medium text-4xl text-[var(--secondary)]'>Welcome Again</h2>
          <br />
          <p>Plan for the ones you love</p>
          <br />
          <br />
        </div>

        <form onSubmit={handleSignIn}>
          <label className='text-sm'>Phone number</label>
          <br />
          <input
            type='text'
            value={phone}
            name='phone'
            onChange={(e) => setPhone(e.target.value)}
            placeholder='+254'
            required
            className='w-full rounded placeholder-[var(--primary)]'
          />
          <br />
          <br />
          <label className='text-sm'>Password</label>
          <br />
          <input
            type='password'
            value={password}
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='****'
            required
            className='w-full rounded placeholder-[var(--primary)]'
          />
          <br />
          <p className='text-sm text-[var(--primary)] text-right'>
            <Link to='#'>Forgot Password</Link>
          </p>
          <br />
          <br />
          <input
            type='submit'
            value='Sign In'
            className='bg-[var(--primary)] text-white rounded py-2 px-4 w-full'
            disabled={loading}
          />
        </form>
        <br />
        <p className='font-medium text-sm text-center'>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
        <br />
      </div>
    </div>
  )
}

export default Login

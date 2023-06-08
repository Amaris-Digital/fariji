import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import Logo from '../assets/images/auth/login/far2.png'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Fariji from '../assets/logo.svg'
import {mutations} from "../graphql/auth";


const Login = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const [signInData] = useMutation(mutations.LOGIN, {
    onCompleted: (data) => {
      const token = data.signIn.token
      if (token) {
        localStorage.setItem('token', token)
        navigate('/')
      } else {
        setErrorMessage('You have entered a wrong phone number or password')
      }
    },
    onError: () => {
      setErrorMessage('An error occurred while signing in')
    },
  })

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setIsLoading(true)

    signInData({
      variables: { phone, password },
    }).finally(() => {
      setIsLoading(false)
      setPhone('')
      setPassword('')
    })
  }

  return (
    <div className='flex h-screen'>
      {/* Left side */}
      <div className='hidden sm:flex w-1/2 bg-[#FF9549] justify-center items-center'>
        <div className='text-center'>
          <img src={Logo} alt='logo' />
          <div className='flex justify-center mt-2'>
            <img src={Fariji} alt='logo' className='h-16' /> 
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='w-full sm:w-1/2 flex justify-center items-center'>
        <div className='sm:w-96 p-5'>
          <div className='text-center'>
            <h2 className='font-fira text-medium text-4xl text-[var(--secondary)]'>
              Welcome Again
            </h2>
            <h2 className='mt-3 mb-10 text-[var(--secondary)]'>Plan for the ones you love</h2>
          </div>
          {errorMessage && <p className='bg-[#FF9549] text-white py-2 px-4 mb-4'>{errorMessage}</p>}
          <form onSubmit={handleSignIn}>
            <label htmlFor='phoneNumber' className='text-sm font-inter text-[var(--tertiary)]'>
              Phone number
            </label>
            <input
              type='text'
              id='phoneNumber'
              value={phone}
              name='phone'
              onChange={(e) => {
                setPhone(e.target.value)
              }}
              placeholder='+254'
              required
              className='w-full rounded-lg placeholder-[var(--primary)] mb-5 border-slate-400'
            />
            <label htmlFor='password' className='text-sm font-inter text-[var(--tertiary)] mt-10'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              name='password'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder='****'
              required
              className='w-full rounded-lg placeholder-[var(--primary)] border-slate-400'
            />
            <p className='text-sm text-[var(--primary)] text-right mt-3'>
              <Link to='#'>Forgot Password</Link>
            </p>
            <button
              type='submit'
              className='bg-[var(--primary)] text-white rounded-lg py-2 px-4 w-full mt-12'
              disabled={isLoading}
            >
              {isLoading ? (
                <div className='flex justify-center'>
                  <AiOutlineLoading3Quarters className='animate-spin' />
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          <p className='font-medium text-sm text-center mt-5 text-[var(--tertiary-dark)]'>
            Already have an account? <Link to='/registration'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

import React from 'react'
import { AppLoader } from '../utils/AppLoader'
import { Link } from 'react-router-dom'
import { AppError } from '../utils/AppError'
import { swipe, swipeBack } from '../../pages/Registration'

export const SignUpTwo = ({ handleSubmit, setUser, user, isLoading, error }: any): JSX.Element => {
  return (
    <div className='flex flex-col h-[100vh] justify-between'>
      <div className='flex justify-between p-4'>
        <div className='flex gap-1'>
          Step 2<span className='text-[#626262]'>of 4</span>
        </div>
        <div className='text-[#2A6476] cursor-pointer' onClick={swipeBack}>
          Exit
        </div>
      </div>

      <div className='justify-center pb-12 flex gap-2 flex-col text-center items-center'>
        <p className='w-[298px] text-3xl font-bold'>Create Account</p>
        <p className='w-[285px] text-[#3F3F3F]'>Plan for the ones you love</p>
        <p className='w-[285px] text-center text-[#3F3F3F]'>
          Tell us a bit about yourself for a more personalised and meaningful experience.
        </p>
      </div>

      {<AppError error={error} />}

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center justify-center'>
        <div>
          <p className='text-[#A6A6A6]'>Phone Number</p>
          <input
            type='text'
            name='phone'
            onInput={function (e) {
              setUser({ ...user, phone: (e.target as any).value })
            }}
            className='w-[312px]  text-[#2A6476] placeholder-[#2A6476] border-[#A6A6A6] focus:outline-none h-[41px]'
            style={{
              borderRadius: '8px',
            }}
            placeholder='+254'
          />
        </div>

        <div>
          <div className='flex justify-between text-[#A6A6A6]'>
            <p>Date Of Birth</p>
            <p>DD/MM/YY</p>
          </div>
          <input
            type='date'
            name='date'
            className='w-[312px] text-[#2A6476] placeholder-[#2A6476] border-[#A6A6A6] focus:outline-none h-[41px]'
            onInput={function (e) {
              setUser({ ...user, dateOfBirth: (e.target as any).value })
            }}
            style={{
              borderRadius: '8px',
            }}
          />
        </div>

        <div>
          <p className='text-[#A6A6A6]'>Set a new password</p>
          <input
            type='password'
            name='password'
            className='w-[312px]  text-[#2A6476] placeholder-[#2A6476] border-[#A6A6A6] focus:outline-none h-[41px]'
            onInput={function (e) {
              setUser({ ...user, password: (e.target as any).value })
            }}
            style={{
              borderRadius: '8px',
            }}
            placeholder='****'
          />
        </div>

        <div className='justify-center pb-12 flex gap-4 flex-col text-center items-center'>
          <button
            className='w-[312px] h-[41px] text-white bg-[#2A6476]'
            style={{
              borderRadius: '8px',
            }}
            type='submit'
            onClick={() => {
              if (user.phone === '' && user.dateOfBirth === '' && user.password === '') {
                alert('Please fill in all fields')
              } else {
                swipe()
              }
            }}
          >
            {isLoading ? <AppLoader /> : 'Create Now'}
          </button>
        </div>
      </form>
      <p className=' text-center  mx-auto w-[305px] '>
        By continuing you accept our standard
        <span className='underline px-2'>terms and conditions</span>
        and our <span className=' px-2 underline'>privacy policy.</span>
      </p>
      <p className='text-center flex justify-center pb-12 '>
        Already have an account?&nbsp;
        <Link to='/login'>Sign In</Link>
      </p>
    </div>
  )
}

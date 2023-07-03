import React from 'react'
import { swipeBack } from '../../pages/Registration'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/auth/login/far2.png'
import Fariji from '../../assets/logo.svg'

export const SignUpFour = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className='flex w-full'>
      <div className='flex flex-col h-[100vh] justify-between'>
        <div className='flex justify-between p-4'>
          <div className='flex gap-1'>
            Step 4<span className='text-[#626262]'>of 4</span>
          </div>
          <div className='text-[#2A6476] cursor-pointer' onClick={swipeBack}>
            Exit
          </div>
        </div>

        <div className='justify-center pb-12 flex gap-2 flex-col text-center items-center'>
          <p className='w-[298px] text-3xl font-bold'>What is your main reason for joining?</p>
          <p className='w-[285px] text-center'>This will help us make great recommendations.</p>
        </div>

        <div className='justify-center pb-24 flex gap-4 flex-col text-center items-center'>
          <button
            className='w-[312px] h-[41px] hover:bg-[#2A6476]  hover:text-white hover:border-white focus:bg-[#2A6476]  focus:text-white focus:border-white transition-all duration-500 ease-in-out  border-[#a6a6a6] border-2 bg-white'
            style={{
              borderRadius: '40px',
            }}
          >
            To plan for my departure
          </button>
          <button
            className='w-[312px] h-[41px] hover:bg-[#2A6476] hover:text-white hover:border-white focus:bg-[#2A6476]  focus:text-white focus:border-white transition-all duration-500 ease-in-out  border-[#a6a6a6] border-2 bg-white'
            style={{
              borderRadius: '40px',
            }}
          >
            I am helping to raise funeral expenses
          </button>
        </div>

        <div className='justify-center pb-12 flex gap-4 flex-col text-center items-center'>
          <button
            className='w-[312px] h-[41px] text-white bg-[#2A6476]'
            style={{
              borderRadius: '8px',
            }}
            onClick={(): void => {
              navigate('/home')
            }}
          >
            Continue
          </button>
        </div>
      </div>

      {/* left side */}
      <div className='hidden sm:flex bg-[#FF9549] justify-center items-center flex-1 w-full'>
        <div className='text-center'>
          <img src={Logo} alt='logo' />
          <div className='flex justify-center mt-2'>
            <img src={Fariji} alt='logo' className='h-16' />
          </div>
        </div>
      </div>
    </div>
  )
}

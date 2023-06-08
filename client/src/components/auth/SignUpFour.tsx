import React from 'react'
import { swipe, swipeBack } from '../../pages/Registration'

export const SignUpFour = (): JSX.Element => (
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
        className='w-[312px] h-[41px] border-[#a6a6a6] border-2 bg-white'
        style={{
          borderRadius: '40px',
        }}
      >
        To plan for my departure
      </button>
      <button
        className='w-[312px] h-[41px] border-[#a6a6a6] border-2 bg-white'
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
        onClick={swipe}
      >
        Continue
      </button>
    </div>
  </div>
)

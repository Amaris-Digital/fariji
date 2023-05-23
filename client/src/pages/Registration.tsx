import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'

import { Pagination, Scrollbar } from 'swiper'

const Registration = () => {
  //   const swipe = () => {
  //     const swiper = document.querySelector(".swiper-container").swiper;
  //     swiper.slideNext();
  //   };

  //   const swipeBack = () => {
  //     const swiper = document.querySelector(".swiper-container").swiper;
  //     swiper.slidePrev();
  //   };
  const sigUpOne = (
    <div className='flex flex-col h-[100vh] justify-between'>
      <div className='flex justify-between p-2'>
        <div className='flex gap-1'>
          Step 1<span className='text-[#626262]'>of 4</span>
        </div>
        <div>Exit</div>
      </div>

      <div className='justify-center pb-12 flex gap-2 flex-col text-center items-center'>
        <p className='w-[298px] text-3xl font-bold'>Are you new in Fariji?</p>
        <p className='w-[285px] text-center'>
          Welcome to Fariji, you are one step close to completion. Confirm your entry
        </p>
      </div>

      <div className='justify-center pb-12 flex gap-4 flex-col text-center items-center'>
        <button
          className='w-[312px] h-[41px] text-white bg-[#2A6476]'
          style={{
            borderRadius: '8px',
          }}
        >
          Yes
        </button>
        <button
          className='w-[312px] h-[41px] text-[#2A6476] bg-[#DBDBDB]'
          style={{
            borderRadius: '8px',
          }}
        >
          No
        </button>
      </div>
    </div>
  )

  const signUpTwo = (
    <div className='flex flex-col h-[100vh] justify-between'>
      <div className='flex justify-between p-2'>
        <div className='flex gap-1'>
          Step 2<span className='text-[#626262]'>of 4</span>
        </div>
        <div>Exit</div>
      </div>

      <div className='justify-center pb-12 flex gap-2 flex-col text-center items-center'>
        <p className='w-[298px] text-3xl font-bold'>Create Account</p>
        <p className='w-[285px] text-[#3F3F3F]'>Plan for the ones you love</p>
        <p className='w-[285px] text-center text-[#3F3F3F]'>
          {' '}
          Tell us a bit about yourself for a more personalised and meaningful experience.
        </p>
      </div>

      <div className='justify-center pb-12 flex gap-4 flex-col text-center items-center'>
        <button
          className='w-[312px] h-[41px] text-white bg-[#2A6476]'
          style={{
            borderRadius: '8px',
          }}
        >
          Create Now
        </button>
      </div>
      <p className=' flex  gap-1 text-center '>
        By continuing you accept our standard
        <span className='underline'>terms and conditions</span>
        and our <span className='underline'>privacy policy.</span>
      </p>
      <p className='flex '>
        Already have an account?
        <p>Sign In</p>
      </p>
    </div>
  )

  const signUpThree = (
    <div className='flex flex-col  h-screen'>
      <p>Already have 3</p>
    </div>
  )

  const signUpFour = (
    <div className='flex flex-col  h-screen'>
      <p>Already have o4</p>
    </div>
  )
  return (
    <div>
      <Swiper
        loop={false}
        scrollbar={{
          draggable: true,
          hide: false,
        }}
        modules={[Pagination, Scrollbar]}
        className=' swiper-container'
      >
        <SwiperSlide>{sigUpOne}</SwiperSlide>
        <SwiperSlide>{signUpTwo}</SwiperSlide>
        <SwiperSlide className='flex  justify-center h-screen'>{signUpThree}</SwiperSlide>

        <SwiperSlide className='flex items-center  justify-center h-screen'>
          {signUpFour}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Registration

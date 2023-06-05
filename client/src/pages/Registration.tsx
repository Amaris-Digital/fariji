import  { type FormEvent, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import uploadimage from '../assets/uploadimage.svg'
import { gql, useMutation } from '@apollo/client'


interface User  {
  phone?: string,
  dateOfBirth?: Date,
  password?: string
}

const Registration = () => {
  const REGISTER = gql`
    mutation registerMutation($phone: String!, $dateOfBirth: ISO8601DateTime!, $password: String!) {
      register(phone: $phone, dateOfBirth: $dateOfBirth, password: $password) {
        status
        message
        body
      }
    }
  `

  const [registerUser, { data, loading, error }] = useMutation(REGISTER)
  
  const swipe = () => {
    // @ts-expect-error - Description
    const swiper = document.querySelector('.swiper-container') .swiper
    swiper.slideNext()
  }

  const [user, setUser] = useState<User>()
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!user) return

    if(!user.dateOfBirth) return 
registerUser({
      variables: {
        phone: user.phone,
        dateOfBirth: new Date(user.dateOfBirth).toISOString().substring(0, 10),
        password: user.password,
      },
    })
    console.log(data);
   
  
  }

  const swipeBack = () => {
    // @ts-expect-error - Description
    const swiper = document.querySelector('.swiper-container') .swiper
    swiper.slidePrev()
  }

  if (!loading && !error && data !== undefined) {
   
    console.log(data.register.body.authToken)
  }
 

  const sigUpOne = (
    <div className='flex flex-col h-[100vh] justify-between'>
      <div className='flex justify-between p-4'>
        <div className='flex gap-1'>
          Step 1<span className='text-[#626262]'>of 4</span>
        </div>
        <div className='text-[#2A6476] cursor-pointer' onClick={swipeBack}>
          Exit
        </div>
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
          onClick={swipe}
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
          {' '}
          Tell us a bit about yourself for a more personalised and meaningful experience.
        </p>
      </div>

      <form  onSubmit={handleSubmit}className='flex flex-col gap-4 items-center justify-center' >
        <div>
          <p className='text-[#A6A6A6]'>Phone Number</p>
          <input
            type='text'
            name='phone'
            onInput={ function(e){ 
              setUser({...user, phone: (e.target as any).value})
              
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
            onInput={ function(e){setUser({ ...user, dateOfBirth: (e.target as any).value })}}
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
            onInput={ function(e){ setUser({ ...user, password: (e.target as any).value })}}
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
         
        >
          Create Now
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
        <p>Sign In</p>
      </p>
    </div>
  )

  const signUpThree = (
    <div className='flex flex-col h-[100vh] justify-between'>
      <div className='flex justify-between p-4'>
        <div className='flex gap-1'>
          Step 3<span className='text-[#626262]'>of 4</span>
        </div>
        <div className='text-[#2A6476] cursor-pointer' onClick={swipeBack}>
          Exit
        </div>
      </div>

      <div className='justify-center pb-24 flex gap-2 flex-col text-center items-center'>
        <p className='w-[298px] text-3xl font-bold'>Add a Photo</p>
        <p className='w-[285px] text-center'>Add a photo so other members know who you are</p>
      </div>

      <div className='justify-center flex gap-2 flex-col text-center items-center h-[139px] w-[139px] mx-auto bg-[#DBDBDB] rounded-full'>
        <img
          src={uploadimage}
          alt='uploadimage'
          className='w-[56px] h-[56px] flex mx-auto justify-center items-center'
        />
      </div>

      <div className='justify-center pb-24 flex gap-4 flex-col text-center items-center'>
        <button
          className='w-[312px] h-[41px] text-white bg-[#2A6476]'
          style={{
            borderRadius: '8px',
          }}
        >
          Upload Photo
        </button>
        <p className='text-[#2A6476] cursor-pointer' onClick={swipe}>
          Skip
        </p>
      </div>
    </div>
  )

  const signUpFour = (
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
  return (
    <div>
      <Swiper loop={false} className=' swiper-container'>
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

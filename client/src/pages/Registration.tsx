import  React, { type FormEvent, useState} from 'react'
import { useMutation, gql } from '@apollo/client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import {SigUpOne} from "../components/auth/SignUpOne";
import {SignUpTwo} from "../components/auth/SignUpTwo";
import {SignUpThree} from "../components/auth/SignUpThree";
import {SignUpFour} from "../components/auth/SignUpFour";

interface User  {
  phone?: string,
  dateOfBirth?: Date,
  password?: string
}

export const Registration = ():JSX.Element => {
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
            }
        }).then(r => {
            console.log(r)
        })}

    if (!loading && !error && data !== undefined) {
        console.log(data.register.body.authToken)
    }

  return (
      <Swiper loop={false} className='swiper-container'>
        <SwiperSlide>{<SigUpOne/>}</SwiperSlide>
        <SwiperSlide>{<SignUpTwo handleSubmit={handleSubmit} user={user} setUser={setUser}/>}</SwiperSlide>
        <SwiperSlide className='flex  justify-center h-screen'>{<SignUpThree/>}</SwiperSlide>
        <SwiperSlide className='flex items-center  justify-center h-screen'>{<SignUpFour/>}</SwiperSlide>
      </Swiper>
  )
}

// @ts-expect-error - Possible null
export const swipeBack = () => document.querySelector('.swiper-container')?.swiper.slidePrev()
// @ts-expect-error - Possible null
export const swipe = () => document.querySelector('.swiper-container')?.swiper.slideNext()
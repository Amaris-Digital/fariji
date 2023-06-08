import React, {type FormEvent, useEffect, useState} from 'react'
import { useMutation } from '@apollo/client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import {SignUpOne} from "../components/auth/SignUpOne";
import {SignUpTwo} from "../components/auth/SignUpTwo";
import {SignUpThree} from "../components/auth/SignUpThree";
import {SignUpFour} from "../components/auth/SignUpFour";
import {mutations} from "../graphql/auth";
import {storeToken} from "../utils/config";
import {useNavigate} from "react-router-dom";
import {formatErrors} from "../components/utils/AppError";

interface User  {
  phone?: string,
  dateOfBirth?: Date,
  password?: string
}

export const Registration = ():JSX.Element => {
    const [registerUser, { data, loading, error }] = useMutation(mutations.REGISTER)
    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        if(!user) return
        if(!user.dateOfBirth) return
        void registerUser({
            variables: {
                phone: user.phone,
                dateOfBirth: new Date(user.dateOfBirth).toISOString().substring(0, 10),
                password: user.password,
            }
        })
    }

    useEffect(() => {
        if(data?.register.body.authToken){
            storeToken(data.register.body.authToken)
            navigate('/')
        }
    }, [data?.register.body.authToken, navigate, user, error])

  return (
      <Swiper loop={false} className='swiper-container'>
        <SwiperSlide>{<SignUpOne/>}</SwiperSlide>
        <SwiperSlide>
            {<SignUpTwo
                handleSubmit={handleSubmit}
                user={user}
                setUser={setUser}
                isLoading={loading}
                error={formatErrors(data?.register.body.errors)}/>}
        </SwiperSlide>
        <SwiperSlide className='flex  justify-center h-screen'>{<SignUpThree/>}</SwiperSlide>
        <SwiperSlide className='flex items-center  justify-center h-screen'>{<SignUpFour/>}</SwiperSlide>
      </Swiper>
  )
}

// @ts-expect-error - Possible null
export const swipeBack = (): void => document.querySelector('.swiper-container')?.swiper.slidePrev()
// @ts-expect-error - Possible null
export const swipe = (): void => document.querySelector('.swiper-container')?.swiper.slideNext()


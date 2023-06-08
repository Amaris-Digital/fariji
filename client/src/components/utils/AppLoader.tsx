import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import React from 'react'

export const AppLoader = (): JSX.Element => {
  return (
    <div className='flex justify-center'>
      <AiOutlineLoading3Quarters className='animate-spin' />
    </div>
  )
}

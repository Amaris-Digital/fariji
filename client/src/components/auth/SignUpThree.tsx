import uploadimage from '../../assets/uploadimage.svg'
import React from 'react'
import { swipe, swipeBack } from '../../pages/Registration'

export const SignUpThree = (): JSX.Element => (
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
      <input type='file' accept='image/*' style={{ display: 'none' }} id='uploadButton' />
      <label
        htmlFor='uploadButton'
        role='button'
        name='Upload Photo'
        className='w-[312px] h-[41px] flex justify-center items-center text-white bg-[#2A6476]'
        style={{
          borderRadius: '8px',

          cursor: 'pointer',
        }}
      >
        Upload Photo
      </label>

      <p className='text-[#2A6476] cursor-pointer' onClick={swipe}>
        Skip
      </p>
    </div>
  </div>
)

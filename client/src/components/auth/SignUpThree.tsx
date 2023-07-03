import uploadimage from '../../assets/uploadimage.svg'
import React, { useState } from 'react'
import { swipe, swipeBack } from '../../pages/Registration'
import Logo from '../../assets/images/auth/login/far2.png'
import Fariji from '../../assets/logo.svg'

export const SignUpThree = ({ user }: any): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  // const [uploadProfilePhoto] = useMutation(mutations.UPLOAD_PROFILE_PHOTO)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0] ?? null
    setSelectedFile(file)
  }

  /* const handleUpload = (): void => {
    if (!selectedFile) {
      return
    }

    void uploadProfilePhoto({
      variables: {
        avatar: selectedFile,
        phone: user.phone,
      },
    })
  } */

  return (
    <div className='flex w-full'>
      {/* left side */}
      <div className='hidden sm:flex bg-[#FF9549] justify-center items-center flex-1 w-full'>
        <div className='text-center'>
          <img src={Logo} alt='logo' />
          <div className='flex justify-center mt-2'>
            <img src={Fariji} alt='logo' className='h-16' />
          </div>
        </div>
      </div>

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
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt='avatar'
              className='w-[56px] h-[56px] flex mx-auto justify-center items-center'
            />
          ) : (
            <img
              src={uploadimage}
              alt='uploadimage'
              className='w-[56px] h-[56px] flex mx-auto justify-center items-center'
            />
          )}
        </div>

        <div className='justify-center pb-24 flex gap-4 flex-col text-center items-center'>
          <input
            type='file'
            accept='.png, .jpg, .jpeg'
            style={{ display: 'none' }}
            id='uploadButton'
            role='button'
            name='Select Photo'
            onChange={handleFileChange}
          />
          <label
            htmlFor='uploadButton'
            role='button'
            className='w-[312px] h-[41px] flex justify-center items-center text-white bg-[#2A6476]'
            style={{
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Upload Photo
          </label>
          <button
            onClick={swipe}
            className='w-[312px] h-[41px] flex justify-center items-center text-white bg-[#2A6476] rounded-md'
            style={{
              cursor: selectedFile ? 'pointer' : 'default',
              opacity: selectedFile ? 1 : 0.5,
            }}
            disabled={!selectedFile}
          >
            Submit
          </button>
          <p className='text-[#2A6476] cursor-pointer' onClick={swipe}>
            Skip
          </p>
        </div>
      </div>
    </div>
  )
}

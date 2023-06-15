import React from 'react'

export const AppError = ({ error }: any): JSX.Element => {
  return error && <div className='bg-[#FF9549] text-white py-2 px-4 mb-4'>{error}</div>
}

// format array of errors into list items
export const formatErrors = (errors: string[] | undefined): JSX.Element | undefined => {
  return (
    errors && (
      <ol type={'i'}>
        {errors?.map((error, i) => (
          <li className={'mt-1'} key={i}>
            {error}
          </li>
        ))}
      </ol>
    )
  )
}

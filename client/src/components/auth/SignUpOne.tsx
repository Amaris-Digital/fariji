import React from "react";
import {swipe, swipeBack} from "../../pages/Registration";

export const SigUpOne = (): JSX.Element => (
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
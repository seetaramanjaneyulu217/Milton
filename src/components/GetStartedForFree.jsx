import React from 'react'
import women from '../assets/women.webp'

const GetStartedForFree = () => {
    return (
        <div data-aos="fade-up" className='pb-36'>
            <div className='flex flex-col justify-center items-center pb-12'>
                <div className='bg-[#F1F2F4] text-[#2E2E2E] text-xs md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-1 rounded-3xl'>
                    <p>Last call Baby! 🚀</p>
                </div>

                <div className='px-9 pt-4'>
                    <h1 className='text-[#2D2D2D] text-center text-6xl font-plusJakartaSans font-veryhigh'>Ready to start?</h1>
                </div>
            </div>

            <div className='flex justify-center text-center pb-7'>
                <p className='text-[#6B6B78] w-2/5 font-plusJakartaSans font-medium text-lg'>Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. </p>
            </div>

            <div className='flex flex-col items-center justify-center pb-7'>
                <button className='rounded-xl px-12 py-4 bg-[#2E2E2E] font-plusJakartaSans text-white'>Get started, it's free</button>
            </div>

            <div className='flex justify-center px-44'>
                <div className='flex flex-col justify-end -mb-16 md:-mb-12'>
                    <img src={women} className='h-20 w-20' />
                </div>
                <div className='mb-0 w-2/5 px-4 py-4 items-center rounded-t-2xl rounded-br-2xl rounded-bl-md bg-[#FEE9CB]'>
                    <p className='text-[#2E2E2E] font-plusJakartaSans font-high text-base pb-3'>I never missed a call again, the AI-drivenfeature is a game changer for me! </p>
                    <p className='text-[#6B6B78] font-plusJakartaSans font-high'>Adam, Solo founder</p>
                </div>
            </div>
        </div>
    )
}

export default GetStartedForFree
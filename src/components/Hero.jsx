import React from 'react'
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import star from '../assets/star.svg'
import body from '../assets/body.webp'


const Hero = () => {
    return (
        <>
            <div className='pt-20 pb-24 flex flex-col justify-center items-center' data-aos="fade-up">
                <div className='bg-[#F1F2F4] text-[#2E2E2E] text-sm md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-1 rounded-3xl'>
                    An other way to manage time
                </div>

                <div className='text-[#2D2D2D] text-4xl md:text-7xl text-center w-72 md:w-[850px] leading-[1.25] font-plusJakartaSans font-veryhigh pb-9'>
                    Your new favorite calendar 🗓️ app
                </div>

                <div className='text-[#6B6B78] text-center font-plusJakartaSans font-medium md:text-xl w-[330px] md:w-[550px] pb-9'>
                    Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.
                </div>

                <div className='pb-8'>
                    <button className='bg-[#2E2E2E] text-[#FEFEFE] hover:scale-110 hover:transition hover:ease-in rounded-2xl px-8 py-4 font-plusJakartaSans font-high'>Get started, it's free</button>
                    <p className='text-[#6B6B78] text-xs font-plusJakartaSans pt-2'>Free 14 days trials,no credit card needed</p>
                </div>

                <div className='flex'>
                    <div className='flex pr-4'>
                        <div className='border-2 border-white rounded-full p-[1px] flex justify-center'>
                            <img src={image1} />
                        </div>

                        <div className='border-2 border-white bg-white rounded-full p-[1px] flex justify-center -ml-4'>
                            <img src={image2} />
                        </div>

                        <div className='border-2 border-white bg-white rounded-full p-[1px] flex justify-center -ml-4'>
                            <img src={image3} />
                        </div>

                        <div className='border-2 border-white bg-white rounded-full p-[1px] flex justify-center -ml-4'>
                            <img src={image4} />
                        </div>

                        <div className='border-2 border-white bg-white rounded-full p-[1px] flex justify-center -ml-4'>
                            <img src={image5} />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            &nbsp;
                            <p className='text-base font-semibold leading-4'>5.0</p>
                        </div>

                        <p className='text-[#475467] text-sm font-medium'>From 200+ happy users</p>
                    </div>
                </div>
            </div>


            <div data-aos="zoom-in" className='border border-gray-[#dfdede] rounded-xl mx-12 lg:mx-40'>
                <img src={body} />
            </div>
        </>
    )
}

export default Hero
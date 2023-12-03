import React from 'react'
import Logo from '../assets/logo.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
    return (
        <>
            <div className='bg-[#F1F2F4] flex flex-col lg:flex-row px-52 py-16'>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex'>
                        <img src={Logo} className='border-2 rounded-lg p-1 border-[#f1eeee] bg-white' />
                        <p className='font-plusJakartaSans font-high text-2xl text-[#2E2E2E]'>Milton</p>
                    </div>

                    <p className='text-[#6B6B78] font-plusJakartaSans font-medium '>A short text explaining why my startup is so cool</p>
                    <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>© My super start-up</p>

                    <div className='flex items-center gap-4'>
                        <img src={twitter} />
                        <img src={facebook} />
                        <img src={linkedin} />
                    </div>
                </div>

                <div className='ml-16'>
                    <div className='pb-4'>
                        <p className='text-[#2D2D2D] font-plusJakartaSans font-high text-xl'>Products</p>
                    </div>

                    <div className='flex flex-col gap-y-3'>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Features</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Testimonials</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Pricing</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>FAQs</p>
                    </div>
                </div>

                <div className='ml-16'>
                    <div className='pb-4'>
                        <p className='text-[#2D2D2D] font-plusJakartaSans font-high text-xl'>Resources</p>
                    </div>

                    <div className='flex flex-col gap-y-3'>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Change log</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Help center</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Blog</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Contact</p>
                    </div>
                </div>

                <div className='ml-16'>
                    <div className='pb-4'>
                        <p className='text-[#2D2D2D] font-plusJakartaSans font-high text-xl'>Others</p>
                    </div>

                    <div className='flex flex-col gap-y-3'>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Privacy</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Terms</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Affiliation</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Press</p>
                    </div>
                </div>

                <div className='ml-16'>
                    <div className='pb-4'>
                        <p className='text-[#2D2D2D] font-plusJakartaSans font-high text-xl'>From the blog</p>
                    </div>

                    <div className='flex flex-col gap-y-3'>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Organizing Your Calendar for Enhanced Productivity and Focus</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</p>
                        <p className='text-[#6B6B78] font-plusJakartaSans font-medium'>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
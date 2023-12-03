import React from 'react'
import tick from '../assets/tick.svg'

const PlanCard = ({ plan }) => {
    return (
        <>
                <div className='bg-white p-8 w-1/3 rounded-2xl py-12'>
                    <div className='pb-6'>
                        <div className='text-xs md:text-base font-plusJakartaSans font-high text-center inline-block px-7 py-2 rounded-3xl bg-[#F1F2F4] text-[#2E2E2E]'>
                            <p>{plan.type}</p>
                        </div>

                        <div>
                            <p className='pt-3 text-[#6B6B78] text-base font-plusJakartaSans'>So you can see how incredible our tool is.</p>
                        </div>
                    </div>

                    <div className='pb-7'>
                        <div className='md:text-base font-plusJakartaSans font-high text-center flex'>
                            <p className='text-6xl'>{plan.cost}</p><div className='text-[#79797A] flex flex-col justify-end'><p>/mo</p></div>
                        </div>

                        <div>
                            <p className='pt-1 text-[#333333] font-plusJakartaSans'>{plan.ever}</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center pb-7'>
                        <button className='rounded-2xl px-28 py-3 bg-[#2E2E2E] text-white'>Get started</button>
                        <p className='font-plusJakartaSans text-xs pt-3'>{plan.credit_required}</p>
                    </div>

                    <div className='pb-2'>
                        <p className='text-[#333333]'>{plan.given}</p>
                    </div>
                    
                    {
                        plan.features.map(feature => {
                            return (
                                <div className='flex items-center gap-2  pb-3'>
                                    <img src={tick} />
                                    <p className='text-base font-plusJakartaSans text-[#6B6B78]'>{feature}</p>
                                </div>
                            )
                        })
                    }
                </div>
        </>
    )
}

export default PlanCard
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import plans from '../exports/Plans'
import PlanCard from './PlanCard'

const Plans = () => {

    const [plan, setPlan] = useState("monthly")

    return (
        <>
            <div data-aos="fade-up" className='flex flex-col justify-center items-center'>
                <div className='bg-[#F1F2F4] text-[#2E2E2E] text-xs md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-1 rounded-3xl'>
                    <p>Pricing and plans 💰</p>
                </div>

                <div className='px-9 pb-16 pt-4'>
                    <h1 className='text-[#2D2D2D] text-center text-6xl font-plusJakartaSans font-veryhigh'>Find the best plan for your needs</h1>
                </div>
            </div>

            <div data-aos="fade-up" className='flex justify-center items-center ml-28 gap-4 font-plusJakartaSans font-high pb-16'>
                <div className='flex gap-16 text-xs md:text-base font-plusJakartaSans font-high text-center px-5 py-1 rounded-lg bg-[#F1F2F4] text-[#2E2E2E]'>
                    <NavLink onClick={() => setPlan("monthly")} className={plan === "monthly" ? 'border-2 border-white bg-white px-7 py-1 rounded-xl' : 'pt-1.5'}>Monthly</NavLink>
                    <NavLink onClick={() => setPlan("yearly")} className={plan === "yearly" ? 'border-2 border-white bg-white px-7 py-1 rounded-xl' : 'pt-1.5'}>Annually</NavLink>
                </div>
                ✨ save 30%
            </div>

            <div data-aos="fade-up" className='px-40 flex gap-7 pb-52'>
                {
                    plans.map(plan => {
                        return (
                            <PlanCard key={plan.id} plan={plan} />
                        )
                    })
                }
            </div>

            {/* <PlanCard/> */}
        </>
    )
}

export default Plans
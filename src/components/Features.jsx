import React from 'react'
import features from '../exports/Features'
import FeaturesDisplay from './FeaturesDisplay'

const Features = () => {
    
    return (
        <div className='pt-48 pb-44'>
            <div className='flex flex-col items-center justify-center' data-aos="fade-up">
                <div className='bg-[#F1F2F4] text-[#2E2E2E] text-xs md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-1 rounded-3xl'>
                    <p>Our main features 🦸🏼</p>
                </div>

                <div className='pb-20 lg:pb-28'>
                    <h1 className='text-[#2E2E2E] font-plusJakartaSans font-veryhigh text-3xl md:text-5xl lg:text-6xl px-24 text-center pt-2'>Discover your new superpowers</h1>
                </div>
            </div>

            {
                features.map((feature, index) => {
                    return (
                        <FeaturesDisplay key={feature.id} feature={feature} index={index} length={features.length} />
                    )
                })
            }
        </div>
    )
}

export default Features
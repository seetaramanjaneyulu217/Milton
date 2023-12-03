import React from 'react'
import otherServices from '../exports/OtherServices'
import MoreFeaturesTemplate from './MoreFeaturesTemplate'

const MoreFeatures = () => {
    return (
        <>
            <div data-aos="fade-up" className='flex flex-col justify-center items-center'>
                <div className='bg-[#F1F2F4] text-[#2E2E2E] text-sm md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-1 rounded-3xl'>
                    <p>And so much more... 💼</p>
                </div>

                <div className='px-9 pb-16 pt-4'>
                    <h1 className='text-[#2D2D2D] text-center font-plusJakartaSans font-veryhigh text-3xl'>Our features to make your life easier</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 lg:px-32 pb-32'>
                    {
                        otherServices.map(service => {
                            return (
                                <MoreFeaturesTemplate key={service.id} service={service} />
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default MoreFeatures
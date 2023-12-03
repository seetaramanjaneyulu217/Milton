import React from 'react'

const MoreFeaturesTemplate = ({ service }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center pb-24'>
                <div className='flex flex-col justify-start items-start'>
                    <div className='bg-[#F1F2F4] px-28 py-11 mb-5 rounded-2xl'>
                        <img src={service.image} className='h-44 w-44' />
                    </div>

                    <div style={{ backgroundColor: `${service.heading_color}` }} className='text-[#2E2E2E] text-sm md:text-base font-plusJakartaSans font-high text-center inline-block justify-start px-5 py-2 rounded-3xl'>
                        <p>{service.heading}</p>
                    </div>
                </div>

                <div className='pt-5 text-[#6B6B78] font-plusJakartaSans pr-8 pl-4 inline-block justify-start items-start'>
                    <p>{service.paragraph}</p>
                </div>
            </div>
        </>
    )
}

export default MoreFeaturesTemplate
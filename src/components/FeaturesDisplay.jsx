import React from 'react'

const FeaturesDisplay = ({ feature, index, length }) => {

    return (
        <>
            {
                index % 2 === 0
                    ? <div className={`flex flex-col ${ index != length - 1 ? 'pb-36' : ''} lg:flex-row`}>
                        <div data-aos="zoom-in" className='px-10 md:flex md:flex-col md:justify-start md:items-start md:px-72 lg:px-40'>
                            <div style={{ backgroundColor: `${feature.top_text_color}` }} className={`text-[#2E2E2E] text-sm md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-2 rounded-3xl`}>
                                <p>{feature.top_text}</p>
                            </div>

                            <div className='pt-5 pb-9'>
                                <h1 className='text-[#2E2E2E] font-plusJakartaSans font-veryhigh text-2xl lg:text-5xl'>{feature.heading}</h1>
                            </div>

                            <div className='pb-11'>
                                <p className='text-[#6B6B78] font-plusJakartaSans text-xl leading-8'>{feature.paragraph}</p>
                            </div>

                            <div data-aos="fade-up" className='flex flex-row-reverse justify-end'>
                                <div className='mb-0 w-1/2 md:w-4/5 lg:w-1/2 px-4 py-4 items-center rounded-t-2xl rounded-br-2xl rounded-bl-md bg-[#2E2E2E]'>
                                    <p className='text-[#FEFEFE] font-plusJakartaSans text-base pb-3'>{feature.card_text}</p>
                                    <p className='text-[#90909E] font-plusJakartaSans font-high'>{feature.human_about}</p>
                                </div>

                                <div className='flex flex-col justify-end -mb-16 md:-mb-12'>
                                    <img src={feature.human_image} className='h-20 w-20' />
                                </div>
                            </div>
                        </div>

                        {/* For main image */}
                        <div data-aos="flip-left">
                            <img src={feature.main_image} className='px-8 pt-16 md:px-36 lg:px-0 lg:pt-0 lg:h-full lg:w-full' />
                        </div>
                    </div>

                    : <div className={`flex flex-col ${ index != length - 1 ? 'pb-36' : ''} lg:flex-row-reverse`}>
                    <div data-aos="zoom-in" className='px-10 md:flex md:flex-col md:justify-start md:items-start md:px-72 lg:px-40'>
                        <div style={{ backgroundColor: `${feature.top_text_color}` }} className={`text-[#2E2E2E] text-sm md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-2 rounded-3xl`}>
                            <p>{feature.top_text}</p>
                        </div>

                        <div className='pt-5 pb-9'>
                            <h1 className='text-[#2E2E2E] font-plusJakartaSans font-veryhigh text-2xl lg:text-5xl'>{feature.heading}</h1>
                        </div>

                        <div className='pb-11'>
                            <p className='text-[#6B6B78] font-plusJakartaSans text-xl leading-8'>{feature.paragraph}</p>
                        </div>

                        <div className='flex flex-row-reverse justify-start'>
                            <div className='mb-0 w-1/2 md:w-4/5 lg:w-1/2 px-4 py-4 items-center rounded-t-2xl rounded-br-2xl rounded-bl-md bg-[#2E2E2E]'>
                                <p className='text-[#FEFEFE] font-plusJakartaSans text-base pb-3'>{feature.card_text}</p>
                                <p className='text-[#90909E] font-plusJakartaSans font-high'>{feature.human_about}</p>
                            </div>

                            <div className='flex flex-col justify-end -mb-16 md:-mb-12'>
                                <img src={feature.human_image} className='h-20 w-20' />
                            </div>
                        </div>
                    </div>

                    {/* For main image */}
                    <div data-aos="flip-left">
                        <img src={feature.main_image} className='px-8 pt-16 md:px-36 lg:px-0 lg:pt-0 lg:h-full lg:w-full' />
                    </div>
                </div>
            }
        </>
    )
}

export default FeaturesDisplay
import React from 'react'
import './Reviews.css'
import curved_star from '../assets/curved_star.svg'

const ReviewsCard = ({ row, str }) => {
    return (
        <>
            <div className={`md:w-[650px] lg:w-[490px] bg-white rounded-2xl p-5 ${str}`}>
                <div className='flex justify-between pb-3'>
                    <div className='flex gap-2 items-center'>
                        <img src={row.image} />
                        <p className='font-plusJakartaSans font-high text-[#2D2D2D]'>{row.heading}</p>
                    </div>

                    <div className='flex gap-1'>
                        <img src={curved_star} />
                        <img src={curved_star} />
                        <img src={curved_star} />
                        <img src={curved_star} />
                        <img src={curved_star} />
                    </div>
                </div>

                <div className='pb-3'>
                    <p className='font-plusJakartaSans text-base text-[#6B6B78]'>{row.paragraph}</p>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='font-plusJakartaSans font-veryhigh text-[#2D2D2D]'>{row.name}</p>
                    </div>

                    <div>
                        <p className='font-medium font-plusJakartaSans text-[#6B6B78]'>{row.occupation}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewsCard
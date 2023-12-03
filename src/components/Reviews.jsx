import React from 'react'
import ReviewsCard from './ReviewsCard'
import { firstRow, secondRow, thirdRow } from '../exports/AllRows'

const Reviews = () => {
    return (
        <>
            <div data-aos="fade-up" className='flex flex-col justify-center items-center'>
                <div className='bg-[#F1F2F4] text-[#2E2E2E] text-xs md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-1 rounded-3xl'>
                    <p>They already love our products 😍</p>
                </div>

                <div className='px-9 pb-16 pt-4'>
                    <h1 className='text-[#2D2D2D] text-center text-6xl font-plusJakartaSans font-veryhigh'>See what our users say about us</h1>
                </div>
            </div>

            <div className='flex gap-5 overflow-hidden pb-5'>
                {
                    firstRow.map(row => {
                        return (
                            <ReviewsCard key={row.id} row={row} str="moveRight1" />
                        )
                    })
                }
            </div>

            <div className='flex gap-5 overflow-hidden pb-5'>
                {
                    secondRow.map(row => {
                        return (
                            <ReviewsCard key={row.id} row={row} str="moveRight2" />
                        )
                    })
                }
            </div>

            <div className='flex gap-5 overflow-hidden pb-56'>
                {
                    thirdRow.map(row => {
                        return (
                            <ReviewsCard key={row.id} row={row} str="moveRight3" />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Reviews
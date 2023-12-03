import React from 'react'
import FrequentQuestionsCard from './FrequentQuestionsCard'
import questions from '../exports/Questions'

const FrequentlyAsked = () => {
    return (
        <>
            <div data-aos="fade-up" className='flex flex-col justify-center items-center'>
                <div className='bg-[#F1F2F4] text-[#2E2E2E] text-xs md:text-base font-plusJakartaSans font-high text-center inline-block px-5 py-1 rounded-3xl'>
                    <p>Relevant stuff, bla bla 📣</p>
                </div>

                <div className='px-9 pb-16 pt-4'>
                    <h1 className='text-[#2D2D2D] text-center text-6xl font-plusJakartaSans font-veryhigh'>Frequently asked questions</h1>
                </div>
            </div>

            <div data-aos="fade-up" className='pb-40'>
                {
                    questions.map(question => {
                        return (
                            <FrequentQuestionsCard key={question.id} question={question} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default FrequentlyAsked
import React, { useState } from 'react'
import plus from '../assets/plus_circle.svg'
import minus from '../assets/minus_circle.svg'

const FrequentQuestionsCard = ({ question }) => {
    const [openAnswer, setOpenAnswer] = useState(false)
    return (
        <>
            <div className='px-52 pb-10'>
                <div className='bg-[#F1F2F4] p-5 rounded-2xl'>
                    <div className={`flex justify-between ${openAnswer ? 'pb-3' : ''}`}>
                        <p className='font-plusJakartaSans font-high text-xl'>{question.question}</p>
                        <img className='cursor-pointer' onClick={() => setOpenAnswer(!openAnswer ? true : false)} src={!openAnswer ? plus : minus} />
                    </div>

                    <div className={`${openAnswer ? 'block' : 'hidden'}`}>
                        <p className='text-[#6B6B78] text-lg text-medium'>{question.answer}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrequentQuestionsCard
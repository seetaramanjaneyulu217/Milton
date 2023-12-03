import React, { useState } from 'react'
import { Menu, XCircle } from 'lucide-react'
import Logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [openContent, setOpenContent] = useState(false)

  return (
    <>
      <header className='bg-[#FEF9F6] flex justify-between px-4 py-6'>

        {/* For website heading */}
        <div className='flex gap-1 items-center md:pl-8 lg:pl-36'>
          <img src={Logo} className='border-2 rounded-lg p-1 border-[#f1eeee] bg-[#f1eeee]' />
          <p className='font-plusJakartaSans font-high text-[#2E2E2E]'>Milton</p>
        </div>

        <div className='hidden md:flex items-center gap-8'>
          <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >Features</NavLink>
          <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >Testimonials</NavLink>
          <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >Pricing</NavLink>
          <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >FAQs</NavLink>
          <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >Blog</NavLink>
        </div>

        <div className='hidden md:flex gap-3 items-center md:mr-10 lg:pr-36'>
          <button className='bg-[#F1F2F4] text-[#2E2E2E] px-4 py-2 rounded-xl font-plusJakartaSans font-high hover:scale-110 hover:transition hover:ease-in'>Log in</button>
          <button className='bg-[#2E2E2E] text-[#FEFEFE] px-5 py-2 rounded-xl font-plusJakartaSans font-high hover:scale-110 hover:transition hover:ease-in'>Get started</button>
        </div>

        {!openContent ? <Menu onClick={() => setOpenContent(true)} strokeWidth={1.75} size={32} className='cursor-pointer md:hidden' /> : <XCircle onClick={() => setOpenContent(false)} strokeWidth={1.75} size={32} className='cursor-pointer' />}
      </header>

      {
        openContent
          ? <div data-aos="fade-down-left" className='bg-[#FEF9F6] flex flex-col items-center gap-y-5 pb-11'>
            <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >Features</NavLink>
            <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >Testimonials</NavLink>
            <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >Pricing</NavLink>
            <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >FAQs</NavLink>
            <NavLink to='/' className='text-[#6B6B78] hover:text-[#2E2E2E] hover:underline font-plusJakartaSans font-high' >Blog</NavLink>
            <button className='bg-[#F1F2F4] text-[#2E2E2E] px-4 py-2 rounded-xl font-plusJakartaSans font-high'>Log in</button>
            <button className='bg-[#2E2E2E] text-[#FEFEFE] px-5 py-2 rounded-xl font-plusJakartaSans font-high'>Get started</button>
          </div>
          : ''
      }
      <hr />
    </>
  )
}

export default Header
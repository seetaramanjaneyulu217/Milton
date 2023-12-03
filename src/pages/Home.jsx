import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import MoreFeatures from '../components/MoreFeatures'
import Reviews from '../components/Reviews'
import Plans from '../components/Plans'
import FrequentlyAsked from '../components/FrequentlyAsked'
import GetStartedForFree from '../components/GetStartedForFree'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#FEF9F6] min-h-screen'>
      <Hero/>
      <Features/>
      <MoreFeatures/>
      <Reviews/>
      <Plans/>
      <FrequentlyAsked/>
      <GetStartedForFree/>
      <Footer/>
    </div>
  )
}

export default Home
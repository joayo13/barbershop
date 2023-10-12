import React, { useEffect } from 'react'
import BarberServices from '../components/BarberServices'
import SalonServices from '../components/SalonServices'
import scrollToTop from '../helpers/scrollToTop'

function Services() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='min-h-screen'>
        <div className='relative'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-3.jpg'></img>
            <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Our Services</h2>
        </div>
        <section className="w-xl flex flex-col md:flex-row mx-auto justify-center items-center gap-12 px-4 pb-4">
        <BarberServices/>
        <SalonServices/>
      </section>
    </div>
  )
}

export default Services
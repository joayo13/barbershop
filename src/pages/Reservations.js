import React, { useEffect } from 'react'
import BarberShopReservation from '../components/BarberShopReservation'
import scrollToTop from '../helpers/scrollToTop'

function Reservations() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='min-h-screen'>
        <div className='relative'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-2.jpg'></img>
            <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Make A Reservation</h2>
        </div>
        <section>
            <BarberShopReservation/>
        </section>
    </div>
  )
}

export default Reservations
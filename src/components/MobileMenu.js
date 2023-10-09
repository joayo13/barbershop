import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MobileMenu({mobileMenuActive, setMobileMenuActive, slide}) {
  return (
    <div className={mobileMenuActive ? 'requires-no-scroll' : null}>
      <div style={slide === 'left' ? {animation: 'slideLeft 0.5s ease forwards'} : {animation: 'slideRight 0.5s ease forwards'}} className='w-full text-center p-2 md:w-2/5 fixed right-0 top-0 h-full bg-neutral-950 text-neutral-300 z-30'>
          <div className='w-full h-full flex nav flex-col gap-10 items-center justify-center text-2xl'>
            <Link onClick={() => setMobileMenuActive(false)} to='/services'>Services</Link>
            <Link onClick={() => setMobileMenuActive(false)} to='/about'>About</Link>
            <Link onClick={() => setMobileMenuActive(false)} to='/team'>Our Team</Link>
            <Link onClick={() => setMobileMenuActive(false)} to='/contact'>Contact</Link>
            <Link onClick={() => setMobileMenuActive(false)} to='/reservations' className='bg-red-900 px-4 py-2 font-bold'>Book Now</Link>
          </div>
          
      </div>
    </div>
  )
}

export default MobileMenu
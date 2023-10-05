import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MobileMenu({mobileMenuActive, setMobileMenuActive, slide}) {
  return (
    <div className={mobileMenuActive ? 'requires-no-scroll' : null}>
      <div style={slide === 'left' ? {animation: 'slideLeft 0.5s ease forwards'} : {animation: 'slideRight 0.5s ease forwards'}} className='w-full text-center p-2 md:w-2/5 fixed right-0 top-0 h-full bg-neutral-950 text-neutral-300 z-30'>
          <div className='h-16 md:h-32'></div>
          <div className='w-full flex nav flex-col gap-10 items-center justify-evenly text-4xl'>
            <Link onClick={() => setMobileMenuActive(false)} to='/'>Home</Link>
            <Link onClick={() => setMobileMenuActive(false)} to='/'>Reservations</Link>
            <Link onClick={() => setMobileMenuActive(false)} to='/'>About</Link>
            <Link onClick={() => setMobileMenuActive(false)} to='/'>Contact</Link>
          </div>
      </div>
    </div>
  )
}

export default MobileMenu
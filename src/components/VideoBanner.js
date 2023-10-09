import React from 'react'
import barbervid from './videos/barbervid.mp4'
import { Link } from 'react-router-dom'
function VideoBanner() {

  return (
    <div className='relative px-4 h-[75vh] bg-neutral-900 flex flex-col gap-4 justify-center items-center'>
    <h2 className='z-20 text-neutral-300 text-3xl text-center'>Looking Your Best Never Goes Out of Style.</h2>
    <Link to='/reservations' className='bg-red-900 nav z-20 text-neutral-300 text-xl px-4 py-2 font-bold block'>Book Now</Link>
    <video className='absolute opacity-60 top-0 left-0 w-full h-full object-cover' src={barbervid} muted loop autoPlay></video>
    </div>
  )
}

export default VideoBanner
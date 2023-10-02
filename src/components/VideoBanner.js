import React from 'react'
import barbervid from './videos/barbervid.mp4'
function VideoBanner() {

  return (
    <div className='relative h-screen flex justify-center p-20'>
    <h1 className='relative z-10 text-neutral-200 text-6xl'>Billy's Barbershop</h1>
    <video className='absolute opacity-80 top-0 left-0 w-full h-full object-cover' src={barbervid} muted loop autoPlay></video>
    </div>
  )
}

export default VideoBanner
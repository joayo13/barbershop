import React from 'react'
import barbervid from './videos/barbervid.mp4'
function VideoBanner() {

  return (
    <div className='relative h-[75vh] bg-neutral-900 flex justify-center p-20'>
    <video className='absolute opacity-60 top-0 left-0 w-full h-full object-cover' src={barbervid} muted loop autoPlay></video>
    </div>
  )
}

export default VideoBanner
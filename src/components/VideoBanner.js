import React, { useState } from 'react'
import barbervid from './videos/barbervid.mp4'
function VideoBanner() {

  return (
    <div className='relative h-screen'>
    <video className='absolute opacity-90 top-0 left-0 w-full h-full object-cover' src={barbervid} muted loop autoPlay></video>
    </div>
  )
}

export default VideoBanner
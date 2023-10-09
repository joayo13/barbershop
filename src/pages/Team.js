import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import scrollToTop from '../helpers/scrollToTop'

function Team() {
   useEffect(() => {
      scrollToTop()
    },[])
  return (
    <div>
        <div className='relative'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-4.jpg'></img>
            <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Our Team</h2>
        </div>
        <section className='flex flex-wrap justify-center gap-8 py-8 bg-red-950 bg-opacity-10 text-neutral-900'>
             <div className='relative'>
                <h2 className='handwriting absolute z-10 text-7xl -rotate-45'>Sierra</h2>
                <img className='grayscale' src='https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <Link to='/reservations' className='bg-red-900 absolute bottom-4 left-1/2 -translate-x-1/2 nav text-xl text-neutral-300 px-4 py-2 font-bold'>Book Now</Link>
             </div>
             <div className='relative'>
             <h2 className='handwriting absolute z-10 text-7xl -rotate-45'>Billy</h2>
                <img className='grayscale' src='https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <Link to='/reservations' className='bg-red-900 absolute bottom-4 left-1/2 -translate-x-1/2 text-xl nav text-neutral-300  px-4 py-2 font-bold'>Book Now</Link>
             </div>
             <div className='relative'>
             <h2 className='handwriting absolute z-10 text-7xl -rotate-45'>Jonny</h2>
                <img className='grayscale' src='https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <Link to='/reservations' className='bg-red-900 absolute bottom-4 left-1/2 -translate-x-1/2 text-xl nav text-neutral-300 px-4 py-2 font-bold'>Book Now</Link>
             </div>
            </section>
    </div>
  )
}

export default Team
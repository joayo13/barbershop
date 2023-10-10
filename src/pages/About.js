import React, { useEffect } from 'react'
import scrollToTop from '../helpers/scrollToTop'

function About() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='min-h-screen'>
        <div className='relative'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-5.jpg'></img>
            <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">About Us</h2>
        </div>
        <section className="py-20 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90"></h2>
        <img src='https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-1/4 grayscale object-cover hidden md:block" ></img>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">How We Started</p>
        <p className="italic">Ottawa | Since 2023</p>
        <p className="max-w-lg mx-auto text-xl">
        At Billy's Barber, our journey began with a deep passion for the art of barbering and a strong commitment to serving our community. Our story unfolds in a small, modest barbershop where Billy, our founder, honed his craft and built lasting relationships with our very first clients.
        </p>
        <p className="max-w-lg mx-auto text-xl">From those early days, word quickly spread about the quality of service and the welcoming atmosphere we offered. As our reputation grew, so did our barbershop. We expanded our team of skilled barbers, always focusing on delivering precision haircuts and classic shaves that left our clients feeling confident and looking their best.</p>
        <p className="max-w-lg mx-auto text-xl">We proudly uphold the same values that guided us from the start: exceptional craftsmanship, a warm and inviting atmosphere, and an unwavering dedication to helping our clients achieve their desired look and maintain their personal style.</p>
        </div>
        
      </section>
      <section className="py-20 gap-4 flex justify-center relative text-neutral-950 bg-red-950 bg-opacity-10">
        <h2 className="text-9xl hidden lg:block absolute top-64 -left-48 text-red-900 rotate-90">Our Story</h2>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">Who We Are</p>
        <p className="italic">Dedicated Professionals</p>
        <p className="max-w-lg mx-auto text-xl">
        In the heart of our town, a small, unassuming barbershop opened its doors. It was in this modest space that Billy embarked on his journey, armed with his trusty scissors, razors, and a relentless pursuit of perfection. From the very beginning, it was clear that Billy's dedication to his craft set him apart.
        </p>
        <p className="max-w-lg mx-auto text-xl">As time went on, Billy's reputation as a master barber grew. He built not only a thriving business but also strong, lasting relationships with his clients. The barbershop became a place where friends gathered, stories were shared, and laughter echoed through the air.</p>
        <p className="max-w-lg mx-auto text-xl">Today, Billy's Barber has evolved, but our commitment to excellence remains unchanged. We've expanded our team of talented barbers, each handpicked for their skill and dedication to the art of barbering. Our barbers are not just professionals; they're artists, craftsmen who understand that a great haircut is more than just a service - it's an experience.</p>
        </div>
        <img src='https://images.pexels.com/photos/7195808/pexels-photo-7195808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-1/4 object-cover hidden md:block" ></img>
      </section>
    </div>
  )
}

export default About
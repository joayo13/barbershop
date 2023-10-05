import { useEffect, useState } from "react";
import VideoBanner from "./components/VideoBanner";
import MobileMenu from "./components/MobileMenu";
import { Link } from "react-router-dom";
import ImageCarousel from "./components/ImageCarousel";
import logo from './images/logo.png'
import barberChairPhoto from './images/pexels-lisa-fotios-1895701.jpg'

function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
  const [scrollDir, setScrollDir] = useState("scrolling up");

useEffect(() => {
  const threshold = 0;
  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateScrollDir = () => {
    const scrollY = window.scrollY;

    if (Math.abs(scrollY - lastScrollY) < threshold) {
      ticking = false;
      return;
    }
    setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
    lastScrollY = scrollY > 0 ? scrollY : 0;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollDir);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll);
  console.log(scrollDir);

  return () => window.removeEventListener("scroll", onScroll);
}, [scrollDir]);
  return (
    <div className="relative">
      <nav style={scrollDir === 'scrolling up' ? {animation: 'slideDown 200ms ease forwards'} : {animation: 'slideUp 200ms ease forwards'}} className="fixed nav flex w-full items-center justify-between p-4 text-neutral-300 bg-neutral-950 z-40">
      <img src={logo} className="px-2 w-44"></img>
      <ul className="md:flex absolute items-center left-1/2 -translate-x-1/2 gap-8 text-xl hidden">
      
        <Link to='/'>Services</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Our Barbers</Link>
        <Link to='/'>Contact</Link>
        </ul>
        <button style={scrollDir === 'scrolling up' ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => {setMobileMenuActive(!mobileMenuActive); setMobileMenuShowing(true)}}>
        <div className="hb w-8 h-8 md:hidden">
          {mobileMenuShowing ? 
          <><div style={ mobileMenuActive ? {animation: 'hb1 0.3s linear forwards'} : {animation: 'hb1r 0.3s linear forwards'}} className="hb1"></div>
          <div style={ mobileMenuActive ? {animation: 'hb2 0.15s linear forwards'} : {animation: 'hb2r 0.15s linear forwards'}} className="hb2"></div>
          <div style={ mobileMenuActive ? {animation: 'hb3 0.3s linear forwards'} : {animation: 'hb3r 0.3s linear forwards'}} className="hb3"></div></>
          : <><div className="hb1"></div>
          <div className="hb2"></div>
          <div className="hb3"></div></>}
        </div>
        </button>
      </nav>
      
      {mobileMenuShowing ? <>
      {mobileMenuActive ? <MobileMenu mobileMenuActive={mobileMenuActive} slide={'left'} setMobileMenuActive={setMobileMenuActive}/> : <MobileMenu slide={'right'} setMobileMenuActive={setMobileMenuActive}/>}
      </> : null}
      <VideoBanner/>
      <h2 className="text-center py-4 text-6xl text-red-900">Ottawa Barbershop</h2>
      <p className="italic text-center text-xl">We provide the freshest cuts in the city.</p>
      <section className="py-4">
        <ImageCarousel/>
      </section>
      <section className="py-4 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90">About Us</h2>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">Who We are</p>
        <p className="italic">Ottawa | Since 2023</p>
        <p className="max-w-lg mx-auto text-xl">
        Your go-to destination for top-notch grooming and hairstyling services in the heart of Ottawa. Established with a passion for the art of barbering and a commitment to our community, we are dedicated to providing you with an exceptional grooming experience that leaves you looking and feeling your best.
        </p>
        <p className="max-w-lg mx-auto text-xl">Founded in 2023, Billy's Barber was born out of a lifelong dream and dedication to the craft of barbering. Billy, our founder and master barber, envisioned a place where everyone could experience the timeless art of grooming in a comfortable and welcoming environment.</p>
        <p className="max-w-lg mx-auto text-xl">Our team of experienced and skilled barbers is the backbone of our success. We take pride in our talented and diverse staff, each of whom is committed to delivering the highest level of service. Our barbers are not just professionals; they are artists who continually refine their skills and stay at the forefront of industry trends.</p>
        </div>
        <img className="w-1/4 grayscale object-cover hidden md:block" src={barberChairPhoto}></img>
      </section>
    </div>
  );
}

export default App;

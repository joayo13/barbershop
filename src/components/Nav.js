import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import logo from '../images/logo.png';

function Nav() {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)
    const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
    const [scrollDir, setScrollDir] = useState("scrolling up");
  
  useEffect(() => {
    const threshold = 75;
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
    <div>
      <div className='h-20 bg-neutral-950'></div>
      <nav style={scrollDir === 'scrolling up' ? {animation: 'slideDown 200ms ease forwards'} : {animation: 'slideUp 200ms ease forwards'}} className="fixed top-0 nav flex w-full items-center justify-between text-neutral-300 h-20 px-4 bg-neutral-950 z-40">
    <Link onClick={() => setMobileMenuActive(false)} to="/">
    <img src={logo} className="px-2 w-44"></img>
    </Link>
    <ul className="md:flex absolute items-center left-1/2 -translate-x-1/2 gap-8 text-xl hidden">
    
      <Link to='/services'>Services</Link>
      <Link to='/about'>About</Link>
      <Link to='/team'>Our Team</Link>
      <Link to='/contact'>Contact</Link>
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
    </> : null}</div>
  )
}

export default Nav
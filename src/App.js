import { useEffect, useState } from "react";
import VideoBanner from "./components/VideoBanner";
import MobileMenu from "./components/MobileMenu";
import { Link } from "react-router-dom";
import ImageCarousel from "./components/ImageCarousel";

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
      <nav style={scrollDir === 'scrolling up' ? {visibility: 'visible'} : {visibility: 'hidden'}} className="fixed nav flex w-full items-center h-12 text-neutral-300 bg-neutral-950 z-30">
      <h2 className="px-2">BB</h2>
      <ul className="md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-xl hidden">
        <Link to='/'>Home</Link>
        <Link to='/'>Reservations</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        </ul>
      </nav>
      <button style={scrollDir === 'scrolling up' ? {visibility: 'visible'} : {visibility: 'hidden'}} className="z-40 fixed top-2 right-2" onClick={() => {setMobileMenuActive(!mobileMenuActive); setMobileMenuShowing(true)}}>
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
      {mobileMenuShowing ? <>
      {mobileMenuActive ? <MobileMenu mobileMenuActive={mobileMenuActive} slide={'left'} setMobileMenuActive={setMobileMenuActive}/> : <MobileMenu slide={'right'} setMobileMenuActive={setMobileMenuActive}/>}
      </> : null}
      <VideoBanner/>
      <h2 className="text-center py-4 text-6xl text-red-900">Ottawa Barbershop</h2>
      <p className="italic text-center text-xl">We provide the freshest cuts in the city.</p>
      <section className="py-4">
        <ImageCarousel/>
      </section>
    </div>
  );
}

export default App;

import { useState } from "react";
import VideoBanner from "./components/VideoBanner";
import MobileMenu from "./components/MobileMenu";
import { Link } from "react-router-dom";

function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
  return (
    <div>
      <nav className="fixed flex w-full items-center justify-end md:h-32 h-16 px-4 text-neutral-300 z-30">
      <p className="text-neutral-300 text-xl absolute top-2 left-1/2 -translate-x-1/2">Billy's Barber</p>
      <ul className="md:flex absolute bottom-0 left-1/2 -translate-x-1/2 gap-8 text-3xl hidden">
        <Link to='/'>Home</Link>
        <Link to='/'>Reservations</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        </ul>
      <button onClick={() => {setMobileMenuActive(!mobileMenuActive); setMobileMenuShowing(true)}}>
        <div className="hb w-8 h-8 md:w-16 md:h-16 md:hidden">
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
      {mobileMenuActive ? <MobileMenu slide={'left'} setMobileMenuActive={setMobileMenuActive}/> : <MobileMenu slide={'right'} setMobileMenuActive={setMobileMenuActive}/>}
      </> : null}
      <VideoBanner/>
      <h2 className="text-center py-4 text-6xl text-red-900">Ottawa Barbershop</h2>
      <p className="italic text-center text-xl">We provide the freshest cuts in the city.</p>
    </div>
  );
}

export default App;

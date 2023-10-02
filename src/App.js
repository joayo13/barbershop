import { useState } from "react";
import VideoBanner from "./components/VideoBanner";
import MobileMenu from "./components/MobileMenu";


function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
  return (
    <div className="bg-neutral-900">
      <nav className="fixed flex w-full items-center justify-between md:h-32 h-16 px-2 text-neutral-300 z-40">
      <p className="text-6xl">BB</p>
      <button onClick={() => {setMobileMenuActive(!mobileMenuActive); setMobileMenuShowing(true)}}>
        <div className="hb w-8 h-8 md:w-16 md:h-16">
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
    </div>
  );
}

export default App;

import VideoBanner from "./components/VideoBanner";
import ImageCarousel from "./components/ImageCarousel";
import BarberServices from "./components/BarberServices";
import SalonServices from "./components/SalonServices";
import { useEffect } from "react";
import scrollToTop from "./helpers/scrollToTop";

function App() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className="relative">
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
        <img className="w-1/4 grayscale object-cover hidden md:block" src='https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg'></img>
      </section>
      <section className="w-xl pb-4 px-4 bg-red-950 bg-opacity-10 mt-4 flex flex-col md:flex-row mx-auto justify-center items-center gap-12">
        <BarberServices/>
        <SalonServices/>
      </section>
    </div>
  );
}

export default App;

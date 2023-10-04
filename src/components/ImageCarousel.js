import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import caro1 from '../images/caro1.jpg'
import caro2 from '../images/caro2.jpg'
import caro3 from '../images/caro3.jpg'
import caro4 from '../images/caro4.jpg'
function ImageCarousel(props) {  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
    <Carousel
    swipeable={true}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={false}
    infinite={true}
    autoPlay={false}
    keyBoardControl={true}
    customTransition="transform 300ms ease-in-out"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={props?.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    <img src={caro1}></img>
    <img src={caro2}></img>
    <img src={caro3}></img>
    <img src={caro4}></img>
  </Carousel>
  )
}

export default ImageCarousel
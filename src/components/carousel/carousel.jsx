import React from "react";
import "./carousel.css";
import img from "../../assets/images/carousel-img.png";

function Carousel() {
  return (
    <div className="carousel_wrapper container">
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
    </div>
  );
}

export default Carousel;

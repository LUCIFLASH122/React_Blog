import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://ik.imagekit.io/07om3f7hz/imageefgqg.png?updatedAt=1725964410144",
  "https://ik.imagekit.io/07om3f7hz/imageefgqg.png?updatedAt=1725964410144",
  "https://ik.imagekit.io/07om3f7hz/imageefgqg.png?updatedAt=1725964410144",
];
const content = [
  "Your one-stop solution for all your jobs and internship-related queries.",
  "Believe in yourself and do your KARMA (action) SUCCESS will follow you automatically.",
  "We are launching new products very soon, Stay Tuned!",
];

export default function Images() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="parent">
      <Slider {...settings} className="image_carousel">
        {images.map((href, index) => (
          <div key={index} className="carousel-item">
            <img src={href} alt={`Slide ${index + 1}`} />
            <div>
              {content[index] && <p className="cont">{content[index]}</p>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

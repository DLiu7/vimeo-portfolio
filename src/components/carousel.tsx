import React from "react";
import { useState } from "react";
import "./carousel.css";
import movie1 from "../assets/images/wilderpeople.jpeg";
import movie2 from "../assets/images/nichts-passiert.jpeg";
import movie3 from "../assets/images/vice-versa.jpeg";
import movie4 from "../assets/images/fourth-phase.jpeg";
import movie5 from "../assets/images/full-moon.png";

const slides = [
  {
    title: "Hunt for the Wilderpeople",
    description:
      "Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do in the Shadows.",
    image: movie1,
  },
  {
    title: "Nichts passiert / A Decent Man",
    description:
      "A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent, finds himself in a series of moral quandaries.",
    image: movie2,
  },
  {
    title: "Vice Versa",
    description:
      "Come along the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible.",
    image: movie3,
  },
  {
    title: "The Fourth Phase",
    description:
      "From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice.",
    image: movie4,
  },
  {
    title: "Full Moon",
    description:
      "Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.",
    image: movie5,
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={slides[currentIndex].image}
        className="carousel-bg"
        alt="background"
      />
      <button className="left-button" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        <img className="movies" src={slides[currentIndex].image} />
        <div className="carousel-content">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
          <div className="carousel-buttons">
            <button className="buy-now">Buy Now</button>
            <button className="watch-trailer">Watch Trailer</button>
          </div>
        </div>
      </div>
      <button className="right-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

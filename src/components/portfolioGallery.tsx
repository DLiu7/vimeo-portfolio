import React from "react";
import Section from "./section";
import "./portfolioGallery.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

// Stores and holds all the information to be passed as props to Section component

const PortfolioGallery: React.FC = () => {
  const defaultText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus";
  return (
    <div className="portfolio-gallery">
      <div className="white-bg">
        <Section
          title="Concert"
          text={defaultText}
          imageUrl={img1}
          reverse={true}
        />
      </div>
      <div className="gray-bg">
        <Section
          title="Television Series"
          text={defaultText}
          imageUrl={img2}
          reverse={false}
        />
      </div>
      <div className="gradient-bg">
        <Section
          title="Green Screen"
          text={defaultText}
          imageUrl={img3}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default PortfolioGallery;

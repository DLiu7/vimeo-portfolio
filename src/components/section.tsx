import React from "react";
import "./section.css";

interface SectionProps {
  title: string;
  text: string;
  imageUrl: string;
  reverse?: boolean;
}

// Receives props from gallery, displaying text and image

const Section: React.FC<SectionProps> = ({
  title,
  text,
  imageUrl,
  reverse = false,
}) => {
  return (
    <section className={`portfolio-section ${reverse ? "reverse" : ""}`}>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
    </section>
  );
};

export default Section;

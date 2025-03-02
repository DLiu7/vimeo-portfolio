import React from "react";
import PortfolioGallery from "./components/portfolioGallery";
import Carousel from "./components/carousel";

const App: React.FC = () => {
  return (
    <div className="App">
      <Carousel />
      <PortfolioGallery />
    </div>
  );
};

export default App;

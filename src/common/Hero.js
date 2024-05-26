import React from "react";
import Header from "./Header";
import Banner from "../components/Banner";
import BannerSlider from "../components/BannerSlider";

const Hero = () => {
  return (
    <div>
      <div className="hero_area">
        <Banner />
        <Header />
        <BannerSlider />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { banners } from "../data/Data";

const Banner = () => {
  return (
    <div className="hero_bg_box">
      <div className="bg_img_box">
        {banners.map((val, index) => (
          <div className="banner" key={index}>
            <img src={val.banner_img} alt="banner" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

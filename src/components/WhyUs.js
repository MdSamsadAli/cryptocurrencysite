import React from "react";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import { why_us } from "../data/Data";

const WhyUs = () => {
  return (
    <div>
      <section className="why_section layout_padding">
        <div className="container">
          <Heading title={"Why Choose"} tail={"Us"} />
          <div className="why_container">
            {why_us.map((val, index) => (
              <div className="box" key={index}>
                <div className="img-box">
                  <img src={val.why_img} alt="" />
                </div>
                <div className="detail-box">
                  <h5>{val.title}</h5>
                  <p>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <Link>Read More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

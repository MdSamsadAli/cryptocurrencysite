import React from "react";
import Heading from "../common/Heading";
import { about_us } from "../data/Data";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="about_section layout_padding">
        <div className="container">
          <Heading
            title={"About"}
            tail={"Us"}
            description={
              "Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus"
            }
          />
          {about_us.map((val, index) => (
            <div className="row" key={index}>
              <div className="col-md-6">
                <div className="img-box">
                  <img src={val.about_img} alt="about_img" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                  <Link>{val.btn}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

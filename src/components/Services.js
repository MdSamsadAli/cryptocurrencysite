import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import { service } from "../data/Data";

const Services = () => {
  return (
    <div>
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container">
            <Heading
              title={"Our"}
              tail={"Services"}
              description={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
              }
            />

            <div className="row">
              {service.map((data, index) => (
                <div className="col-md-4">
                  <div className="box">
                    <div className="img-box">
                      <img src={data.service_img} alt="service" />
                    </div>
                    <div className="detail-box">
                      <h5>{data.title}</h5>
                      <p>{data.description}</p>
                      <Link>{data.btn}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-box">
              <Link> View All </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from "react";
import Heading from "../common/Heading";
import { customers } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const Customer = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    arrows: true,
  };
  return (
    <div>
      <section class="client_section layout_padding">
        <div class="container">
          <Heading title={"What says our"} tail={"Customers"} />
          <div class="carousel-wrap">
            <div class="owl-carousel client_owl-carousel">
              <Slider {...settings}>
                {customers.map((item, key) => (
                  <div class="item">
                    <div class="box">
                      <div class="img-box">
                        <img src={item.customer_img} alt="" class="box-img" />
                      </div>
                      <div class="detail-box">
                        <div class="client_id">
                          <div class="client_info">
                            <h6>{item.name}</h6>
                            <p>{item.address}</p>
                          </div>
                          <i class="fa fa-quote-left" aria-hidden="true">
                            <FaQuoteLeft />
                          </i>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;

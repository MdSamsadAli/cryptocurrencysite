import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideritem } from "../data/Data";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };
  return (
    <div>
      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <Slider {...settings}>
              {slideritem.map((val, index) => (
                <div className="">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="detail-box">
                          <h1>
                            Crypto <br />
                            Currency
                          </h1>
                          <p>
                            Explicabo esse amet tempora quibusdam laudantium,
                            laborum eaque magnam fugiat hic? Esse dicta aliquid
                            error repudiandae earum suscipit fugiat molestias,
                            veniam, vel architecto veritatis delectus repellat
                            modi impedit sequi.
                          </p>
                          <div className="btn-box">
                            <Link className="btn1">Read More</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <Link className="btn1">Read More </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            {" "}
                            Read More{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSlider;

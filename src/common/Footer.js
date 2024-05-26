import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";

const Footer = () => {
  return (
    <div>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <Link>
                    <FaLocationDot />
                    <span> Location </span>
                  </Link>
                  <Link>
                    <FaPhone />
                    <span> Call +01 1234567890 </span>
                  </Link>
                  <Link>
                    <IoMail />
                    <span> demo@gmail.com </span>
                  </Link>
                </div>
              </div>
              <div className="info_social">
                <Link>
                  <FaFacebook />
                </Link>
                <Link>
                  <FaTwitter />
                </Link>
                <Link>
                  <FaLinkedin />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  {navbar.map((nav, index) => (
                    <Link className="active" to={nav.path} key={index}>
                      {nav.nav}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <Link href="https://html.design/">Free Html Templates</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;

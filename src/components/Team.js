import React from "react";
import Heading from "../common/Heading";
import { team } from "../data/Data";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <section className="team_section layout_padding">
        <div className="container-fluid">
          <Heading title={"Our"} tail={"Team"} />
          <div className="team_container">
            <div className="row">
              {team.map((val, key) => (
                <div className="col-lg-3 col-sm-6" key={key}>
                  <div className="box">
                    <div className="img-box">
                      <img src={val.team_img} className="img1" alt="team_img" />
                    </div>
                    <div className="detail-box">
                      <h5>{val.name}</h5>
                      <p>{val.title}</p>
                    </div>
                    {val.connect_with.map((social_icon, key) => (
                      <div className="social_box" key={key}>
                        <Link>{social_icon.facebook}</Link>
                        <Link>{social_icon.twitter}</Link>
                        <Link>{social_icon.linkedin}</Link>
                        <Link>{social_icon.instagram}</Link>
                        <Link>{social_icon.youtube}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

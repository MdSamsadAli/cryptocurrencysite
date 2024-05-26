import React from "react";

const Heading = ({ title, tail, description }) => {
  return (
    <div>
      <div className="heading_container heading_center">
        <h2>
          {title} <span>{tail}</span>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Heading;

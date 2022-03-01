import React from "react";
import "../styles/Certificate.css";

function Certificate({ title, image }) {
  return (
    <div>
      <div className="certificate">
        <h2>{title}</h2>
        <img src={image} alt="" className="psiedszkole" />
      </div>
    </div>
  );
}

export default Certificate;

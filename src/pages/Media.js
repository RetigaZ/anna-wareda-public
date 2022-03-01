import React from "react";
import "../styles/Media.css";
import instagramLogo from "../assets/instagram.png";

function Media() {
  return (
    <div className="medias">
      <h2>Możesz mnie znaleźć tutaj:</h2>
      <div className="instagram_anna">
        <h2>Instagram: anaa_pez</h2>
        <a href="https://www.instagram.com/anaa_pez/">
          <img
            className="instaLogo"
            src={instagramLogo}
            alt=""
            title="anaa_pez na Instagramie"
          />
        </a>
      </div>
      <div className="instagram_bari">
        <h2>Instagram: bari.bos</h2>
        <a href="https://www.instagram.com/bari.bos/">
          <img
            className="instaLogo"
            src={instagramLogo}
            alt=""
            title="bari.bos na Instagramie"
          />
        </a>
      </div>
    </div>
  );
}

export default Media;

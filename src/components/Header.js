import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <a className="home-a" href="/">
        <div className="head-logo">
          <div className="logo">
            <h1>AW</h1>
            <p>|</p>
            <div className="name">
              <p>ANNA</p>
              <p>WARĘDA (PEZDA)</p>
            </div>
          </div>
        </div>
      </a>
      <div className="links">
        <a className="media" href="/media">
          media
        </a>
        <a className="cert" href="/certificates">
          certyfikaty
        </a>
        <a className="cert" href="/about-me">
          o mnie
        </a>
      </div>
    </div>
  );
}

export default Header;

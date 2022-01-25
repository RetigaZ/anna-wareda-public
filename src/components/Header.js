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
        <a className="abt" href="/">
          o mnie
        </a>
        <a className="cert" href="/">
          certyfikaty
        </a>
      </div>
    </div>
  );
}

export default Header;

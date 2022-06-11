import React from "react";
import "../styles/Certificates.css";
import psiedszkole from "../assets/certyfikat_psiedszkole.png";
import megaPaka from "../assets/mega_paka_dla_szczeniaka_i_starszaka.png";

function Certificates() {
  return (
    <div className="certificates">
      <div className="psiedszkole">
        <h2>Ukończenie szkolenia online - Psiedszkole</h2>
        <img alt="" className="psiedszkole_img" src={psiedszkole} />
      </div>

      <div className="megapaka">
        <h2>Ukończenie kursu - Mega Paka dla Szczeniaka i Starszaka</h2>
        <img alt="" className="megapaka_img" src={megaPaka} />
      </div>
    </div>
  );
}

export default Certificates;

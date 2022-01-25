import React from "react";
import "../styles/Home.css"
import portrait from "../assets/main_image.jpg";

function Home() {
  return (
    <div className="home">
      <div className="image">
        <img className="portrait" alt="Portret" src={portrait} />
      </div>
      <div className="tid">
          <h1>Cześć, z tej strony Ania!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit id mauris convallis pulvinar. Praesent eu lorem eleifend leo interdum vulputate in non lectus. Nullam gravida dolor sed justo dignissim fermentum. Vestibulum sollicitudin turpis eu velit gravida consectetur. Quisque eget condimentum metus. Vivamus malesuada nunc a justo efficitur, sed eleifend lorem tristique. Fusce eu lectus ut nibh aliquam auctor.</p>
      </div>
    </div>
  );
}

export default Home;

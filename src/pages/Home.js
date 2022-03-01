import React from "react";
import "../styles/Home.css";
import portrait from "../assets/main_image.png";

function Home() {
  return (
    <div className="home">
      <div className="image">
        <img className="portrait" alt="Portret" src={portrait} />
      </div>

      <h1 className="title">Cześć, z tej strony Ania!</h1>
      <div className="tid">
        <p className="desc">
          Cieszę się, że trafiłaś/trafiłeś na moją stronę! Zebrałam tutaj
          wszystkie informacje, które mogą być dla Ciebie ważne jeśli
          zastanawiasz się nad umówieniem na konsultację lub trening ze mną.
          Działam na terenie Mielca, Połańca oraz okolic. W razie jakichkolwiek
          pytań jestem do dyspozycji – możesz się skontaktować ze mną wysyłając
          email lub dzwoniąc w godzinach 9.00-18.00.
        </p>
      </div>
      <div className="contact">
        <h1 className="email">Email:</h1>
        <p className="mail info">boskiemaniery@gmail.com</p>

        <h1 className="tel">Telefon:</h1>
        <p className="telefon info">531 295 726</p>
      </div>
    </div>
  );
}

export default Home;

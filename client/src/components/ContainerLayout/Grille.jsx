import React from "react";
import Stars from "./Icons";
import "../../styles/Grille.css";
function Grille() {
  return (
    <div className="Grille-container">
      <i className="fas fa-quote-right quote"></i>
      <div className="flex">
        <h2>Gilles D. (Ixelles) </h2>
        <i className="far fa-horizontal-rule"></i>
        <div className="stars-container">
          <Stars /> <Stars /> <Stars /> <Stars /> <Stars />
        </div>
      </div>

      <div className="flex2">
        <p>
          L’équipe Agorim est disponible, professionnelle, pleine de ressources
          <br /> et efficace. Ils nous ont accompagnés tout au long de la vente
          de notre
          <br />
          appartement. En plus d’avoir fait ce qu’on attend d’une agence
          <br />
          immobilière, ils nous ont apporté leur expertise juridique. On ne peut
          <br />
          que la conseiller. 
        </p>
        <div className="arrow">
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-left"></i>
        </div>
      </div>
    </div>
  );
}

export default Grille;

import React from "react";
import "../../styles/List.css";
function List() {
  return (
    <div className="list-container">
      <h2>Agorim, l’allié de vos projets immobiliers</h2>

      <p>
        Optez pour la solution la plus performante, choisissez l’ensemble des
        expertises
        <br />
        nécessaires à la vente de votre propriété bruxelloise en toute
        tranquillité :
      </p>

      <ul>
        <li>Une équipe réactive et pluridisciplinaire à taille humaine</li>
        <li>Une valorisation optimale de votre bien</li>
        <li>
          Des technologies de pointe: visites virtuelles, drones, home staging
          3D, etc.
        </li>
        <li>Un appui administratif, juridique et urbanistique</li>
        <li>Des honoraires de vente réduits</li>
        <li>Et bien plus encore…</li>
      </ul>
    </div>
  );
}

export default List;

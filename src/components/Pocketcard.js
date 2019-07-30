import React from "react";

export default function Pocketcard({ pocket }) {
  const id = String(pocket.id).padStart(3, 0);
  const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  return (
    <div className="Pocketcard">
      <h2 className="Pocketcard-name">{pocket.name}</h2>
      <img src={src} alt={pocket.name} className="Pocketcard-image" />
      <p className="Pocketcard-type">Type: {pocket.type}</p>
      <p className="Pocketcard-type">EXP: {pocket.base_experience}</p>
    </div>
  );
}

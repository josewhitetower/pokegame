import React, { Component } from "react";
import Pockedex from "./Pockedex";

export default class Pocketgame extends Component {
  static defaultProps = {
    pockemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };

  suffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  render() {
    const pockets_one = this.suffle(this.props.pockemons).slice(0, 4);
    const pockets_two = this.suffle(this.props.pockemons).slice(4, 8);

    const sum_one = pockets_one.reduce((a, b) => a + b.base_experience, 0);
    const sum_two = pockets_two.reduce((a, b) => a + b.base_experience, 0);

    return (
      <div className="Pocketgame">
        <h3>{sum_one > sum_two ? "winner" : "looser"}</h3>
        <span>{sum_one}</span>
        <Pockedex pockets={pockets_one} />
        <hr />
        <h3>{sum_one < sum_two ? "winner" : "looser"}</h3>
        <span>{sum_two}</span>
        <Pockedex pockets={pockets_two} />
      </div>
    );
  }
}

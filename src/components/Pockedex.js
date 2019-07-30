import React, { Component } from "react";
import Pocketcard from "./Pocketcard";

export default class Pockedex extends Component {
  render() {
    const pockedexs = this.props.pockets.map(pocket => {
      return <Pocketcard key={pocket.id} pocket={pocket} />;
    });
    return <div className="Pockedex">{pockedexs}</div>;
  }
}

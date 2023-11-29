import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  //---START card flip on click ---//
  const [cardFlip, setCardFlip] = useState(true)

  function cardImageSelector () {
    return cardFlip ? pokemon.sprites.front : pokemon.sprites.back
  }

  function handleClick() {
    setCardFlip(!cardFlip)
  }
  //---END card flip on click ---//
  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={cardImageSelector()} alt={pokemon.name}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

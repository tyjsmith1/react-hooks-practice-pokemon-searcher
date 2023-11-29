import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({filteredPokemonList}) {
  return (
    <div>
      {/*moved this outside of card.group (&created div) because it was ugly*/}
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {/*--START -- Render pokemon list----*/}
        {filteredPokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>))
        }
        {/*--END -- Render pokemon list----*/}
      </Card.Group>
    </div>
  );
}

export default PokemonCollection;

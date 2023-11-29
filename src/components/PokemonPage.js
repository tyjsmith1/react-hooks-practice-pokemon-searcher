import React, {useEffect,useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

//--START -- Render pokemon list----//
function PokemonPage() {
  const url = "http://localhost:3001/pokemon"
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then((pokemonList) => setPokemonList(pokemonList))
  },[])
//--END -- Render pokemon list----//

//--START -- search deliverable ---//
const [search,setSearch] = useState('')

const filteredPokemonList = pokemonList.filter((pokemon) => {
  return pokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
})
//--END -- search deliverable ---//

//--START -- FORM deliverable ---//
function addPokemon(newPokemon) {
  setPokemonList([...pokemonList,newPokemon])
}
//--END -- FORM deliverable ---//

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm url={url} addPokemon={addPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection filteredPokemonList={filteredPokemonList}/>
    </Container>
  );
}

export default PokemonPage;

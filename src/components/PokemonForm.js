import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({url,addPokemon}) {
//--START -- form deliverable ---//
  const baseForm = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  }
  const [formData, setFormData] = useState(baseForm)

  //fetch here with a post
  function handleSubmit(event) {
    event.preventDefault()

    const pokemonData = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl,
      }
    }

    fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(pokemonData)
    })
    .then(response => response.json())
    .then((newPokemon) => {
      addPokemon(newPokemon)
      setFormData(baseForm)
    })

  }

  function handleChange(event) {
    setFormData({...formData,[event.target.name]: event.target.value})
  }
//--END -- form deliverable ---//
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}/>
          <Form.Input
            fluid label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
            onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

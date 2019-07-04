import React, { useState } from 'react';
import { Card } from './Card';
import {data} from './data';


function App() {
  const [catchedPokemons, setCatchedPokemons] = useState([]);
  const [quantity, setQuantity] = useState(3);

  console.log(catchedPokemons);

  function handleAddButtonClick(){
    setQuantity(quantity+1);
  }

  function handleRemoveButtonClick(){
    setQuantity(quantity-1);
  }

  function toggleCatchedPokemon(id){
    if(catchedPokemons.includes(id)){
      setCatchedPokemons(catchedPokemons.filter(el => el !== id));
    }
    else {
      setCatchedPokemons([...catchedPokemons,id]);
    }

  }

  return (
    <div className="App">
      <button onClick={handleAddButtonClick} disabled={quantity === data.length}>Add</button>
      <button onClick={handleRemoveButtonClick} disabled={quantity === 0}>Remove</button>
      {data.slice(0, quantity).map((pokemon) => (
        <Card
          name={pokemon.name}
          id={pokemon.id}
          catched={catchedPokemons.includes(pokemon.id)}
          toggleCatchedPokemon={toggleCatchedPokemon}
        />
      ))}
    </div>
  );
}


export default App;

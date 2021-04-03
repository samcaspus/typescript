import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './actions/PokemonActions';
import './App.css';
import { rootType } from './store';

function App() {

  const dispatch = useDispatch();
  const pokemonState = useSelector((state:rootType)=> state.pokemonReducer)

  const [pokemonName, setPokemonName] = useState("")

  console.log(pokemonState)

  const handleChange = (event: any) =>{
  setPokemonName(event.target.value);
  }

  const handleSubmit = () =>{
    dispatch(getPokemon(pokemonName))
  }

  return (
    <div className="App">
      <h1>POKEMON {pokemonName} </h1>

      <input type="text" onChange={handleChange}></input>
      <button onClick={handleSubmit}>Search</button>

      {pokemonState.pokemon && (
        <div>
          {pokemonState.pokemon.abilities.map((ability)=>{
            return <p key={ability.ability.name}>{ability.ability.name} </p>
          })}
        </div>
      )}

      {pokemonState.loading === true && (
        <h1>Loading</h1>
      )}

{pokemonState.error===true &&(
  <h1>
    Error failed to get the content
  </h1>
)}

    </div>
  );
}

export default App;

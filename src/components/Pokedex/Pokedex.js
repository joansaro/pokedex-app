import React from 'react'
import Pokemon from '../Pokemon/Pokemon';
import './Pokedex.css'

const Pokedex = (props) => {

  console.log(props);
  const { pokemons } = props;

  return (
    <>
      <div className="pokedex-container">
        {
          pokemons.map((pokemon) => {
          return (
           <Pokemon pokemon={pokemon} key={pokemon.name} />
          )
        })
        }
      </div>
    </>
  )
}

export default Pokedex;

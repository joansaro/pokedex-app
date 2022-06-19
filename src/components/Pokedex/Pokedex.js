import React, { useEffect } from 'react'
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import Pokemon from '../Pokemon/Pokemon';

import './Pokedex.css'

const Pokedex = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, [])

  console.log(props);
  const { pokemons } = props;

  return (
    <>
      {
        loading ?
          <div className="spinner__loading-container">
            <BeatLoader color={'#1a83ff'} loading={loading} size={50} />
          </div>
          :
          <div className="pokedex-container">
            {
              pokemons.map((pokemon) => {
                return (
                  <Pokemon pokemon={pokemon} key={pokemon.name} />
                )
              })
            }
          </div>
      }

    </>
  )
}

export default Pokedex;

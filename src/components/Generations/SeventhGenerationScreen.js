// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getPokemonData, getPokemons } from '../../helpers/Api';
import Pokedex from '../Pokedex/Pokedex';

export default function SeventhGenerationScreen() {

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(88, 721);
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises)
      setPokemons(results);
    } catch (err) {

    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <>
      <div>
        <h1>Seven Generación</h1>
      </div>
      <Pokedex pokemons={pokemons} />
    </>
  )
}

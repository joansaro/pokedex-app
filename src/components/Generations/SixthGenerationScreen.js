// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getPokemonData, getPokemons } from '../../helpers/Api';
import Pokedex from '../Pokedex/Pokedex';

export default function SixthGenerationScreen() {

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(72, 649);
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
        <h1>Sexta Generación</h1>
      </div>
      <Pokedex pokemons={pokemons} />
    </>
  )
}

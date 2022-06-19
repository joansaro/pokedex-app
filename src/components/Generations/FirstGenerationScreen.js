// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getPokemonData, getPokemons } from '../../helpers/Api';

import Pokedex from '../Pokedex/Pokedex';

import InfiniteScroll from 'react-infinite-scroll-component';

export default function FirstGenerationScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1)

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(150, 0, page);
      // console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises)
      setPokemons(results);
      // console.log(results);
    } catch (err) {

    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

  return (
    <>
      <div>
        <h1>Primera Generación</h1>
      </div>
      <InfiniteScroll
        dataLength={pokemons.length}
        hasMore={true}
        next={() => setPage((prevPage) => prevPage + 1)}
      >
        <div className='container'>
          <Pokedex pokemons={pokemons} />
        </div>
      </InfiniteScroll>
    </>
  )
}

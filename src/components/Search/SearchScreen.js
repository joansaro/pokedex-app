import React, { useState } from "react";
import './Search.css';
import { searchPokemon } from "../../helpers/Api";



function SearchScreen() {

  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState();

  const handleChange = e => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  const handleClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  }

  return (
    <div className="">
      <div className="">
        <h1 className="">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className=""
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <button
          onClick={handleClick}
        >
          Buscar
        </button>

      </div>
      <div>
        {pokemon && (
          <div>
            <div
              key={pokemon.name}
              className='pokemon__card'
            >
              <div className='pokemon__img'>
                <img src={pokemon.sprites.other.home.front_default} alt="pokemon" width="125px" />
              </div>
              <div className='pokemon__info'>
                <div className='pokemon__text'>
                  <h2>{pokemon.name}</h2>
                </div>
                <div
                  className={
                    (pokemon.types[0].type.name === 'grass') ? 'pokemon__features grass' :
                      (pokemon.types[0].type.name === 'fire') ? 'pokemon__features fire' :
                        (pokemon.types[0].type.name === 'water') ? 'pokemon__features water' :
                          (pokemon.types[0].type.name === 'rock') ? 'pokemon__features rock' :
                            (pokemon.types[0].type.name === 'poison') ? 'pokemon__features poison' :
                              (pokemon.types[0].type.name === 'fairy') ? 'pokemon__features fairy' :
                                (pokemon.types[0].type.name === 'bug') ? 'pokemon__features bug' :
                                  (pokemon.types[0].type.name === 'ground') ? 'pokemon__features ground' :
                                    (pokemon.types[0].type.name === 'psychic') ? 'pokemon__features psychic' :
                                      (pokemon.types[0].type.name === 'fighting') ? 'pokemon__features fighting' :
                                        (pokemon.types[0].type.name === 'ghost') ? 'pokemon__features ghost' :
                                          (pokemon.types[0].type.name === 'electric') ? 'pokemon__features electric' :
                                            (pokemon.types[0].type.name === 'ice') ? 'pokemon__features ice' :
                                              (pokemon.types[0].type.name === 'dragon') ? 'pokemon__features dragon' : 'pokemon__features normal'
                  }
                >
                  <div className="pokemon__feature">
                    <p>Altura</p>
                    <span>{(pokemon.height) / 10} mts</span>
                  </div>
                  <div className="pokemon__feature">
                    <p>Peso</p>
                    <span>{(pokemon.weight) / 10} kg</span>
                  </div>
                  <div
                    className="pokemon__feature"
                  // pokemon.types[0].type.name === 'fire' ? 'pokemon__feature fire' : 'normal'}
                  >
                    <p>Tipo</p>
                    <span>{pokemon.types[0].type.name}</span>
                  </div>
                </div>

              </div>
            </div>
            )
          </div>
        )
        }
      </div>
    </div>
  );
}

export default SearchScreen;

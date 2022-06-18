import axios from "axios";
import React, { useEffect, useState } from "react";
import './Search.css';
// import { loadPokemon } from "../../helpers/Api";



function SearchScreen() {

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      // console.log(response.data.results);
      setPokemons(response.data.results);
    }
    loadPokemon();
  }, []);

  const onSuggestHandler = (search) => {
    setSearch(search);
    setSuggestions([])
  }

  const onChangeHandler = (search) => {
    let matches = [];
    if (search.length > 0) {
      matches = pokemons.filter(pokemon => {
        const regex = new RegExp(`${search}`, 'gi');
        return pokemon.name.match(regex);
      })
    }
    console.log('matches', matches);
    setSuggestions(matches);
    setSearch(search);
  }

  return (
    <div className="">
      <div className="">
        <h1 className="">Search a currency</h1>
        <form>

          {/* <div>{search}</div> */}
          <input
            type="text"
            placeholder="Search"
            className="col-md-12 input"
            value={search}
            onChange={e => onChangeHandler(e.target.value)}
            onBlur={() => {
              // setTimeout(() => {
                setSuggestions([]);

              // }, 100)
            }}
          />

        </form>
        {
          suggestions && suggestions.map((suggestion, i) =>
            <div
              key={i}
              className="suggestion col-md-12 justify-content-center"
              onClick={() => onSuggestHandler(suggestion.name)}
              >
              {suggestion.name}
            </div>
          )}
      </div>
      <div>


      </div>
    </div>
  );
}


export default SearchScreen;

export const searchPokemon = async (pokemon) =>{
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {

    }
}

export const getPokemons = async (limit=10, offset=0, page) =>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {

    }
}

export const getPokemonData = async (url) =>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {

    }
}

export const loadPokemon = async () =>{
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {

    }
}
import axios from 'axios';
import { Pokemon } from "../interfaces/Pokemon";

export function getPokemonData(name: string, pokemonContext: Pokemon[]): Promise<Pokemon> {
    const index = pokemonContext.find(pokemon => pokemon.name === name)?.id;
    let url = `https://helper-api-app.azurewebsites.net/api/G9Pokedex/pokemons/${index}`;
    
    return axios.get(url)
        .then(response => {
            const data: Pokemon = {
                name: response.data.name,
                urlImage: response.data.urlImage,
                weight: response.data.weight,
                height: response.data.height,
                evolutions: response.data.evolutions,
                types: response.data.types,
                moves: response.data.moves,
                abilities: response.data.abilities,
                id: pokemonContext.find(pokemon => pokemon.name === response.data.name)?.id || 0,
                stats: response.data.stats.map((stat: any) => ({ name: stat.name, baseStat: stat.baseStat })),
            };
            return data;
        })
        .catch(error => {
            if (error.response && error.response.status === 404) {
                throw new Error('Pokemon not found');
            } else {
                throw new Error('An error occurred while fetching the Pokemon data: ' + error);
            }
        });
}
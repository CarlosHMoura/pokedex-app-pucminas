import axios from 'axios';
import { Pokemon } from "../interfaces/Pokemon";

export function getPokemonData(name: string, pokemonContext: Pokemon[]): Promise<Pokemon> {
    const pokemon = pokemonContext.find(pokemon => pokemon.name === name);
    
    if (!pokemon) {
        throw new Error('Pokémon não encontrado. Tente novamente com um nome válido.');
    }

    let url = `https://helper-api-app.azurewebsites.net/api/G9Pokedex/pokemons/${pokemon.id}`;
    
    return axios.get(url)
        .then(response => {
            const data: Pokemon = {
                ...response.data,
                id: pokemon.id,
                stats: response.data.stats.map((stat: any) => ({ name: stat.name, baseStat: stat.baseStat })),
            };
            return data;
        })
        .catch(error => {
            switch (error.response.status) {
                case 404:
                    throw new Error('Pokémon não encontrado. Tente novamente com um nome válido.');
                case 400:
                    throw new Error('Pokémon não encontrado. Tente novamente com um nome válido.');
                default:
                    throw new Error(`Erro: ${error.response.status} - ${error.response.statusText}`);
            }
        });
}
import axios from 'axios';

import { Pokemon } from "../interfaces/Pokemon";

export function getPokemonData(name: string, index?: number): Promise<Pokemon> {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    if (index !== undefined) {
        url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    }

    return axios.get(url)
        .then(response => {
            const data: Pokemon = {
                name: response.data.name,
                id: response.data.id,
                urlImage: response.data.sprites.front_default,
                weight: response.data.weight,
                height: response.data.height,
                evolutions: [],
                types: response.data.types.map((type: any) => ({ name: type.type.name })),
                moves: response.data.moves.map((move: any) => ({ name: move.move.name })),
                stats: response.data.stats.map((stat: any) => ({ name: stat.stat.name, baseStat: stat.base_stat })),    
                abilities: response.data.abilities.map((ability: any) => ({ name: ability.ability.name })), 
            };
            return data;
        })
        .catch(error => {
            if (error.response && error.response.status === 404) {
                throw new Error('Pokemon not found');
            } else {
                throw new Error('An error occurred while fetching the Pokemon data');
            }
        });
}
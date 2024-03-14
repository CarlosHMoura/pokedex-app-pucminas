import axios from 'axios';

import { Pokemon } from '../interfaces/Pokemon';

export function getPokemonData(name: string): Promise<Pokemon> {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            const data: Pokemon = {
                name: response.data.name,
                weight: response.data.weight,
                abilities: response.data.abilities,
                base_experience: response.data.base_experience,
                height: response.data.height,
                id: response.data.id,
                moves: response.data.moves,
                stats: response.data.stats,
                types: response.data.types,
                url: response.data.species.url,
                imageUrl: response.data.sprites.front_default,
                animatedImageUrl: response.data.sprites.versions['generation-v']['black-white'].animated.front_default,
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
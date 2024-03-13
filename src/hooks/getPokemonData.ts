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
                url: '',
                imageUrl: '',
                animatedImageUrl: ''
            };
        return data;
    });
}
import React, { useContext } from 'react';
import axios from 'axios';

import { Pokemon } from "../interfaces/Pokemon";
import { PokemonContext } from "../contexts/PokemonContext";

export function getPokemonData(index?: number, name?: string): Promise<Pokemon> {
    const pokemonContext = useContext(PokemonContext);

    let url = `https://helper-api-app.azurewebsites.net/api/G9Pokedex/pokemons/${index}`;
    if (index == undefined) {
        const pokemon = pokemonContext.find(pokemon => pokemon.name === name);
        if (pokemon) {
            index = pokemon.id;
        }
        url = `https://helper-api-app.azurewebsites.net/api/G9Pokedex/pokemons/${index}`;
    }

    return axios.get(url)
        .then(response => {
            const data: Pokemon = {
                name: response.data.name,
                urlImage: response.data.sprites.front_default,
                weight: response.data.weight,
                height: response.data.height,
                evolutions: [],
                types: response.data.types.map((type: any) => ({ name: type.type.name })),
                moves: response.data.moves.map((move: any) => ({ name: move.move.name })),
                stats: response.data.stats.map((stat: any) => ({ name: stat.stat.name, baseStat: stat.base_stat })),
                abilities: response.data.abilities.map((ability: any) => ({ name: ability.ability.name })),
                id: pokemonContext.find(pokemon => pokemon.name === response.data.name)?.id || 0
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
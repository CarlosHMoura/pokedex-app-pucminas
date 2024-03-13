import { useState, useEffect } from 'react';

import axios from 'axios';

import { Pokemon, ApiResponse } from '../interfaces/Pokemon';

export const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get<ApiResponse>(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`);
            const results = response.data.results.map((pokemon: Pokemon) => {
                const index = pokemon.url.split('/').slice(-2, -1)[0];
                const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
                return { ...pokemon, imageUrl };
            });
            setPokemonList(prevPokemonList => [...prevPokemonList, ...results]);
            setError(null);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
            setError('Error fetching Pokemon data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [offset]);

    const loadMore = () => {
        setOffset(prevOffset => prevOffset + 20);
    };

    return { pokemonList, loading, error, loadMore };
};
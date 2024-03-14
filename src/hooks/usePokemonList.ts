import { useState, useEffect } from 'react';

import axios from 'axios';

import { Pokemon, ApiResponse } from '../interfaces/Pokemon';

export const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = (offset: number) => {
        setIsLoadingMore(true);
        axios.get<ApiResponse>(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
            .then(response => {
                const results = response.data.results.map((pokemon: Pokemon) => {
                    const index = pokemon.url.split('/').slice(-2, -1)[0];
                    pokemon.id = parseInt(index);
                    pokemon.url = `https://pokeapi.co/api/v2/pokemon/${index}`;
                    pokemon.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${index}.png`;
                    return { ...pokemon };
                });
                setPokemonList(prevPokemonList => [...prevPokemonList, ...results]);
                setError(null);
            })
            .catch(error => {
                console.error('Error fetching Pokemon data:', error);
                setError('Error fetching Pokemon data');
            })
            .finally(() => {
                setLoading(false);
                setIsLoadingMore(false);
            });
    };

    useEffect(() => {
        fetchData(offset);
    }, [offset]);

    const loadMore = () => {
        if (!isLoadingMore) {
            setOffset(prevOffset => prevOffset + 20);
        }
    };

    return { pokemonList, loading, error, loadMore };
};
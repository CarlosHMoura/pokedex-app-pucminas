import { useState, useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

export const usePokemonList = () => {
    const [offset, setOffset] = useState(0);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const pokemonList = useContext(PokemonContext);

    const loadMore = () => {
        if (!isLoadingMore) {
            setOffset(prevOffset => prevOffset + 20);
        }
    };

    return { pokemonList, loadMore };
};
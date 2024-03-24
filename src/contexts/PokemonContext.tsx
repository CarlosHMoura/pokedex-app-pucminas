import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Pokemon } from "../interfaces/Pokemon";

export const PokemonContext = React.createContext<Pokemon[]>([]);

type PokemonProviderProps = {
    children: React.ReactNode;
}

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        axios.get('https://helper-api-app.azurewebsites.net/api/G9Pokedex/pokemons', {
            headers: {
                'accept': 'text/plain'
            }
        })
        .then(response => {
            if (!response.data.pokemon || response.data.pokemon.length === 0) {
                console.log('Response data is empty');
            } else {
                setPokemons(response.data.pokemon);
            }
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }, []);

    return (
        <PokemonContext.Provider value={pokemons}>
            {children}
        </PokemonContext.Provider>
    );
};
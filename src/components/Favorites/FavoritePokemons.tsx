import React, { useEffect, useState } from 'react';
import { fetchPokemonData } from '../../services/pokemonService'; // Importe a função para buscar dados dos Pokémon

const FavoritePokemons: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData();
      if (data) {
        setPokemonList(data.results);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pokémons Favoritos</h2>
      <ul>
        {pokemonList.map((pokemon: any) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePokemons;

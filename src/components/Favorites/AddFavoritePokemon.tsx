import React, { useState } from 'react';
import { addFavoritePokemon } from '../../services/favoriteService'; // Importe a função para adicionar Pokémon aos favoritos

interface Pokemon {
  id: number;
  name: string;
}

const AddFavoritePokemon: React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');

  const handleAddFavorite = () => {
    // Aqui você pode adicionar lógica para validar o nome do Pokémon ou buscar mais informações sobre ele antes de adicionar
    const newPokemon: Pokemon = {
      id: Math.floor(Math.random() * 1000), // Simulação de um ID
      name: pokemonName,
    };
    addFavoritePokemon(newPokemon); // Adiciona o Pokémon aos favoritos
    setPokemonName(''); // Limpa o campo após adicionar
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nome do Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleAddFavorite}>Adicionar aos Favoritos</button>
    </div>
  );
};

export default AddFavoritePokemon;

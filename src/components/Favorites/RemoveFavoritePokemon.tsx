import React from 'react';
import { removeFavoritePokemon } from '../../services/favoriteService'; // Importe a função para remover Pokémon dos favoritos

interface Props {
  pokemon: Pokemon;
}

interface Pokemon {
  id: number;
  name: string;
}

const RemoveFavoritePokemon: React.FC<Props> = ({ pokemon }) => {
  const handleRemoveFavorite = () => {
    removeFavoritePokemon(pokemon); // Remove o Pokémon dos favoritos
  };

  return (
    <div>
      <span>{pokemon.name}</span>
      <button onClick={handleRemoveFavorite}>Remover</button>
    </div>
  );
};

export default RemoveFavoritePokemon;

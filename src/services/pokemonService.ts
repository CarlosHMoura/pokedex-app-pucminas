export const fetchPokemonData = async (): Promise<any> => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokedex/');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados dos Pokémon');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro:', error);
      return null;
    }
  };
  
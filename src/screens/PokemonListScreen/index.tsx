import React, { useState, useContext, useCallback } from "react";
import { FlatList, Alert } from "react-native";
import { Container, Text, Sprite, ListItem, AnimatableView, IndexText } from "./styles";

import { PokemonContext } from "../../contexts/PokemonContext";
import { getPokemonData } from "../../functions/getPokemonData";
import { Pokemon } from "../../interfaces/Pokemon";

import { PokemonModalView } from "../../components/PokemonModalView";

export const PokemonListScreen: React.FC = () => {
    const pokemons = useContext(PokemonContext);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
    const [isFavorite, setIsFavorite] = useState(false); // Adicionamos um estado local para indicar se o Pokémon é favorito

    const handlePokemonSelection = useCallback(async (pokemonName: string) => {
        try {
            const data = await getPokemonData(pokemonName, pokemons);
            setPokemonData(data);
            setIsModalVisible(true);
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to fetch Pokemon data. Please try again.');
        }
    }, [pokemons]);

    const handleToggleFavorite = useCallback(() => {
        setIsFavorite(!isFavorite); // Alternamos o estado de favorito ao pressionar o botão
    }, [isFavorite]);

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const renderItem = useCallback(({ item }: { item: Pokemon }) => (
        <AnimatableView 
            animation="slideInUp"
            duration={1500}
            delay={150}>
            <ListItem onPress={() => handlePokemonSelection(item.name)}>
                <Sprite source={{ uri: item.urlImage }} />
                <Text>{item.name}</Text>
                <IndexText>#{item.id}</IndexText>
            </ListItem>
        </AnimatableView>
    ), [handlePokemonSelection]);

    return (
        <Container>
            <FlatList
                data={pokemons}
                keyExtractor={(item, index) => `${item.id.toString()}:${index}`}
                numColumns={2} 
                renderItem={renderItem}
            />
            {pokemonData && 
            <PokemonModalView 
                data={pokemonData} 
                visible={isModalVisible} 
                onClose={handleCloseModal} 
                isFavorite={isFavorite} // Passamos o estado de favorito para o modal
                onToggleFavorite={handleToggleFavorite} // Passamos a função de alternar favorito para o modal
            />}
        </Container>
    );
};

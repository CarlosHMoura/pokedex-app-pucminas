import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { Container, Text, Sprite, ListItem, AnimatableView, IndexText } from "./styles";

import { PokemonContext } from "../../contexts/PokemonContext";
import { getPokemonData } from "../../functions/getPokemonData";
import { Pokemon } from "../../interfaces/Pokemon";

import { PokemonModalView } from "../../components/PokemonModalView";

export const PokemonListScreen: React.FC = () => {
    const pokemons = useContext(PokemonContext);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

    const handlePokemonSelection = (pokemonName: string) => {
        getPokemonData(pokemonName, pokemons)
            .then(data => {
                setPokemonData(data);
                setIsModalVisible(true);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <Container>
            <FlatList
                data={pokemons}
                keyExtractor={(item, index) => `${item.id.toString()}:${index}`}
                numColumns={2} 
                renderItem={({ item }) => (
                    <AnimatableView 
                        animation="slideInUp"
                        duration={1500}
                        delay={item.id * 150}>
                        <ListItem onPress={() => handlePokemonSelection(item.name)}>
                            <Sprite source={{ uri: item.urlImage }} />
                            <Text>{item.name}</Text>
                            <IndexText>#{item.id}</IndexText>
                        </ListItem>
                    </AnimatableView>
                )}
            />
        {pokemonData && 
        <PokemonModalView 
        data={pokemonData} 
        visible={isModalVisible} 
        onClose={handleCloseModal} />}
        </Container>
    );
};
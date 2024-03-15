import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Text, Sprite, ActivityIndicator, ListItem, AnimatableView, IndexText } from "./styles";

import { usePokemonList } from "../../hooks/usePokemonList";

import { getPokemonData } from "../../functions/getPokemonData";
import { Pokemon } from "../../interfaces/Pokemon";
import { PokemonModalView } from "../../components/PokemonModalView";

export const PokemonListScreen: React.FC = () => {
    const { pokemonList, loading, error, loadMore } = usePokemonList();

    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePokemonSelection = (pokemonName: string) => {
        getPokemonData(pokemonName)
            .then(data => {
                setPokemonData(data);
                setIsModalVisible(true);
            })
    }

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    if (loading) {
        return <ActivityIndicator />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <Container>
            <FlatList
                data={pokemonList}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} 
                renderItem={({ item }) => (
                    <AnimatableView 
                        animation="slideInUp"
                        duration={1500}
                        delay={item.id * 150}>
                        <ListItem onPress={() => handlePokemonSelection(item.name)}>
                            <Sprite source={{ uri: item.imageUrl }} 
                                    animation="zoomIn"
                            />
                            <Text>{item.name}</Text>
                            <IndexText>#{item.id}</IndexText>
                        </ListItem>
                    </AnimatableView>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
            />
        {pokemonData && <PokemonModalView data={pokemonData} visible={isModalVisible} onClose={handleCloseModal} />}
        </Container>
    );
};
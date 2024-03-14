import React from 'react';
import { FlatList } from 'react-native';
import { Container, Text, Sprite, ActivityIndicator, ListItem, AnimatableView, IndexText } from "./styles";

import { usePokemonList } from "../../hooks/usePokemonList";

export const PokemonListScreen: React.FC = () => {
    const { pokemonList, loading, error, loadMore } = usePokemonList();


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
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} 
                renderItem={({ item, index }) => (
                    <AnimatableView 
                        animation="slideInUp"
                        duration={1500}
                        delay={index * 150}>
                        <ListItem>
                    
                        <Sprite source={{ uri: item.imageUrl }} 
                                animation="zoomIn"
                        />
                        <Text>{item.name}</Text>
                        <IndexText>#{index + 1}</IndexText>
                        </ListItem>
                    </AnimatableView>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
            />
        </Container>
    );
};
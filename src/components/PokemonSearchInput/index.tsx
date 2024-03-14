import React, { useState } from 'react';
import { TextInputProps, View, Alert } from "react-native"; 

import { getPokemonData } from "../../functions/getPokemonData";
import { Pokemon } from "../../interfaces/Pokemon";
import { PokemonModalView } from "../PokemonModalView";

import { Container, SearchButton, SearchButtonIcon } from "./styles";

import searchIcon from "../../assets/search-icon.png";

export function PokemonSearchInput({ ...rest }: TextInputProps) {
    const [inputValue, setInputValue] = useState('');
    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleInputChange = (text: string) => {
        setInputValue(text.toLowerCase());
    };

    const handleSubmit = () => {
        getPokemonData(inputValue)
            .then(data => {
                setPokemonData(data);
                setIsModalVisible(true);
            })
            .catch(error => {
                Alert.alert('Error', error.message);
            });
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <Container onChangeText={handleInputChange} {...rest}></Container>
            <SearchButton onPress={handleSubmit}>
                <SearchButtonIcon source={searchIcon}></SearchButtonIcon>
            </SearchButton>
            {pokemonData && <PokemonModalView data={pokemonData} visible={isModalVisible} onClose={handleCloseModal} />}
        </View>
    );
} 
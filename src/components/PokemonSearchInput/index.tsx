import React, { useState, useContext } from "react";
import { TextInputProps, View, Alert } from "react-native"; 

import { getPokemonData } from "../../functions/getPokemonData";
import { PokemonContext } from "../../contexts/PokemonContext";
import { PokemonModalView } from "../PokemonModalView";
import { Pokemon } from "../../interfaces/Pokemon";

import { Container, SearchButton, SearchButtonIcon } from "./styles";

import searchIcon from "../../assets/search-icon.png";

export function PokemonSearchInput({ ...rest }: TextInputProps) {
    const [inputValue, setInputValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

    const pokemonContext = useContext(PokemonContext);

    const handleInputChange = (text: string) => {
        const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setInputValue(capitalizedText);
    };

    const handleSubmit = () => {
        getPokemonData(inputValue, pokemonContext)
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
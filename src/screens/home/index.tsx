import React, { useState } from "react";
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, Header, MainIcon, Title } from "./styles";

import { Input } from "../../components/Inputs";
import { UserButton } from "../../components/UserButton";
import { Button } from "../../components/Button";
import { SimpleModal } from "../../components/Modal";

import pokeballIcon from "../../assets/pokeball-icon.png";

type RootStackParamList = {
    Home: undefined;
    PokemonList: undefined; // Add parameters here if PokemonList screen takes any
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
    navigation: NavigationProp;
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleToggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <Container>
            <Header>
                <UserButton onPress={() => console.log("UserButton!")} />
            
                <MainIcon 
                    source={pokeballIcon} 
                    animation= "swing"
                    delay={100}
                    duration={1500}
                    speed={1}
                    direction="alternate"
                    iterationCount="infinite"
                ></MainIcon>
                <Title>Pokedex</Title>

                <Input placeholder="Pesquisar Pokemon..."></Input>
                
                <Button onPress={handleToggleModal} title="Modal test" />
                <Button onPress={() => navigation.navigate('PokemonList')} title="Listar Todos os Pokémons" />
            </Header>

            <SimpleModal visible={modalVisible} onClose={handleToggleModal} />
        </Container>
    );
};

import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { Container, Header, MainIcon, Title } from "./styles";

import { PokemonSearchInput } from "../../components/PokemonSearchInput";
import { UserButton } from "../../components/UserButton";
import { Button } from "../../components/Button";

import pokeballIcon from "../../assets/pokeball-icon.png";

type RootStackParamList = {
    Home: undefined;
    PokemonList: undefined; 
    UserScreen: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
    navigation: NavigationProp;
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <Container>
            <Header>
                <UserButton onPress={() => navigation.navigate('UserScreen')} />
            
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

                <PokemonSearchInput placeholder="Pesquisar Pokemon..."></PokemonSearchInput>

                <Button onPress={() => navigation.navigate('PokemonList')} title="Listar Todos os Pokémons" />
            </Header>
        </Container>
    );
};

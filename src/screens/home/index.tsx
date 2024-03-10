import React from "react";

import { Container, Header, Body,  MainIcon, Title } from "./styles";
import { Input } from "../../components/Inputs";
import { UserButton } from "../../components/UserButton";
import { Button } from "../../components/Button";

import pokeballIcon from "../../assets/pokeball-icon.png";


export function Home() {
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
        </Header>

        <Body>
            <Button onPress={() => console.log("PokemonList!")} title="Listar Pokémons" />
        </Body>
    </Container>
    );
}

import React from "react";

import { Container, Header, MainIcon, Title, User } from "./styles";

import { Input } from "../../components/Inputs";

import pokeballIcon from "../../assets/pokeball-icon.png";
import userIcon from "../../assets/user-icon.png";


export function Home() {
    return (
    <Container>
        <Header>
            <User source={userIcon}/>
            <MainIcon source={pokeballIcon} />
            <Title>Pokedex</Title>
            <Input placeholder="Pesquisar Pokemon..."></Input>
        </Header>
    </Container>
    );
}

import React, { useState } from "react";

import { Container, Header, MainIcon, Title } from "./styles";
import { Input } from "../../components/Inputs";
import { UserButton } from "../../components/UserButton";
import { Button } from "../../components/Button";
import { SimpleModal } from "../../components/Modal"; // Changed this line

import pokeballIcon from "../../assets/pokeball-icon.png";

export function Home() {

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
            <Button onPress={handleToggleModal} title="Listar Todos os Pokémons" />
        </Header>

        
        <SimpleModal visible={modalVisible} onClose={handleToggleModal} />
        
    </Container>
    );
}
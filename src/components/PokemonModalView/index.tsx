import React from "react";
import { View, Modal } from "react-native";

import {
  ModalContainer,
  ModalContent,
  CloseButton,
  CloseButtonIcon,
  FavoriteButton,
  FavoriteButtonIcon,
  Scroll,
  PokemonSprite,
  IndexText,
  PokemonTitleText,
  Text,
  BoldText,
  Tag,
  TagText,
} from "./styles";

import searchIcon from "../../assets/arrow-icon.png";
import starIcon0 from "../../assets/star-0-icon.png";

import { Pokemon, Stat, Evolution } from "../../interfaces/Pokemon";

interface SimpleModalProps {
  visible: boolean;
  onClose: () => void;
  data: Pokemon | null;
}

export function PokemonModalView({ visible, onClose, data }: SimpleModalProps) {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          {data && (
            <>
              <IndexText>#{data.id}</IndexText>
              <Tag>
                {data.types && data.types.map((type: string, index: number) => (
                  <TagText key={index}>{type}</TagText>
                ))}
              </Tag>
              <PokemonSprite source={{ uri: data.urlImage }}></PokemonSprite>
              <PokemonTitleText>{data.name}</PokemonTitleText>


              
              <Scroll>
                <BoldText>Features</BoldText>
                <Text>
                  Weight: {data.weight} kg / Height: {data.height} m
                </Text>


              

                <BoldText>Evolutions</BoldText>
              </Scroll>
            </>
          )}

          <CloseButton onPress={onClose}>
            <CloseButtonIcon source={searchIcon}></CloseButtonIcon>
          </CloseButton>

          <FavoriteButton onPress={onClose}>
            <FavoriteButtonIcon source={starIcon0}></FavoriteButtonIcon>
          </FavoriteButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

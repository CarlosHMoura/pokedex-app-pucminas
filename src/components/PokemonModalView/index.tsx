import React from "react";
import { Modal } from "react-native";

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
  PokemonHeader,
  PokemonHeaderInfo,
} from "./styles";

import searchIcon from "../../assets/arrow-icon.png";
import starIcon0 from "../../assets/star-0-icon.png";

import { Pokemon } from "../../interfaces/Pokemon";

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
              <PokemonTitleText>{data.name}</PokemonTitleText>
              <PokemonHeader>
                <PokemonSprite source={{ uri: data.urlImage }} 
                  animation="fadeIn"
                  duration={1500}
                  ></PokemonSprite>

                <PokemonHeaderInfo>
                  <IndexText>#{data.id.toString().padStart(4, "0")}</IndexText>

                  {data.types &&
                    data.types.map((type, index) => (
                      <Tag>
                        <TagText key={index}>{type}</TagText>
                      </Tag>
                    ))}

                  <Text>
                    <BoldText>Height:</BoldText> {data.height / 10} m
                  </Text>
                  <Text>
                    <BoldText>Weight:</BoldText> {data.weight / 10} kg
                  </Text>
                </PokemonHeaderInfo>
              </PokemonHeader>

              <Scroll>
                <Text>
                  <BoldText>Abilities:</BoldText> {data.abilities.join(", ")}
                </Text>
                <Text>
                  <BoldText>Moves:</BoldText> {data.moves.join(", ")}
                </Text>
                <Text>
                  <BoldText>Stats:</BoldText>
                </Text>
                {data.stats.map((stat, index) => (
                  <Text key={index}>
                    <BoldText>{stat.name}:</BoldText> {stat.baseStat}
                  </Text>
                ))}
                <Text>
                  <BoldText>Evolutions:</BoldText>
                </Text>
                {data.evolutions.map((evolution, index) => (
                  <Text key={index}>
                    <BoldText>{evolution.name}</BoldText>
                    <PokemonSprite
                      source={{ uri: evolution.urlImage }}
                    ></PokemonSprite>
                  </Text>
                ))}
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

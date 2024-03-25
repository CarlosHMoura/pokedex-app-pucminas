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
  SubtitleText,
  PokemonHeader,
  PokemonHeaderInfo,
  EvolutionContainer,
  EvolutionSprite,
  EvolutionText,
  ScrollContent,
  ScrollDivider,
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
                <PokemonSprite
                  source={{ uri: data.urlImage }}
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
                    <BoldText>Height</BoldText> {data.height / 10} m
                  </Text>
                  <Text>
                    <BoldText>Weight</BoldText> {data.weight / 10} kg
                  </Text>
                </PokemonHeaderInfo>
              </PokemonHeader>

              <Scroll>
                <ScrollContent>
                  <SubtitleText>Abilities</SubtitleText>
                  <Text>{data.abilities.join(" • ")}</Text>
                  <ScrollDivider></ScrollDivider>
                  <SubtitleText>Moves</SubtitleText>
                  <Text>{data.moves.join(" • ")}</Text>
                  <ScrollDivider></ScrollDivider>
                  <SubtitleText>Stats</SubtitleText>
                  {data.stats.map((stat, index) => (
                    <Text key={index}>
                      <BoldText>{stat.name}:</BoldText> {stat.baseStat}
                    </Text>
                  ))}
                  <ScrollDivider></ScrollDivider>
                  <SubtitleText>Evolutions</SubtitleText>
                  {data.evolutions.map((evolution, index) => (
                    <EvolutionContainer>
                      <EvolutionSprite
                        source={{ uri: evolution.urlImage }}
                      ></EvolutionSprite>
                      <EvolutionText>{evolution.name}</EvolutionText>
                    </EvolutionContainer>
                  ))}
                </ScrollContent>
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

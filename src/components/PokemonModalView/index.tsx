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
          {data ? (
            <>
              <IndexText>#{data.id}</IndexText>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {data.types.map((type, index) => (
                  <Tag>
                    <TagText key={index}>{type.name}</TagText>
                  </Tag>
                ))}
              </View>

              <PokemonSprite source={{ uri: data.urlImage }} />
              <PokemonTitleText>{data.name}</PokemonTitleText>

              <Scroll>
                <BoldText>Features</BoldText>
                <Text>
                  Weight: {data.weight / 10} kg / Height: {data.height / 10} m
                </Text>

                <BoldText>Stats</BoldText>
                {data.stats.map((stat, index) => (
                  <View key={index}>
                    <Text>
                      {" "}
                      {stat.name} : {stat.baseStat}
                    </Text>
                  </View>
                ))}

                <View>
                  <BoldText>Abilities</BoldText>
                  {data.abilities.map((ability, index) => (
                    <Text key={index}>{ability.name}</Text>
                  ))}
                </View>

                <View>
                  <BoldText>Moves</BoldText>
                  {data.moves.map((move, index) => (
                    <Text key={index}>{move.name}</Text>
                  ))}
                </View>

                <BoldText>Evolutions</BoldText>
              </Scroll>
            </>
          ) : null}

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

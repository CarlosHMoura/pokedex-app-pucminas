import React from 'react';
import { Modal, Text , Image} from 'react-native';

import { ModalContainer, 
  ModalContent, 
  CloseButton, 
  CloseButtonIcon, 
  FavoriteButton,
  FavoriteButtonIcon, 
  PokemonSprite,
  PokemonSpriteBackground} from './styles';

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
      transparent = {true}
      animationType="fade"
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          {data ? (
            <>
              <Text>#{data.id}</Text>
              <Text>{data.types.map((type, index) => <Text key={index}>{type.type.name}</Text>)}</Text>
              <PokemonSpriteBackground background-color="#111111"> 
                <PokemonSprite source={{ uri: data.animatedImageUrl }} />
              </PokemonSpriteBackground>
              
              <Text>{data.name}</Text>

              <Text>Weight: {data.weight}</Text>
              <Text>Height: {data.height}</Text>

              
              <Text>Base Experience: {data.base_experience}</Text>
              <Text>Abilities: {data.abilities.map((ability, index) => <Text key={index}>{ability.ability.name}</Text>)}</Text>
              <Text>Stats: {data.stats.map((stat, index) => <Text key={index}>{stat.stat.name}: {stat.base_stat}</Text>)}</Text>
              <Text>Moves: {data.moves.map((move, index) => <Text key={index}>{move.move.name}</Text>)}</Text>

            </>
          ) : (
            <Text>No data</Text>
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
};
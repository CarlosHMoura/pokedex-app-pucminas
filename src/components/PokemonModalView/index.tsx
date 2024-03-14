import React from 'react';
import { Modal, Text , Image} from 'react-native';

import { ModalContainer, 
  ModalContent, 
  CloseButton, 
  CloseButtonIcon, 
  FavoriteButton,
  FavoriteButtonIcon } from './styles';

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
              <Image source={{ uri: data.animatedImageUrl }} style={{ width: 128, height: 128 }} />
              <Text>{data.name}</Text>
              <Text>Weight: {data.weight}</Text>
              <Text>Base Experience: {data.base_experience}</Text>
              {/* Add more fields as needed */}
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
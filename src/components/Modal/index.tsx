import React, { useState } from 'react';

import { Modal, Text } from 'react-native';
import { ModalContainer, 
  ModalContent, 
  CloseButton, 
  CloseButtonIcon, 
  FavoriteButton,
  FavoriteButtonIcon } from './styles';

import searchIcon from "../../assets/arrow-icon.png";
import starIcon0 from "../../assets/star-0-icon.png";

interface SimpleModalProps {
  visible: boolean;
  onClose: () => void;
}

export function SimpleModal({ visible, onClose }: SimpleModalProps) {
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
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

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


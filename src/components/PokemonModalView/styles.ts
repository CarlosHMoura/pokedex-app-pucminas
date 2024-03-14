import styled from 'styled-components/native';
import theme from "../../theme";

import { TouchableOpacity } from "react-native";

export const ModalContainer = styled.View`
    flex: 1;
    width: max-content;
    background-color: rgba(0,0,0,0.2);
    height: 800px;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.View`
    background-color: ${() => theme.colors.white};
    padding: 50px;
    border-radius: 30px;
    elevation: 5;
    width: 90%;
    height: 90%;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const CloseButton = styled(TouchableOpacity)`
    border-radius: 50px;
    position: absolute;
    top: 10px;
    left: 0px;
`;

export const CloseButtonIcon = styled.Image`
    width: 40px;
    height: 40px;
    opacity: 0.5;
`;

export const FavoriteButton = styled(TouchableOpacity)`
    border-radius: 50px;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const FavoriteButtonIcon = styled.Image`
    width: 40px;
    height: 40px;
    opacity: 0.5;
`;
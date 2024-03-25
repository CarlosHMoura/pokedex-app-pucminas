import styled from "styled-components/native";
import theme from "../../theme";

import { TouchableOpacity } from "react-native";

//ModalBasis
export const ModalContainer = styled.View`
    flex: 1;
    width: max-content;
    background-color: rgba(0,0,0,0.2);
    height: 800px;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.View`
    background-color: ${() => theme.colors.pureWhite};
    padding: 50px;
    border-radius: 30px;
    elevation: 5;
    width: 95%;
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
//PokemonModalView
export const PokemonSprite = styled.Image`
    width: 150px;
    height: 150px;
    margin: 10px;
    padding: 5px;
`;

export const Scroll = styled.ScrollView`
    width: 300px;
    height: 250px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 20px;
    background-color: ${theme.colors.white};
    z-index: 1;
    position: relative;
`;

//Tag
export const Tag = styled.View`
    background-color: ${theme.colors.lightGrey};
    border-radius: 10px;
    padding: 1px 15px;
    align-items: center;
    justify-content: center;
    align-self: center;
    align-content: center;
    margin: 5px;
`;

export const TagText = styled.Text`
    font-size: 14px;
    color: ${theme.colors.white};
    text-transform: justify-self;
    text-transform: capitalize;
    font-weight: bold;
`;
//Texts
export const Text = styled.Text`
    font-size: 14px;
    color: ${theme.colors.darkGrey};
    text-transform: justify-self;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 5px;  
`;

export const BoldText = styled.Text`
    font-size: 16px;
    color: ${theme.colors.black};
    text-transform: justify-self;
    text-transform: capitalize;
    text-align: center;
    margin: 20px;  
    font-weight: bold;
`;

export const IndexText = styled.Text`
    font-size: 14px;
    color: ${theme.colors.lightGrey};
    text-transform: capitalize;
    text-align: center;
    font-style: italic;
`;

export const PokemonTitleText = styled.Text`
    font-size: 24px;
    color: ${theme.colors.black};
    text-transform: capitalize;
    font-weight: bold;
    text-align: center;
`;
import styled from "styled-components/native";
import theme from "../../theme";

import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native";

//MODAL -----------------------------------------------------------------------------------------------
export const ModalContainer = styled.View`
    flex: 1;
    width: max-content;
    background-color: rgba(0,0,0,0.2);
    height: 800px;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`;

export const ModalContent = styled.View`
    background-color: ${() => theme.colors.pureWhite};
    border-radius: 15px;
    elevation: 5;
    width: 95%;
    height: 95%;
    align-items: center;
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
    opacity: 0.7;
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
    opacity: 0.7;
`;
//POKEMON HEADER -----------------------------------------------------------------------------------------------
export const PokemonSprite = styled(Animatable.Image)`
    z-index: 2;
    width: 200px;
    height: 200px;
    margin-left: 15px;
`;

export const PokemonTitleText = styled.Text`
    font-size: 28px;
    color: ${theme.colors.black};
    font-weight: bold;
    text-align: center;
    margin: 10px;
`;

export const PokemonHeader = styled.View`
    background-color: ${theme.colors.white};
    width: 95%;
    height: 30%;
    border-radius: 15px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const PokemonHeaderInfo = styled.View`
    justify-content: center;
    align-items: center;
    width: 50%;
`;

export const Tag = styled.View`
    background-color: ${theme.colors.lightGrey};
    border-radius: 10px;
    padding: 1px 10px;
    margin: 2px;    
`;

export const TagText = styled.Text`
    font-size: 14px;
    color: ${theme.colors.white};
    text-transform: capitalize;
    font-weight: bold;
`;

//TEXT -----------------------------------------------------------------------------------------------
export const Text = styled.Text`
    font-size: 14px;
    color: ${theme.colors.darkGrey};
    margin-bottom: 5px;
`;

export const BoldText = styled.Text`
    font-size: 14px;
    color: ${theme.colors.darkGrey}; 
    font-weight: bold;
`;

export const SubtitleText = styled.Text`
    font-size: 18px;
    color: ${theme.colors.black}; 
    font-weight: bold;
`;

export const IndexText = styled.Text`
    font-size: 16px;
    color: ${theme.colors.lightGrey};
    font-style: italic;
    margin: 10px;
`;

//SCROLL -----------------------------------------------------------------------------------------------
export const Scroll = styled.ScrollView`
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    background-color: ${theme.colors.white};
    align-self: start;
`;
export const ScrollContent = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ScrollDivider = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.lightGrey};
    margin: 10px;
`;

// EVOLUTIONS -----------------------------------------------------------------------------------------------
export const EvolutionContainer = styled.View`
    background-color: ${theme.colors.pureWhite};
    border-radius: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 100px;
    height: 100px;
`;

export const EvolutionText = styled.Text`
    font-size: 16px;
    color: ${theme.colors.black};
`;

export const EvolutionSprite = styled.Image`
    width: 70px;
    height: 70px;
`;

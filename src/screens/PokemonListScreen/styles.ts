import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export const Container = styled.View`
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.pureWhite};
`;

export const AnimatableView = styled(Animatable.View)`
    
`;

export const ListItem = styled(TouchableOpacity)`
    width: 150px;
    height: 180px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: 5px;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 40px;
    box-shadow: 0px 0px 5px ${theme.colors.darkGrey};
    elevation: 5;
    z-index: 1;
    align-self: center;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: ${theme.colors.darkGrey};
    text-transform: capitalize;
    font-weight: bold;
    text-align: center;
`;

export const IndexText = styled.Text`
    font-size: 14px;
    color: ${theme.colors.lightGrey};
    text-transform: capitalize;
    text-align: center;
    font-style: italic;
    position: absolute;
    top: 0px;
`;

export const Sprite = styled.Image`
    z-index: -1;
    width: 150px;
    height: 150px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
    margin-top: 30px;
    margin-bottom: 30px;
    size: large;
    color: ${theme.colors.blue};
`;

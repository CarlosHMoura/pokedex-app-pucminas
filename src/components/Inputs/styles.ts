import styled from 'styled-components/native';
import theme from "../../theme";

import { TouchableOpacity } from "react-native";

export const Container = styled.TextInput`
    width: 70%;
    height: 40px;
    padding: 0px 16px;
    margin-top: 10px;
    background-color : ${() => theme.colors.white};
    color: ${() => theme.colors.darkGrey};
    border-radius: 50px;
`;

export const SearchButton = styled(TouchableOpacity)`
    background-color: ${() => theme.colors.red};
    height: 40px;
    margin-top: 10px;
    border-radius: 50px;
`;

export const SearchButtonIcon = styled.Image`
    width: 20px;
    height: 20px;
    margin: 10px;
`;
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export const Icon = styled.Image`
    width: 50px;
    height: 50px;
    opacity: 0.7;
`;

export const Container = styled(TouchableOpacity)`
    padding: 5px 5px;
    position: absolute;
    top: 30px;
    left: 10px;
    background-color: ${() => theme.colors.lightBlue};
    border-radius: 50px;
`;

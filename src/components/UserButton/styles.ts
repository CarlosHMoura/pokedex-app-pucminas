import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export const Icon = styled.Image`
  width: 50;
  height: 50;
  opacity: 0.7;
`;

export const Container = styled(TouchableOpacity)`
  padding: 5px 5px;
  position: absolute;
  top: 20px;
  left: 0px;
`;

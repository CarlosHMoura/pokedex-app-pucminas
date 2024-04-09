import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
  opacity: 0.7;
  margin-right: 10px; /* Adicione um espaçamento entre os ícones */
`;

export const Container = styled.View`
  flex-direction: row; /* Alinhe os ícones horizontalmente */
  padding: 5px 10px; /* Aumente o espaçamento interno */
  position: absolute;
  top: 30px;
  left: 10px;
  background-color: ${() => theme.colors.lightBlue};
  border-radius: 50px;
`;

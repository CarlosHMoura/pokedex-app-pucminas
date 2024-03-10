import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export const Text = styled.Text`
  color: ${() => theme.colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const Container = styled(TouchableOpacity)`
  background-color: ${() => theme.colors.red};
  padding: 5px 10px;
  border-radius: 20px;
  margin: 10px;
`;

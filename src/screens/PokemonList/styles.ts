import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  position: static;
  width: 100%;
  height: 500px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${() => theme.colors.black};
  font-size: 32px;
  font-weight: bold;
`;


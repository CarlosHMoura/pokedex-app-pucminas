import styled from "styled-components/native";
import theme from "../../theme";


export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${() => theme.colors.bgColor};
  width: 100%;
  height: 300px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
`;

export const MainIcon = styled.Image`
  z-index: -1;
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  color: ${() => theme.colors.textColor};
  font-size: 32px;
  font-weight: bold;
`;

export const User = styled.Image`
  width: 50;
  height: 50;
  opacity: 0.7;
  position: absolute;
  left: 5;
  top: 30;
`;

export const PokemonList = styled.FlatList`
  margin-top: 45px;
`;




// types.ts

// Importe as declarações necessárias de "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Defina os parâmetros de rota para a pilha de navegação
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  DeleteAccount: undefined;
  PokemonList: undefined;
};

// Defina o tipo de rota para acessar as props de rota
export type RootStackRouteProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

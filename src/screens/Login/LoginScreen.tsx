import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack"; // Importe o tipo StackNavigationProp
import { RootStackParamList } from "../../types"; // Importe a lista de parâmetros de rota

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>; // Defina o tipo para a tela de navegação de login

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp; // Especifique o tipo de navigation
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => { // Use o tipo especificado
  const handleLogin = () => {
    // Lógica de login aqui
    // Se o login for bem-sucedido, navegue para a tela principal
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>Tela de Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

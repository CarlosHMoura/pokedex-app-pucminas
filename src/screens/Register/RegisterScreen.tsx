import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack"; // Importe StackNavigationProp
import { RootStackParamList } from "../../types"; // Importe a lista de parâmetros de rota

// Defina o tipo de navegação para a tela de registro
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

// Defina as props da tela de registro
interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp; // Especifique o tipo de navigation
}

// Componente da tela de registro
const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const handleRegister = () => {
    // Lógica de registro aqui
    // Se o registro for bem-sucedido, navegue para a tela de login
    navigation.navigate("Login");
  };

  return (
    <View>
      <Text>Tela de Registro</Text>
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;

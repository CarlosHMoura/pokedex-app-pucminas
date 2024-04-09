import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types"; // Importe a lista de parâmetros de rota

type DeleteAccountScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DeleteAccount'>;

interface DeleteAccountScreenProps {
  navigation: DeleteAccountScreenNavigationProp; 
}

const DeleteAccountScreen: React.FC<DeleteAccountScreenProps> = ({ navigation }) => {
  const handleDeleteAccount = () => {
    // Lógica de exclusão de conta aqui
    // Se a exclusão for bem-sucedida, navegue para a tela de login
    navigation.navigate("Login");
  };

  return (
    <View>
      <Text>Tela de Exclusão de Conta</Text>
      <Button title="Excluir Conta" onPress={handleDeleteAccount} />
    </View>
  );
};

export default DeleteAccountScreen;

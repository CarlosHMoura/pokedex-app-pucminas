import React from "react";
import { Container, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";

import userIcon from "../../assets/user-icon.png";
import loginIcon from "../../assets/login-icon.png";
import registerIcon from "../../assets/register-icon.png";
import deleteAccountIcon from "../../assets/delete-account-icon.png";

interface ButtonProps {
  onPress: () => void;
}

export function UserButton({ onPress }: ButtonProps) {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login'); // Navegar para a página de login
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Navegar para a página de registro
  };

  const handleDeleteAccount = () => {
    navigation.navigate('DeleteAccount'); // Navegar para a página de exclusão de conta
  };

  return (
    <Container>
      <Icon source={userIcon} />
      {/* Ícone para login */}
      <Icon
        source={loginIcon}
        onPress={handleLogin}
      />
      {/* Ícone para registro */}
      <Icon
        source={registerIcon}
        onPress={handleRegister}
      />
      {/* Ícone para exclusão de conta */}
      <Icon
        source={deleteAccountIcon}
        onPress={handleDeleteAccount}
      />
    </Container>
  );
}

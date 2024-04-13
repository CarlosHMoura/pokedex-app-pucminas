import React from 'react';
import Register from '../components/Auth/Register';

const RegisterPage: React.FC = () => {
  const handleRegister = async (username: string, password: string) => {
    // Implemente a lógica de registro aqui, como fazer uma requisição para o backend
    // Retorna true se o registro for bem-sucedido e false se não for
    return true; // Temporário, substitua pela lógica real de registro
  };

  return (
    <div>
      <h1>Página de Registro</h1>
      <Register onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;

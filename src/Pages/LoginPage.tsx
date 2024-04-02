import React from 'react';
import Login from '../components/Auth/Login';

const LoginPage: React.FC = () => {
  const handleLogin = async (username: string, password: string) => {
    // Implemente a lógica de login aqui, como fazer uma requisição para o backend
    // Retorna true se o login for bem-sucedido e false se não for
    return true; // Temporário, substitua pela lógica real de login
  };

  return (
    <div>
      <h1>Página de Login</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;

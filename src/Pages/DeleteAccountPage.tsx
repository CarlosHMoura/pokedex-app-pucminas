import React from 'react';
import DeleteAccount from '../components/Auth/DeleteAccount';

const DeleteAccountPage: React.FC = () => {
  const handleDelete = async () => {
    // Implemente a lógica de exclusão de conta aqui, como fazer uma requisição para o backend
    // Redirecionar ou mostrar uma mensagem após a exclusão da conta
  };

  return (
    <div>
      <h1>Página de Exclusão de Conta</h1>
      <DeleteAccount onDelete={handleDelete} />
    </div>
  );
};

export default DeleteAccountPage;

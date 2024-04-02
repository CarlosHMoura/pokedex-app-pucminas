import React from 'react';

const DeleteAccount: React.FC<{ onDelete: () => Promise<void> }> = ({ onDelete }) => {
  const handleDelete = async () => {
    await onDelete();
    // Lidar com a exclusão de conta, como redirecionamento, exibição de mensagem, etc.
  };

  return (
    <div>
      <p>Tem certeza que deseja excluir sua conta?</p>
      <button onClick={handleDelete}>Confirmar</button>
    </div>
  );
};

export default DeleteAccount;

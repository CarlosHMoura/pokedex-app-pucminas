import React from 'react';

interface UserProfile {
  username: string;
  email: string;
  fullName: string; // Adicionando campo de nome completo
  birthdate: string; // Adicionando campo de data de nascimento
  phone: string; // Adicionando campo de telefone
  // Outros campos do perfil, se houver
}

const Profile: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Nome Completo: {user.fullName}</p> {/* Exibindo o nome completo */}
      <p>Data de Nascimento: {user.birthdate}</p> {/* Exibindo a data de nascimento */}
      <p>Telefone: {user.phone}</p> {/* Exibindo o número de telefone */}
      {/* Adicione outros campos do perfil aqui, se necessário */}
    </div>
  );
};

export default Profile;

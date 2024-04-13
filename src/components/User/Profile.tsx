import React from 'react';

interface UserProfile {
  username: string;
  email: string;
  // Outros campos do perfil, se houver
}

const Profile: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Adicione outras informações do perfil aqui, se necessário */}
    </div>
  );
};

export default Profile;

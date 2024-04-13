import React from 'react';
import Profile from '../components/User/Profile';

interface UserProfile {
  username: string;
  email: string;
  // Outros campos do perfil, se houver
}

const sampleUser: UserProfile = {
  username: 'example_user',
  email: 'user@example.com',
  // Outros campos do perfil, se houver
};

const ProfilePage: React.FC = () => {
  return (
    <div>
      <h1>Página de Perfil do Usuário</h1>
      <Profile user={sampleUser} />
    </div>
  );
};

export default ProfilePage;

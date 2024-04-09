import React from 'react';
import Profile from '../components/User/Profile';

interface UserProfile {
  username: string;
  email: string;
  fullName: string; // Adicionando a propriedade fullName
  birthdate: string; // Adicionando a propriedade birthdate
  phone: string; // Adicionando a propriedade phone
  // Outras propriedades do perfil, se houver
}


const sampleUser: UserProfile = {
  username: 'example_user',
  email: 'user@example.com',
  fullName: 'John Doe',
  birthdate: '01/01/2000',
  phone: '(31)3456-7890',
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

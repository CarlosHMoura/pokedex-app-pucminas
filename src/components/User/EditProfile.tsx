import React, { useState } from 'react';

interface UserProfile {
  username: string;
  email: string;
  // Outros campos do perfil, se houver
}

const EditProfile: React.FC<{ user: UserProfile; onUpdateProfile: (newProfile: UserProfile) => void }> = ({ user, onUpdateProfile }) => {
  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  // Outros estados para outros campos do perfil, se houver

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedProfile = {
      username: newUsername,
      email: newEmail,
      // Outros campos do perfil, se houver
    };
    onUpdateProfile(updatedProfile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Novo Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Novo Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      {/* Outros campos do formulário de edição do perfil, se houver */}
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditProfile;

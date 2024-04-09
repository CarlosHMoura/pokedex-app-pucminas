import React, { useState } from 'react';

interface UserProfile {
  username: string;
  email: string;
  fullName: string;
  birthdate: string;
  phone: string;
  password: string; // Adicionando a senha ao perfil do usuário
  // Outros campos do perfil, se houver
}

const EditProfile: React.FC<{ user: UserProfile; onUpdateProfile: (newProfile: UserProfile) => void }> = ({ user, onUpdateProfile }) => {
  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newFullName, setNewFullName] = useState(user.fullName);
  const [newBirthdate, setNewBirthdate] = useState(user.birthdate);
  const [newPhone, setNewPhone] = useState(user.phone);
  const [newPassword, setNewPassword] = useState(user.password); // Estado para a nova senha
  // Outros estados para outros campos do perfil, se houver

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedProfile = {
      username: newUsername,
      email: newEmail,
      fullName: newFullName,
      birthdate: newBirthdate,
      phone: newPhone,
      password: newPassword, // Incluindo a nova senha no perfil atualizado
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
      <input
        type="text"
        placeholder="Novo Nome Completo"
        value={newFullName}
        onChange={(e) => setNewFullName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Nova Data de Nascimento"
        value={newBirthdate}
        onChange={(e) => setNewBirthdate(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Novo Número de Telefone"
        value={newPhone}
        onChange={(e) => setNewPhone(e.target.value)}
      />
      <input
        type="password" // Campo de senha para inserir a nova senha
        placeholder="Nova Senha"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      {/* Outros campos do formulário de edição do perfil, se houver */}
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditProfile;

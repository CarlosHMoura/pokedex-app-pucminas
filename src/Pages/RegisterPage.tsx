import React, { useState } from 'react';

interface UserProfile {
  username: string;
  password: string;
  fullName: string;
  birthdate: Date;
  email: string;
  phoneNumber: string;
  // Outros campos do perfil, se houver
}

const Register: React.FC<{
  onRegister: (
    username: string,
    password: string,
    fullName: string,
    birthdate: Date,
    email: string,
    phoneNumber: string
  ) => Promise<boolean>;
}> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await onRegister(username, password, fullName, birthdate!, email, phoneNumber);
    if (success) {
      // Lidar com o registro bem-sucedido, redirecionamento, etc.
    } else {
      // Lidar com falha de registro
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Birthdate"
        value={birthdate?.toISOString().split('T')[0] ?? ''}
        onChange={(e) => setBirthdate(new Date(e.target.value))}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

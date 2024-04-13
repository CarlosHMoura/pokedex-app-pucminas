import React, { useState } from 'react';

const Register: React.FC<{ onRegister: (username: string, password: string) => Promise<boolean> }> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await onRegister(username, password);
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

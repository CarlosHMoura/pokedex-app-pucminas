import React, { useState } from 'react';

const Register: React.FC<{ onRegister: (userData: UserData) => Promise<boolean> }> = ({ onRegister }) => {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    phoneNumber: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await onRegister(userData);
    if (success) {
      // Lidar com o registro bem-sucedido, redirecionamento, etc.
    } else {
      // Lidar com falha de registro
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={userData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Birth Date"
        name="birthDate"
        value={userData.birthDate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Phone Number"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

interface UserData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  phoneNumber: string;
}

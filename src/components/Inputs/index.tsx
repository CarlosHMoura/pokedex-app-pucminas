import React from "react";
import { TextInputProps } from "react-native"; 

import { Container } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  
  const handleInputChange = (text: string) => {
    console.log(text);
  };

  const handleSubmit = () => {
    console.log('Enter pressed');
  };

  return <Container onChangeText={handleInputChange} onSubmitEditing={handleSubmit} {...rest}></Container>;
} 
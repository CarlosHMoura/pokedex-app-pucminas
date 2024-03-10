import React from "react";
import { TextInputProps, View } from "react-native"; 

import { Container, SearchButton, SearchButtonIcon } from "./styles";

import searchIcon from "../../assets/search-icon.png";

export function Input({ ...rest }: TextInputProps) {
  
  const handleInputChange = (text: string) => {
    console.log(text);
  };

  const handleSubmit = () => {
    console.log('Enter pressed');
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <Container onChangeText={handleInputChange} onSubmitEditing={handleSubmit} {...rest}></Container>
      <SearchButton onPress={handleSubmit}>
        <SearchButtonIcon source={searchIcon}></SearchButtonIcon>
      </SearchButton>
    </View>
  );
} 
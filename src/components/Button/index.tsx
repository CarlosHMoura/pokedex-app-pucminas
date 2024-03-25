import React from "react";
import {Container, Text} from "./styles";

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export function Button({ ...rest }: ButtonProps) {
  return <Container {...rest}>
    <Text> {rest.title} </Text>
  </Container>;
}

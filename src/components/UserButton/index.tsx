import React from "react";
import {Container, Icon} from "./styles";

import userIcon from "../../assets/user-icon.png";

interface ButtonProps {
  onPress: () => void;
}

export function UserButton({ ...rest }: ButtonProps) {
  return <Container {...rest}>
    <Icon source={userIcon}></Icon>
  </Container>;
}

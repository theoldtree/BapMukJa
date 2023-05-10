import React from "react";
import styled from "styled-components/native";
import { GRAY_COLOR_300, SKY_BLUE_500 } from "../../../Assets/Colors/color";

const Continer = styled.View`
  margin-top: 2%;
`;

const Header = styled.Text`
  color: ${SKY_BLUE_500};
  margin: 2%;
  margin-left: 7%;
`;

const TextInput = styled.TextInput`
  border-color: ${GRAY_COLOR_300};
  width: 92%;
  align-self: center;
  height: 50px;
  border-width: 1px;
  padding: 2%;
`;

export default function SignupTextInputBox({
  title,
  value,
  onChangeText,
  onref,
  keyboardType,
  placeholder,
  secureTextEntry,
}) {
  return (
    <Continer>
      <Header>{title}</Header>
      <TextInput
        value={value}
        autoCapitalize="none"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        ref={onref}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </Continer>
  );
}

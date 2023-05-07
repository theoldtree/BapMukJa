import React from "react";
import styled from "styled-components/native";
import { GRAY_COLOR } from "../../../Assets/Colors/color";

const Continer = styled.View``;

const Header = styled.Text`
  color: black;
  margin: 2%;
  margin-left: 7%;
`;

const TextInput = styled.TextInput`
  border-color: ${GRAY_COLOR};
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
}) {
  return (
    <Continer>
      <Header>{title}</Header>
      <TextInput
        value={value}
        autoCapitalize="none"
        onChangeText={onChangeText}
        secureTextEntry
        ref={onref}
      />
    </Continer>
  );
}

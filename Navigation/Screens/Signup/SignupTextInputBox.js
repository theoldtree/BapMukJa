import React from 'react';
import styled from 'styled-components/native';
import {GRAY_COLOR} from '../../../Assets/Colors/color';

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
`;

export default function SignupTextInputBox({title}) {
  return (
    <Continer>
      <Header>{title}</Header>
      <TextInput />
    </Continer>
  );
}

import React from 'react';
import styled from 'styled-components/native';
import CustomButton from '../../../Components/CutsomButton';
import {GRAY_COLOR} from '../../../Assets/Colors/color';

const Continer = styled.View``;

const Header = styled.Text`
  color: black;
  margin: 2%;
  margin-left: 7%;
`;

const TextIputButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 4%;
  padding-right: 4%;
  align-items: center;
`;

const TextInput = styled.TextInput`
  border-color: ${GRAY_COLOR};
  width: ${props => props.width};
  align-self: center;
  height: 50px;
  border-width: 1px;
`;

export default function SignupTextInputBoxWithButton({
  title,
  buttonText,
  width,
}) {
  return (
    <Continer>
      <Header>{title}</Header>
      <TextIputButtonContainer>
        <TextInput width={width} />
        <CustomButton
          backgroundcolor={GRAY_COLOR}
          text={buttonText}
          bordercolor={GRAY_COLOR}
          textcolor={'white'}
        />
      </TextIputButtonContainer>
    </Continer>
  );
}

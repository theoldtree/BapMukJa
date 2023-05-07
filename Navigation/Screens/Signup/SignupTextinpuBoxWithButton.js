import React from "react";
import styled from "styled-components/native";
import CustomButton from "../../../Components/CutsomButton";
import { GRAY_COLOR } from "../../../Assets/Colors/color";

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
  padding-right: 2%;
  align-items: center;
`;

const TextInput = styled.TextInput`
  padding: 2%;
  border-color: ${GRAY_COLOR};
  align-self: center;
  height: 50px;
  border-width: 1px;
  flex: 1;
`;

export default function SignupTextInputBoxWithButton({
  title,
  buttonText,
  width,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
}) {
  return (
    <Continer>
      <Header>{title}</Header>
      <TextIputButtonContainer>
        <TextInput
          width={width}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        <CustomButton
          backgroundcolor={GRAY_COLOR}
          text={buttonText}
          bordercolor={GRAY_COLOR}
          textcolor={"white"}
          autoCapitalize={autoCapitalize}
        />
      </TextIputButtonContainer>
    </Continer>
  );
}

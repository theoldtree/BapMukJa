import React from "react";
import styled from "styled-components/native";
import CustomButton from "../../../Components/CutsomButton";
import { GRAY_COLOR_200 } from "../../../Assets/Colors/color";

const Continer = styled.View``;

const Header = styled.Text`
  color: ${SKY_BLUE_500};
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
  border-color: ${GRAY_COLOR_200};
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
  onref,
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
          ref={onref}
        />
        <CustomButton
          backgroundcolor={GRAY_COLOR_200}
          text={buttonText}
          bordercolor={GRAY_COLOR_200}
          textcolor={"white"}
          autoCapitalize={autoCapitalize}
        />
      </TextIputButtonContainer>
    </Continer>
  );
}

import React from "react";
import styled from "styled-components/native";
import { Container } from "../../../Components/Container";
import { GRAY_COLOR } from "../../../Assets/Colors/color";
import CustomButton from "../../../Components/CutsomButton";
import SignupTextInputBox from "./SignupTextInputBox";
import SignupTextInputBoxWithButton from "./SignupTextinpuBoxWithButton";
import { BottomContentsContainer } from "../../../Components/BottomContentsContainer";

const GroupContainer = styled.View`
  margin-top: 5%;
  margin-bottom: 7%;
`;

export default function Signup({ navigation }) {
  return (
    <Container>
      <GroupContainer>
        <SignupTextInputBoxWithButton
          title={"이메일"}
          buttonText={"중복확인"}
          width={"75%"}
        />
        <SignupTextInputBoxWithButton
          title={"인증번호"}
          buttonText={"인증번호 받기"}
          width={"68%"}
        />
      </GroupContainer>
      <GroupContainer>
        <SignupTextInputBox title={"패스워드"} />
        <SignupTextInputBox title={"패스워드 재확인"} />
      </GroupContainer>
      <BottomContentsContainer>
        <CustomButton
          backgroundcolor={"white"}
          bordercolor={GRAY_COLOR}
          onPress={() => navigation.navigate("Login")}
          textcolor={"black"}
          text={"가입하기 - !"}
        />
      </BottomContentsContainer>
    </Container>
  );
}

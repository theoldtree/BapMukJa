import React, { useState } from "react";
import styled from "styled-components/native";
import { Container } from "../../../Components/Container";
import { GRAY_COLOR } from "../../../Assets/Colors/color";
import CustomButton from "../../../Components/CutsomButton";
import SignupTextInputBox from "./SignupTextInputBox";
import SignupTextInputBoxWithButton from "./SignupTextinpuBoxWithButton";
import { BottomContentsContainer } from "../../../Components/BottomContentsContainer";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";

const GroupContainer = styled.View`
  margin-top: 3%;
  margin-bottom: 7%;
`;

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authnumber, setAuthnumber] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [loading, setLoading] = useState(false);

  const onPressLogin = async () => {
    console.log("buttonpressed");
    if (email === "" || passwordCheck === "") {
      return Alert.alert(
        "유효하지 않은 이메일이거나 암호입니다. 내용을 입력해주세요"
      );
    }
    if (loading) return;
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <GroupContainer>
        <SignupTextInputBoxWithButton
          title={"이메일"}
          buttonText={"중복확인"}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          keyboardType={"email-address"}
          autoCapitalize="none"
        />
        <SignupTextInputBoxWithButton
          title={"인증번호"}
          buttonText={"인증번호 받기"}
          value={authnumber}
          onChangeText={(text) => {
            setAuthnumber(text);
          }}
          secureTextEntry={false}
          keyboardType={"number-pad"}
        />
      </GroupContainer>
      <GroupContainer>
        <SignupTextInputBoxWithButton
          title={"패스워드"}
          buttonText={"비밀번호 찾기"}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <SignupTextInputBox
          title={"패스워드 재확인"}
          value={passwordCheck}
          onChangeText={(text) => setPasswordCheck(text)}
          autoCapitalize="none"
        />
      </GroupContainer>
      <BottomContentsContainer>
        <CustomButton
          backgroundcolor={"white"}
          bordercolor={GRAY_COLOR}
          onPress={() => {
            onPressLogin();
            // navigation.navigate("Login");
          }}
          textcolor={"black"}
          text={"가입하기 - !"}
          activity={loading}
        />
      </BottomContentsContainer>
    </Container>
  );
}

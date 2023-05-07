import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Container } from "../../../Components/Container";
import { GRAY_COLOR } from "../../../Assets/Colors/color";
import CustomButton from "../../../Components/CutsomButton";
import SignupTextInputBox from "./SignupTextInputBox";
import SignupTextInputBoxWithButton from "./SignupTextinpuBoxWithButton";
import { BottomContentsContainer } from "../../../Components/BottomContentsContainer";
import { Alert } from "react-native";
import auth, { firebase } from "@react-native-firebase/auth";

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

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const authnumberInputRef = useRef(null);
  const passwordCheckInputRef = useRef(null);

  const onPressLogin = async () => {
    console.log("buttonpressed");
    if (!email) {
      emailInputRef.current.focus();
      return Alert.alert("내용을 입력해주세요");
    }
    if (!authnumber) {
      authnumberInputRef.current.focus();
      return Alert.alert("내용을 입력해주세요");
    }
    if (!password) {
      passwordInputRef.current.focus();
      return Alert.alert("내용을 입력해주세요");
    }
    if (!passwordCheck) {
      passwordCheckInputRef.current.focus();
      return Alert.alert("내용을 입력해주세요");
    }
    if (loading) return;
    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        passwordCheck
      );
      console.log(userCredential);
      await firebase.auth().signOut();
      navigation.navigate("Login");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          return Alert.alert("유효하지 않은 이메일 형식입니다");
          break;
        case "auth/email-already-in-use":
          return Alert.alert("이미 사용하고 있는 계정입니다");
          break;
        case "auth/weak-password":
          return Alert.alert("보안강도가 낮은 암호 입니다");
          break;
        default:
          if (password !== passwordCheck)
            return Alert.alert("패스워드 재확인이 일치하지 않습니다");
      }
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
          onref={emailInputRef}
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
          onref={authnumberInputRef}
        />
      </GroupContainer>
      <GroupContainer>
        <SignupTextInputBoxWithButton
          title={
            "패스워드( 6글자이상 + 영문,숫자 최소 하나씩 이상 조합하깅 -! )"
          }
          buttonText={"비밀번호 찾기"}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
          autoCapitalize="none"
          onref={passwordInputRef}
        />
        <SignupTextInputBox
          title={"패스워드 재확인"}
          value={passwordCheck}
          onChangeText={(text) => setPasswordCheck(text)}
          autoCapitalize="none"
          onref={passwordCheckInputRef}
        />
      </GroupContainer>
      <BottomContentsContainer>
        <CustomButton
          backgroundcolor={"white"}
          bordercolor={GRAY_COLOR}
          onPress={() => {
            onPressLogin();
          }}
          textcolor={"black"}
          text={"가입하기 - !"}
          activity={loading}
        />
      </BottomContentsContainer>
    </Container>
  );
}

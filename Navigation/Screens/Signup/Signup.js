import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Container } from "../../../Components/Container";
import { GRAY_COLOR_200, SKY_BLUE_500 } from "../../../Assets/Colors/color";
import CustomButton from "../../../Components/CutsomButton";
import SignupTextInputBox from "./SignupTextInputBox";
import SignupTextInputBoxWithButton from "./SignupTextinpuBoxWithButton";
import { Alert, KeyboardAvoidingView } from "react-native";
import auth, { firebase } from "@react-native-firebase/auth";
import BackHeader from "../../../Components/BackHeader";
import firestore from "@react-native-firebase/firestore";

const ButtonContainer = styled.View`
  margin-top: 20%;
`;

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [authnumber, setAuthnumber] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [loading, setLoading] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const authnumberInputRef = useRef(null);
  const passwordCheckInputRef = useRef(null);
  const phoneNumberCheckInputRef = useRef(null);

  const onPressLogin = async () => {
    console.log("buttonpressed");
    if (!name) {
      nameInputRef.current.focus();
      return Alert.alert("내용을 입력해주세요");
    }
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
    if (!phonenumber) {
      phoneNumberCheckInputRef.current.focus();
      return Alert.alert("내용을 입력해주세요");
    }
    if (password !== passwordCheck) {
      passwordCheckInputRef.current.focus();
      return Alert.alert("패스워드 재확인이 일치하지 않습니다");
    }
    if (phonenumber.length !== 11) {
      phoneNumberCheckInputRef.current.focus();
      return Alert.alert("11자리의 핸드폰 번호를 입력해주세요!");
    }
    console.log(phonenumber.length);
    if (loading) return;
    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        passwordCheck
      );
      console.log(userCredential.user.uid);
      await firestore().collection("users").doc(userCredential.user.uid).set({
        email: email,
        name: name,
        password: password,
        phonenumber: phonenumber,
      });
      await firebase.auth().signOut();
      navigation.navigate("Login");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          return Alert.alert("유효하지 않은 이메일 형식입니다");
        case "auth/email-already-in-use":
          return Alert.alert("이미 사용하고 있는 계정입니다");
        case "auth/weak-password":
          return Alert.alert("보안강도가 낮은 암호 입니다");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView>
        <BackHeader onPress={() => navigation.navigate("Login")} />
        <SignupTextInputBox
          title={"이름"}
          value={name}
          onChangeText={(text) => setName(text)}
          autoCapitalize="none"
          onref={nameInputRef}
          keyboardType={"email-address"}
          placeholder="이병건"
        />
        <SignupTextInputBox
          title={"이메일"}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          autoCapitalize="none"
          onref={emailInputRef}
          keyboardType={"email-address"}
          placeholder="calmdownman@naver.com"
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
          secureTextEntry={true}
        />
        <SignupTextInputBox
          title={"휴대전화번호"}
          value={phonenumber}
          onChangeText={(text) => {
            setPhonenumber(text);
          }}
          autoCapitalize="none"
          onref={phoneNumberCheckInputRef}
          keyboardType={"number-pad"}
          placeholder="01077770000"
        />
        <ButtonContainer>
          <CustomButton
            backgroundcolor={"white"}
            bordercolor={GRAY_COLOR_200}
            onPress={onPressLogin}
            textcolor={SKY_BLUE_500}
            text={"가입하기 - !"}
            activity={loading}
          />
        </ButtonContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}

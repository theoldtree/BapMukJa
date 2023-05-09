import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { Container } from "../../../Components/Container";
import {
  GRAY_COLOR_200,
  GRAY_COLOR_400,
  SKY_BLUE_500,
} from "../../../Assets/Colors/color";
import CusomButton from "../../../Components/CutsomButton";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

const ImageCoverView = styled.View`
  width: 80%;
  height: 30%;
  margin-top: 30%;
  align-self: center;
  margin-bottom: 10%;
`;

const TextInput = styled.TextInput`
  border-color: ${GRAY_COLOR_400};
  border-width: 1px;
  width: 80%;
  height: 60px;
  align-self: center;
  margin: 2%;
  padding-left: 20px;
  border-radius: 2px;
`;

const ButtonContainer = styled.View`
  margin-top: 10%;
  align-items: center;
`;

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const onSubmitLogin = async () => {
    if (!email) {
      emailInputRef.current.focus();
      return Alert.alert("이메일을 입력해 주세요");
    }
    if (!password) {
      emailInputRef.current.focus();
      return Alert.alert("패스워드를 입력해 주세요");
    }
    if (loading) return;
    setLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential);
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-not-found":
          return Alert.alert("존재하지 않는 이메일 계정입니다");
          break;
        case "auth/wrong-password":
          return Alert.alert("패스워드가 일치하지 않습니다");
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ImageCoverView>
        <Logo
          source={require("../../../Assets/Image/logo.png")}
          resizeMode="cover"
        />
      </ImageCoverView>
      <TextInput
        placeholder="이메일"
        keyboardType={"email-address"}
        autoCapitalize="none"
        onChangeText={(text) => {
          setEmail(text);
        }}
        ref={emailInputRef}
        maxLength={40}
      />
      <TextInput
        placeholder="패스워드"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
        }}
        ref={passwordInputRef}
        maxLength={40}
      />
      <ButtonContainer>
        <CusomButton
          backgroundcolor={GRAY_COLOR_200}
          bordercolor={GRAY_COLOR_200}
          onPress={() => navigation.navigate("Signup")}
          text={"회원가입"}
          textcolor={"white"}
          buttonwidth={"80%"}
        />
        <CusomButton
          backgroundcolor={"white"}
          bordercolor={GRAY_COLOR_200}
          onPress={onSubmitLogin}
          text={"로그인"}
          textcolor={SKY_BLUE_500}
          activity={loading}
          buttonwidth={"80%"}
        />
      </ButtonContainer>
    </Container>
  );
}

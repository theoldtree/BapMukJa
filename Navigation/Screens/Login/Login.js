import React from 'react';
import styled from 'styled-components/native';
import {Container} from '../../../Components/Container';
import {GRAY_COLOR} from '../../../Assets/Colors/color';
import CusomButton from '../../../Components/CutsomButton';

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
  border-color: ${GRAY_COLOR};
  border-width: 1px;
  width: 70%;
  height: 60px;
  align-self: center;
  margin: 2%;
  padding-left: 20px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 10%;
`;

export default function Login({navigation}) {
  return (
    <Container>
      <ImageCoverView>
        <Logo
          source={require('../../../Assets/Image/logo.png')}
          resizeMode="cover"
        />
      </ImageCoverView>
      <TextInput placeholder="이메일" />
      <TextInput placeholder="패스워드" />
      <ButtonContainer>
        <CusomButton
          backgroundcolor={GRAY_COLOR}
          bordercolor={GRAY_COLOR}
          onPress={() => navigation.navigate('Signup')}
          text={'회원가입'}
          textcolor={'white'}
        />
        <CusomButton
          backgroundcolor={'white'}
          bordercolor={GRAY_COLOR}
          onPress={() => navigation.navigate('Home')}
          text={'로그인'}
          textcolor={'black'}
        />
      </ButtonContainer>
    </Container>
  );
}

import React from 'react';
import styled from 'styled-components/native';
import CustomButton from './CutsomButton';
import {GRAY_COLOR} from '../Assets/Colors/color';
import Profile from './Profile';

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 4%;
  padding-right: 4%;
`;

export default function ProfileWithButton({text, name}) {
  return (
    <ProfileContainer>
      <Profile name={name} width={'82%'} />
      <CustomButton
        backgroundcolor={GRAY_COLOR}
        bordercolor={GRAY_COLOR}
        text={text}
        textcolor={'white'}
      />
    </ProfileContainer>
  );
}

import React from 'react';
import styled from 'styled-components/native';
import ProfileContainer from '../../../Components/ProfileContainer';

export default function MyProfile({profile}) {
  return <ProfileContainer title={'나의 프로필'} profile={profile} />;
}

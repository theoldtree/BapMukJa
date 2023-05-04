import React from 'react';
import styled from 'styled-components';
import {ProfileView} from '../../../Components/Profile';
import Member from '../../../Components/Member';

const GroupNameText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

const MemberNameText = styled.Text`
  color: black;
`;

export default function GroupProfile({grouplist, onPress}) {
  const renderItem = ({item}) => {
    return <MemberNameText>{item.name} </MemberNameText>;
  };

  return (
    <ProfileView width={'92%'} onPress={onPress}>
      <GroupNameText>{grouplist.name}</GroupNameText>
      <Member
        data={grouplist.member}
        keyExtrator={grouplist => grouplist.member.id}
      />
    </ProfileView>
  );
}

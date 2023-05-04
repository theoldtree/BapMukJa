import React, {useState} from 'react';
import styled from 'styled-components/native';
import ListHeader from '../../../Components/ListHeader';
import {Container} from '../../../Components/Container';
import GroupProfile from './GroupProfile';
import {Title} from '../../../Components/Title';

const ProfileHeader = () => {
  return <Title>그룹목록</Title>;
};

const ProfileList = styled.FlatList``;

export default function GroupList({navigation}) {
  const [groupList, setGroupList] = useState([
    {
      name: '회사',
      id: 1,
      member: [
        {id: 3, name: '박영호'},
        {id: 1, name: '김지민'},
        {id: 2, name: '이지은'},
      ],
      talkRecord: [
        {
          title: '2023년 4월 14일',
          data: [
            {id: 0, feeling: {best: 0, good: 0, bad: 0}, food: '피자'},
            {id: 1, feeling: {best: 0, good: 0, bad: 0}, food: '스파게티'},
            {id: 2, feeling: {best: 0, good: 0, bad: 0}, food: '라자냐'},
          ],
        },
        {
          title: '2023년 4월 15일',
          data: [
            {id: 0, feeling: {best: 0, good: 0, bad: 0}, food: '떡볶이'},
            {id: 1, feeling: {best: 0, good: 0, bad: 0}, food: '김밥'},
            {id: 2, feeling: {best: 0, good: 0, bad: 0}, food: '튀김'},
          ],
        },
      ],
    },
    {
      name: '친구',
      id: 2,
      member: [
        {id: 4, name: '최민수'},
        {id: 6, name: '한예슬'},
        {id: 5, name: '홍길동'},
      ],
      talkRecord: [
        {
          title: '2023년 4월 13일',
          data: [
            {id: 0, feeling: {best: 0, good: 0, bad: 0}, food: '짜장면'},
            {id: 1, feeling: {best: 0, good: 0, bad: 0}, food: '짬뽕'},
            {id: 2, feeling: {best: 0, good: 0, bad: 0}, food: '볶음밥'},
          ],
        },
        {
          title: '2023년 4월 14일',
          data: [
            {id: 0, feeling: {best: 0, good: 0, bad: 0}, food: '샐러드'},
            {id: 1, feeling: {best: 0, good: 0, bad: 0}, food: '과일'},
            {id: 2, feeling: {best: 0, good: 0, bad: 0}, food: '요거트'},
          ],
        },
      ],
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <GroupProfile
        grouplist={item}
        onPress={() => navigation.navigate('GroupTalk', {groupInfo: item})}
      />
    );
  };

  return (
    <Container>
      <ListHeader
        iconName={'group-add'}
        onPress={() => navigation.navigate('GroupInvite')}
      />
      <ProfileList
        ListHeaderComponent={<ProfileHeader />}
        data={groupList}
        renderItem={renderItem}
        keyExtrator={groupList.id}
      />
    </Container>
  );
}

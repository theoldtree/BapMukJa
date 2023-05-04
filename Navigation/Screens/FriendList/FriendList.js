import React, {useState} from 'react';
import ListHeader from '../../../Components/ListHeader';
import {Container} from '../../../Components/Container';
import RequestBox from './RequestBox';
import MultipleProfileContainer from './MultipleProfileContainer';
import MyProfile from './Myprofile';
import {Title} from '../../../Components/Title';

export default function FriendList({navigation}) {
  const [requestlist, setRequestList] = useState([
    {
      name: '김철수',
      id: 1,
    },
    {
      name: '이영희',
      id: 2,
    },
    {
      name: '박민준',
      id: 3,
    },
  ]);
  const [myProfile, setMyProfile] = useState({id: 10000, name: '이병건'});
  const [friendlist, setFreindList] = useState([
    {
      id: 1,
      name: '김지민',
    },
    {
      id: 2,
      name: '이지은',
    },
    {
      id: 3,
      name: '박영호',
    },
    {
      id: 4,
      name: '최민수',
    },
    {
      id: 5,
      name: '홍길동',
    },
    {
      id: 6,
      name: '한예슬',
    },
  ]);

  return (
    <Container>
      <ListHeader
        iconName={'person-add'}
        onPress={() => navigation.navigate('FriendInvite')}
      />
      <MultipleProfileContainer
        title={'친구목록'}
        list={friendlist}
        listheadercomponent={
          <>
            <MyProfile title={'나의 프로필'} profile={myProfile} />
            <RequestBox title={'친구요청'} requestlist={requestlist} />
            <Title>{'친구목록'}</Title>
          </>
        }
      />
    </Container>
  );
}

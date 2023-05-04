import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Container} from '../../../Components/Container';
import BackHeader from '../../../Components/BackHeader';
import Member from '../../../Components/Member';
import {Title} from '../../../Components/Title';
import {GRAY_COLOR} from '../../../Assets/Colors/color';
import FeelingContainer from './FeelingContainer';
import InputBox from './InputBox';

const TalkList = styled.SectionList``;

const TitleBold = styled(Title)`
  font-weight: bold;
  font-size: 18px;
  margin: 2px;
`;

const DateView = styled.View`
  align-self: center;
  border-radius: 5px;
  border-color: ${GRAY_COLOR};
  align-items: center;
  justify-content: center;
  border-width: 1px;
  margin-top: 9%;
  margin-bottom: 2%;
`;

const FoodView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default function GroupTalk({route, navigation}) {
  const {groupInfo} = route.params;

  const renderHeader = ({section}) => {
    return (
      <DateView>
        <Title>{section.title}</Title>
      </DateView>
    );
  };

  const renderItem = ({item}) => {
    return (
      <FoodView>
        <Title>{item.food}</Title>
        <FeelingContainer feeling={item.feeling} />
      </FoodView>
    );
  };

  return (
    <Container>
      <BackHeader
        title={groupInfo.name}
        onPress={() => navigation.navigate('Home', {screen: 'GroupList'})}
      />
      <TitleBold>참여</TitleBold>
      <Member data={groupInfo.member} keyExtrator={groupInfo.member.id} />
      <TalkList
        sections={groupInfo.talkRecord}
        renderSectionHeader={renderHeader}
        renderItem={renderItem}
        keyExtrator={item => item.date}
      />
      <InputBox />
    </Container>
  );
}

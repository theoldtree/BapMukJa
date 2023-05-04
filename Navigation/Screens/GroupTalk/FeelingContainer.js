import React, {useState} from 'react';
import styled from 'styled-components/native';
import FeelingBox from './FeelingBox';

const Conatiner = styled.View`
  margin-right: 15px;
  flex-direction: row;
`;

export default function FeelingContainer({feeling}) {
  console.log(feeling);
  return (
    <Conatiner>
      <FeelingBox name={'star-half'} color={'#FFBF6B'} num={feeling.best} />
      <FeelingBox name={'md-thumbs-up'} color={'#7F83F7'} num={feeling.good} />
      <FeelingBox name={'md-thumbs-down'} color={'#BD3124'} num={feeling.bad} />
    </Conatiner>
  );
}

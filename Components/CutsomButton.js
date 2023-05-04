import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundcolor};
  border-radius: 3px;
  border-width: 1px;
  height: 40px;
  margin-top: 2%;
  margin-bottom: 2%;
  border-color: ${props => props.bordercolor};
`;

const Text = styled.Text`
  font-size: 13px;
  margin-left: 15px;
  margin-right: 15px;
  color: ${props => props.textcolor};
`;

export default function CustomButton({
  backgroundcolor,
  bordercolor,
  textcolor,
  onPress,
  text,
}) {
  return (
    <Button
      backgroundcolor={backgroundcolor}
      bordercolor={bordercolor}
      onPress={onPress}>
      <Text textcolor={textcolor}>{text}</Text>
    </Button>
  );
}

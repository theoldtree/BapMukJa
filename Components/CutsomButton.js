import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { GRAY_COLOR_300 } from "../Assets/Colors/color";

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  border-radius: 3px;
  border-width: 1px;
  height: 40px;
  margin: 2%;
  border-color: ${({ bordercolor }) => bordercolor};
  width: ${({ width }) => width || "auto"};
`;

const Text = styled.Text`
  font-size: 13px;
  margin-left: 15px;
  margin-right: 15px;
  color: ${({ textcolor }) => textcolor};
`;

export default function CustomButton({
  backgroundcolor,
  bordercolor,
  textcolor,
  onPress,
  text,
  activity,
  buttonwidth,
}) {
  return (
    <Button
      backgroundcolor={backgroundcolor}
      bordercolor={bordercolor}
      onPress={onPress}
      width={buttonwidth}
    >
      {activity ? (
        <ActivityIndicator color={GRAY_COLOR_300} />
      ) : (
        <Text textcolor={textcolor}>{text}</Text>
      )}
    </Button>
  );
}

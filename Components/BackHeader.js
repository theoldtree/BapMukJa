import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import {
  SKY_BLUE_100,
  SKY_BLUE_400,
  SKY_BLUE_500,
} from "../Assets/Colors/color";

const Header = styled.View`
  height: 55px;
  flex-direction: row;
  background-color: ${SKY_BLUE_100};
  align-items: center;
`;

const HedaerTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${SKY_BLUE_400};
`;

const BackArrow = styled.TouchableOpacity`
  margin: 0px 10px;
`;

export default function BackHeader({ title, onPress }) {
  return (
    <Header>
      <BackArrow onPress={onPress}>
        <AntDesign name="swapleft" size={24} color={SKY_BLUE_400} />
      </BackArrow>
      <HedaerTitle>{title}</HedaerTitle>
    </Header>
  );
}

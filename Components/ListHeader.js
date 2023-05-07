import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import {
  SKY_BLUE_100,
  SKY_BLUE_400,
  SKY_BLUE_HEADER,
} from "../Assets/Colors/color";

const Header = styled.View`
  height: 55px;
  flex-direction: row;
  background-color: ${SKY_BLUE_100};
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.TouchableOpacity`
  margin: 0px 10px;
`;

export default function ListHeader({ iconName, onPress }) {
  const onPressLogout = () => {
    Alert.alert("정말 로그아웃 하시겠습니까?", "", [
      { text: "취소" },
      {
        text: "확인",
        onPress: async () => {
          await auth().signOut();
        },
      },
    ]);
  };

  return (
    <Header>
      <Icon onPress={onPress}>
        {iconName === "adduser" ? (
          <AntDesign name={iconName} size={24} color={SKY_BLUE_400} />
        ) : (
          <MaterialCommunityIcons
            name="account-multiple-plus"
            size={30}
            color={SKY_BLUE_400}
          />
        )}
      </Icon>
      <Icon onPress={onPressLogout}>
        <Feather name="log-out" size={24} color={SKY_BLUE_400} />
      </Icon>
    </Header>
  );
}

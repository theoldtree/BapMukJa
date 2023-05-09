import React from "react";
import BackHeader from "../../../Components/BackHeader";
import { Container } from "../../../Components/Container";
import ProfileWithButton from "../../../Components/ProfileWithButton";
import { TextInputBox } from "../../../Components/TextInputBox";

export default function FriendInvite({ navigation }) {
  return (
    <Container>
      <BackHeader
        title={"친구초대"}
        onPress={() => navigation.navigate("Home", { screen: "FriendList" })}
      />
      <TextInputBox placeholder="이름(초성), 전화번호 검색" maxLength={40} />
      <ProfileWithButton Text={"초대"} />
    </Container>
  );
}

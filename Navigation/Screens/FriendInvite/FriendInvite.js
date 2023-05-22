import React, { useState } from "react";
import BackHeader from "../../../Components/BackHeader";
import { Container } from "../../../Components/Container";
import ProfileWithButton from "../../../Components/ProfileWithButton";
import { TextInputBox } from "../../../Components/TextInputBox";
import { Alert } from "react-native";
import { firebase } from "@react-native-firebase/firestore";
import firestore from "@react-native-firebase/firestore";

export default function FriendInvite({ navigation, route }) {
  const [phonenumber, setPhoneNumber] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [searchedUserData, setSearchedUsderData] = useState("");
  const [searchedUserID, setSearchedUserID] = useState("");
  const { userData, uid } = route.params;

  /**친구 검색 버튼
   * 전화번호로 상대 방 검색
   * 전화번호로 검색 -> 프로필 정보 및 아이디 값 수신
   */
  const onSubmitEditing = async () => {
    try {
      const userRef = firebase.firestore().collection("users");
      const queryRef = await userRef
        .where("phonenumber", "==", phonenumber)
        .get();
      if (!queryRef.empty) {
        queryRef.forEach((doc) => {
          setSearchedUserID(doc.id);
          setSearchedUsderData(doc);
          console.log(doc);
        });
        setIsSearched(true);
      } else {
        return Alert.alert("검색된 번호가 없습니다!");
      }
    } catch (error) {}
  };

  /**
   * 초대하기 버튼
   * invitationList에 검색된 유저 아이디를 기반으로 requestList에 나의 아이디값 및 정보 저장
   */
  const onPressInvite = async () => {
    await firestore()
      .collection("invitationList")
      .doc(searchedUserID)
      .collection("requestList")
      .doc(uid)
      .set(userData);
  };

  return (
    <Container>
      <BackHeader
        title={"친구초대"}
        onPress={() => navigation.navigate("Home", { screen: "FriendList" })}
      />
      <TextInputBox
        placeholder="전화번호 검색"
        maxLength={40}
        keyboardType="number-pad"
        onSubmitEditing={onSubmitEditing}
        returnKeyLabel="완료"
        onChangeText={(text) => setPhoneNumber(text)}
      />
      {isSearched ? (
        <ProfileWithButton
          item={searchedUserData}
          text={"초대"}
          onPress={onPressInvite}
        />
      ) : null}
    </Container>
  );
}

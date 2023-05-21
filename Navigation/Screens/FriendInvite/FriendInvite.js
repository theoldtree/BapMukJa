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
  const [searchedUserName, setSearchedUserName] = useState("");
  const { userData, uid } = route.params;

  const onSubmitEditing = async () => {
    try {
      const userRef = firebase.firestore().collection("users");
      const queryRef = await userRef
        .where("phonenumber", "==", phonenumber)
        .get();
      if (!queryRef.empty) {
        console.log(queryRef);
        queryRef.forEach((doc) => {
          setSearchedUserName(doc._data.name);
          console.log(doc);
        });
        setIsSearched(true);
      } else {
        return Alert.alert("검색된 번호가 없습니다!");
      }
    } catch (error) {}
  };

  const onPressInvite = async () => {
    await firestore().collection("inviteRequestList").doc(uid).set(userData);
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
          name={searchedUserName}
          text={"초대"}
          onPress={onPressInvite}
        />
      ) : null}
    </Container>
  );
}

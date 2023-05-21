import React, { useState } from "react";
import styled from "styled-components/native";
import CustomButton from "./CutsomButton";
import { SKY_BLUE_100, SKY_BLUE_300 } from "../Assets/Colors/color";
import Profile from "./Profile";
import { firebase } from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 4%;
  padding-right: 4%;
`;

export default function ProfileWithButton({ text, item }) {
  const [searchedUserID, setSearchedUserID] = useState("");
  console.log(item);
  const onPressInvite = async () => {
    const currentUser = auth().currentUser;
    const uid = currentUser.uid;
    const userRef = firebase.firestore().collection("users");
    const queryRef = await userRef
      .where("phonenumber", "==", item._data.phonenumber)
      .get();
    if (!queryRef.empty) {
      queryRef.forEach((doc) => {
        setSearchedUserID(doc.id);
      });
    } else {
      return Alert.alert("해당 유저는 더이상 존재하지 않습니다!");
    }
    await firestore()
      .collection("friendList")
      .doc(uid)
      .collection("friend")
      .doc(searchedUserID)
      .set(item._data);
  };

  return (
    <ProfileContainer>
      <Profile name={item._data.name} width={"82%"} />
      <CustomButton
        backgroundcolor={SKY_BLUE_300}
        bordercolor={SKY_BLUE_300}
        text={text}
        textcolor={SKY_BLUE_100}
        onPress={onPressInvite}
      />
    </ProfileContainer>
  );
}

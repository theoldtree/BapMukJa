import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import ProfileWithButton from "../../../Components/ProfileWithButton";
import { SKY_BLUE_500 } from "../../../Assets/Colors/color";
import { firebase } from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const Container = styled.View`
  border-bottom: 1px;
  border-color: ${SKY_BLUE_500};
  margin-bottom: 5%;
`;

const Title = styled.Text`
  color: ${SKY_BLUE_500};
  padding: 10px;
`;

const RequestList = styled.FlatList``;

export default function RequestBox({ title, requestlist, uid, userDoc }) {
  const [searchedUserID, setSearchedUserID] = useState("");
  const currentUser = auth().currentUser;
  const userRef = firebase.firestore().collection("users");

  const onPressAccept = async (item) => {
    console.log(item);
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
    await firestore()
      .collection("friendList")
      .doc(searchedUserID)
      .collection("friend")
      .doc(uid)
      .set(userDoc._data);
    await firestore()
      .collection("invitationList")
      .doc(uid)
      .collection("requestList")
      .doc(searchedUserID)
      .delete();
  };

  const renderItem = ({ item }) => {
    return (
      <ProfileWithButton
        text={"수락"}
        item={item}
        onPress={() => onPressAccept(item)}
      />
    );
  };

  return (
    <Container>
      <Title>{title}</Title>
      <RequestList
        data={requestlist}
        renderItem={renderItem}
        keyExtrator={requestlist.id}
      />
    </Container>
  );
}

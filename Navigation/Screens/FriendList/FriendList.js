import React, { useEffect, useState } from "react";
import ListHeader from "../../../Components/ListHeader";
import { Container } from "../../../Components/Container";
import RequestBox from "./RequestBox";
import MultipleProfileContainer from "./MultipleProfileContainer";
import MyProfile from "./Myprofile";
import { Title } from "../../../Components/Title";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { ActivityIndicator } from "react-native";
import { GRAY_COLOR_300 } from "../../../Assets/Colors/color";
import { CenterView } from "../../../Components/CenterView";

export default function FriendList({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [uid, setUid] = useState("");
  const [requestlist, setRequestList] = useState([]);
  const [friendList, setFriendList] = useState();

  useEffect(() => {
    async function fetchUser() {
      const currentUser = auth().currentUser;
      const uid = currentUser.uid;
      const userDoc = await firestore().collection("users").doc(uid).get();
      const invitationListRef = await firestore()
        .collection("invitationList")
        .doc(uid)
        .collection("requestList");
      invitationListRef.get().then((querySnapShot) => {
        setRequestList(querySnapShot._docs);
      });
      const friendListRef = await firestore()
        .collection("friendList")
        .doc(uid)
        .collection("friend");
      friendListRef.get().then((querySnapShot) => {
        setFriendList(querySnapShot._docs);
      });
      setUserData(userDoc._data);
      setUid(uid);
      setLoading(false);
      console.log(userData);
    }
    fetchUser();
  }, []);
  return loading ? (
    <CenterView>
      <ActivityIndicator color={GRAY_COLOR_300} />
    </CenterView>
  ) : (
    <Container>
      <ListHeader
        iconName={"adduser"}
        onPress={() =>
          navigation.navigate("FriendInvite", { userData: userData, uid: uid })
        }
      />
      <MultipleProfileContainer
        title={"친구목록"}
        list={friendList}
        listheadercomponent={
          <>
            <MyProfile title={"나의 프로필"} profile={userData.name} />
            <RequestBox
              title={"친구요청"}
              requestlist={requestlist}
              uid={uid}
              userData={userData}
              userDoc={userData}
            />
            <Title>친구목록</Title>
          </>
        }
      />
    </Container>
  );
}

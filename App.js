import React, { useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import LoggedInNavigator from "./Navigation/Navigator/LoggedInNavigator";
import LoggedOutNavigator from "./Navigation/Navigator/LoggedOutNavigator";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import firestore from "@react-native-firebase/firestore";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userdata = await firestore()
          .collection("users")
          .doc(user.uid)
          .get();
        console.log(userdata);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
    <Provider store={store}>
      {isLoggedIn ? <LoggedInNavigator /> : <LoggedOutNavigator />}
    </Provider>
  );
}

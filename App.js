import React, { useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import LoggedInNavigator from "./Navigation/Navigator/LoggedInNavigator";
import LoggedOutNavigator from "./Navigation/Navigator/LoggedOutNavigator";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
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

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login/Login";
import Signup from "../Screens/Signup/Signup";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function LoggedOutNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

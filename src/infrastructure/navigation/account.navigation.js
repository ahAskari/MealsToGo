import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/authentication/screen/account.screen";
import { LoginScreen } from "../../features/authentication/screen/login.screen";
import { RegisterScreen } from "../../features/authentication/screen/register.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen component={AccountScreen} name="Account" />
      <AccountStack.Screen component={LoginScreen} name="Login" />
      <AccountStack.Screen component={RegisterScreen} name="Register" />
    </AccountStack.Navigator>
  );
};

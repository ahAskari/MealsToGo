import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AccountNavigator } from "./account.navigation";
import { AppNavigator } from "./app.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticate } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      {isAuthenticate ? <AppNavigator /> : <AccountNavigator />}
      {/* <AccountNavigator /> */}
    </NavigationContainer>
  );
};

import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AccountNavigator } from "./account.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  // const { isAuthenticated } = useContext(AuthenticationContext);
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      <AccountNavigator />
      {/* {isAuthenticated ? <AppNavigator /> : <AccountNavigator />} */}
    </NavigationContainer>
  );
};

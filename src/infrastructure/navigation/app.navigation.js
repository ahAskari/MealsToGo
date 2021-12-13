import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screen/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const TAB_ICON = {
  restaurant: "md-restaurant",
  map: "md-map",
  setting: "md-settings",
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => (
    <Ionicons name={TAB_ICON[route.name]} color={color} size={size} />
  ),
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerMode: "screen",
  headerTintColor: "white",
  headerStyle: { backgroundColor: "tomato" },
  headerShown: false,
});

const Tab = createBottomTabNavigator();
// options={{
//   tabBarBadge: 12,
//   tabBarBadgeStyle: { backgroundColor: 'red' }
// }}
const Setting = () => {
  const { user, onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>{user && user.user && user.user.providerData[0].email}</Text>
      <Text>{user && user.email}</Text>
      <Button onPress={() => onLogout()} title="logout" />
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="restaurant" component={RestaurantsNavigator} />
            <Tab.Screen name="map" component={MapScreen} />
            <Tab.Screen name="setting" component={Setting} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

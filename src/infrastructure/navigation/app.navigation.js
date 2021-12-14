import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screen/map.screen";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsNavigator } from "./setting.navigation";

const TAB_ICON = {
  restaurant: "md-restaurant",
  map: "md-map",
  setting: "md-settings",
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => (
    <Ionicons name={TAB_ICON[route.name]} color={color} size={size} />
  ),
  tabBarLabel: () => {
    return null;
  },
  tabBarActiveTintColor: "#448FD9",
  tabBarInactiveTintColor: "#5a5a5a",
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

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="restaurant" component={RestaurantsNavigator} />
            <Tab.Screen name="map" component={MapScreen} />
            <Tab.Screen name="setting" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

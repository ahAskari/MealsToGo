import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screen/map.screen";
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

const Setting = () => (
  <SafeArea>
    <Text>Setting</Text>
  </SafeArea>
);
const Tab = createBottomTabNavigator();
// options={{
//   tabBarBadge: 12,
//   tabBarBadgeStyle: { backgroundColor: 'red' }
// }}
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="restaurant" component={RestaurantsNavigator} />
        <Tab.Screen name="map" component={MapScreen} />
        <Tab.Screen name="setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

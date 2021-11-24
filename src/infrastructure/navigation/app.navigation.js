import React from 'react';
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
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
});

const Setting = () => (
  <SafeArea>
    <Text>Setting</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="restaurant"
          component={RestaurantsNavigator}
        // options={{
        //   tabBarBadge: 12,
        //   tabBarBadgeStyle: { backgroundColor: 'red' }
        // }}
        />
        <Tab.Screen name="map" component={Map} />
        <Tab.Screen name="setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};
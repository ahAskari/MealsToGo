import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/service/restaurants/restaurants.context";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });  
  const TAB_ICON = {
    restaurant: "md-restaurant",
    map: "md-map",
    setting: "md-settings"
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={TAB_ICON[route.name]} color={color} size={size} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
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

  if (!oswaldLoaded || !latoLoaded) {
    return null
  };
  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={screenOptions}
            >
              <Tab.Screen
                name="restaurant"
                component={RestaurantsScreen}
                // options={{
                //   tabBarBadge: 12,
                //   tabBarBadgeStyle: { backgroundColor: 'red' }
                // }} 
                />
              <Tab.Screen name="map" component={Map} />
              <Tab.Screen name="setting" component={Setting} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

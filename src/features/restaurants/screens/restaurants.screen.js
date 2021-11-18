import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard/>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "red",
    marginTop: StatusBar.currentHeight
  },
  search:{
    padding: 16,
    backgroundColor: "green"
  },
  list:{
    flex:1,
    backgroundColor: "blue",
    padding: 16
  }
});
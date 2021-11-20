import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

export const RestaurantsScreen = () => {

  const SafeArea = styled(SafeAreaView)`
  flex:1;
  backgroundColor: ${(props) => props.theme.colors.bg.secondary};
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
  `;
  const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  backgroundColor: ${(props) => props.theme.colors.bg.secondary};
  `;
  const RestaurantListContainer = styled(View)`
  flex: 1;
  backgroundColor: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
  `;

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  )
};
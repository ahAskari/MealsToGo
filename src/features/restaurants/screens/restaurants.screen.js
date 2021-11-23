import React, { useContext } from "react"; 
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../service/restaurants/restaurants.context"; 3
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from "../components/search.component"; 

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  marginLeft: -25px;
`;


export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {
        isLoading &&
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={Colors.blue300}
          />
        </LoadingContainer>
      }
      <Search/>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )
        }}
        keyExtractor={(item) => item.name}
      />

    </SafeArea>
  )
};
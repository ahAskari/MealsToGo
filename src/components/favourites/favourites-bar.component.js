import React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";

const FavouritesWrapper = styled(View)`
  padding: 16px;
`;

export function FavouritesBar({ favourites, onNavigate }) {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <Spacer position="left" size="medium" key={restaurant.name}>
            <TouchableOpacity
              onPress={() =>
                onNavigate("RestaurantDetailScreen", {
                  restaurant,
                })
              }
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
}

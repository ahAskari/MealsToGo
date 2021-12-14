import React, { useContext } from "react";
import { FlatList, Pressable } from "react-native";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList as FavouritesList } from "../../restaurants/components/restaurant-list.component";

 
const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <FavouritesList
        data={favourites}
        keyExtractor={(item) => item.address}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("RestaurantDetailScreen", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </Pressable>
        )}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};

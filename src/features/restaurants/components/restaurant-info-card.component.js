import  React  from "react";
import { StyleSheet,View, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantInfoCard = ( restaurant = {} ) => {
  const {
    name = "Some Restaurnat",
      icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos = [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
      ],
      // photos = [
      //   'https://picsum.photos/700'
      // ],
      address = "100 some random street",
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily = true,
  } = restaurant;
  
  const Title = styled.Text`
  color: palevioletred;
`
  
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }}/>
      <Title>{name}</Title>
    </Card>
  )
};
const styles = StyleSheet.create({
  
})
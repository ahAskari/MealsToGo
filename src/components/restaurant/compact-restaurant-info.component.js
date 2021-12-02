import React from "react";
import { Platform } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

const Item = styled.View`
  padding: 10px;
  align-items: center;
  max-width: 120px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const IsAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = IsAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};

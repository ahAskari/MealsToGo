import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const GlobalContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoding(true);
    restaurantsRequest()
      .then(restaurantsTransform)
      .then(result => {
        setRestaurants(result);
        setIsLoding(false);
      })
      .catch(err => {
        setError(err);
        setIsLoding(false);
      })
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);


  return (
    <GlobalContext.Provider
      value={{
        restaurants,
        isLoding,
        error
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
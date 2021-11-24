import React, { useState, createContext, useEffect } from 'react';
import { locationTransform, locationRequest } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsloading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    keyword && locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(res => {
        setLocation(res);
        setIsloading(false);
      })
      .catch(err => {
        setError(err);
        setIsloading(false);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search: onSearch,
        keyword
      }}
    >
      {children}
    </LocationContext.Provider>

  );
};
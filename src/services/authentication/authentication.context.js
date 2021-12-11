import React, { createContext, useState } from "react";
import { loginRequest } from "./authentication.sevice";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ childern }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState("");

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {childern}
    </AuthenticationContext.Provider>
  );
};

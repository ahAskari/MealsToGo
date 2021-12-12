import React, { createContext, useState } from "react"; 
import { LoginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    // setIsLoading(true);
    LoginRequest(email, password)
      .then((u) => {
        setUser(u);
        // setIsLoading(false);
      })
      .catch((e) => {
        // setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        error,
        onLogin,
        isAuthenticate: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

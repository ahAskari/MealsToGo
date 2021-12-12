import React, { createContext, useState } from "react";
import { LoginRequest } from "./authentication.service";
import * as firebase from "firebase";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const onLogin = (email, password) => {
    // setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        console.log(u);
      })
      .catch((e) => {
        console.log(e);
        setError(e.toString());
      });
    // LoginRequest(email, password) &&
    //   LoginRequest(email, password)
    //     .then((u) => {
    //       setUser(u);
    //       // setIsLoading(false);
    //     })
    //     .catch((e) => {
    //       // setIsLoading(false);
    //       setError(e.toString());
    //     });
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

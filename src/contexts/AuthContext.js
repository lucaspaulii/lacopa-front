import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"));
  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
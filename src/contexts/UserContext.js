import React, { useState } from "react";

export const UserInfoContext = React.createContext({});

export const UserInfoProvider = (props) => {
  const [userInfo, setUserInfo] = useState(undefined);
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

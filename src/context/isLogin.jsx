import { createContext, useContext, useEffect, useState } from "react";

const IsLoginContext = createContext();

const IsLoginContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [isUserLogin, setIsUserLogin] = useState(!!token);

  return (
    <IsLoginContext.Provider value={{ isUserLogin, setIsUserLogin }}>
      {children}
    </IsLoginContext.Provider>
  );
};

const useIsUserLogin = () => {
  return useContext(IsLoginContext);
};

export { IsLoginContextProvider, useIsUserLogin };

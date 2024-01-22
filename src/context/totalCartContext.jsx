import { createContext, useContext, useState } from "react";

const TotalCartContext = createContext();

const TotalCartContextProvider = ({ children }) => {
  const totalCartLocal = localStorage.getItem("totalCart");
  const [totalCart, setTotalCart] = useState(totalCartLocal || 0);

  return (
    <TotalCartContext.Provider value={{ totalCart, setTotalCart }}>
      {children}
    </TotalCartContext.Provider>
  );
};

const useTotalCart = () => {
  return useContext(TotalCartContext);
};

export { TotalCartContextProvider, useTotalCart };

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

const CartDispatchContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingCartItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(existingCartItemIndex);
      console.log(state);
      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingCartItemIndex].qty += action.payload.qty;
        console.log(updatedCart);
        return updatedCart;
      } else {
        return [...state, { id: action.payload.id, qty: action.payload.qty }];
      }
    }
    case "REMOVE_FROM_CART": {
      const existingCartItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingCartItemIndex].qty -= 1;

        if (updatedCart[existingCartItemIndex].qty === 0) {
          updatedCart.splice(existingCartItemIndex, 1);
        }
        return updatedCart;
      } else {
        return state;
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

"use client";
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (item) => {
    const exist = cart?.find((i) => i.id === item.id);
    if (!exist) {
      setCart([...cart, item]);
    } else {
      const updated = cart?.map((i) =>
        i.id === item.id ? { ...i, purchase: (i.purchase || 1) + 1 } : i,
      );
      setCart(updated);
    }
  };

  const decreaseQuantity = (item) => {
    const exist = cart?.find((i) => i.id === item.id);
    if (!exist) return;

    const updatedCart = cart
      ?.map((i) =>
        i.id === item.id
          ? { ...i, purchase: Math.max((i.purchase || 1) - 1, 0) }
          : i,
      )
      .filter((i) => i.purchase > 0);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

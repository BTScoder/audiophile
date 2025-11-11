"use client";
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (item, volume) => {
    const exist = cart?.find((i) => i.id === item.id);
    if (!exist) {
      setCart([...cart, { ...item, volume: volume }]);
    } else {
      const updated = cart?.map((i) =>
        i.id === item.id ? { ...i, volume: (i.volume || 1) + volume } : i,
      );
      setCart(updated);
    }
    console.log("Adding to cart:", item, "Quantity:", volume);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cart
      ?.map((i) =>
        i.id === item.id
          ? { ...i, volume: Math.max((i.volume || 1) - 1, 0) }
          : i,
      )
      .filter((i) => i.volume > 0);
    setCart(updatedCart);
  };
  const increaseQuantity = (item) => {
    const updatedCart = cart?.map((i) =>
      i.id === item.id ? { ...i, volume: Math.max((i.volume || 1) + 1, 0) } : i,
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

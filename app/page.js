"use client";
import Hero from "./components/Hero";
import Options from "./components/Options";
import Shop from "./components/Shop";
import { useProductContext } from "./context/ProductContext";
import { useCart } from "./context/CartContext";
export default function Home() {
  const { cart, addToCart, decreaseQuanity } = useCart();
  console.log(cart);
  return (
    <>
      <div className="">
        <Hero />
        <Shop />
        <Options />
      </div>
    </>
  );
}

import Image from "next/image";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
const Cart = () => {
  const { cart, clearCart, decreaseQuantity, increaseQuantity } = useCart();
  return (
    <>
      <div className="absolute top-20 right-10 z-50 w-[80%] rounded-lg bg-white px-5 py-5 shadow-lg md:max-w-xl">
        {/* <div className="flex flex-col items-center gap-6">
          <p>Your Cart is empty</p>
          <Image
            src="/images/cart/empty-cart.png"
            alt="empty-cart"
            width={100}
            height={100}
            quality={75}
          />
        </div> */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-2xl">Your Cart</p>
            <p className="text-gray-500 underline" onClick={() => clearCart()}>
              Remove all
            </p>
          </div>
          {cart && cart.length > 0 ? (
            <div className="mt-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  decreaseQuantity={decreaseQuantity}
                  increaseQuantity={increaseQuantity}
                />
              ))}
            </div>
          ) : (
            <div className="my-10 flex flex-col items-center gap-6">
              <p className="my-4 text-xl font-semibold text-gray-500">
                Your Cart is empty
              </p>
              <Image
                src="/images/cart/empty-cart.png"
                alt="empty-cart"
                width={100}
                height={100}
                quality={75}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

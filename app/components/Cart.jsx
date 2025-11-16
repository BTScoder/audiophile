import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
const Cart = () => {
  const { cart, clearCart, decreaseQuantity, increaseQuantity } = useCart();
  return (
    <>
      <div className="absolute top-20 right-10 z-50 w-[80%] rounded-lg bg-white px-5 py-5 shadow-lg md:max-w-xl">
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
              <Link href="/checkout">
                <button
                  className="bg-site-color mt-8 w-full py-4 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-orange-600"
                  disabled={cart.length === 0}
                >
                  Checkout{" "}
                </button>
              </Link>
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

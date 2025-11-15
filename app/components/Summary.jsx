import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useMemo } from "react";
const Summary = () => {
  const { cart, cartTotal } = useCart();

  const grandTotal = useMemo(() => {
    return cartTotal + 50 + cartTotal * 0.2;
  }, [cartTotal]);
  return (
    <>
      <div className="rounded-lg bg-white p-6 md:col-span-1 md:self-start md:p-8">
        <h2 className="mb-6 text-lg font-bold tracking-wider uppercase">
          Summary
        </h2>

        {/* Cart Items */}
        <div className="mb-6 space-y-6">
          {/* Sample Item - Replace with your cart items */}
          {cart?.map((item) => (
            <div className="flex items-center gap-4" key={item.id}>
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item?.cartImage}
                  alt="YX1"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase">{item?.shortName}</p>
                <p className="text-sm font-bold text-gray-500">
                  ${item?.price}/unit
                </p>
              </div>
              <p className="text-sm font-bold text-gray-500">
                x {item?.volume}
              </p>
            </div>
          ))}
        </div>

        {/* Price Summary */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500 uppercase">Total</p>
            <p className="text-lg font-semibold">
              ${cartTotal.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500 uppercase">
              Shipping
            </p>
            <p className="text-lg font-bold">$ 50</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500 uppercase">
              VAT (Included)
            </p>
            <p className="text-lg font-bold">
              $ {(cartTotal * 0.2).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <p className="text-sm font-medium text-gray-500 uppercase">
              Grand Total
            </p>
            <p className="text-site-color text-lg font-bold">
              $ {grandTotal.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <button
          className="bg-site-color mt-8 w-full py-4 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-orange-600"
          disabled={cart.length === 0}
          form="checkoutForm"
        >
          Continue & Pay
        </button>
      </div>
    </>
  );
};

export default Summary;

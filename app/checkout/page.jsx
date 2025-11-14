"use client";
import { useState } from "react";
import Image from "next/image";
import Summary from "../components/Summary";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("e-money");

  return (
    <>
      <main className="bg-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-5">
          <button className="mb-6 text-gray-500 hover:text-black">
            Go back
          </button>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Left Side - Form */}
            <div className="rounded-lg bg-white p-6 md:col-span-2 md:p-10">
              <h2 className="py-4 text-3xl uppercase md:text-4xl">Checkout</h2>
              <form className="pb-6">
                {/* Billing details */}
                <h2 className="text-site-color my-4 text-sm font-bold tracking-[2px] uppercase">
                  Billing Details
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="name" className="text-xs font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                      placeholder="Alexei Ward"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="email" className="text-xs font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                      placeholder="alexei@mail.com"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                      placeholder="+1 202-555-0136"
                    />
                  </div>
                </div>

                {/* Shipping Info */}
                <h2 className="text-site-color my-6 text-sm font-bold tracking-[2px] uppercase">
                  Shipping Info
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 flex flex-col items-start gap-2">
                    <label htmlFor="address" className="text-xs font-semibold">
                      Your Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                      placeholder="1137 Williams Avenue"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="zip" className="text-xs font-semibold">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                      placeholder="10001"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="city" className="text-xs font-semibold">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                      placeholder="New York"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="country" className="text-xs font-semibold">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                      placeholder="United States"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <h2 className="text-site-color my-6 text-sm font-bold tracking-[2px] uppercase">
                  Payment Details
                </h2>
                <div className="grid grid-cols-2 items-start gap-6">
                  <p className="text-xs font-bold">Payment Method</p>
                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="emoney"
                      className="has-[input:checked]:border-site-color hover:border-site-color flex cursor-pointer items-center gap-4 rounded-lg border border-gray-300 p-4 transition-colors"
                    >
                      <input
                        type="radio"
                        id="emoney"
                        name="payment"
                        value="e-money"
                        className="accent-site-color h-5 w-5"
                        checked={paymentMethod === "e-money"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="text-sm font-semibold">e-Money</span>
                    </label>
                    <label
                      htmlFor="cash"
                      className="has-[input:checked]:border-site-color hover:border-site-color flex cursor-pointer items-center gap-4 rounded-lg border border-gray-300 p-4 transition-colors"
                    >
                      <input
                        type="radio"
                        id="cash"
                        value="cash"
                        name="payment"
                        className="accent-site-color h-5 w-5"
                        checked={paymentMethod === "cash"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className="text-sm font-semibold">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>

                  {/* Conditional rendering for payment method */}
                  {paymentMethod === "e-money" ? (
                    <>
                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="e-number" className="text-xs font-bold">
                          e-Money Number
                        </label>
                        <input
                          type="text"
                          id="e-number"
                          className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                          placeholder="238521993"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="pin" className="text-xs font-bold">
                          e-Money PIN
                        </label>
                        <input
                          type="password"
                          id="pin"
                          className="focus:border-site-color w-full rounded-lg border border-gray-300 p-4 text-sm font-bold text-gray-700 focus:outline-none"
                          placeholder="6891"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="col-span-2 flex items-start gap-6">
                      <Image
                        src="/images/checkout/icon-cash-on-delivery.svg"
                        alt="Cash on delivery"
                        width={48}
                        height={48}
                        className="shrink-0"
                      />
                      <p className="text-sm leading-relaxed text-gray-500">
                        The 'Cash on Delivery' option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Right Side - Summary */}
            <Summary />
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;

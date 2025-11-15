"use client";
import { useState } from "react";
import Image from "next/image";
const Form = ({ setPaymentMethod, paymentMethod }) => {
  const [isValid, setIsValid] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPIN: "",
  });

  //   Omo
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check validation directly instead of relying on state
    const isFormValid = Object.values(form).every((value) => value !== "");
    setIsValid(isFormValid);

    if (!isFormValid) {
      console.log("form is not valid");
      return;
    }

    console.log("form submitted");
    console.log(form);
  };
  return (
    <>
      <form className="pb-6" id="checkoutForm" onSubmit={handleSubmit}>
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
              name="name"
              value={form.name}
              onChange={handleChange}
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
              name="email"
              value={form.email}
              onChange={handleChange}
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
              name="phone"
              value={form.phone}
              onChange={handleChange}
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
              name="address"
              value={form.address}
              onChange={handleChange}
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
              name="zip"
              value={form.zip}
              onChange={handleChange}
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
              name="city"
              value={form.city}
              onChange={handleChange}
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
              name="country"
              value={form.country}
              onChange={handleChange}
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
              <span className="text-sm font-semibold">Cash on Delivery</span>
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
                  name="eMoneyNumber"
                  value={form.eMoneyNumber}
                  onChange={handleChange}
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
                  name="eMoneyPin"
                  value={form.eMoneyPIN}
                  onChange={handleChange}
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
                The 'Cash on Delivery' option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;

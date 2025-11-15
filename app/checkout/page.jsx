"use client";
import { useState } from "react";
import Image from "next/image";
import Summary from "../components/Summary";
import Form from "../components/Form";
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
              <Form
                setPaymentMethod={setPaymentMethod}
                paymentMethod={paymentMethod}
              />
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

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <div className="bg-bg-primary relative w-full p-10">
        {/* Cart */}
        {cartOpen && (
          <div
            className="fixed inset-0 top-[120px] z-40 bg-black/50 md:hidden"
            onClick={() => setCartOpen(false)}
          ></div>
        )}
        {cartOpen && <Cart />}
        {/* Transparent Background Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 top-[120px] z-40 bg-black/50 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-20 left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-2xl bg-white md:hidden">
            <ul>
              <Link href="/headphones" onClick={() => setIsOpen(false)}>
                <li className="hover:text-site-color p-5 text-center font-bold uppercase">
                  Headphones
                </li>
              </Link>
              <Link href="/speakers" onClick={() => setIsOpen(false)}>
                <li className="hover:text-site-color p-5 text-center font-bold uppercase">
                  Speakers
                </li>
              </Link>
              <Link href="/earphones" onClick={() => setIsOpen(false)}>
                <li className="hover:text-site-color p-5 text-center font-bold uppercase">
                  Earphones
                </li>
              </Link>
            </ul>
          </div>
        )}
        {/* End of dropdown menu */}

        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          {/* Mobile View */}
          <div className="flex items-center gap-20">
            <div className="md:hidden">
              <button
                className="flex items-center space-x-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
            <Link href="/">
              <Image
                className="dark:invert"
                src="/images/shared/desktop/logo.svg"
                alt="Audiophile Logo"
                width={130}
                height={25}
                priority
              />
            </Link>
          </div>

          {/* Desktop view */}
          <div className="hidden space-x-4 md:flex md:items-center">
            <Link href="/" className="font-bold text-white uppercase">
              Home
            </Link>
            <Link href="/headphones" className="font-bold text-white uppercase">
              Headphones
            </Link>
            <Link href="/speakers" className="font-bold text-white uppercase">
              Speakers
            </Link>
            <Link href="/earphones" className="font-bold text-white uppercase">
              Earphones
            </Link>
          </div>

          <div className="relative" onClick={() => setCartOpen(true)}>
            <div className="bg-site-color absolute -top-4 -right-4 flex h-3 w-3 items-center justify-center rounded-full p-3 font-bold text-white">
              {cart?.length}
            </div>
            <Image
              className=""
              src="/images/shared/desktop/icon-cart.svg"
              alt="Empty Cart"
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
        <hr className="mt-10 border-t border-gray-800" />
      </div>
    </>
  );
};

export default Navbar;

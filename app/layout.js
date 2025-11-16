// "use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
const manrope = Manrope({
  // variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Audiophile",
  description: "Your one-stop shop for high-quality audio gear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} w-full antialiased`}>
        <ProductProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Toaster position="top-right" reverseOrder={false} />
            <Footer />
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}

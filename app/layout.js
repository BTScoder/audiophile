import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/ProductContext";
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Audiophile",
  description: "Your one-stop shop for high-quality audio gear",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} w-full antialiased`}>
        <Navbar />
        <ProductProvider>{children}</ProductProvider>
        <Footer />
      </body>
    </html>
  );
}

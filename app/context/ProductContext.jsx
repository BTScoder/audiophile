"use client";
import { useContext, createContext, useState, useEffect } from "react";
const getProductsData = async () => {
  try {
    const data = await fetch("/data/products.json");
    if (!data.ok) return [];
    return data.json();
  } catch (err) {
    console.error("Failed to fetch products data:", err);
    return [];
  }
};

const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsData();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

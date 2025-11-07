"use client";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import Shop from "../components/Shop";
const Headphones = () => {
  const { products } = useProductContext();
  //   console.log("Products:", products);
  const headphoneList =
    products?.products?.filter(
      (product) => product.category === "headphones",
    ) || [];
  console.log(headphoneList);
  return (
    <div>
      <div className="w-full bg-black/90 p-20 text-white">
        <p className="text-center text-4xl font-bold tracking-wide uppercase">
          Headphones
        </p>
      </div>
      <div className="p-10">
        {products && headphoneList.length > 0 ? (
          headphoneList
            .sort((a, b) => b.new - a.new)
            .map((headphone) => (
              <Link href={`/details/${headphone.id}`}>
                <ProductCard
                  name={headphone.name}
                  key={headphone.id}
                  desc={headphone.description}
                  n={headphone.new}
                  image={headphone.categoryImage}
                />
              </Link>
            ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div>
        <Shop />
      </div>
    </div>
  );
};

export default Headphones;

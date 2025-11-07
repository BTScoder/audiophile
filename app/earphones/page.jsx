"use client";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Shop from "../components/Shop";
import Link from "next/link";
const Earphones = () => {
  const { products } = useProductContext();

  const earphoneList =
    products?.products?.filter((product) => product.category === "earphones") ||
    [];
  console.log(earphoneList);
  return (
    <>
      <div>
        <div className="w-full bg-black/90 p-20 text-white">
          <p className="text-center text-4xl font-bold tracking-wide uppercase">
            Earphones
          </p>
        </div>
        <div className="p-10">
          {products && earphoneList.length > 0 ? (
            earphoneList
              .sort((a, b) => b.new - a.new)
              .map((earphone) => (
                <Link href={`details/${earphone.id}`} key={earphone.id}>
                  <ProductCard
                    name={earphone.name}
                    desc={earphone.description}
                    n={earphone.new}
                    image={earphone.categoryImage}
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
    </>
  );
};

export default Earphones;

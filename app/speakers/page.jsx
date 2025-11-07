"use client";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Shop from "../components/Shop";
import Link from "next/link";
const Speakers = () => {
  const { products } = useProductContext();

  const speakerList =
    products?.products?.filter((product) => product.category === "speakers") ||
    [];
  console.log(speakerList);
  return (
    <>
      <div>
        <div className="w-full bg-black/90 p-20 text-white">
          <p className="text-center text-4xl font-bold tracking-wide uppercase">
            Speakers
          </p>
        </div>
        <div className="p-10">
          {products && speakerList.length > 0 ? (
            speakerList
              .sort((a, b) => b.new - a.new)
              .map((speaker) => (
                <Link href={`details/${speaker.id}`} key={speaker.id}>
                  <ProductCard
                    name={speaker.name}
                    desc={speaker.description}
                    n={speaker.new}
                    image={speaker.categoryImage}
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

export default Speakers;

"use client";
import { useState } from "react";
import { useProductContext } from "@/app/context/ProductContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import Shop from "@/app/components/Shop";

const Details = () => {
  const [quantity, setQuantity] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const params = useParams();
  const slug = params.slug;
  // End of slugs use

  // Find the product linked to the slug id gotten from the url
  const { products } = useProductContext();
  const selectedProduct = products?.products?.find(
    (product) => product.id === parseInt(slug),
  );
  const { cart, addToCart, decreaseQuantity } = useCart();

  const handleAddingToCart = () => {
    setIsAdding(true);

    setTimeout(() => {
      addToCart(selectedProduct, quantity);
      setIsAdding(false);
      setQuantity(0);
    }, 1500);
  };
  const inCart = cart?.find((i) => i.id === selectedProduct?.id);
  // console.log(selectedProduct);
  // console.log(cart);
  // console.log(inCart);
  return (
    <>
      <div className="p-5">
        <div className="my-10 px-10 md:grid md:grid-cols-2 md:items-center md:gap-10">
          {selectedProduct?.image?.mobile && (
            <Image
              src={selectedProduct?.image.mobile}
              alt={selectedProduct?.name || "Product image"}
              className="h-auto w-full md:hidden"
              width={300}
              height={300}
              quality={75}
            />
          )}
          {selectedProduct?.image?.desktop && (
            <Image
              src={selectedProduct?.image.desktop}
              alt={selectedProduct?.name || "Product image"}
              className="hidden rounded-2xl md:block"
              width={500}
              height={500}
              quality={75}
            />
          )}
          <div className="flex flex-col items-center gap-6 py-10 text-center md:items-start md:text-start">
            <p className="text-site-color tracking-[8px] uppercase">
              New Product
            </p>
            <p className="text-4xl font-semibold">{selectedProduct?.name}</p>
            <p className="text-start leading-6 text-gray-500">
              {selectedProduct?.description}
            </p>
            <p className="text-xl font-semibold">${selectedProduct?.price}</p>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100">
                <button
                  className="hover:text-site-color px-4 py-3 text-gray-500"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
                >
                  -
                </button>
                <span className="px-6 py-3 font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="hover:text-site-color px-4 py-3 text-gray-500"
                >
                  +
                </button>
              </div>
              <button
                className="bg-site-color flex transform items-center justify-center gap-2 px-4 py-3 font-semibold text-white uppercase transition-all duration-200 active:scale-95 disabled:opacity-50"
                disabled={quantity === 0 || isAdding}
                onClick={() => handleAddingToCart()}
              >
                {isAdding ? (
                  <>
                    <span className="loader h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></span>
                    Adding...
                  </>
                ) : (
                  <p>Add to Cart</p>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="mx-auto my-30 max-w-[1200px] md:grid md:grid-cols-2 md:items-start md:gap-20">
          <div>
            <h2 className="mb-6 text-3xl font-semibold uppercase">Features</h2>
            <p className="text-[16px] leading-8 text-gray-500">
              {selectedProduct?.features}
            </p>
          </div>
          <div className="my-20 grid grid-cols-2 items-start md:my-0 md:ms-20 md:flex md:flex-col md:items-start">
            <p className="text-2xl font-semibold uppercase md:mb-10 md:text-3xl">
              In the Box
            </p>
            <div>
              {selectedProduct?.includedItems.map((item, index) => (
                <p
                  key={index}
                  className="text-[16px] leading-6 font-extralight text-gray-500"
                >
                  <span className="text-site-color pe-10 text-lg font-semibold">
                    x {item.quantity}
                  </span>
                  {item.item}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="mx-auto grid grid-cols-2 gap-4 md:max-w-[900px]">
          <div className="flex flex-col gap-4">
            {selectedProduct?.gallery?.first?.tablet && (
              <Image
                src={selectedProduct.gallery.first.tablet}
                alt={
                  `${selectedProduct?.name} gallery image 1` ||
                  "Gallery image 1"
                }
                className="h-auto w-full rounded-2xl object-cover"
                width={300}
                height={300}
                quality={75}
              />
            )}
            {selectedProduct?.gallery?.second?.mobile && (
              <Image
                src={selectedProduct.gallery.second.mobile}
                alt={
                  `${selectedProduct?.name} gallery image 2` ||
                  "Gallery image 2"
                }
                className="h-auto w-full rounded-2xl object-cover"
                width={300}
                height={300}
                quality={75}
              />
            )}
          </div>
          <div>
            {selectedProduct?.gallery?.third?.desktop && (
              <Image
                src={selectedProduct.gallery.third.desktop}
                alt={
                  `${selectedProduct?.name} gallery image 3` ||
                  "Gallery image 3"
                }
                className="h-full w-full rounded-2xl object-cover"
                width={300}
                height={600}
                quality={75}
              />
            )}
          </div>
        </div>
        {/* Options */}
        <Shop />
      </div>
    </>
  );
};

export default Details;

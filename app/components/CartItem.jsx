import Image from "next/image";
const CartItem = ({ item, decreaseQuantity, increaseQuantity }) => {
  return (
    <>
      <div className="my-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={item?.cartImage}
            alt="product-image"
            width={70}
            height={70}
            quality={75}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <p>{item?.shortName}</p>
            <p>${item?.price}</p>
          </div>
        </div>
        <div className="flex items-center bg-gray-100">
          <button
            className="hover:text-site-color px-4 py-3 text-gray-500"
            onClick={() => decreaseQuantity(item)}
          >
            -
          </button>
          <span className="px-3 py-3 font-bold">{item?.volume}</span>
          <button
            className="hover:text-site-color px-4 py-3 text-gray-500"
            onClick={() => increaseQuantity(item)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;

import Image from "next/image";
const ProductCard = ({ name, desc, image, n }) => {
  return (
    <>
      <div className="mt-6 shadow-2xl md:mx-auto md:mb-20 md:grid md:max-w-[1200px] md:grid-cols-2 md:gap-10">
        <img
          src={image.tablet}
          alt={name}
          className="h-[200px] w-full rounded-2xl object-cover md:hidden"
        />
        <img
          src={image.desktop}
          alt={name}
          className="hidden h-[400px] w-full rounded-2xl object-cover md:block"
        />
        <div className="mt-6 flex flex-col items-center gap-6 p-4 text-center md:items-start">
          {n && (
            <p className="tracking-[6px] text-orange-400 uppercase">
              New product
            </p>
          )}
          <p className="text-4xl font-semibold uppercase">{name}</p>
          <p className="tracking-relaxed font-light text-gray-500 md:text-start">
            {desc}
          </p>
          <button className="bg-amber-600 px-4 py-3 text-center font-bold tracking-[6px] text-white uppercase">
            See Product
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

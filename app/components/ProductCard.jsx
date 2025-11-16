import Image from "next/image";

const ProductCard = ({ name, desc, image, n }) => {
  return (
    <>
      <div className="mt-6 md:mx-auto md:mb-20 md:grid md:max-w-[1200px] md:grid-cols-2 md:gap-10">
        <Image
          src={image.tablet}
          alt={name}
          width={400}
          height={200}
          quality={75}
          className="h-full w-full rounded-2xl object-cover md:hidden"
        />
        <Image
          src={image.desktop}
          alt={name}
          width={600}
          height={400}
          quality={75}
          className="hidden h-full w-full rounded-2xl object-cover md:block"
        />
        <div className="mt-6 flex flex-col items-start gap-10 py-10 md:py-20 md:ps-20">
          {n && (
            <p className="tracking-[6px] text-orange-400 uppercase">
              New product
            </p>
          )}
          <p className="text-4xl font-bold uppercase">{name}</p>
          <p className="font-semibold tracking-wide text-gray-500 md:text-start">
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

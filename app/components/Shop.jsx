import Image from "next/image";

const Shop = () => {
  return (
    <div className="mx-auto my-20 max-w-[1000px] space-y-20 px-5 md:mt-60 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
      <div className="flex flex-col items-center justify-center rounded-2xl hover:shadow-2xl">
        <div className="relative flex w-full flex-col items-center pt-20">
          <Image
            src="/images/home/desktop/image-headphones.png"
            width={170}
            height={170}
            quality={100}
            alt="headphones"
            className="absolute -top-20"
            priority
          />
          <div className="py-10 text-center">
            <p className="font-bold tracking-[6px] uppercase">Headphones</p>
            <a href="/headphones">
              <p className="text-sm tracking-wide text-gray-500 uppercase hover:text-orange-500">
                Shop
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl hover:shadow-2xl">
        <div className="relative flex w-full flex-col items-center pt-20">
          <Image
            src="/images/home/desktop/image-speaker-zx9.png"
            width={120}
            height={120}
            quality={100}
            alt="speaker"
            className="absolute -top-20"
            priority
          />
          <div className="py-10 text-center">
            <p className="font-bold tracking-[6px] uppercase">Speakers</p>
            <a href="/speakers">
              <p className="text-sm tracking-wide text-gray-500 uppercase hover:text-orange-500">
                Shop
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl hover:shadow-2xl">
        <div className="relative flex w-full flex-col items-center pt-20">
          <Image
            src="/images/shared/desktop/image-earphones.png"
            width={170}
            height={170}
            quality={100}
            alt="earphones"
            className="absolute -top-20"
            priority
          />
          <div className="py-10 text-center">
            <p className="font-bold tracking-[6px] uppercase">Earphones</p>
            <a href="/earphones">
              <p className="text-sm tracking-wide text-gray-500 uppercase hover:text-orange-500">
                Shop
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

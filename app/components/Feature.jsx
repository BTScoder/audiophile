import Image from "next/image";
const Feature = () => {
  return (
    <>
      <div className="mb-10 flex flex-col gap-10 px-5 md:mx-auto md:grid md:max-w-[1200px] md:grid-cols-2 md:items-center md:gap-10">
        <Image
          src="/images/shared/tablet/image-best-gear.jpg"
          alt="feature image"
          width={500}
          height={500}
          quality={100}
          priority
          className="mb-6 rounded-2xl md:hidden"
        />
        <Image
          src="/images/shared/desktop/image-best-gear.jpg"
          alt="feature image"
          width={500}
          height={500}
          quality={100}
          priority
          className="mb-6 hidden rounded-2xl md:block"
        />
        <div className="flex flex-col gap-10 text-center md:text-start">
          <p className="text-5xl font-semibold uppercase">
            Bringing you the <span className="text-site-color">best</span> audio
            gear
          </p>
          <p className="mx-auto max-w-sm tracking-tight text-gray-500 md:max-w-xl">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;

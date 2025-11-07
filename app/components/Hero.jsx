import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[url('/images/home/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat py-30 md:grid md:grid-cols-2 md:bg-[url('/images/home/desktop/image-hero.jpg')] md:bg-center">
      <div className="absolute inset-0 z-0 bg-black/10"></div>
      <div className="relative z-10 flex flex-col gap-6 text-center md:px-20 md:text-start">
        <p className="text-xl tracking-widest text-gray-500 uppercase">
          New Product
        </p>
        <p className="text-[60px] leading-tight text-white uppercase">
          XX99 mark ii headphones
        </p>
        <p className="mx-auto max-w-md text-gray-500 md:mx-0">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link href="/details/4">
          <button className="bg-site-color mx-auto w-[30%] cursor-pointer py-3 tracking-widest text-white uppercase hover:bg-orange-600 md:mx-0">
            See Product
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

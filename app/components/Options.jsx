import Link from "next/link";
import Image from "next/image";

const Options = () => {
  return (
    <>
      {/* Options */}
      <div className="mx-auto mb-20 max-w-[1200px] px-5">
        {/* Options: ZX9 Speakers */}
        <div className="bg-site-color relative flex flex-col items-center justify-center gap-10 overflow-hidden rounded-2xl px-10 py-20 md:grid md:grid-cols-2 md:gap-20 md:px-40 md:py-30">
          <div>
            <Image
              src="/images/home/mobile/image-speaker-zx9.png"
              alt="ZX9 speakers"
              width={320}
              height={320}
              quality={75}
              className="h-auto w-[320px] md:h-auto md:w-[410px] lg:absolute lg:bottom-0 lg:left-10"
            />
          </div>
          <div className="absolute -top-35 left-0 h-full w-full bg-[url('/images/home/desktop/pattern-circles.svg')] bg-cover bg-center bg-no-repeat lg:bottom-0 lg:-left-40"></div>
          <div className="h-full w-full space-y-6 text-center text-white lg:space-y-8 lg:text-left">
            <p className="text-5xl font-bold tracking-wider lg:text-6xl xl:text-7xl">
              ZX9 SPEAKER
            </p>
            <p className="mx-auto max-w-md text-base leading-relaxed text-white/90 lg:mx-0 lg:text-lg">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href="/details/6">
              <button className="cursor-pointer rounded-2xl bg-black px-6 py-3 text-white">
                See Product
              </button>
            </Link>
          </div>
        </div>

        {/* Options: ZX7 Speakers */}
        <div className="relative my-10 flex aspect-video flex-col items-center justify-start gap-10 overflow-hidden rounded-2xl bg-[url('/images/home/tablet/image-speaker-zx7.jpg')] bg-cover bg-no-repeat px-4 py-10 md:bg-[url('/images/home/desktop/image-speaker-zx7.jpg')] lg:h-80 lg:w-full lg:flex-row lg:justify-between lg:px-20 lg:py-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex h-full w-full flex-col items-start justify-center gap-6">
            <p className="text-2xl uppercase md:text-5xl">ZX7 Speaker</p>
            <Link href="/details/5">
              <button className="cursor-pointer rounded-2xl border-2 border-black px-6 py-3 hover:bg-black hover:text-white">
                See Product
              </button>
            </Link>
          </div>
        </div>

        {/* YX1 Earphones */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              src="/images/home/mobile/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              width={320}
              height={320}
              quality={75}
              className="h-full w-[320px] rounded-2xl md:h-auto md:w-[410px] lg:w-full"
            />
          </div>
          <div className="flex items-center justify-start rounded-2xl bg-gray-200 px-8 py-6">
            <div className="space-y-5">
              <p className="text-xl md:text-4xl">YX1 EARPHONES</p>
              <Link href="details/1">
                <button className="cursor-pointer rounded-2xl border-2 border-black px-6 py-3 text-black">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;

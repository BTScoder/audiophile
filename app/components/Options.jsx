const Options = () => {
  return (
    <>
      {/* Options */}
      <div className="mx-auto mb-20 max-w-[1200px] px-5">
        {/* Options: ZX9 Speakers */}
        <div className="relative flex flex-col items-center justify-center gap-10 overflow-hidden rounded-2xl bg-[#d87d4a] px-10 py-20 md:grid md:grid-cols-2 md:gap-20 md:px-40 md:py-30">
          <div>
            <img
              src="/images/home/mobile/image-speaker-zx9.png"
              alt="speakers"
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
            <button className="rounded-2xl bg-black px-6 py-3 text-white">
              See Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;

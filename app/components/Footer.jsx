import Image from "next/image";
import Feature from "../components/Feature";

const Footer = () => {
  return (
    <>
      <div>
        <Feature />
      </div>
      <div className="bg-black/90 px-4 py-18">
        <Image
          className="dark:invert"
          src="/images/shared/desktop/logo.svg"
          alt="Audiophile Logo"
          width={130}
          height={25}
          quality={75}
          priority
        />
        <div className="mt-6 flex max-w-xl gap-6 text-white">
          <p className="font-bold uppercase">Home</p>
          <p className="font-bold uppercase">Headphones</p>
          <p className="font-bold uppercase">Speakers</p>
          <p className="font-bold uppercase">Earphones</p>
        </div>
        <p className="mt-6 leading-tight text-gray-500">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <div className="mt-10 flex items-center justify-between">
          <p className="text-gray-500">
            Copyright 2021. All rights <br /> reserved{" "}
          </p>
          <div className="flex items-center gap-6">
            <Image
              src="/images/shared/desktop/icon-facebook.svg"
              width={24}
              height={24}
              quality={75}
              alt="facebook"
            />
            <Image
              src="/images/shared/desktop/icon-twitter.svg"
              width={24}
              height={24}
              quality={75}
              alt="twitter"
            />
            <Image
              src="/images/shared/desktop/icon-instagram.svg"
              width={24}
              height={24}
              quality={75}
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

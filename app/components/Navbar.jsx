import Image from "next/image";
import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <div className="bg-bg-primary w-full p-10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <a href="/">
            <Image
              className="dark:invert"
              src="/images/shared/desktop/logo.svg"
              alt="Audiophile Logo"
              width={130}
              height={130}
              // quality={75}
              priority
            />
          </a>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className="flex items-center space-x-4">
              <Menu className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Desktop view */}

          <div className="hidden space-x-4 md:flex md:items-center">
            <a href="#" className="font-bold text-white uppercase">
              Home
            </a>
            <a href="#" className="font-bold text-white uppercase">
              Headphones
            </a>
            <a href="#" className="font-bold text-white uppercase">
              Speakers
            </a>
            <a href="#" className="font-bold text-white uppercase">
              Earphones
            </a>
          </div>
          <div className="hidden md:block">
            <Image
              className="hidden md:block"
              src="/images/shared/desktop/icon-cart.svg"
              alt="Empty Cart"
              width={30}
              height={30}
              // quality={100}
              priority
            />
          </div>
        </div>
        <hr className="mt-10 border-t border-gray-800" />
      </div>
    </>
  );
};

export default Navbar;

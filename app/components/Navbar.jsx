import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="bg-bg-primary w-full p-10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <Link href="/">
            <Image
              className="dark:invert"
              src="/images/shared/desktop/logo.svg"
              alt="Audiophile Logo"
              width={130}
              height={25}
              priority
            />
          </Link>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className="flex items-center space-x-4">
              <Menu className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Desktop view */}

          <div className="hidden space-x-4 md:flex md:items-center">
            <Link href="/" className="font-bold text-white uppercase">
              Home
            </Link>
            <Link href="/headphones" className="font-bold text-white uppercase">
              Headphones
            </Link>
            <Link href="/speakers" className="font-bold text-white uppercase">
              Speakers
            </Link>
            <Link href="/earphones" className="font-bold text-white uppercase">
              Earphones
            </Link>
          </div>
          <div className="hidden md:block">
            <Image
              className="hidden md:block"
              src="/images/shared/desktop/icon-cart.svg"
              alt="Empty Cart"
              width={30}
              height={30}
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

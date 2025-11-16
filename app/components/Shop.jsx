import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Shop = () => {
  const categories = [
    {
      name: "Headphones",
      image: "/images/shared/desktop/image-headphones.png",
    },
    {
      name: "Speakers",
      image: "/images/home/desktop/image-speaker-zx9.png",
    },
    {
      name: "Earphones",
      image: "/images/shared/desktop/image-earphones.png",
    },
  ];
  return (
    <motion.div
      className="mx-auto my-20 max-w-[1200px] space-y-20 px-5 md:mt-20 md:grid md:grid-cols-3 md:gap-6 md:space-y-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {categories.map((category) => (
        <motion.div
          className="flex flex-col items-center rounded-2xl p-4 shadow-2xl"
          key={category.name}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex h-[200px] w-full items-center justify-center rounded-2xl bg-gray-200 p-10">
            <Image
              src={category.image}
              width={170}
              height={170}
              quality={75}
              alt={category.name.toLowerCase()}
              className="h-auto max-h-full w-auto object-contain"
              priority
            />
          </div>
          <div className="mt-10 space-y-5 py-4 text-center">
            <p className="text-3xl font-bold uppercase">{category.name}</p>
            <p className="text-gray-500 uppercase">Shop Collection</p>
            <Link href={`/${category.name.toLowerCase()}`}>
              <motion.button
                className="cursor-pointer rounded-xl bg-black px-6 py-3 text-center text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Shop;

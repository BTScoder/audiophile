import Hero from "./components/Hero";
import Options from "./components/Options";
import Shop from "./components/Shop";
import { useProductContext } from "./context/ProductContext";
export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Shop />
        <Options />
      </div>
    </>
  );
}

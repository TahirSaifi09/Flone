import { CgMenuGridR } from "react-icons/cg";
import { PiGridFourFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";

export default function HeroShop() {
  return (
    <div className="flex justify-between px-44 py-10">
      <p>Search</p>
      <select className="border outline-none rounded border-gray-400">
        <option>Default</option>
        <option>Price -High to Low</option>
        <option>Price Low to High</option>
      </select>
      <p>Showing 15 of 144 result</p>
      <div className="flex gap-2 text-3xl">
        <PiGridFourFill />
        <CgMenuGridR />
        <TfiMenuAlt />
      </div>
    </div>
  );
}

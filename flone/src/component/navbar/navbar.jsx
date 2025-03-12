import { AiOutlineShopping } from "react-icons/ai";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "Shop",
      path: null,
    },
    {
      page: "Collection",
      path: null,
    },
    {
      page: "Pages",
      path: null,
    },
    {
      page: "Contact Us",
      path: null,
    },
  ];
  return (
    <div className="w-full flex px-20 bg-white fixed z-10 items-center justify-between gap-4 py-8">
      <img src="logo.png" alt="logo" />
      <div className="flex gap-8 ">
        {links.map((item, index) => (
          <Link to={item.path}>{item.page}</Link>
        ))}
      </div>
      <div className="flex gap-4 text-2xl">
        <CiSearch />
        <CiUser />
        <CiHeart />
        <AiOutlineShopping />
      </div>
    </div>
  );
}

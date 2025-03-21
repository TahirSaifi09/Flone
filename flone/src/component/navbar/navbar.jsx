import { AiOutlineShopping } from "react-icons/ai";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import Profile from "./profile";
export default function Navbar() {
  const [isUser, setIsUser] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const isHomeBar = () => {
    setIsHome = () => !isHome;
  };

  const isOpen = () => {
    setIsUser(() => !isUser);
  };
  const user = [
    {
      name: "Login",
      path: null,
    },
    {
      name: "Register",
      path: null,
    },
    {
      name: "My Account",
      path: null,
    },
  ];
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
    <div className="w-full flex relative px-20 bg-white z-10 items-center justify-between gap-4 py-8">
      <img src="logo.png" alt="logo" />
      <div className="flex gap-8 ">
        {links.map((item, index) => (
          <div key={index}>
            <Link to={item.path}>{item.page}</Link>
          </div>
        ))}
      </div>
      <button onClick={isHomeBar}>Hello</button>
      {isHome && (
        <div className="absolute left-134 bg-white p-4 gap-1 shadow-2xl top-20 flex flex-col">
          <Link to="">Home Fashion</Link>
          <Link to="">Home Fashion 2</Link>
          <Link to="">Home Fashion 3</Link>
          <Link to="">Home Fashion 4</Link>
        </div>
      )}

      <div className="flex gap-4 text-2xl">
        <CiSearch />
        <button onClick={isOpen}>
          <CiUser />
        </button>
        <CiHeart />
        <AiOutlineShopping />
      </div>
      {isUser === true && (
        <div className="pl-3 pr-10 flex flex-col gap-1 py-3 absolute right-28 top-23 shadow-2xl bg-white ">
          {user.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { AiOutlineShopping } from "react-icons/ai";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [isSearch, setIsSearch] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isShop, setIsShop] = useState(false);
  const [isPage, setIsPage] = useState(false);

  const isSearchOpen = () =>{
    setIsSearch = ()=>(!isSearch);
  }

  const isHomeBar = () => {
    setIsHome(() => !isHome);
  };
  const isShopOpen = () => {
    setIsShop(() => !isShop);
  };
  const isPageOpen = () => {
    setIsPage(() => !isPage);
  };

  const isOpen = () => {
    setIsUser(() => !isUser);
  };

  const [selection, updateSelection] = useState(0);

  const links = [
    {
      id: 1,
      page: "Home",
      path: null,
      child: [

      ]
    },
    {
      id: 2,
      page: "Shop",
      path: null,
    },
    {
      id: 3,
      page: "Collection",
      path: null,
    },
    {
      id: 4,
      page: "Pages",
      path: null,
    },
    {
      id: 5,
      page: "Contact Us",
      path: null,
    },
  ];
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

  return (
    <div className="w-full flex relative px-44 bg-white z-10 items-center justify-between gap-4 py-8">
      <img src="logo.png" alt="logo" />
      <div className="flex gap-8 ">
        {links.map((item, index) => (
          <div key={index} onClick={() => updateSelection(item.id)}>
            <Link to={item.path}>{item.page}</Link>
            {/* {isHome === item.id && (
              <div className="absolute left-134 bg-white p-4 gap-1 shadow-2xl top-20 flex flex-col">
                <Link to="" className="hover:text-violet-500">
                  Home Fashion
                </Link>
                <Link to="" className="hover:text-violet-500">
                  Home Fashion 2
                </Link>
                <Link to="" className="hover:text-violet-500">
                  Home Fashion 3
                </Link>
                <Link to="" className="hover:text-violet-500">
                  Home Fashion 4
                </Link>
              </div>
            )} */}
          </div>
        ))}

        {/* <button onClick={isHomeBar}>
          <Link to="#"></Link>
        </button>
        {isHome && (
          <div className="absolute left-134 bg-white p-4 gap-1 shadow-2xl top-20 flex flex-col">
            <Link to="" className="hover:text-violet-500">
              Home Fashion
            </Link>
            <Link to="" className="hover:text-violet-500">
              Home Fashion 2
            </Link>
            <Link to="" className="hover:text-violet-500">
              Home Fashion 3
            </Link>
            <Link to="" className="hover:text-violet-500">
              Home Fashion 4
            </Link>
          </div>
        )}
        <button onClick={isShopOpen}>
          <Link to="#">Shop</Link>
        </button>
        {isShop && (
          <div className="flex flex-col absolute top-22 ml-16 bg-white p-2 gap-1 shadow-2xl">
            <Link to="">Shop Grid Standard</Link>
            <Link to="">Shop Grid Filter</Link>
            <Link to="">Shop Grid Two Collumn</Link>
          </div>
        )}        
        <Link to="#">Collection</Link>
        <button onClick={isPageOpen}>
        <Link to="#">Pages</Link>
        </button>
        {
          isPage && <div className="flex absolute ml-56 top-20 bg-white p-4 flex-col gap-1">
            <Link to="">Cart</Link>
            <Link to="">Shop Grid Filter</Link>
            <Link to="">Shop Grid Two Collumn</Link>
          </div>
        }
        <Link to="#">Contact Us</Link> */}
      </div>

      <div className="flex gap-4 text-2xl">
        <button onClick={isSearchOpen}><CiSearch /></button>
        
        
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

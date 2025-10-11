import { useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import { TiEyeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

// Example product data
const products = [
  {
    id: 1,
    category: "Fashion",
    title: "Stylish Women's Top",
    image: "pro-1.webp",
    hoverImage: "pro-1-1.webp",
    price: "$30",
    rating: 4,
  },
  {
    id: 2,
    category: "Men",
    title: "Classic Men's Shirt",
    image: "pro-2.webp",
    hoverImage: "pro-2-1.webp",
    price: "$29",
    rating: 5,
  },
  {
    id: 3,
    category: "Electronics",
    title: "Wireless Headphones",
    image: "pro-3.webp",
    hoverImage: "pro-3-1.webp",
    price: "$59",
    rating: 4,
  },
  {
    id: 4,
    category: "Furniture",
    title: "Modern Wooden Chair",
    image: "pro-4.webp",
    hoverImage: "pro-4-1.webp",
    price: "$120",
    rating: 5,
  },
  {
    id: 5,
    category: "Kids",
    title: "Colorful Toy Car",
    image: "9.jpg",
    hoverImage: "7.jpg",
    price: "$25",
    rating: 4,
  },
  {
    id: 6,
    category: "Books",
    title: "Motivational Book Set",
    image: "30.jpg",
    hoverImage: "23.jpg",
    price: "$18",
    rating: 5,
  },
  {
    id: 7,
    category: "Accessories",
    title: "Leather Wallet",
    image: "6.jpg",
    hoverImage: "8.jpg",
    price: "$40",
    rating: 4,
  },
  {
    id: 8,
    category: "Organic Food",
    title: "Fresh Organic Veggies",
    image: "pro-5.webp",
    hoverImage: "pro-5-1.webp",
    price: "$20",
    rating: 5,
  },
];

export default function ProductList() {
  const [selectedTab, setSelectedTab] = useState("New Arrivals");

  const tabs = ["New Arrivals", "Best Sellers", "Sale Items"];

  return (
    <section className="w-4/5 px-6 py-8">
      

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 pb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selectedTab === tab
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="px-4 sm:px-10 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
        {products.map((item, index) => (
          <div key={index} className="group max-sm:px-4">
            <div className="relative cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="py-6 opacity-100"
              />
              <img
                src={item.hoverImage}
                alt={item.alt}
                className="absolute top-0 py-6 opacity-0 duration-700 group-hover:opacity-100"
              />
              <div className="flex justify-between group w-full text-2xl duration-700 transform text-white opacity-0 ease-in-out group-hover:opacity-100 py-6 absolute bottom-0">
                <CiHeart className="text-6xl px-2 bg-violet-500 hover:bg-black border translate-y-6 group-hover:translate-0 duration-300 delay-100" />
                <Link
                  to="#"
                  className="text-xl border bg-violet-500 px-6 py-3 hover:bg-black w-full translate-y-6 group-hover:translate-0 duration-300 delay-150"
                >
                  Buy Now
                </Link>
                <TiEyeOutline className="text-6xl border hover:bg-black px-2 bg-violet-500 translate-y-6 group-hover:translate-0 duration-300 delay-200" />
              </div>
            </div>
            <p>{item.product}</p>
            <div className="flex py-2 justify-center text-xl text-orange-400">
              {item.start}
              {item.start}
              {item.start}
              {item.start}
            </div>
            {item.price}
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

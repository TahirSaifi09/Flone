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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-opacity duration-500"
              />
              <img
                src={item.hoverImage}
                alt={item.title}
                className="absolute top-0 left-0 w-full h-64 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Hover Icons */}
              <div className="flex justify-between group w-full text-2xl duration-700 transform text-white opacity-0 ease-in-out group-hover:opacity-100 absolute bottom-0">
                <CiHeart className="text-6xl px-2 bg-violet-500 hover:bg-black border translate-y-6 group-hover:translate-0 duration-300 delay-100" />
                <Link
                  to="#"
                  className="text-xl border text-center bg-violet-500 px-6 py-3 hover:bg-black w-full translate-y-6 group-hover:translate-0 duration-300 delay-150"
                >
                  Buy Now
                </Link>
                <TiEyeOutline className="text-6xl border hover:bg-black px-2 bg-violet-500 translate-y-6 group-hover:translate-0 duration-300 delay-200" />
              </div>
            </div>

            {/* Info */}
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800 truncate">{item.title}</h3>
              <div className="flex justify-center py-2 text-orange-400">
                {[...Array(item.rating)].map((_, i) => (
                  <CiStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

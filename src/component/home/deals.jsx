import { CiHeart, CiStar } from "react-icons/ci";
import { TiEyeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Deals() {
  const page = [
    {
      name: "New Arrivals",
      path: null,
    },
    {
      name: "Best Sellers",
      path: null,
    },
    {
      name: "Sale Items",
      path: null,
    },
  ];

  const product = [
    {
      photo: "9.jpg",
      alt: "Prouct",
      photo2: "7.jpg",
      product: "Lorem ipsum fashion female top",
      start: <CiStar />,
      price: "$30",
    },
    {
      photo: "30.jpg",
      alt: "Prouct",
      photo2: "23.jpg",
      product: "Lorem ipsum fashion female top",
      start: <CiStar />,
      price: "$29",
    },
    {
      photo: "6.jpg",
      alt: "Prouct",
      photo2: "8.jpg",
      product: "Lorem ipsum fashion female top",
      start: <CiStar />,
      price: "$35",
    },
    {
      photo: "9.jpg",
      alt: "Prouct",
      photo2: "7.jpg",
      product: "Lorem ipsum fashion female top",
      start: <CiStar />,
      price: "$25",
    },
    {
      photo: "6.jpg",
      alt: "Prouct",
      photo2: "8.jpg",
      product: "Lorem ipsum fashion female top",
      start: <CiStar />,
      price: "$35",
    },
    {
      photo: "30.jpg",
      alt: "Prouct",
      photo2: "23.jpg",
      product: "Lorem ipsum fashion female top",
      start: <CiStar />,
      price: "$30",
    },
    {
      photo: "9.jpg",
      alt: "Prouct",
      photo2: "7.jpg",
      product: "Lorem ipsum fashion female top",
      start: <CiStar />,
      price: "$35",
    },
    {
      photo: "9.jpg",
      alt: "Prouct",
      photo2: "7.jpg",
      product: "Lorem ipsum fashion female top",
      start: <CiStar />,
      price: "$29",
    },
    
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center pb-20 justify-center font-medium text-4xl gap-4">
        <hr className="border-2 w-24" />
        <p>DAILY DEALS!</p>
        <hr className="border-2 w-24" />
      </div>
      <div className="flex justify-center gap-4 pb-4 text-xl font-medium ">
        {page.map((item, index) => (
          <div className="text-gray-600 hover:text-black">
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <div className="sm:px-42 text-center grid grid-cols-1 sm:grid-cols-4 gap-8">
        {product.map((item, index) => (
          <div key={index} className="group">
            <div className="relative cursor-pointer">
              <img
                src={item.photo}
                alt="{item.alt}"
                className="py-6 opacity-100"
              />
              <img
                src={item.photo2}
                alt={item.alt}
                className="absolute top-0 py-6 opacity-0 duration-700 group-hover:opacity-100"
              />
              <div className="flex justify-between group w-full text-2xl duration-700 transform text-white opacity-0 ease-in-out group-hover:opacity-100 py-6 absolute bottom-0">
                <CiHeart className="text-6xl px-2 bg-violet-500 hover:bg-black border translate-y-6 group-hover:translate-0 duration-300 delay-100"/>
                <Link to="#" className="text-xl border bg-violet-500 px-6 py-3 hover:bg-black w-full translate-y-6 group-hover:translate-0 duration-300 delay-150">Buy Now</Link>
                <TiEyeOutline className="text-6xl border hover:bg-black px-2 bg-violet-500 translate-y-6 group-hover:translate-0 duration-300 delay-200"/>
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
    </div>
  );
}

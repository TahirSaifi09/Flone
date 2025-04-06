import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Banner() {
  const data = [
    {
      img: "/banner-1.jpg",
      title: "Watch",
      price: "$99.00",
      path: null,
      heading: "Our Vision",
      para2:
        "Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.",
    },
    {
      img: "/banner-2.jpg",
      title: "Plo Bag",
      price: "$79.00",
      path: null,
      heading: "Our Mission",
      para2:
        "Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.",
    },
    {
      img: "/banner-3.jpg",
      title: "Sunglass",
      price: "$29.00",
      path: null,
      heading: "Our Goal",
      para2:
        "Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.",
    },
  ];

  return (
    <div className="px-44">
      <div className="py-20 flex gap-5 justify-between">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative group overflow-hidden">
              <img
                src={item.img}
                alt="photo"
                className="group-hover:scale-115 duration-500"
              />
              <p className="absolute top-0 text-amber-800 text-3xl p-8">
                {item.title}
                <p className="text-base text-black">
                  Starting at{" "}
                  <span className="text-amber-800">{item.price}</span>
                </p>
              </p>
              <Link to="#">
              <FaRegArrowAltCircleRight className="absolute bottom-8 text-amber-800 hover:text-purple-700 cursor-pointer left-8 text-3xl"/>
            </Link>
            </div>
            <h3 className="font-medium text-2xl mt-20 py-4">{item.heading}</h3>
            <p className="text-gray-700">{item.para2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

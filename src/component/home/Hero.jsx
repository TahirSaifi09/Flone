import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
export default function Hero() {
  const data = [
    {
      h2: "Smart Products",
      para: "Summer Offer 2025 Collection",
      click: "Shop Now",
      photo: "/single-slide-hm1-2.png",
      alt: "Photo",
    },
    {
      h2: "Smart Products",
      para: "Winter Offer 2025 Collection",
      click: "Shop Now",
      photo: "/single-slide-1.png",
      alt: "Photo",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-full overflow-hidden">
      <Slider {...settings} className="bg-pink-100 slide-button">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-slider pt-10 sm:pt-24 px-4 sm:px-44 sm:flex max-sm:flex-wrap font-medium items-center"
          >
            <div className="flex text-center justify-center flex-wrap gap-4">
              <h2 className="text-3xl">{item.h2}</h2>
              <p className="text-3xl sm:text-7xl">{item.para}</p>
              <div className="relative group mt-8">
                <Link
                  to="#"
                  className=" hover:text-white border py-4 px-10 hover:bg-purple-500"
                >
                  {item.click}
                </Link>
              </div>
            </div>
            <img src={item.photo} alt={item.alt} className="w-full pt-10 sm:w-[55%]" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

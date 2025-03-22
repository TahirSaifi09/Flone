import React from "react";
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
      photo:"/single-slide-1.png",
      alt: "Photo",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-screen overflow-hidden">
      <Slider {...settings} className="bg-pink-100 slide-button">
        {data.map((item, index) => (
          <div className="flex-slider pt-24 px-44 flex font-medium items-center">
            <div className="flex flex-wrap gap-4">
              <h2 className="text-3xl">{item.h2}</h2>
              <p className="text-7xl">{item.para}</p>
              <button className="border px-12 hover:bg-purple-500 hover:text-white py-3 mt-8">{item.click}</button>
            </div>
            <img src={item.photo} alt={item.alt} className="w-[55%]"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

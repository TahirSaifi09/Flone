import { CiDiscount1 } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Ri24HoursFill } from "react-icons/ri";
import React from "react";
export default function Services() {
  const data = [
    {
      icon: <LiaShippingFastSolid className="text-5xl"/>,
      h3: "Free Shipping",
      p: "Free shipping on all order",
    },
    {
        icon:<Ri24HoursFill className="text-5xl"/>,
        h3:"Support 24/7",
        p:"Free shipping on all order"
    },
    {
        icon:<HiOutlineCurrencyDollar />,
        h3:"Money Return",
        p:"Free shipping on all order"
    },
    // {
    //     icon:<CiDiscount1 />,
    //     h3:"Order Discount",
    //     p:"Free shipping on all order"
    // }
  ];
  return (
    <div className="flex">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex gap-4 px-44 items-center">
            {item.icon}
            <div>
              <h3 className="text-lg font-medium">{item.h3}</h3>
              <p>{item.p}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

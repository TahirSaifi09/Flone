import { BsEmojiSmile } from "react-icons/bs";
import { IoBulbOutline, IoTrophyOutline } from "react-icons/io5";
import { PiBag } from "react-icons/pi";

export default function Overview() {
  const data = [
    {
      icon: PiBag,
      num: 360,
      title: "Project Done",
    },
    {
      icon: IoTrophyOutline,
      num: 690,
      title: "Cups Of Coffee",
    },
    {
      icon: IoBulbOutline,
      num: 100,
      title: "Branding",
    },
    {
      icon: BsEmojiSmile ,
      num: 420,
      title: "Happy Clients",
    },
  ];

  return <div className="w-full flex items-center justify-between px-44 h-72 bg-gray-100 mb-20">
    {data.map((item, index)=>(
        <div key={index} className="w-1/4 flex flex-col items-center gap-4">
            <item.icon className="text-5xl"/>
            <p className="text-4xl font-bold text-purple-500">{item.num}</p>
            <p className="text-2xl font-medium">{item.title}</p>
        </div>
    ))}
  </div>;
}

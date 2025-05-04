export default function Blog() {
  const data = [
    {
      photo: "blog-1.jpg",
      alts: "Blog",
      title: "A guide to latest trends",
      By: "By Admin",
    },
    {
      photo: "blog-2.jpg",
      alts: "Blog",
      title: "Five ways to lead a happy life",
      By: "By Admin",
    },
    {
      photo: "blog-3.jpg",
      alts: "Blog",
      title: "Tips on having a happy life",
      By: "By Admin",
    },
  ];
  return (
    <div className="px-44 pb-20">
      <div className="flex items-center font-medium gap-2 justify-center py-10">
        <hr className="w-24 border-2"></hr>
        <h2 className="text-4xl">OUR BLOG</h2>
        <hr className="w-24 border-2"></hr>
      </div>
      <div className="flex justify-between">
        {data.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.photo} alt="{item.alts}" />
            <div className="bottom-0 w-full translate-y-10 absolute px-10 flex flex-col text-center justify-center h-24 font-medium">
              <p className="w-full px-6 py-2 bg-white text-2xl">{item.title}</p>
              <i className="text-gray-500 bg-white">{item.By}</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

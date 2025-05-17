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
    <div className="px-4 sm:px-10 2xl:px-44 pb-20">
      <div className="flex sm:flex-wrap items-center font-medium gap-2 justify-center py-10">
        <hr className="w-1/5 sm:w-24 border-2"></hr>
        <h2 className="text-lg max-lg:w-1/3 sm:text-4xl">OUR BLOG</h2>
        <hr className="w-1/5 sm:w-24 border-2"></hr>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 justify-between">
        {data.map((item, index) => (
          <div key={index} className="relative py-10">
            <img src={item.photo} alt="{item.alts}" />
            <div className="bottom-0 w-full lg:translate-y-10 absolute px-10 flex flex-col text-center justify-center h-24 font-medium">
              <p className="w-full px-6 py-2 bg-white text-lg lg:text-2xl">{item.title}</p>
              <i className="text-gray-500 bg-white">{item.By}</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

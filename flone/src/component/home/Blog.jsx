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
    <div className="px-44">
      <div className="flex items-center font-medium gap-2 justify-center py-10">
        <hr className="w-24 border-2"></hr>
        <h2 className="text-4xl">OUR Blog</h2>
        <hr className="w-24 border-2"></hr>
      </div>
      <div className="flex justify-between ">
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.photo} alt="{item.alts}" />
            <div className="w-full flex flex-col text-center justify-center -translate-y-10 h-24 font-medium">
                <p className="w-3/4 bg-white px-10 text-2xl">{item.title}</p>
                <i>{item.By}</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

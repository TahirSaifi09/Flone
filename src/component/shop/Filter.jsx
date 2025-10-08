import { CiSearch } from "react-icons/ci";

const categories = [
  "All Categories",
  "Fashion",
  "Men",
  "Women",
  "Electronics",
  "Furniture",
  "Plant",
  "Organic Food",
  "Flower",
  "Book",
  "Cosmetics",
  "Accessories",
  "Handmade",
  "Kids",
  "Auto Parts",
  "Cakes",
];

export default function Filter() {
  return (
    <aside className="w-1/5 p-4 bg-white shadow rounded-2xl border border-gray-200">
      {/* Search Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Search</h2>
        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            type="search"
            name="search"
            placeholder="Search here..."
            className="w-full p-2 outline-none text-gray-700"
          />
          <button
            type="button"
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <CiSearch className="text-2xl text-gray-500" />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Categories</h2>
        <ul className="flex flex-col gap-2 text-sm text-gray-700">
          {categories.map((category, index) => {
            const id = category.toLowerCase().replace(/\s+/g, "-");
            return (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={id}
                  name="category"
                  className="accent-indigo-500 w-4 h-4"
                />
                <label
                  htmlFor={id}
                  className="cursor-pointer hover:text-indigo-600 transition-colors"
                >
                  {category}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

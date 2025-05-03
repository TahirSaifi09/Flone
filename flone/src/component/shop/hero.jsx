import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <div className="h-24 my-4 flex justify-center items-center font-medium w-full bg-gray-100">
        <h3>
          <Link to="/" className="text-gray-500">
            HOME
          </Link>{" "}
          / Shop
        </h3>
      </div>
      
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <div className="h-24 mt-4 flex justify-center items-center font-medium w-full bg-gray-100">
        <h3>
          <Link to="/" className="text-gray-500">
            HOME
          </Link>{" "}
          / ABOUT US
        </h3>
      </div>
      <div className="w-full text-center mt-20">
        <p className="text-gray-500 font-medium">Who Are We</p>
        <p className="text-3xl font-medium border-b-2 inline-block">Welcome To Flone</p>
        
      </div>
      <div className="px-100 mt-6 text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commo consequat irure
        </p>
      </div>
    </div>
  );
}

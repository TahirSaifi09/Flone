import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full flex flex-wrap justify-between items-center gap-4 px-4 sm:px-10 2xl:px-44 py-8 sm:py-20 bg-gray-100">
      <div className="flex flex-col gap-3 text-gray-500">
        <Link to="/">
          <img src="logo.png" alt="logo" />
        </Link>
        <p>© 2025 Flone. </p>
        <p>All Rights Reserved</p>
      </div>
      <ul className="flex flex-col gap-3 text-gray-500">
        <li className="text-black">ABOUT US</li>
        <Link to="/about">About us</Link>
        <li>Store location</li>
        <li>Contact</li>
        <li>Order tracking</li>
      </ul>
      <ul className="flex flex-col gap-3 text-gray-500">
        <li className="text-black">USEFUL LINKS</li>
        <li>Return</li>
        <li>Support Policy</li>
        <li>Size guide</li>
        <li>FAQs</li>
      </ul>
      <ul className="flex flex-col gap-3 text-gray-500">
        <li className="text-black">FOLLOW US</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
      <div className="flex flex-col gap-3 text-gray-500 lg:w-1/4">
        <p className="text-black">SUBSCRIBE</p>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address..."
          className="outline-none border-b py-2"
        />
        <div>
          <button className="border-b hover:text-violet-600 duration-400 text-black cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

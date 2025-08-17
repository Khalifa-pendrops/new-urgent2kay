import React from "react";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function TopNavBar() {
  return (
    <header className="grid grid-cols-6 p-8 shadow">
      <div className="col-span-4 flex">
        <div className="px-4 mr-4">
          <h2 className="font-bold text-gray-950 ">Hi, Ada</h2>
          <p className="text-sm text-gray-600">Let's simplify your finances!</p>
        </div>
        <div>
          <form action="">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-warning-100 rounded-full py-2 px-4 bg-white w-md pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300 ease-in-out"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-2 flex flex-row items-center justify-end">
        <button className="bg-primary-500 text-white rounded-full py-2 px-4 hover:cursor-pointer hover:bg-primary-700">
          Connect Wallet
        </button>
        <Link to="/notifications">
          <IoNotificationsOutline className="text-4xl text-black  ml-4" />
        </Link>
        <Link to="/profile">
          <FaRegUserCircle className="text-4xl text-gray-800 ml-4" />
        </Link>
      </div>
    </header>
  );
}

export default TopNavBar;

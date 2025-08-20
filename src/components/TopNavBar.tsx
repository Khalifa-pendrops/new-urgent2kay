import React from "react";
import { FaSearch, FaRegUserCircle, FaRegWindowClose } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import purpleLogo from "../assets/purple-logo.svg";

type TopNavBarProps = {
  onMenuClick: () => void;
  toggle: boolean;
  isNotification?: boolean;
};

function TopNavBar({ onMenuClick, toggle, isNotification }: TopNavBarProps) {
  return (
    <header className="flex justify-center md:grid md:grid-cols-6 md:w-[83.25%] p-4 shadow  bg-primary-50 fixed top-0 right-0 w-full z-50">
      <div className="md:hidden">
        {!toggle ? (
          <IoMdMenu
            className="text-primary-500 text-3xl"
            onClick={onMenuClick}
          />
        ) : (
          <FaRegWindowClose
            className="text-primary-500 text-3xl transition-all duration-800 ease-in-out"
            onClick={onMenuClick}
          />
        )}
      </div>
      <div className="md:hidden flex justify-center items-center w-full">
        <img src={purpleLogo} alt="Logo" className="w-32 h-auto" />
      </div>
      <div className="col-span-4 flex">
        <div className="px-4 mr-4 hidden md:block">
          <h2 className="font-bold text-gray-950 ">Hi, Ada</h2>
          <p className="text-sm text-gray-600">Let's simplify your finances!</p>
        </div>
        <div className="hidden md:block">
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
        <button className="bg-primary-500 text-white rounded-full py-2 px-4 hover:cursor-pointer hover:bg-primary-700 hidden md:block">
          Connect Wallet
        </button>
        <Link to="/notifications">
          <div className="relative flex items-center justify-center ml-4">
            {isNotification && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            )}
          </div>
          <IoNotificationsOutline className="text-2xl md:text-4xl text-black  ml-4" />
        </Link>
        <Link to="/profile">
          <FaRegUserCircle className="text-2xl md:text-4xl text-gray-800 ml-4" />
        </Link>
      </div>
    </header>
  );
}

export default TopNavBar;

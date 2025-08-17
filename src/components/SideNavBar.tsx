import React from "react";
import whiteLogo from "../assets/white-logo.svg";
import NavItem from "../components/NavItem";
import { FaHome, FaReceipt, FaUserFriends, FaUser } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoIosHelpCircleOutline, IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function SideNavBar() {
  return (
    <aside className="col-span-1 bg-primary-800 p-4 text-white h-screen ">
      <div className="flex items-center justify-center mt-4 mb-[30%]">
        <img src={whiteLogo} alt="Logo" className="h-12" />
      </div>
      <div className="mt-4">
        <Link
          to="/dashboard"
          className="text-white text-lg font-semibold mb-4 block"
        >
          <NavItem icon={<FaHome />} name="Dashboard" />
        </Link>
        <Link to="/users" className="text-white text-lg  mb-4 block">
          <NavItem icon={<FaReceipt />} name="Generate Request" />
        </Link>
        <Link to="/relationships" className="text-white text-lg  mb-4 block">
          <NavItem icon={<FaUserFriends />} name="Relationships" />
        </Link>
        <Link to="/requests" className="text-white text-lg  mb-4 block">
          <NavItem
            icon={<FaArrowRightArrowLeft />}
            name="Transaction History"
          />
        </Link>
        <Link to="/help" className="text-white text-lg  mb-4 block">
          <NavItem icon={<IoIosHelpCircleOutline />} name="Help" />
        </Link>
        <Link to="/profile" className="text-white text-lg  mb-4 block">
          <NavItem icon={<FaUser />} name="Profile" />
        </Link>
        <Link to="/logout" className="text-white text-lg  mt-[8rem] block">
          <NavItem icon={<IoIosLogOut />} name="Logout" />
        </Link>
      </div>
    </aside>
  );
}

export default SideNavBar;

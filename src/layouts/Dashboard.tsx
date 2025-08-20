import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserFriends, FaSearch, FaCreditCard } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiStackLine } from "react-icons/ri";
import { LuCalendarClock } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineCalendarMonth } from "react-icons/md";

import MiniCard from "../components/MiniCard";
import Card from "../components/Card";
import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopNavBar";

function Dashboard() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);
  const [isNotification, setIsNotification] = useState<boolean>(true);
  const datePickerRef = useRef<DatePicker | null>(null);
  function handleToggleSideBar() {
    setToggleSideBar((prev) => !prev);
  }
  const handleMobileDateClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const recentActivities = [
    {
      id: 1,
      requestBundle: "Monthly Essentials",
      sponsor: "Gabriel",
      amount: "$100",
      date: "2025-08-14",
      time: "10:00 AM",
      status: "Pending",
      actions: <Link to="/activity/1">View Details</Link>,
    },
    {
      id: 2,
      requestBundle: "Sponsored Essentials",
      sponsor: "Michael",
      amount: "$200",
      date: "2025-08-13",
      time: "11:00 AM",
      status: "Approved",
      actions: <Link to="/activity/2">View Details</Link>,
    },
    {
      id: 3,
      requestBundle: "Scheduled Essentials",
      sponsor: "Joseph",
      amount: "$300",
      date: "2025-08-12",
      time: "12:00 PM",
      status: "Rejected",
      actions: <Link to="/activity/3">View Details</Link>,
    },
    {
      id: 4,
      requestBundle: "Monthly Essentials",
      sponsor: "Gabriel",
      amount: "$100",
      date: "2025-08-14",
      time: "10:00 AM",
      status: "Pending",
      actions: <Link to="/activity/1">View Details</Link>,
    },
    {
      id: 5,
      requestBundle: "Sponsored Essentials",
      sponsor: "Michael",
      amount: "$200",
      date: "2025-08-13",
      time: "11:00 AM",
      status: "Approved",
      actions: <Link to="/activity/2">View Details</Link>,
    },
    {
      id: 6,
      requestBundle: "Scheduled Essentials",
      sponsor: "Joseph",
      amount: "$300",
      date: "2025-08-12",
      time: "12:00 PM",
      status: "Rejected",
      actions: <Link to="/activity/3">View Details</Link>,
    },
    {
      id: 7,
      requestBundle: "Monthly Essentials",
      sponsor: "Gabriel",
      amount: "$100",
      date: "2025-08-14",
      time: "10:00 AM",
      status: "Pending",
      actions: <Link to="/activity/1">View Details</Link>,
    },
    {
      id: 8,
      requestBundle: "Sponsored Essentials",
      sponsor: "Michael",
      amount: "$200",
      date: "2025-08-13",
      time: "11:00 AM",
      status: "Approved",
      actions: <Link to="/activity/2">View Details</Link>,
    },
    {
      id: 9,
      requestBundle: "Scheduled Essentials",
      sponsor: "Joseph",
      amount: "$300",
      date: "2025-08-12",
      time: "12:00 PM",
      status: "Rejected",
      actions: <Link to="/activity/3">View Details</Link>,
    },
    {
      id: 10,
      requestBundle: "Monthly Essentials",
      sponsor: "Gabriel",
      amount: "$100",
      date: "2025-08-14",
      time: "10:00 AM",
      status: "Pending",
      actions: <Link to="/activity/1">View Details</Link>,
    },
    {
      id: 11,
      requestBundle: "Sponsored Essentials",
      sponsor: "Michael",
      amount: "$200",
      date: "2025-08-13",
      time: "11:00 AM",
      status: "Approved",
      actions: <Link to="/activity/2">View Details</Link>,
    },
    {
      id: 12,
      requestBundle: "Scheduled Essentials",
      sponsor: "Joseph",
      amount: "$300",
      date: "2025-08-12",
      time: "12:00 PM",
      status: "Rejected",
      actions: <Link to="/activity/3">View Details</Link>,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 h-screen w-screen">
      <div
        className={`md:col-span-1 bg-primary-800 text-white h-screen md:block fixed md:static md:translate-x-0 left-0 top-0  z-50 max-md:mt-16 transform transition-transform duration-300 ease-in-out ${
          toggleSideBar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <SideNavBar />
      </div>
      <main className="col-span-5 py-4 bg-primary-50 overflow-auto">
        <div className="max-w-[1536px] mx-auto md:grid justify-between items-center">
          <TopNavBar
            onMenuClick={handleToggleSideBar}
            toggle={toggleSideBar}
            isNotification={isNotification}
          />
        </div>
        <div className="px-6 py-10 mt-4 md:mt-8 animate-[var(--animation-fade-in-up)] delay-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MiniCard
              title="Requests Generated"
              value="0"
              icon={<RiStackLine />}
            />
            <MiniCard
              title="Bills Sponsored"
              value="0"
              icon={<FaCreditCard />}
            />
            <MiniCard
              title="Bills Scheduled"
              value="0"
              icon={<LuCalendarClock />}
            />
            <MiniCard
              title="Relationships"
              value="0"
              icon={<FaUserFriends />}
            />
          </div>
          <div className=" flex flex-row md:grid md:grid-cols-4 gap-4 mt-8 max-md:overflow-x-scroll animate-[var(--animation-fade-in-up)] delay-300">
            <Link to="/generate-request">
              <Card
                icon={<RiStackLine />}
                title="Create A Bundle"
                content="Combine bills, subscriptions and personal needs into one simple request"
                color="bg-primary-500"
                hoverColor="bg-primary-700"
              />
            </Link>
            <Link to="/generate-request">
              <Card
                icon={<FaCreditCard />}
                title="Sponsor A Bundle"
                content="Approve and support a bundle request from someone you trust"
                color="bg-brand-green"
                hoverColor="bg-success-900"
              />
            </Link>
            <Link to="/generate-request">
              <Card
                icon={<LuCalendarClock />}
                title="Schedule A Bundle"
                content="Automate recurring payments for bills and expenses ahead of time"
                color="bg-brand-teal"
                hoverColor="bg-success-900"
              />
            </Link>
            <Link to="/generate-request">
              <Card
                icon={<FaUserFriends />}
                title="Create A Relationship"
                content="Link a sponsor or beneficiary account for seamless transactions"
                color="bg-brand-blue"
                hoverColor="bg-primary-900"
              />
            </Link>
          </div>
          <div className="mt-8 rounded-2xl bg-amber-50 max-w-[90vw] md:w-full max-h-[70vh] pb-4 px-2 shadow-xl overflow-y-scroll animate-[var(--animation-fade-in-up)] delay-400">
            <div className="flex items-center mt-2 mb-4 justify-between sticky top-0 bg-amber-50 pb-2 px-4 w-full">
              <div className="flex items-center">
                <div className="">
                  <h2 className="font-medium text-sm md:text-2xl md:font-bold text-gray-950 ">
                    Recent Activities
                  </h2>
                </div>
                <div className=" mx-2 md:block">
                  <form action="" className="">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="border border-warning-100 rounded-full py-2 px-4 bg-white md:w-md w-[50vw] pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300 ease-in-out"
                      />
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>
                  </form>
                </div>
              </div>
              <div className=" group relative border-l border-gray-200 py-2 px-4 bg-white w-64 shadow-md cursor-pointer mt-2 rounded-full ">
                <div
                  onClick={handleMobileDateClick}
                  className="absolute left-2 md:left-3 bottom-1/2 translate-y-1/2 touch-manipulation cursor-pointer"
                >
                  <MdOutlineCalendarMonth className="inline-block mr-2 text-gray-400 text-xl" />
                </div>
                <DatePicker
                  className="hidden  md:inline-block md:w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out ml-5 text-lg cursor-pointer"
                  selected={startDate}
                  onChange={(date: Date | null) => {
                    setStartDate(date);
                  }}
                  ref={datePickerRef}
                />
                <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl hidden md:inline-block" />
              </div>
            </div>
            <div className="overflow-y-auto">
              <table className="w-full divide-y tab divide-gray-200 mb-4">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Request Bundle
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Sponsor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivities.map((activity) => {
                    const colorClass =
                      activity.status === "Approved"
                        ? "text-green-600"
                        : activity.status === "Rejected"
                        ? "text-red-600"
                        : "text-warning-500";
                    return (
                      <tr key={activity.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {activity.requestBundle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {activity.sponsor || "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {activity.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {activity.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {activity.time}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm ${colorClass}`}
                        >
                          {activity.status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-400">
                          {activity.actions}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

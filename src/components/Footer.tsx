import React, { useState } from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../assets/white-logo.svg";
import { FaTwitter, FaDiscord } from "react-icons/fa";

type UserEmail = {
  email: string;
};

const Footer = () => {
  const [email, setEmail] = useState<UserEmail>({ email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail((prevData) => ({ ...prevData, [name]: value }));
    // setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //logic to submit newsletter
    console.log("This form don reach database:", email);
  };

  return (
    <footer className="bg-[#401A6D] w-full py-6 px-4 md:px-10 flex flex-col text-[#FFFFFF] h-auto font-archivo ">
      <div className="flex flex-col justify-center gap-8 md:justify-between md:flex-row ">
        <div className="flex flex-col gap-4">
          <a href="#">
            <img src={whiteLogo} className="w-[161px] md:w-[15rem]" />
          </a>
          <div className="flex items-center gap-4">
            <a href="#">
              <FaDiscord
                size={24}
                className="cursor-pointer w-[31px] md:w-[40px]"
              />
            </a>
            <a href="#">
              <FaTwitter size={24} className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:items-center md:justify-between w-full md:w-[40%] gap-8 md:gap-[0]">
          <div className="flex flex-col gap-4 md:gap-[24px]">
            <h3 className="text-[28px]">Product</h3>
            <ul className="flex flex-col gap-2 text-[16px]">
              <li className="">
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Generate Request</a>
              </li>
              <li>
                <a href="#">Transaction History</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:gap-[24px] ">
            <h3 className="text-[28px]">Company</h3>
            <ul className="flex flex-col gap-2 text-[16px]">
              <li>
                <a href="#">Our Terms</a>
              </li>
              <li>
                <a href="#">Our values</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:gap-[24px]">
            <h3 className="text-[28px]">Resources</h3>
            <ul className="flex flex-col gap-2 text-[16px]">
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Documentatio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-[2rem]">
        <hr className="w-full mx-auto mt-[2rem] mb-6 border-[#7F7B7B]"></hr>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[0] md:items-center md:justify-between  ">
        <div className="flex flex-col gap-2 pl-[1rem] md:pl-[0]">
          <h3 className="text-[23px]">Join our newsletter</h3>
          <p className="text-[16px]">Keep up to date with everything Reflect</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:items-center justify-center  gap-4 md:gap-2  "
        >
          <input
            name="email"
            value={email.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="text-black bg-white rounded-full w-full md:w-[343px] h-[56px] placeholder:text-[#7F7B7B] p-[16px] border border-[#B7B2B2] z-50 "
          />
          <Link to="/signup">
            <button
              type="submit"
              className="border-[1.5px] border-[#DEDEDE] text-[63%] md:text-[14px] w-[50%] md:w-[147px] h-[56px] rounded-full py-[10px] px-[16px] cursor-pointer "
            >
              Join Urgent2kay
            </button>
          </Link>
        </form>
      </div>
      <div className="my-[2rem">
        <hr className="w-full mx-auto mt-[2rem] mb-6 border-[#7F7B7B]"></hr>
      </div>
      <div className="flex md:justify-between mb-2 w-full md:w-[100%] items-start ">
        {" "}
        <div className="md:flex items-center justify-center gap-2 md:gap-[40px] hidden">
          <a href="#">Terms of Service</a>
          <a href="#">Policy Service</a>
          <a href="#">Cookie Policie</a>
        </div>
        <div className="flex items-center justify-center gap-[11px] ">
          <p>&copy; {new Date().getFullYear()}</p>
          <a href="#">
            <img src={whiteLogo} className="w-[85px] h-[18px]" />
          </a>
          <p className="text-[16px]">.</p>
          <p className="text-[14px]">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

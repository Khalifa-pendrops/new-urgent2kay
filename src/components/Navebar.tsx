import { useMemo, useState, useEffect } from "react";
import { debounce } from "lodash";
import { Disclosure } from "@headlessui/react";
import { FaBars, FaTimes, FaBell, FaUser, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import purpleLogo from "../assets/purple-logo.svg";

type NavLink = {
  name: string;
  href: string;
};

interface UserProps {
  name: string;
}

const links: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "Home", href: "#home" },
  { name: "Home", href: "#home" },
  { name: "Home", href: "#home" },
];

const Navbar: React.FC<UserProps> = ({ name }) => {
  const [query, setQuery] = useState("");

  //using lodash to trigger delay should in case of API call
  const handleSearch = async (searchValue: string) => {
    //await API call happens here
    console.log("Delay the inputs for a while");
  };

  //memoize the debounce to avoind re-render
  const debouncedSearch = useMemo(() => debounce(handleSearch, 500), []);

  //when query chnages, calldebounce function here
  useEffect(() => {
    debouncedSearch(query);

    //cancel debounce on unmount
    return () => {
      debouncedSearch.cancel?.();
    };
  }, [query, debouncedSearch]);

  // useEffect(() => {
  //   document.body.style.overflow = open ? "hidden" : "";
  // }, [open]);

  return (
    <Disclosure
      as="nav"
      className="bg-[#ECE8F0] dark:bg-gray-900 md:shadow-sm fixed w-full z-50 py-3"
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/**hamburger */}
            <div className="flex md:hidden">
              <Disclosure.Button className="focus:outline-none">
                {open ? <FaTimes size={24} /> : <FaBars size={24} />}
              </Disclosure.Button>
            </div>

            <div className="hidden md:flex items-center gap-[2rem] w-[50%]">
              <div className=" w-[50%] ">
                <h2 className="text-2xl">
                  Hi,{" "}
                  <span className="text-[#401A6D] font-semibold">{name}</span>
                </h2>
                <p>Let's simplify your finances!</p>
              </div>{" "}
              <div className="tex-base font-bold  text-[#401A6D] dark:text-white relative w-full  hidden md:flex">
                {query === "" && (
                  <div className="text-gray-500 w-[18px] absolute top-2 left-[2%] z-40 ml-2">
                    {" "}
                    <FaSearch size={24} className="w-[18px] " />
                  </div>
                )}
                <input
                  className="border-1 border-[#E9DDDD] bg-[#FFFFFF] text-[#9C9999] rounded-full relative pl-[3rem] pr-4 py-[4px] w-full active:border-[#9C9999] placeholder:text-sm "
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <img src={purpleLogo} className="w-[150px] flex md:hidden" />

            <div className="flex items-cenetr gap-4 ">
              <button className="border-1 rounded-full py-[6px] px-[12px] text-white bg-[#401A6D] font-semibold hidden md:flex">
                Connect Wallet
              </button>

              <div className="flex items-center justify-center gap-4">
                <FaUser
                  size={24}
                  className="text-gray-500 bg-[#ECE8F0] border-2 border-gray-500 w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full px-2 cursor-pointer hover:bg-[#5D428E] hover:text-[white] hover:border-0"
                />
                <FaBell
                  size={24}
                  className="text-gray-500 bg-[#ECE8F0] w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer hover:text-[#5D428E] hover:border-0"
                />
              </div>
            </div>

            {/**desktop links goes here */}
            <div className="hidden  space-x-6">
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  className="text-gray-700 hover:text-[#401A6D] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/**mobile  */}
          <AnimatePresence>
            {open && (
              <Disclosure.Panel
                static
                as={motion.li}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden bg-[#ECE8F0] px-4 overflow-hidden z-50 fixed w-[98%] list-none"
              >
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="py-3 border-b border-gray-100 bg-[#ECE8F0] bg-transparent hover:bg-[#401A6D] list-none"
                  >
                    <a
                      href={link.href}
                      className="block text-gray-700 hover:text-gray-100 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-[#401A6D] active:text-[white] border-b border-[#401A6D] transition-colors z-50 pb-2"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </Disclosure.Panel>
            )}
          </AnimatePresence>

          <div className="tex-base font-bold  text-[#401A6D] dark:text-white relative w-[95%] m-auto  flex md:hidden mt-2 ">
            {query === "" && (
              <div className="text-gray-500 w-[22px] absolute top-5 left-[2%] z-40 ml-2">
                {" "}
                <FaSearch size={24} className="w-[22px] " />
              </div>
            )}
            <input
              className="border-2 border-[#E9DDDD] bg-[#FFFFFF] text-[#9C9999] rounded-full relative pl-[3rem] pr-4 py-[1rem] w-full active:border-[#9C9999] placeholder:text-lg "
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-cryptomaven.svg";
import mediaQuery from "../../config/mediaQuery/mediaQuery";
import { Quicklink } from "../../utils/types";
import { MobileLink } from "../../utils/types";
import {BiHomeAlt, BiBitcoin} from 'react-icons/bi'
import {FaBlogger} from 'react-icons/fa'

const links: Quicklink[] = [
  { page: "Home", link: "/" },
  { page: "About", link: "/about" },
  { page: "Blog", link: "/blog" },
];

const mobileLinks: MobileLink[] = [
  { page: "Home", link: "/", icon :<BiHomeAlt/> },
  { page: "About", link: "/about", icon :<BiBitcoin/> },
  { page: "Blog", link: "/blog",icon :<FaBlogger/> },
];

const Navbar = () => {
  const isMobile = mediaQuery("(max-width : 600px)");
  const [open, setOpen] = useState<boolean>(false);
  const handleSideNav = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        className={` ${isMobile ? "relative" : "px-20"} flex items-center py-5`}
      >
        <img
          src={Logo}
          alt="logo-crypto-maven"
          className={`${isMobile ? "w-8 ml-6" : "w-10"}`}
        />
        {isMobile ? (
          <div
            className={`${
              open
                ? "bg-black w-full h-screen absolute top-0 px-6 py-5"
                : "hidden"
            }`}
          >
            <div>
              <IoCloseSharp
                onClick={() => setOpen(false)}
                className="text-2xl"
              />
            </div>
            <div className="bg-gray-500 w-full h-[.5px] mt-5" />
            <div className="space-x-5 flex justify-center mt-5">
              <button className="border border-white rounded-md py-2.5 px-5">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="bg-gradient-to-r from-cyan-500 py-2.5 rounded-md px-5 to-blue-500">
                <Link to={"/register"}>Register</Link>
              </button>
            </div>
            <div className="bg-gray-500 w-full h-[.5px] mt-5" />

            <ul className="mt-5 space-y-8">
          {
            mobileLinks.map((val,idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <p className="text-xl">{val.icon}</p>
                <Link to={val.link}>{val.page}</Link>
              </li>
            ))
          }
        </ul>
          </div>
        ) : (
          <div className="flex items-center ml-auto">
            <ul className="flex space-x-10 mr-20">
              {links.map((val, idx) => (
                <li key={idx}>
                  <Link to={val.link}>{val.page}</Link>
                </li>
              ))}
            </ul>

            <div className="space-x-5 ">
              <button className="border border-white rounded-md py-2.5 px-5">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="bg-gradient-to-r from-cyan-500 py-2.5 rounded-md px-5 to-blue-500">
                <Link to={"/register"}>Register</Link>
              </button>
            </div>
          </div>
        )}
        <HiOutlineMenuAlt3
          onClick={handleSideNav}
          className={`${isMobile ? "text-2xl ml-auto mr-6" : "hidden"}`}
        />
      </div>
    </div>
  );
};

export default Navbar;

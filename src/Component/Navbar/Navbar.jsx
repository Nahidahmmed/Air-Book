import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import logo from '../../assets/LOGO.png';

export default function Navbar() {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
      <nav className="fixed z-20 w-full">
        <div className="bg-white px-4 py-2 bg-opacity-90 ">
          <div className="max-w-screen-xl mx-auto flex items-center xl:justify-start lg:justify-start md:justify-start justify-between">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2  transition-all duration-200 hover:scale-110">
            <img src={logo} alt="" />
          </div>
          <ul className="hidden text-lg font-medium items-center justify-between gap-10 md:flex mx-auto">
            <li className="group flex  cursor-pointer flex-col">
              Home
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              Services
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              About
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              Contact
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
          </ul>
          <button className="bg-gradient-to-tr from-blue-700 to-blue-500 text-white font-semibold pb-2 pt-1 px-6 rounded-lg text-lg">
            Sign Up
          </button>
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10 gap-2 bg-white shadow-lg absolute -right-3 top-14 flex w-[200px] flex-col rounded-lg text-base ">
                <li className="cursor-pointer  px-6 py-2  rounded-t-lg hover:bg-sky-600 ">
                  Home
                </li>
                <li className="cursor-pointer  px-6 py-2  hover:bg-sky-600 ">
                  Services
                </li>
                <li className="cursor-pointer  px-6 py-2  hover:bg-sky-600 ">
                  About
                </li>
                <li className="cursor-pointer  px-6 py-2  hover:bg-sky-600 ">
                  Contact
                </li>
              </ul>
            )}
          </div>
          </div>
        </div>
      </nav>
    
  );
}

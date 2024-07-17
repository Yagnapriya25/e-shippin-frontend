import React from "react";
import logo from "../../Images/logo.png";
import img from "../../Images/PROFILE.jpg";

export default function Topbar() {
  return (
    <div className="h-4/6 shadow-gray-700 sticky top-2.5 bg-white shadow ">
      <div className="flex justify-around">
        <div className="lg:h-12 lg:mx-4 lg:my-4 xl:h-14 xl:mx-6 xl:my-3 md:h-10 md:mx-4 md:my-4">
          <img src={logo} alt="logo" className="h-full w-16" />
        </div>
        <span className="lg:my-5 lg:flex lg:gap-3 xl:my-8 xl:flex xl:gap-3 md:my-5 md:flex md:gap-3">
          <input
            type="text"
            className="lg:h-6 lg:w-30 lg:pl-10 border-2 outline-none xl:h-7 xl:w-30 xl:pl-10 md:h-7 md:w-18 md:pl-10 "
            placeholder="Search..."
          />
          <i className="bx bx-search text-red-400 lg:text-xl xl:text-xl md:text-lg cursor-pointer"></i>
        </span>
         <ul className="hidden lg:flex lg:gap-10 lg:my-5 md:block lg:block xl:block xl:flex md:flex xl:gap-10 md:gap-10 xl:my-8 md:my-5">
          <li className="hover:text-red-400 cursor-pointer lg:text-lg xl:text-lg md:text-md">HOME</li>
          <li className="hover:text-red-400 cursor-pointer lg:text-lg xl:text-lg md:text-md">CATEGORY</li>
          <li className="hover:text-red-400 cursor-pointer lg:text-lg xl:text-lg md:text-md">CART</li>
        </ul>

        <div className="lg:h-14 lg:my-3 xl:h-15 xl:my-3 md:h-12 md:my-2">
          <img src={img} alt="profile" className="h-full rounded-full" />
        </div>
      </div>
    </div>
  );
}

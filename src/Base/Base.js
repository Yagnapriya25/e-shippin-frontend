import React from "react";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";

export default function Base({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden hide-scrollbar">
      <div className="sticky top-2.5 mx-5 my-0 z-10">
        <Topbar />
      </div>
      <div className="flex-grow mx-1 lg:mx-4 xl:mx-5 md:mx-3 mt-0 mb-10 md:mb-0 overflow-y-auto hide-scrollbar">
        {children}
      </div>
      <div className="block sticky bottom-0 md:hidden">
        <div className="bg-indigo-300">
          <ul className="flex justify-around text-white">
            <li>
              <i className="bx bx-home-alt hover:text-red-400 cursor-pointer" onClick={() => navigate(`/home/${token}`)}></i>
            </li>
            <li>
              <i className="bx bx-category hover:text-red-400 cursor-pointer" onClick={() => navigate(`/category/${token}`)}></i>
            </li>
            <li>
              <i className="bx bx-cart hover:text-red-400 cursor-pointer" onClick={() => navigate(`/cart/${token}`)}></i>
            </li>
            <li>
              <i className="bx bx-user hover:text-red-400 cursor-pointer" onClick={() => navigate(`/profile/${token}`)}></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

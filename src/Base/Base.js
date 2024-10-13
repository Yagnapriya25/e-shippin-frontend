import React from "react";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";

export default function Base({ children }) {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden hide-scrollbar">
      <div className="sticky top-2.5 h-1/6 mx-5 my-0">
        <Topbar />
      </div>
      <div className="mx-1 lg:mx-4 xl:mx-5 md:mx-3 overflow-hidden overflow-x-hidden hide-scrollbar mb-10 mt-5 h-4/5">
        {children}
      </div>
      <div className="block sticky bottom-0 md:hidden ">
        <div className="h-30 bg-indigo-300">
          <ul className="flex justify-around text-white ">
            <li>
              <i class="bx bx-home-alt hover:text-red-400 cursor-pointer" onClick={()=>navigate(`/home/${token}`)}></i>
            </li>
            <li>
              <i class="bx bx-category hover:text-red-400 cursor-pointer" onClick={()=>navigate(`/category/${token}`)}></i>
            </li>
            <li>
              <i class="bx bx-cart hover:text-red-400 cursor-pointer" onClick={()=>navigate(`/cart/${token}`)}></i>
            </li>
            <li>
              <i class="bx bx-user hover:text-red-400 cursor-pointer"  onClick={()=>navigate(`/profile/${token}`)}></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

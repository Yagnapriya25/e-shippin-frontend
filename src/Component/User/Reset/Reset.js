import React, { useState } from "react";
import img from "../../../Images/reset.jpg";

export default function Reset() {
  const [showPassword,setShowPassword]=useState();

  const toggle = ()=>setShowPassword(!showPassword);

  return (
    <div className="h-screen bg-blue-400 w-screen flex justify-center items-center overflow-hidden">
      <div className="h-5/6 w-5/6 bg-white flex flex-col justify-center items-center lg:grid xl:grid md:grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="h-2/5 lg:h-5/6 xl-h-5/6 md:h-5/6">
          <img
            src={img}
            alt="forget-img"
            className="h-full w-full xl:h-5/6 xl:w-4/5 lg:h-full lg:w-4/5"
          />
        </div>
        <div className="h-3/5 md:h-full xl:h-full lg:h-full lg:flex lg:flex-col xl:flex xl:flex-col  md:flex md:flex-col ml-5 xl:ml-20 lg:ml-15">
          <div className="mt-5 mb-5 xl:mt-20 xl:mb-10 lg:mt-15 lg:mb-10 md:mt-12 md:mb-7 ">
            <h4 className="font-serif font-bold lg:text-2xl  xl:text-2xl  md:text-xl text-md ">
              RESET
            </h4>
            <h4 className="font-serif font-bold lg:text-2xl  xl:text-2xl  md:text-xl text-md ">
              YOUR
            </h4>
            <h4 className="font-serif font-bold lg:text-2xl  xl:text-2xl  md:text-xl  text-md ">
              PASSWORD
            </h4>
          </div>
          <div> 
            <input
              type={!showPassword ? "password" : "text"}
              className="bg-red-100 h-8 md:h-10 lg:h-10 xl:h-10 pl-8 lg:w-96 xl:w-96 md:w-72 w-50 placeholder-black placeholder:font-bold rounded-xl font-md md:font-xl lg:font-2xl xl:font-2xl outline-none"
              placeholder="Password"
            />
            <div className="ml-3 mt-2 flex gap-1">
              <input type="checkbox" className="mb-2 md:mb-6 lg:mb-8 xl:mb-8" onClick={toggle}/>
              <span>Show</span>
            </div>
            <input
              type="password"
              className="bg-red-100 h-8 md:h-10 lg:h-10 xl:h-10 mb-3 md:mb-6 lg:mb-10 xl:mb-10 pl-8 lg:w-96 xl:w-96 md:w-72 w-50 placeholder-black placeholder:font-bold rounded-xl font-md md:font-xl lg:font-2xl xl:font-2xl outline-none"
              placeholder="Confirm Password"
            />
          </div>

          <div className="">
            <button className="px-2 lg:w-96 xl:w-96 md:w-72  bg-red-100 lg:h-10 xl:h-10 md:h-10 h-8 lg:font-bold text-md rounded-xl font-serif text-red-400 font-sm md:font-xl lg:font-2xl xl:font-2xl" onClick={toggle}>
              CHANGE PASSWORD
            </button>
            '
          </div>
        </div>
      </div>
    </div>
  );
}

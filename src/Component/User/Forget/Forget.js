import React from "react";
import img from "../../../Images/forget.jpg";

export default function Forget() {
  return (
    <div className="h-screen bg-blue-400 w-screen flex justify-center items-center overflow-hidden">
      <div className="h-5/6 w-5/6 bg-white grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="h-1/2 lg:h-full xl-h-full md:h-full">
          <img src={img} alt="forget-img" className="h-full w-full xl:h-5/6 xl:w-4/5 lg:h-full lg:w-4/5" />
        </div>
        <div className="h-1/2 xl:h-full lg:h-full flex flex-col justify-center items-center">
          <h4 className="font-serif font-bold text-2xl mb-16">
            FORGET PASSWORD
          </h4>
          <input
            type="text"
            className="bg-purple-300 h-10 mb-14 pl-8 w-96 placeholder-black placeholder:font-bold rounded-xl"
            placeholder="Email"
          />
          <div className="text-center">
            <button className="w-96 bg-purple-300 h-10 font-bold text-md rounded-xl font-serif text-blue-700">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

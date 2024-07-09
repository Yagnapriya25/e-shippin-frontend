import React from "react";
import img from "../../../Images/forget.jpg";

export default function Forget() {
  return (
    <div className="h-screen bg-blue-400 w-screen flex justify-center items-center overflow-hidden">
      <div className="h-5/6 bg-white flex grid grid-cols-2">
        <div className=" h-full">
          <img src={img} alt="forget-img" className="h-full w-4/5" />
        </div>
        <div className="h-full text-center">
          <h4 className="font-serif font-bold text-2xl ml-30 mt-36">
            FORGET PASSWORD
          </h4>
          <input
            type="text"
            className="bg-purple-300 h-10 my-14 pl-8 w-96 placeholder-black placeholder:font-bold rounded-xl"
            placeholder="Email"
          />
          <div className="text-center">
            <button className="max-w-96 bg-purple-300 h-10 w-96 font-bold text-md rounded-xl font-serif text-blue-700">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

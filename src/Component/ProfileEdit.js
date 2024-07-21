import React from "react";
import Base from "../Base/Base";

export default function ProfileEdit() {
  return (
    <div className="h-screen w-screen bg-[#E7EAF4]">
      <Base>
        <div className="h-screen w-screen flex justify-center my-2 md:my-5 lg:my-10 xl:my-10">
          <div className="border shadow-xl shadow-gray-500 border-black h-4/6 w-5/6 md:h-4/6 lg:h-3/6 xl:h-3/6 md:w-4/6 lg:w-4/6 xl:w-4/6 bg-white text-center py-20 lg:py-10 xl:py-10 md:py-20 md:rounded-tl-[100px] lg:rounded-tl-[100px] xl:rounded-tl-[70px] rounded-tl-[50px] md:rounded-br-[70px] lg:rounded-br-[70px] xl:rounded-br-[70px] rounded-br-[50px]">
            <div className="flex gap-10 flex-col justify-center items-center">
              <input type="file" className="relative left-11 " />
              <input
                type="text"
                placeholder="Name"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
              />
              <button className="bg-purple-500 p-1 w-20 rounded-2xl text-white">
                Update
              </button>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

import React from "react";
import Base from "../Base/Base";

export default function AddProduct() {
  return (
    <div className="h-screen w-screen bg-[#E7EAF4]">
      <Base>
        <div className="h-[90%] md:h-[95%] flex justify-center">
          <div className="w-6/6 md:w-5/6 lg:w-4/6 xl:w-4/6 bg-white flex flex-col lg:gap-10 xl:gap-10 md:gap-6 gap-6 justify-center items-center overflow-x-hidden overflow-y-scroll hide-scrollbar">
            <input type="file" multiple className="relative left-16 md:left-11 lg:left-11 xl:left-11" />
            <input
              type="text"
              placeholder="Product Name"
              className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
            />
            <input
              type="number"
              placeholder="Quantity"
              className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
            />
            <input
              type="number"
              placeholder="Price"
              className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
            />
            <textarea
              type="text"
              placeholder="Description"
              className="h-10 w-5/6 text-sm md:text-md lg:text-lg xl:text-md lg:w-3/6 xl:w-3/6 md:w-4/6 bg-purple-200 placeholder:font-bold placeholder:text-black pl-10 outline-none"
            />
            <button className="w-28 p-1 text-white bg-purple-600">
              AddProduct
            </button>
          </div>
        </div>
      </Base>
    </div>
  );
}

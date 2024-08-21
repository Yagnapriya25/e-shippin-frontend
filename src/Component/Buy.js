import React from "react";
import Base from "../Base/Base";
import p_img from "../Images/realme-narzo-30-pro-5g (1).jpg";

export default function Buy() {
  return (
    <div className="h-screen w-screen bg-[#F2F1F1] overflow-hidden overflow-x-hidden">
      <Base>
        <div className="h-full pt-20 pb-5 flex gap-1 md:gap-5 lg:gap-5 xl:gap-5 flex-col justify-center items-center overflow-y-scroll hide-scrollbar">
          <div className="bg-white shadow shadow-sm shadow-black h-32 md:h-36 md:mt-6 lg:h-44 xl:h-48 md:w-4/6 lg:w-4/6 xl:w-4/6 w-5/6 md:mt-6 lg:mt-10 p-5 flex justify-around">
            <div className="text-[12px] md:text-md lg:text-[16px]">
              <p>Name</p> 
              <p>Address 1</p>
              <p>Address 2</p>
              <p>LandMark</p>
              <p>Pincode</p>
              <p>Phone Number</p>
            </div>
            
            <div className="flex justify-center items-center">
              <button className="bg-blue-500 lg:p-1 w-12 lg:w-16 text-white text-[12px] text-md lg:text-lg shadow-lg shadow-[#000000]">
                EDIT
              </button>
            </div>
          </div>
          <div className="bg-white shadow shadow-sm shadow-black w-5/6 lg:w-4/6 md:w-4/6 xl:w-4/6 h-36 md:h-36 mt-2 p-5 flex justify-between">
            <div className="mt-6 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
              <img src={p_img} alt="product" className="h-full" />
            </div>
            <div className="flex flex-col gap-1 ml-10 md:ml-0 lg:ml-0 xl:ml-0">
              <h3 className="text-[12px] md:text-[14px] lg:text-lg font-serif">
                Realme Narzo 30 5G
              </h3>
              <h4 className="text-[#C73838] font-serif text-[12px] md:text-[14px] lg:text-lg">category</h4>
              <p className="text-pretty font-serif text-[12px] md:text-[14px] lg:text-lg">
                description1 for the product and its details about the product
              </p>
              <h3 className="text-xl font-serif text-[16px] md:text-[20px]">₹12000</h3>
            </div>

            <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
              <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
            </div>
          </div>
          <div className="bg-white shadow shadow-sm shadow-black w-5/6 lg:w-4/6 md:w-4/6 xl:w-4/6 h-36 md:h-36 mt-2 p-5 flex justify-between">
            <div className="mt-6 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
              <img src={p_img} alt="product" className="h-full" />
            </div>
            <div className="flex flex-col gap-1 ml-10 md:ml-0 lg:ml-0 xl:ml-0">
              <h3 className="text-[12px] md:text-[14px] lg:text-lg font-serif">
                Realme Narzo 30 5G
              </h3>
              <h4 className="text-[#C73838] font-serif text-[12px] md:text-[14px] lg:text-lg">category</h4>
              <p className="text-pretty font-serif text-[12px] md:text-[14px] lg:text-lg">
                description1 for the product and its details about the product
              </p>
              <h3 className="text-xl font-serif text-[16px] md:text-[20px]">₹12000</h3>
            </div>

            <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
              <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
            </div>
          </div>
          <div className="">
            <button className="bg-green-600 text-white p-2 flex gap-2 w-32 pl-6 mt-5 md:mt-5 lg:mt-5 xl:mt-5">
              Buy Now<i class="bx bxs-truck pt-2"></i>
            </button>
          </div>
          
        </div>
      </Base>
    </div>
  );
}

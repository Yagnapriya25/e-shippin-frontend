import React from 'react'
import Base from '../Base/Base'

export default function AddressEdit() {
  return (
    <div className="h-screen w-screen bg-[#E7EAF4]">
    <Base>
      <div className="h-screen w-screen flex justify-center">
        <div className="border shadow-xl shadow-gray-500 border-black h-4/6 w-5/6 md:h-[78%] lg:h-[78%] xl:h-[78%] md:w-4/6 lg:w-4/6 xl:w-4/6 bg-white text-center py-14 lg:py-20 xl:py-10 md:py-20 md:rounded-tl-[100px] lg:rounded-tl-[100px] xl:rounded-tl-[70px] rounded-tl-[50px] md:rounded-br-[70px] lg:rounded-br-[70px] xl:rounded-br-[70px] rounded-br-[50px] overflow-y-scroll hide-scrollbar">
          <div className="flex gap-2 lg:gap-10 xl:gap-10 md:gap-5 flex-col justify-center items-center">
           <input
              type="text"
              placeholder="Name"
              className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
            />
            <input
              type="text"
              placeholder="DoorNo&city"
              className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
            />
            <input
            type="text"
            placeholder="LandMark"
            className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
          />
            <input
              type="text"
              placeholder="District"
              className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
            />
            <input
              type="number"
              placeholder="Pincode"
              className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number"
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
  )
}

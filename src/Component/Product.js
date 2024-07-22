import React from "react";
import Base from "../Base/Base";
import p_img from "../Images/realme-narzo-30-pro-5g (1).jpg";

export default function Product() {
  return (
    <div className="h-screen w-screen">
      <Base>
        <div className="grid sm:grid-cols-12  h-full overflow-y-scroll hide-scrollbar">
          <div className="hidden md:block xl:block lg:block col-span-2 flex flex-col">
            <img
              src={p_img}
              alt="product-images"
              className="h-20 w-20 mb-5 shadow-lg shadow-black cursor-pointer"
            />
            <img
              src={p_img}
              alt="product-images"
              className="h-20 w-20 mb-5 shadow-lg shadow-black cursor-pointer"
            />
            <img
              src={p_img}
              alt="product-images"
              className="h-20 w-20 mb-5 shadow-lg shadow-black cursor-pointer"
            />
            <img
              src={p_img}
              alt="product-images"
              className="h-20 w-20 mb-5 shadow-lg shadow-black cursor-pointer"
            />
            <img
              src={p_img}
              alt="product-images"
              className="h-20 w-20 mb-5 shadow-lg shadow-black cursor-pointer"
            />
          </div>
          <div className="col-span-5 h-5/6 w-4/6">
            <img
              src={p_img}
              alt="product"
              className="h-full w-full rounded-2xl shadow-lg shadow-black"
            />
          </div>
          <div className="block md:hidden col-span-2 flex flex-row gap-5">
            <img
              src={p_img}
              alt="product-images"
              className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
            />
            <img
              src={p_img}
              alt="product-images"
              className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
            />
            <img
              src={p_img}
              alt="product-images"
              className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
            />
            <img
              src={p_img}
              alt="product-images"
              className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
            />
            <img
              src={p_img}
              alt="product-images"
              className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
            />
          </div>
          <div className="col-span-5 flex flex-col gap-3 p-5">
            <ul className="list-disc px-0">
              <li className="text-lg">
                description1 for the product it includes all details about this
                product
              </li>
              <li className="text-lg">
                description2 for the product it includes all details about this
                product
              </li>
              <li className="text-lg">
                description3 for the product it includes all details about this
                product
              </li>
            </ul>
            <h2 className="text-lg font-bold px-28 py-4">PRICE: ₹15000</h2>
            <div className="flex gap-3 mt-5 mx-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                <i class="bx bx-shopping-bag"></i>BUY NOW
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                <i class="bx bx-cart"></i>ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

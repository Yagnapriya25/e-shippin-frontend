import React from "react";
import Base from "../Base/Base";
import p_img from "../Images/realme-narzo-30-pro-5g (1).jpg";

export default function Product() {
  return (
    <div className="h-screen w-screen">
      <Base>
        <div className="grid grid-cols-3 overflow-scroll hide-scrollbar">
          <div className="h-20 w-20 flex flex-col gap-5">
            <img src={p_img} alt="product-images" className="h-full w-full"/>
            <img src={p_img} alt="product-images" className="h-full w-full"/>
            <img src={p_img} alt="product-images" className="h-full w-full"/>
            <img src={p_img} alt="product-images" className="h-full w-full"/>
            <img src={p_img} alt="product-images" className="h-full w-full"/>
            <img src={p_img} alt="product-images" className="h-full w-full"/>
            <img src={p_img} alt="product-images" className="h-full w-full"/>
          </div>
          <div className="">
            <img src={p_img} alt="product" />
          </div>
          <div className="">
            <li className="">description1</li>
            <li className="">description2</li>
            <li className="">description3</li>
            <h2 className="">PRICE:₹15000</h2>
            <div className="">
              <button className="">BUY NOW</button>
              <button className="">ADD TO CART</button>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

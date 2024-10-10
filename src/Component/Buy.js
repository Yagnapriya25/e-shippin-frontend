import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import p_img from "../Images/realme-narzo-30-pro-5g (1).jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/actions/productAction";
import { getAddress } from "../Redux/actions/addressAction";
import Loading from "./Loading";

export default function Buy() {
  const [loading,setLoading]=useState(false);
  const dispatch = useDispatch();
  const {singleProduct,error}=useSelector((state)=>state.product);
  const {addressInfo}=useSelector((state)=>state.address);
  const navigate = useNavigate();
  const {p_id}= useParams();
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  const [selectedImage,setSelectedImage]=useState(null);

  useEffect(()=>{
      const fetchProduct = async()=>{
        if(loading) return;
        dispatch(getSingleProduct(p_id,token))
        setLoading(true)
      }
      fetchProduct()
  },[dispatch])

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

useEffect(() => {
  if (singleProduct && singleProduct.product.images && singleProduct.product.images.length > 0) {
    setSelectedImage(singleProduct.product.images[0].image); // Set default image to the first one
  }
}, [singleProduct]);

useEffect(()=>{
 const fetchAddress = async()=>{
  if(loading) return;
  dispatch(getAddress(id));
  setLoading(true);
 }
 fetchAddress()
},[dispatch])

const handleAddressEdit = ()=>{
  navigate(`/address_edit/${token}`)
}
  return (
    <div className="h-screen w-screen bg-[#F2F1F1] overflow-hidden overflow-x-hidden">
    {
      loading ? <div><Loading/></div> :  
      <Base>
      
        <div className="h-full pt-20 pb-5 flex gap-1 md:gap-5 lg:gap-5 xl:gap-5 flex-col justify-center items-center overflow-y-scroll hide-scrollbar">
          <div className="bg-white shadow shadow-sm shadow-black h-32 md:h-36 md:mt-6 lg:h-44 xl:h-48 md:w-4/6 lg:w-4/6 xl:w-4/6 w-5/6 md:mt-6 lg:mt-10 p-5 flex justify-around">
            <div className="text-[12px] md:text-md lg:text-[16px]">
              <p>{addressInfo.address.name}</p> 
              <p>{addressInfo.address.city}</p>
              <p>{addressInfo.address.landmark}</p>
              <p>{addressInfo.address.district}</p>
              <p>{addressInfo.address.state}</p>
              <p>{addressInfo.address.country}</p>
              <p>{addressInfo.address.phoneNumber}</p>
            </div>
            
            <div className="flex justify-center items-center">
              <button className="bg-blue-500 lg:p-1 w-12 lg:w-16 text-white text-[12px] text-md lg:text-lg shadow-lg shadow-[#000000]" onClick={handleAddressEdit}>
                EDIT
              </button>
            </div>
          </div>
          <div className="bg-white shadow shadow-sm shadow-black w-5/6 lg:w-4/6 md:w-4/6 xl:w-4/6 h-36 md:h-36 mt-2 p-5 flex justify-between">
            <div className="mt-6 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
              <img src={singleProduct.product.images[0].image} alt="product" className="h-full" />
            </div>
            <div className="flex flex-col gap-1 ml-10 md:ml-0 lg:ml-0 xl:ml-0">
              <h3 className="text-[12px] md:text-[14px] lg:text-lg font-serif">
                {singleProduct.product.name}
              </h3>
              <h4 className="text-[#C73838] font-serif text-[12px] md:text-[14px] lg:text-lg">{singleProduct.product.category.name}</h4>
              <p className="text-pretty font-serif text-[12px] md:text-[14px] lg:text-lg">
                {singleProduct.product.description1}
              </p>
              <h3 className="text-xl font-serif text-[16px] md:text-[20px]">{formatPrice(singleProduct.product.price)}</h3>
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
    }
      
    </div>
  );
}

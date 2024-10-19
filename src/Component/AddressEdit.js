import React, { createElement, useState } from "react";
import Base from "../Base/Base";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editAddress, postAddress } from "../Redux/actions/addressAction";
import Loading from "./Loading";

export default function AddressEdit() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { addressInfo, error } = useSelector((state) => state.address);
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const [credential, setCredential] = useState({
    name: "",
    district: "",
    city: "",
    state: "",
    country: "",
    landmark:"",
    pincode: "",
    phoneNumber: "",
    user: userInfo,
  });

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    dispatch(editAddress(credential, userInfo))
      .then(() => {
        setLoading(true);
        setTimeout(()=>{
          navigate(`/cart/${token}`)
        })
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="h-screen w-screen bg-[#E7EAF4]">
    {
      loading ? <div><Loading/></div> :
      <Base>
        <div className="h-screen w-screen flex justify-center">
       <div className="border shadow-xl shadow-gray-500 border-black h-4/6 w-5/6 md:h-[78%] lg:h-[78%] xl:h-[78%] md:w-4/6 lg:w-4/6 xl:w-4/6 bg-white text-center py-14 lg:py-20 xl:py-10 md:py-20 md:rounded-tl-[100px] lg:rounded-tl-[100px] xl:rounded-tl-[70px] rounded-tl-[50px] md:rounded-br-[70px] lg:rounded-br-[70px] xl:rounded-br-[70px] rounded-br-[50px] overflow-y-scroll hide-scrollbar">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2 lg:gap-10 xl:gap-10 md:gap-5 flex-col justify-center items-center">
              <input
                type="text"
                placeholder="Name"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
                name="name"
                onChange={handleChange}
                value={credential.name}
              />
              <input
                type="text"
                placeholder="DoorNo&city"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
                name="city"
                onChange={handleChange}
                value={credential.city}
              />
              <input
                type="text"
                placeholder="LandMark"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
                name="landmark"
                onChange={handleChange}
                value={credential.landmark}
              />
              <input
                type="text"
                placeholder="District"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
                name="district"
                onChange={handleChange}
                value={credential.district}
              />
              <input
                type="number"
                placeholder="Pincode"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
                name="pincode"
                onChange={handleChange}
                value={credential.pincode}
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
                name="phoneNumber"
                onChange={handleChange}
                value={credential.phoneNumber}
              />
              <button className="bg-purple-500 p-1 w-20 rounded-2xl text-white" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
        </div>
      </Base>
        }
         
        
    </div>
  );
}

import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import img from "../Images/PROFILE.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../Redux/actions/userAction";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(false);
  const [userData,setUserData]=useState({});
  const [keyword,setKeyword]=useState('');

  const {error,userInfo}=useSelector((state)=>state.user);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true); 
      await dispatch(getSingleUser({id:localStorage.getItem("id")})); 
      setLoading(false); 
    };
    if(userInfo){
      setUserData(userInfo.user)
    }
    fetchUserData();
  }, [dispatch]);

  const handleSearch = ()=>{
    navigate(`/search/${keyword}`)
  }

  return (
    <div className="xl:h-20 pt-0 lg:pt-0 xl:pt-0 shadow-gray-700 sticky top-2.5 bg-white shadow ">
      <div className="flex justify-around">
        <div className="h-8 my-2 lg:h-12 lg:mx-4 lg:my-3 xl:h-14 xl:mx-6 xl:my-3 md:h-10 md:mx-4 md:my-3">
          <img src={logo} alt="logo" className="h-full w-16" />
        </div>
        <span className="my-3 flex gap-2 lg:my-5 lg:flex lg:gap-3 xl:my-8 xl:flex xl:gap-3 md:my-5 md:flex md:gap-3">
          <input
            type="text"
            className="pl-5 w-40 h-6 md:w-56 lg:h-6 lg:w-30 lg:pl-10 border-2 outline-none xl:h-7 xl:w-30 xl:pl-10 md:h-7 md:w-18 md:pl-10 "
            placeholder="Search..."
            value={keyword}
            onChange={(e)=>setKeyword(e.target.value)}
            
          />
          <button onClick={handleSearch}>
          <i className="bx bx-search text-red-400 pt-1 lg:text-xl xl:text-xl md:text-lg cursor-pointer"></i>
          </button>
        </span>
        <ul className="hidden lg:flex lg:gap-10 lg:my-5 md:block lg:block xl:block xl:flex md:flex xl:gap-10 md:gap-10 xl:my-8 md:my-5">
          <li className="hover:text-red-400 cursor-pointer lg:text-lg xl:text-lg md:text-md" onClick={()=>navigate(`/home/${token}`)}>
            HOME
          </li>
          <li className="hover:text-red-400 cursor-pointer lg:text-lg xl:text-lg md:text-md" onClick={()=>navigate(`/category/${token}`)}>
            CATEGORY
          </li>
          <li className="hover:text-red-400 cursor-pointer lg:text-lg xl:text-lg md:text-md" onClick={()=>navigate(`/cart/${token}`)}>
            CART
          </li>
        </ul>

        <div className="hidden md:block lg:h-13 lg:my-3 xl:h-15 xl:my-4 md:h-12 md:my-1">
          <img
            src={userData.avatar ? userData.avatar : img}
            alt="profile"
            className="h-full rounded-full cursor-pointer"
            onClick={()=>navigate(`/profile/${token}`)}
          />
        </div>
      </div>
    </div>
  );
}

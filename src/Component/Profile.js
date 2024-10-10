import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import profile from "../Images/PROFILE.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../Redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
export default function Profile() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

const token = sessionStorage.getItem("token");

  const [loading,setLoading]=useState(false);

  const [userData,setUserData]=useState({});

  const {error,userInfo}=useSelector((state)=>state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true); 
      await dispatch(getSingleUser({id:sessionStorage.getItem("id")})); 
      setLoading(false); 
    };
    if(userInfo){
      setUserData(userInfo.user)
    }
    fetchUserData();
  }, [dispatch]);


  const handleLogout = ()=>{
    if(loading) return;
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    setTimeout(()=>{
      navigate("/")
    },1000)
  }

  return (
    <div className="h-screen w-screen bg-[#E7EAF4]">
    {
      loading ? <div><Loading/></div> :
      <Base>
   
        <div className="mx-5 w-5/6 md:mx-44 lg:mx-80 h-5/6 md:w-3/6 bg-white rounded-tl-[50px] rounded-br-[50px] lg:rounded-tl-[150px] md:rounded-tl-[100px] md:rounded-br-[100px] lg:rounded-br-[150px]">
         <div className="text-center flex flex-col justify-center items-center pt-10 md:pt-5 lg:pt-10">
          <div className="h-20 w-20  lg:h-36 lg:w-36 md:h-28 md:w-28 md:mx-32 lg:mx-44 xl:mx-64">
            <img
              src={userData.avatar ?userData.avatar : profile}
              alt="profile"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="pt-2 text-[12px] md:text-lg">
            <h2 className="pb-2">{userData.username ? userData.username : "John Doe"}</h2>
            <h3 className="pb-5">{userData.email ? userData.email :"johndoe@gmail.com"}</h3>
          </div>
          <div className="flex flex-col gap-2">
            <button className="text-red-400 md:text-xl hover:font-bold" onClick={()=>navigate(`/cart/${token}`)}>
              <i class="bx bx-cart"></i>Cart
            </button>
            <button className="text-green-300 md:text-xl hover:font-bold" onClick={()=>navigate(`/userProduct/${token}`)}>
              <i class="bx bx-store-alt"></i>Become a seller
            </button>
            <button className="text-blue-400 md:text-xl hover:font-bold" onClick={()=>navigate(`/profile_edit/${token}`)}>
              <i class="bx bx-edit"></i>Edit
            </button>
            <button className="text-red-700 hover:font-bold md:text-xl" onClick={handleLogout}>
              <i class="bx bx-log-out"></i>Logout
            </button>
          </div>
        </div>
        </div>
        </Base>
        }
          
        
      
    </div>
  );
}

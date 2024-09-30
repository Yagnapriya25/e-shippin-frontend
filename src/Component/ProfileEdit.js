import React, { useState } from "react";
import Base from "../Base/Base";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../Redux/actions/userAction";

export default function ProfileEdit() {
  const [loading,setLoading]=useState(false);

  const [credentials,setCredentials]=useState({
    username:"",
    email:"",
    avatar:""
  })

  const {error,userInfo}=useSelector((state)=>state.user);

  const dispatch = useDispatch();

  const handleChange = (e)=>{
    setCredentials({
      ...credentials,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(loading) return;
    dispatch(editUser({username:credentials.username,email:credentials.email,avatar:credentials.avatar},{id:sessionStorage.getItem("id")}))
  }
  return (
    <div className="h-screen w-screen bg-[#E7EAF4]">
      <Base>
        <div className="h-screen w-screen flex justify-center my-2 md:my-5 lg:my-10 xl:my-10">
          <div className="border shadow-xl shadow-gray-500 border-black h-4/6 w-5/6 md:h-4/6 lg:h-3/6 xl:h-3/6 md:w-4/6 lg:w-4/6 xl:w-4/6 bg-white text-center py-20 lg:py-10 xl:py-10 md:py-20 md:rounded-tl-[100px] lg:rounded-tl-[100px] xl:rounded-tl-[70px] rounded-tl-[50px] md:rounded-br-[70px] lg:rounded-br-[70px] xl:rounded-br-[70px] rounded-br-[50px]">
          <form>
            <div className="flex gap-10 flex-col justify-center items-center">
              <input type="file" className="relative left-11 " name="avatar" value={credentials.avatar} onChange={handleChange} />
              <input
                type="text"
                placeholder="Name"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                />
              <input
                type="email"
                placeholder="Email"
                className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 h-10 pl-5 bg-[#E7EAF4] placeholder:text-black outline-none"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                />
              <button className="bg-purple-500 p-1 w-20 rounded-2xl text-white" onClick={handleSubmit}>
                Update
              </button>
            </div>
            </form>
          </div>
          
        </div>
      </Base>
    </div>
  );
}

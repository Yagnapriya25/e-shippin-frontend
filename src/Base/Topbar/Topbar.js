import React from 'react';
import logo from '../../Images/logo.png';
import img from '../../Images/PROFILE.jpg'

export default function Topbar() {
  return (
    <div className='h-4/6 shadow-gray-700 sticky top-2.5 bg-white shadow '>
    <div className='flex justify-around'>
    <div className='h-12 mx-4 my-4'>
    <img src={logo} alt='logo' className='h-full w-16'/>
    </div>
    <span className='my-5 flex gap-3'>
    <input type='text' className='h-6 w-30 pl-10 border-2 outline-none' placeholder='Search...'/>
    <i className='bx bx-search text-red-400 text-xl cursor-pointer'></i>
    </span>
    <ul className='flex gap-10 my-5'>
    <li className='hover:text-red-400 cursor-pointer'>HOME</li>
    <li className='hover:text-red-400 cursor-pointer'>CATEGORY</li>
    <li className='hover:text-red-400 cursor-pointer'>CART</li>
    </ul>
    
    <div className='h-14'>
    <img src={img} alt='profile' className='h-full rounded-full'/>
    </div>
    </div>
    </div>
  )
}

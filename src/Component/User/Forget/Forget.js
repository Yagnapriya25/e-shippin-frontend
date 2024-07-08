import React from 'react'
import img from '../../../Images/forget.jpg';

export default function Forget() {
  return (
    <div className='h-screen bg-blue-400 w-screen flex justify-center items-center overflow-hidden'>
    <div className='h-5/6 bg-white w-4/5 flex'>
    <div className='w-3/5 h-full'>
    <img src={img} alt='forget-img' className='h-full'/>
    </div>
    <div className='w-2/5 h-full'>
    <h4 className='font-serif font-bold text-2xl ml-30 mt-36'>FORGET PASSWORD</h4>
    <input type='text' className='bg-purple-300 w-96 h-10 my-14'/>
    </div>
    </div>
    </div>
  )
}

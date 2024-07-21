import React from 'react'
import Base from '../Base/Base'
import profile from '../Images/PROFILE.jpg'
export default function Profile() {
  return (
    <div className='h-screen w-screen bg-[#E7EAF4]'>
    <Base>
    <div className='mx-80 h-5/6 w-3/6 bg-white rounded-tl-[150px] rounded-br-[150px]'>
    <div className='text-center pt-10'>
    <div className='h-36 w-36 mx-64'>
    <img src={profile} alt='profile' className='h-full w-full rounded-full'/>
    </div>
    <div className=''>
    <h2 className=''>Name</h2>
    <h3 className=''>Email</h3>
    </div>
    <div className='flex flex-col'>
    <button className=''><i class='bx bx-cart'></i>Cart</button>
    <button className=''><i class='bx bx-store-alt'></i>Become a seller</button>
    <button className=''><i class='bx bx-edit'></i>Edit</button>
    <button className=''><i class='bx bx-log-out'></i>Logout</button>
    </div>
    </div>
    </div>
    </Base>
    </div>
  )
}

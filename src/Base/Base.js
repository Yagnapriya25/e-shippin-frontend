import React from 'react'
import Topbar from './Topbar/Topbar'

export default function  Base({children}) {
  return (
    <div className='h-screen w-screen overflow-auto hide-scrollbar'>
    <div className='sticky top-2.5 h-1/6 mx-5 my-0'>
    <Topbar/>
    </div>
    <div className=''>
    {children}
    </div>
    </div>
  )
}

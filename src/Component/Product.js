import React from 'react'
import Base from '../Base/Base';
import p_img from '../Images/realme-narzo-30-pro-5g (1).jpg';

export default function Product() {
  return (
    <div className='h-screen w-screen'>
    <Base>
    <div className='grid grid-cols-3'>
    <div className=''>
    <img src={p_img} alt='product-images'/>
    <img src={p_img} alt='product-images'/>
    <img src={p_img} alt='product-images'/>
    <img src={p_img} alt='product-images'/>
    <img src={p_img} alt='product-images'/>
    <img src={p_img} alt='product-images'/>
    <img src={p_img} alt='product-images'/>
    </div>
    <div className=''>
    <img src={p_img} alt='product'/>
    </div>
    <div className=''>
    <p>sdhfoailhsdnckxzjbcuykzgvhjxcyagdviajbdsyvuDGSVcjhXVcuyvjyg</p>
    </div>
    </div>
    </Base>
    </div>
  )
}

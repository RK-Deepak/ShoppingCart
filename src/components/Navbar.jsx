import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'


export default function Navbar() {
          const {cart} =useSelector((state)=>state);
  return (
    <div className='flex justify-between p-2 items-center my-3 w-[90%] max-w-[960px] mx-auto'>
      <div>
         <NavLink to="/" ><img src="../logo.png" alt='' className='w-[100px]'/></NavLink >
      </div>
      <div className='flex gap-2 items-center '>
      <NavLink to="/" >  <p className='text-sm'>Home</p></NavLink>
          <div className='relative'>
          <NavLink to="/cart" ><FaShoppingCart className="text-xl"/></NavLink>
          <div className='absolute -top-1 -right-1 z-8 bg-green-500 w-[10px] text-center rounded-full h-[15px] '><p className='text-xs font-bold'>{cart.length}</p></div>
          </div>
      </div>
      
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function CartPage() {
          const {cart}=useSelector((state)=>state);

          const [totalamount,settotalamount]=useState(0);

          useEffect(()=>
          {
                    let x=cart.reduce((acc,curr)=>acc + curr.price,0);
            settotalamount(x);
          },[cart])
  return (
    <div className='flex  rounded-md p-2 w-[100%] justify-center'>
      {
          cart.length>0 ? 
          (
           <div className='flex gap-2 w-full justify-evenly  '>
              <div className=' border-2 border-green-500 rounded-md p-2 flex flex-col gap-3'>
               {
                    cart.map((item,index)=>(
                              <CartItem item={item} key={item.id} index={index}/>
                    ))
               }
              </div>  
              
              <div className='flex flex-col gap-1  border-2 border-green-500 rounded-md p-2 '>
              <div className='font-bold '>Your Cart</div>
               <div className='font-bold text-sm'>Summary</div>
               <p className='font-bold text-slate-500'>Total Items:
               <span className='font-bold  text-green-500'> {cart.length}</span>
               </p>
              
              <div>
              <p className='font-bold  text-green-500'>Total Amount: ${totalamount}</p>
              <button className="px-2 py-3 bg-green-500 font-bold text-xs rounded-md p-2'">
              CheckOut Now
              </button>
              </div>
              </div>
              </div>
          ):(<div className='flex justify-center items-center flex-col gap-2 '>
                    <p className='font-bold text-lg'>Cart Is Empty</p>
                    <NavLink to="/"><button className='px-3 py-2 bg-green-500 font-bold text-sm rounded-md'>
                              Shop Now</button></NavLink>
          </div>)

      }
    </div>
  )
}

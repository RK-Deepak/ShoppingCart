import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from "../redux/slices/CartSlice";

export default function Product(props) {
          let post=props.post;
          
          let description=post.description.length>90?`${post.description.substr(0,85)}...`:post.description;
          const {cart}=useSelector((state)=>state);
          const dispatch=useDispatch();
           
          const addTocart=()=>
          {
                    dispatch(add(post));
                    toast.success("Added");
          }
          const removeFromCart=()=>
          {
                    dispatch(remove(post.id));
                    toast.error("removed");
          }
  return (
    <div className='w-[220px] border border-slate-500 p-2 flex flex-col gap-2 justify-between rounded-md transition-all duration-200 hover:scale-105'>
      <div className='flex flex-col space-y-2'>
      <div className='flex justify-center'>
          <img src={post.image} alt='' className='aspect-square  h-[6.25rem]'/>
      </div>
         
          <p className='text-sm font-bold text-slate-500'>{post.title.substr(0,20)}...</p>
          <p className='text-xs  text-red-800'>{description}</p>

      </div>
      
      <div>
         <p className='text-sm font-bold '>${post.price}</p>
         <p className='text-xs font-bold text-green-500'>Rating : {post.rating.rate}</p>
      </div>
       {
          
                cart.some((p)=> p.id == post.id) ?<button onClick={removeFromCart} className='py-2 my-2 bg-red-700 rounded-md text-xs font-bold'>Remove Item</button>:
                    <button onClick={addTocart} className='py-2 my-2 bg-green-700 rounded-md text-xs font-bold'>Add Item</button>
       }
       
    </div>
  )

}

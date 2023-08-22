import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/slices/CartSlice';

export default function CartItem(props) {
          let item=props.item;
          let index=props.index;

         const dispatch=useDispatch();

        function removeFromCart()
        {
          dispatch(remove(item.id));
          toast.error("Item Removed");
        }

  return (
    <div>
       <div className='flex flex-col  p-2 gap-3 '>

<div>
  <img src={item.image} alt=''  className='w-[100px] aspect-square'/>
</div>
<div>
<p className='text-sm font-bold text-slate-500'>`${item.title.substr(0,30)}...`</p>
 
  <div>
  <p className='text-sm font-bold '>${item.price}</p>
    <div
    onClick={removeFromCart}>
      <FcDeleteDatabase className='text-2xl'/>
    </div>
  </div>

</div>


</div>
    </div>
  )
}

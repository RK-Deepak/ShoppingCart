import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

export default function Home() {
          const API_URL = "https://fakestoreapi.com/products";
          const [loading,setloading]=useState(false);
         
          const [posts,setposts]=useState([]);


          async function fetchdata()
          {
                    setloading(true);
                    try 
                    {
                              const data=await fetch(API_URL);
                              const res= await data.json();
          
                              console.log(res);
                              setposts(res);
                    }
                    catch(error)
                    {
                              console.log("Kuch gadbad hai daya");
                              setposts([]);
                    }
                    setloading(false);
                   
          }
          useEffect(()=>
          {
                    fetchdata();
          },[])

  return (
    <div>
      {
          loading?<Spinner/>:
          posts.length>0?(
                    <div className='flex flex-wrap gap-3 justify-center my-4'>
                              {
                                posts.map((post)=>
                                (
                     <Product  key= {post.id} post={post}/>
                                )
                               
                                 )
                              }
                  
                    </div>):(<div>
                    <p>No Posts Found</p>
          </div>)


      }
    </div>
  )
}

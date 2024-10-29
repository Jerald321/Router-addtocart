import React, { useEffect, useState } from 'react'
import Home from './Home';
import "./header.css"

   
   function Header({cart,setCart}) {
   const[api,setApi]=useState([]);
  

async function apicall() {


   try {
      const res =await fetch('https://fakestoreapi.com/products/')
     let data=await res.json();
     setApi(data)
  
     console.log(data);
      
   } catch (error) {
      console.log("error is: " + error)
      document.write("404 data not found!...")
      
      
   }
   
     
    
}


   useEffect(()=>{
      apicall()
   },[])


  return (
    <div className='product'>
      
    
      {
         api.map((products)=>(
            <Home
            key={products.id}
             products={products}
             cart={cart}
            setCart={setCart}
            
            />
         ))
      }
   
    </div>
  )
}

export default  Header;
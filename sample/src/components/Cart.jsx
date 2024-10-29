import React, { useEffect, useState } from 'react'
import "./Cart.css"


function Cart({cart,setCart,size}) {
  const [total,setTotal]=useState(0);
  const [val,setVal]=useState(1);
  
  


  
const remove=(id)=>{
      let name=id;
    const arr=cart.filter((iteam)=>
     iteam.id !==name)
    setCart(arr);
   
    
     
  }
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+(curr.price*val),0))
    
  },[cart,val])




  const discountprice =total *(0.9);

  const increment =(data)=>{
    
    // const arr=cart.map((iteam)=>
    //  iteam.id === data)
    // console.log(arr);
    
    if(val<10){
      setVal(
      iteam=> iteam +1)
      }
    setCart(arr);

    
    
      

    
    
      
    

  }
  const decrement =()=>{
    if(val>1 ){
    setVal(
      val=> val-1)
    
    }
    

  }
 
     
  return (
     size ==0?<p className='cartempty'>your cart is empty..!</p>:
     <div>
       <h1>Cart list </h1>
      <div className='cart-details'>
     
      {cart.map((iteam)=>(
        
          <div className='cart' key={iteam.id}>
              <div>
              <img className='c-img' src={iteam.image}
              alt="" />
              <h3 className='c-title'>{iteam.title}</h3>
              <h2 className='c-price'>Price:{iteam.price}</h2>
            
            <button className='addone'
            onClick={(()=>{
              increment(iteam.id)
            })}
            >+</button>
            <span className='addnum'>{val}</span>
            <button className='addone'
             onClick={(()=>{
              decrement(iteam.id)
            })}
            >-</button>
              </div>
            
            
               <div>
                
               <button  className='cart-btn' onClick={()=>remove(iteam.id )}>remove</button>
               </div>
           
          </div>
        
          
        ))}

   </div>
   <div className='total'>
   <h2 className='valofcart'>total price <span>${total.toFixed()}</span></h2>
   <h2 className='totalcart'>discount offer 10%: <span>${discountprice.toFixed()}</span></h2>
   </div>
   
     </div>)  
  
    

      
  
  
}

export default Cart;
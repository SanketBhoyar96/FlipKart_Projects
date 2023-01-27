
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import Header from './Header';
import './wishliststyle.css';

const Wishlist = () => {
    const[wishlistProducts,setWishlistProducts]=useState();

    useEffect(()=>{
        const proFromLocalStorageForWishlist=JSON.parse(localStorage.getItem("wishlistProducts"));
        setWishlistProducts(proFromLocalStorageForWishlist);
        // console.log(proFromLocalStorageForWishlist,"wishlist");

    },[])
    // -----------------add tocart--------------------------
    function addToCart(e){
        // console.log(e,"products")
        const proArrayFromDb = JSON.parse(localStorage.getItem("cartProducts")) || [];
        proArrayFromDb.push(e);
        localStorage.setItem("cartProducts", JSON.stringify(proArrayFromDb));

        // --------------------------addcart nantr wishlist mdeun deltee zala phije--------------------------
        const proFromLocalStorageForWishlist=JSON.parse(localStorage.getItem("wishlistProducts"));
        const newArray=[];
        for(var i=0;i<proFromLocalStorageForWishlist.length;i++){
            if(e.title != proFromLocalStorageForWishlist[i].title){
                newArray.push(proFromLocalStorageForWishlist[i]);
            }
        }
        localStorage.setItem("wishlistProducts",JSON.stringify(newArray));
        setWishlistProducts(newArray);
        toast.success("Products added To Cart !")
    }
  return (
    <div>
        <Header/>
        <h1 className='heading'>whishlist</h1>
           <div id='ChildContainer'>
        {wishlistProducts && wishlistProducts.map((e,i)=>(
               <div key={i} id='mainkeyproducts'>
                   <div id='productsAll'>
                       <div>
                           <img src={e.image} alt="Loading" />
                       </div>
                       <div className='title'>
                           <h3><span>Title:-</span>{e.title}</h3>
                       </div>
                       <div className='Runtime'>
                           <p><span>id:-</span>{e.id}</p>
                       </div >
                       <div className='year'>
                           <p><span>Category:-</span>{e.category}</p>
                       </div>
                       <div className='Runtime'>
                           <p><span>Price:-</span>{e.price}</p>
                       </div >
                       {/* <div className='Runtime'>
                           <p>{e.description}</p>
                       </div > */}
                       <div className='buttion'>
                           <button onClick={() =>addToCart(e)}>AddCart</button>
                           {/* <button onClick={()=>addToWishlist(e)}>Wishlist</button> */}
                       </div >
                   </div>
               </div>
           ))}
       </div>
      
    </div>
  )
}

export default Wishlist

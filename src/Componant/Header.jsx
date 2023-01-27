
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Header.css"
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const[userName,setUserName]=useState();
    const router= useNavigate();
// ----------------------------------tarnary operator use--------------------------------------
     useEffect(()=>{
        const dbUser = JSON.parse(localStorage.getItem("userData"));
        if(dbUser){
            setUserName(dbUser.name);
        }
     },[])
    // ---------------------------Logout---------------------------------
    function logout(){
    localStorage.removeItem('userData');
    localStorage.removeItem('isUserLogged');
    // localStorage.removeItem('cartProducts');
    setUserName("");
    toast.success("Logout SuccessFul");
    }
    return (
        <div>
            <header>
                <nav id='navbar'>
                    <div>
                    <a href="" onClick={()=>router('./')}><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a>
                    </div>
                    <div class="box">
                        <input type="text" placeholder='Search for products,brands and more' />
                        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    <div id='loginbtn' >
                          {/* <button id="CARTButton" onClick={()=>router('/cart')}>CART</button> */}
                          {/* <button id="CARTButton" onClick={()=>router('/cart')}>CART</button> */}
                        <a href="./login"><button style={{margin:"10px"}} onClick={()=>router('/login')}>Login</button></a>
                         <a href="./register"><button onClick={logout}>{userName?"Logout":""}</button></a>
                    </div>
                    <div id='AchorTag'>
                        {/* <a href="">{userName? userName: "Become a Seller"}</a> */}
                        {/* <a href="">Become a Seller</a> */}
                         <button id="CARTButton" onClick={()=>router('/Products')}>CART</button>
                        <a href="" onClick={()=>router('/Products')}>Products</a>
                        <a href=""  onClick={()=>router('/Cart')}><i class="fa-solid fa-cart-shopping fa-lg"></i>Cart</a>
                        <a href="" onClick={()=>router('/wishlist')}><i class="fa-solid fa-heart fa-lg"></i>Wishlist</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header


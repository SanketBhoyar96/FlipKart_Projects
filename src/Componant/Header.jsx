
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Header.css"
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const[userName,setUserName]=useState();
    const router=useNavigate();
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
                    <a href="./"><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a>
                    {/* <a href="./"><img src="https://seeklogo.com/images/F/flipkart-logo-5CE68C24AF-seeklogo.com.png" alt="" /></a> */}
                    </div>
                    <div class="box">
                        <input type="text" placeholder='Search for products,brands and more' />
                        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    <div id='loginbtn' >
                        <a href="./login"><button style={{margin:"10px"}}>Login</button></a>
                         <a href="./register"><button onClick={logout}>{userName?"Logout":""}</button></a>
                    </div>
                    <div id='AchorTag'>
                        {/* <a href="">{userName? userName: "Become a Seller"}</a> */}
                        {/* <a href="">Become a Seller</a> */}
                       <button id="CARTButton" onClick={()=>router('/Products')}>Products</button>
                        {/* <a href="/Products">Products</a> */}
                        <a href="./Cart"><i class="fa-solid fa-cart-shopping fa-lg"></i>Cart</a>
                        <a href="./wishlist"><i class="fa-solid fa-heart fa-lg"></i>Wishlist</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header


import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Header.css"
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const[userName,setUserName]=useState();
    const router=useNavigate();
// ----------------------------------tarnary operator use--------------------------------------
    useEffect(() => {
        const dbUser = JSON.parse(localStorage.getItem("userData"));
        console.log(dbUser)
        if (dbUser) {
          for (var i = 0; i < dbUser.length; i++) {
            setUserName(dbUser[i].name)
          }
        }
      }, [])
    // ---------------------------Logout---------------------------------
    function logout(){
    localStorage.removeItem('userData');
    localStorage.removeItem('isUserLogged');
    // localStorage.removeItem('cartProducts');
    setUserName("");
    router('/');
    toast.success("Logout SuccessFul");
    }
    return (
        <div>
            <header>
                <nav id='navbar'>
                    <div  onClick={()=>router('/')}>
                    <a href=""><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a>
                    {/* <a href="./"><img src="https://seeklogo.com/images/F/flipkart-logo-5CE68C24AF-seeklogo.com.png" alt="" /></a> */}
                    </div>
                    <div class="box">
                        <input type="text" placeholder='Search for products,brands and more' />
                        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    <div id='loginbtn' >
                        {/* <button onClick={()=>router('/login')} style={{margin:"10px"}}>Login</button> */}
                        <button>{userName ? userName : "Profile"}</button>
                       <button id='btnlogOut'   onClick={logout}>{userName?"Logout":""}</button>
                       {/* <button  id='btnlogOut' onClick={logout}>{userName?"Logout":""}</button> */}
                    </div>
                    <div id='AchorTag'>
                        <span onClick={()=>router('/products')}><i class="fa-solid fa-gift" style={{marginRight:"8px"}}></i>Products</span>
                        {/* <span className='bell-notification' current-count='7' onClick={()=>router('/cart')}> */}
                        <span onClick={()=>router('/cart')}>
                            <i class="fa-solid fa-cart-shopping fa-lg" style={{marginRight:"8px"}}></i>
                            Cart</span> 
                        <span onClick={()=>router('/wishlist')}><i class="fa-solid fa-heart fa-lg" style={{marginRight:"8px"}}></i>Wishlist</span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header

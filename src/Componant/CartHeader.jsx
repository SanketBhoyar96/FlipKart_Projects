
import React, { useEffect } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const router=useNavigate();
    return (
        <div>
            <header>
                <nav id='navbar'>
                    <div  onClick={()=>router('/')}>
                    <a href=""><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a>
                    </div>
                    <div class="box">
                        <input type="text" placeholder='Search for products,brands and more' />
                        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    {/* <div id='loginbtn' >
                        <a href="./login"><button style={{margin:"10px"}}>Login</button></a>
                    </div> */}
                    <div id='AchorTag'>
                        <span onClick={()=>router('/products')} href="/Products"><i class="fa-solid fa-gift" style={{marginRight:"8px"}}></i>Products</span>
                        <span onClick={()=>router('/cart')} href="./Cart"><i class="fa-solid fa-cart-shopping fa-lg" style={{marginRight:"8px"}}></i>Cart</span>
                        <span onClick={()=>router('/wishlist')}><i class="fa-solid fa-heart fa-lg" style={{marginRight:"8px"}}></i>Wishlist</span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header

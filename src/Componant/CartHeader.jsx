
import React, { useEffect } from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header>
                <nav id='navbar'>
                    <div>
                    <a href="./"><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a>
                    </div>
                    <div class="box">
                        <input type="text" placeholder='Search for products,brands and more' />
                        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    <div id='loginbtn' >
                        <a href="./login"><button style={{margin:"10px"}}>Login</button></a>
                    </div>
                    <div id='AchorTag'>
                        <a href="/Products">Products</a>
                        <a href="./Cart"><i class="fa-solid fa-cart-shopping fa-lg"></i>Cart</a>
                        {/* <a href="./wishlist"><i class="fa-solid fa-heart fa-lg"></i>Wishlist</a> */}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header

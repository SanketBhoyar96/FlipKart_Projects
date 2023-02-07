import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css'
import { toast } from 'react-hot-toast';
// import Header from './Header';
import Footer from './Footer';

const Products = () => {
    const [movies, setMovies] = useState();
    const router = useNavigate();
    useEffect(() => {
        async function gettingData() {
            const { data } = await axios.get("https://fakestoreapi.com/products");
            // console.log(data, "data here");
            setMovies(data);
        }
        gettingData();
    }, []);
    // ----------------------------------Searchproducts-------------------------------------------
    // store data fiterresult
    const [filteredResults, setFilteredResults] = useState([]);
    // ------------------------
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        // console.log(searchValue,"search value is input field");
        if (searchInput !== '') {
            const filteredData = movies.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            //   console.log(filteredData, "filterdata here");
            setFilteredResults(filteredData);
        }
        else {
            setFilteredResults(movies);
        }
    }
    // ---------------------Buy buttion addtoCart---------------------------

    function addToCart(e) {
        console.log(e, "jsx is here");
        // -----------create empty array we can store all data-----------------
        // var proFromLocalStorage =[];
        // undefine assel tar empty aaray set krnar 27 line []
        const proFromLocalStorage = JSON.parse(localStorage.getItem("cartProducts")) || [];
        proFromLocalStorage.push(e);
        localStorage.setItem("cartProducts", JSON.stringify(proFromLocalStorage))
        toast.success("Products added to Cart");
    }
    // ----------------------------------addToWishlistproducts-----------------------------------------------------
    function addToWishlist(e) {
        // alert("work")
        const proFromLocalStorageForWishlist = JSON.parse(localStorage.getItem("wishlistProducts")) || [];
        proFromLocalStorageForWishlist.push(e);
        localStorage.setItem("wishlistProducts", JSON.stringify(proFromLocalStorageForWishlist));
        toast.success("Products Added To Wishlist")
    }


    return (
        <div id='ProCart'>
            {/* --------------------------------------Header part dummy-------------------------------------- */}
            {/* <Header/> */}
            <header>
                <nav id='navbar'>
                    <div onClick={() => router('/')}>
                        <a href=""><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a>
                        {/* <a href="./"><img src="https://seeklogo.com/images/F/flipkart-logo-5CE68C24AF-seeklogo.com.png" alt="" /></a> */}
                    </div>
                    <div class="box">
                        <input type="text" placeholder='Search for products,brands and more' onChange={(e) => searchItems(e.target.value)} />
                        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    {/* <div id='loginbtn' >
                        <button onClick={()=>router('/login')} style={{margin:"10px"}}>Login</button>
                       <button  id='btnlogOut' onClick={logout}>{userName?"Logout":""}Logout</button>
                    </div> */}
                    <div id='AchorTag'>
                        <span onClick={() => router('/products')}><i class="fa-solid fa-gift" style={{marginRight:"8px"}}></i>Products</span>
                        <span onClick={() => router('/cart')}>
                            <i class="fa-solid fa-cart-shopping fa-lg" style={{marginRight:"8px"}}></i>
                            Cart</span>
                        <span onClick={() => router('/wishlist')}><i class="fa-solid fa-heart fa-lg" style={{marginRight:"8px"}}></i>Wishlist</span>
                    </div>
                </nav>
            </header>

            {/* ----------------------------------------------------------------------------------------------------- */}
            <h1 className='heading'>All PRODUCTS</h1>
            {/* <button id="CARTButton" onClick={()=>router('/cart')}>CART</button> */}
            <div id='ProductsFlex'>
                <div id='ContainerProducts'>
                    FILTER

                    <div id="Cathegary">
                        <h5>CATEGORIES</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Electronic</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Mobile</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Travel</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Electronic</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Appliances</label><br />
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Fashion</label><br />
                        </li>
                    </div>
                    {/* -------------------Brand----------------- */}
                    <div id="Cathegary">
                        <h5>BRAND</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Nokia</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">SUMSUNG</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Mi</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">APPLE</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Vivo</label><br />
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Oneplus</label><br />
                        </li>
                    </div>
                    {/* --------------------T-short----------   */}
                    <div id="Cathegary">
                        <h5>CLOTH</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">T-Shirts</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Formal Shirts</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Casual Shirts</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Jeans</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Kurta</label><br />
                        </li>
                    </div>
                    {/* ----------------------------------------------                   */}
                    <div id="Cathegary">
                        <h5>Jewellery</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Chigold</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">urbalaa</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Atasi International</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Jeans</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Bhagya Lakshmi</label><br />
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">SHIV TRADITIONALS</label><br />
                        </li>
                    </div>
                    {/* ----------------------------------------                  */}
                    <div id="Cathegary">
                        <h5>MEN</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Watches</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Sports & Fitness Store</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Accessories</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Ethic Wear</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Suits,Blazers</label><br />
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Winter Wear</label><br />
                        </li>
                    </div>
                    {/* --------------------Women----------------------                   */}
                    <div id="Cathegary">
                        <h5>WOMEN</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Beauty & Grooming</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Jewellery</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Make up</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Skin Care</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Hair Care</label><br />
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Perfume</label><br />
                        </li>
                    </div>
                    {/* ------------------------------------------                  */}
                    <div id="Cathegary">
                        <h5>Books</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Entrance Exam</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Self-Help</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">E-learning</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Litrature & Fiction</label>
                        </li>
                    </div>
                    {/* --------------------------------------------                   */}
                    <div id="Cathegary">
                        <h5>Home & Furniture</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Bedsheets</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Blankets</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Clock</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Smart Door Lock</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Tv units</label><br />
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Coffe Tables</label><br />
                        </li>
                    </div>
                    {/* ---------------------------------------- */}
                    <div id="Cathegary">
                        <h5>Baby & Kids</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Baby Care</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Kids Watches</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Soft Toys</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Board Games</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Musical Toys</label><br />
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Kids Sunglass</label><br />
                        </li>
                    </div>
                    {/* ---------------------------------------------------------- */}
                    <div id="Cathegary">
                        <h5>Shoes</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Sky</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Campus</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Puma</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Nike</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Aadidas</label><br />
                        </li>
                    </div>
                    {/* ------------------------------------------------------- */}
                    <div id="Cathegary">
                        <h5>Electronics</h5>

                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Laptop</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Smart TV</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Washing Machine</label>
                        </li>
                        <li><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Freeze</label>
                        </li>
                    </div>
                </div>


                {/* ----------------------------------------products search functionality add---------------------------------------------------- */}

                <div id='ChildContainer'>
                    {
                  searchInput.length > 1 ?
                (

                    filteredResults && filteredResults.map((e, i) => (
                        <div key={i} id='mainkeyproductsResults'>
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
                                <div className='buttion'>
                                    {/* <button onClick={() => addToCart(e)}>AddCart</button> */}
                                    <button onClick={() => addToWishlist(e)}>Wishlist</button>
                                </div >
                            </div>
                        </div>
                    ))
               ):
                   (

                  movies && movies.map((e, i) => (
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
                                <div className='buttion'>
                                    {/* <button onClick={() => addToCart(e)}>AddCart</button> */}
                                    <button onClick={() => addToWishlist(e)}>Wishlist</button>
                                </div >
                            </div>
                        </div>
                    ))
                   )
                  }
                </div>
                {/* ----------------------------------------end---------------------------------------------- */}

            </div>
            {/* ---------footer------- */}
            <Footer />
        </div>
    )
}
export default Products





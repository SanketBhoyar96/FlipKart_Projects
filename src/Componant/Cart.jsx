import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import { json, useNavigate } from 'react-router-dom';
import CartHeader from './CartHeader';
import "./Cartstyle.css";
import Footer from './Footer';
const Cart = () => {
  const [cartProducts, setCartProducts] = useState();
  const router = useNavigate();

  // -----------------------PriceProducts------------------------------
  // const[Total,settotal]=useState(0);

  // let cartArray=localStorage.getItem("cartProducts");

  // cartArray=JSON.parse(cartArray);

  // const total=cartArray.reduce((prev,cur)=>(cur.price * cur.id) + prev, 0);
  // settotal(total);

  const [total, setTotal] = useState();    
  let cartArray = JSON.parse(localStorage.getItem("cartProducts"));   
  // cartArray = JSON.parse(cartArray);   
  useEffect(() => {     
    setTotal(      
       cartArray.reduce((prev, cur) => (cur.price ) + prev,0)    
        )},[cartArray]);


  // -------------------------------------------------------------------------------
  useEffect(() => {
    const cartProFromStorage = JSON.parse(localStorage.getItem("cartProducts"));

    if (cartProFromStorage) {
      setCartProducts(cartProFromStorage);

    } else {
      toast.error("No Products Found")
    }
  }, []);
  // ------------------------usrlogin nassl tr login la ptu tyla---------------------------

  useEffect(() => {
    const isUserLogged = JSON.parse(localStorage.getItem("userData"));

    if (!isUserLogged) {
      router('/login');
    }
  })
  // --------------------DeleteCartProDucts-------------------------
  function deleteProducts(e) {
    const proFromStorage = JSON.parse(localStorage.getItem("cartProducts"));
    // console.log(e,"user selected products");
    // alert('delte')
    var newArray = [];
    for (var i = 0; i < proFromStorage.length; i++) {
      // console.log(e.title == proFromStorage[i].title)
      if (e.title != proFromStorage[i].title) {
        // newArray(cartProducts);
        // alert('hello')
        newArray.push(cartProducts[i]);
        //  setCartProducts(newArray);
      }
    }
    localStorage.setItem("cartProducts", JSON.stringify(newArray))
    setCartProducts(newArray);
    toast.success("Products Deleted !")
  }
  return (
    <div className='CartContainer'>
      <CartHeader/>
      {/* <h1>CART</h1> */}
      {/* <button onClick={() => router('/products')}>Products Page</button> */}

      {/* ---------------------------Cartpro---------------------------------- */}

      <div id="Containerflex">
        <div className='leftflex'>
          <div id='CartpageCenter'>
            <h3>CART PRODUCTS</h3>
            <h3>Grocery</h3>
          </div>
          <div id='CartpageDiveScond'>
            <h6>From Saved Addresses</h6>
            <button>Enter Delivery Pincode</button>
          </div>

          <div id='CartContainer'>
            {cartProducts && cartProducts.map((e, i) => (
              <div key={i}>
                <div id='keyCartPro'>

                  <span id="DeleteCartpro">
                    <i onClick={() => deleteProducts(e)} class="fa-solid fa-trash-can"></i>
                  </span>

                  <div className='left'>
                    <img src={e.image} alt="Loading" />
                  </div>

                  <div className='right'>
                    <div className='Carttitle'>
                      <h3>{e.title}</h3>
                    </div>
                    <div className='Carblock'>
                      <div className='categoryCart'>
                        <p><span style={{ color: "red" }}>Category:- </span>{e.category}</p>
                      </div>
                      <div className='priceCart'>
                        <p><span style={{ color: "red" }}>Price:- </span>{e.price}</p>
                      </div >
                      <div className='idCart'>
                        <p><span style={{ color: "red" }}>Id:- </span>{e.id}</p>
                      </div >
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className='rightflex'>

          <div id="Formprice">
            <div className='priceDetails'>
              <h5>PRICE DETAILS</h5>
            </div>
            <div id='TotalPrice'>
              <div>
                <span className='marginPrice'>Price(4 items)</span>
                <span>&#8377;<span>0</span></span>
              </div>
              <div>
                <span className='marginDiscount'>Discount</span>
                <span>&#8377;0</span>
              </div>
              <div>
                <span className='marginCharges'>Discount Charges</span>
                <span>&#8377;<span style={{ color: "green" }}>Free</span></span>
              </div>
              <div>
                <span className='marginPackaging'>Secured Packaging Fee</span>
                <span>&#8377;0</span>
              </div>
            </div>
            <div className='TotalAmount'>
              <span className='amountValue'>Total Amount
              {/* <span>&#8377;56.99</span> */}
              <span style={{marginLeft:"140px",color:"red"}}>&#8377;{total}</span>
              </span>
            </div>
            <h3>You will save ₹100 on this order</h3>
          </div>

          <div id='SafeRight'>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg" alt="" />
            <span>Safe and Secure Payments.Easy returns.100% Authentic products.</span>
          </div>

        </div>
      </div>
      <div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
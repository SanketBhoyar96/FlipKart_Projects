
import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const router=useNavigate();
  return (
    <div>
       <div id="TopproHeader">
                <div  onClick={()=>router('/products')}>
                    <div><img src="./HeaderImg/Grocery.png" alt="" /></div>
                    {/* <a href="">Grocery</a> */}
                    <span>Grocery</span>
                </div>
                <div onClick={()=>router('/products')}>
                    {/* <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" /></div> */}
                    <div><img src="./HeaderImg/mobile.png" alt="" /></div>

                    {/* <a href="">Mobiles</a> */}
                    <span>Mobiles</span>
                </div>
                <div onClick={()=>router('/products')}>
                    {/* <div ><img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" /></div> */}
                    <div ><img src="./HeaderImg/Fashion.png" alt="" /></div>
                    {/* <a href="./Products">Fashion</a> */}
                    <span>Fashion</span>
                </div>
                <div onClick={()=>router('/products')}>
                    {/* <div ><img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" /></div> */}
                    <div ><img src="./HeaderImg/Electronics.png" alt="" /></div>
                    {/* <a href="">Electronics</a> */}
                    <span>Electronics</span>
                </div>
                <div onClick={()=>router('/products')}>
                    {/* <div ><img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" /></div> */}
                    <div ><img src="./HeaderImg/Home.jpg" alt="" /></div>
                    {/* <a href="">Home</a> */}
                    <span>Home</span>
                </div>
                <div  onClick={()=>router('/products')}>
                    {/* <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" /></div> */}
                    <div><img src="./HeaderImg/Appliances.png" alt="" /></div>
                    {/* <a href="">Appliances</a> */}
                    <span>Appliances</span>
                </div>
                <div onClick={()=>router('/products')}>
                    {/* <div ><img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" /></div> */}
                    <div ><img src="./HeaderImg/Travel.png" alt="" /></div>
                    {/* <a href="">Travel</a> */}
                    <span>Travel</span>
                </div>
                <div onClick={()=>router('/products')}>
                    {/* <div ><img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" /></div> */}
                    <div ><img src="./HeaderImg/topoffer.png" alt="" /></div>
                    {/* <a href="">Top Offers</a> */}
                    <span>Top Offers</span>
                </div>
                <div  onClick={()=>router('/products')}>
                    {/* <div><img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" /></div> */}
                    <div><img src="./HeaderImg/BeautyToys.png" alt="" /></div>
                    {/* <a href="">Beauty Toys </a> */}
                    <span>Beauty Toys</span>
                </div>
                <div  onClick={()=>router('/products')}>
                    {/* <div><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" /></div> */}
                    <div><img src="./HeaderImg/TwoWheeler.png" alt="" /></div>
                    {/* <a href="">Two Wheelers</a> */}
                    <span>Two Wheelers</span>
                </div>

            </div>
    </div>
  )
}

export default Body
 

import "./ProGalleryStyles.css"
import React from 'react'
import { useNavigate } from "react-router-dom"


const ProGallary = () => {
  const router=useNavigate();
  return (
    <div>
      {/* -------------------------------HomeBanner--------------------------------- */}
      {/* <div className="container">
        <div className="wrapper" onClick={()=>router('/Products')}>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/440a28c053a889e9.jpg?q=50" alt="" />
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/60c91b93563e79c6.jpeg?q=50" alt="" />
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1df65c4c96b9665e.jpeg?q=50" alt="" />
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" alt="" />
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c9b449c43b43ea40.jpg?q=50" alt="" />
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg" alt="" />
        </div>
        </div> */}
      {/* ----------------------------------------------------------- */}
      {/* <h1>Gallery</h1> */}

      <div id="ProGalleryAll">
        <div>
          <div id="GalleryFlex">
            <div className="backURL">
              <div className="boxContent">
                <h2>Best of Electronics</h2>
                <button onClick={()=>router('/Products')}>View ALL</button>
              </div>
            </div>
            <div>
              <div className="imgGallery">
              <img  onClick={()=>router('/Products')} src="./ProGallery/Eelectronics011.jpeg" alt="" />
            
              </div>
              <div className="ContentGallery">
                <h4>ASUS Monitors</h4>
                <h5>From_Rs.14999</h5>
                <h6>Top Rated</h6>
              </div>
            </div>
            <div>
              <div className="imgGallery">

                <img  onClick={()=>router('/Products')} src="./ProGallery/Eelectronics02.jpeg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4>Monitor</h4>
                <h5>From_Rs.9999</h5>
                <h6>SAMSUNG</h6>
              </div>
            </div>
            <div>
              <div className="imgGallery">
               <img  onClick={()=>router('/Products')} id="TopCamera" src="./ProGallery/Eelectronics03.jpeg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4>Top Mirrorless Cameras</h4>
                <h5>Shop Now!</h5>
                <h6>Canon, Sony, Fujifilm...</h6>
              </div>
            </div>
            <div>
              <div className="imgGallery">
              <img  onClick={()=>router('/Products')} src="./ProGallery/Eelectronics04.jpeg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4>Monitor</h4>
                <h5>From_Rs.9999</h5>
                <h6>SAMSUNG</h6>
              </div>
            </div>

          </div><br />
          {/* ------------------------------ */}

          <div id="GalleryFlex">
            <div className="backURL">
              <div className="boxContent">
                <h2>Sports, Healthcare & more</h2>
               <button onClick={()=>router('/Products')}>View ALL</button>
              </div>
            </div>
            <div>
              <div className="imgGallery">
               <img  onClick={()=>router('/Products')} src="./ProGallery/sports01.jpeg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4> Rider Helmets</h4>
                <h5>From 699</h5>
                <h6>Vega, Steelbird, HRX and More</h6>

              </div>
            </div>
            <div>
              <div className="imgGallery">

              <img  onClick={()=>router('/Products')} src="./ProGallery/sports02.jpeg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4> Remote Control Toys</h4>
                <h5>Up to 80% Off</h5>
                <h6>Buy Now!</h6>
              </div>
            </div>
            <div>
              <div className="imgGallery">
               <img  onClick={()=>router('/Products')} id="TopCamera" src="./ProGallery/sports03.jpeg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4>    Microphones</h4>
                <h5>Up to 70% off</h5>
                <h6>Explore Now!</h6>
              </div>
            </div>
            <div>
              <div className="imgGallery">
               <img  onClick={()=>router('/Products')} src="./ProGallery/sports04.jpeg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4>   Studio Headphones</h4>
                <h5>Up to 80% off</h5>
                <h6>Explore Now!</h6>
              </div>
            </div>

          </div><br />
          {/* ------------------------------------- */}
          <div id="GalleryFlex">
            <div className="backURL">
              <div className="boxContent">
                <h2>Pick Your Style</h2>
                <button onClick={()=>router('/Products')}>View ALL</button>
              </div>
            </div>
            <div>
              <div className="imgGallery">
                <img  onClick={()=>router('/Products')}  src="./ProGallery/styles01.jpg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4>  Top Trending Styles!</h4>
                <h5>From ₹399</h5>
                <h6>Shoes, Sandals & more</h6>
              </div>
            </div>
            <div>
              <div className="imgGallery">
               <img  onClick={()=>router('/Products')} src="./ProGallery/styles02.jpg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4> Sweatshirts</h4>
                <h5>From ₹249</h5>
                <h6>Wildcraft, Fort Collins...</h6>
              </div>
            </div>
            <div>
              <div className="imgGallery">
               <img  onClick={()=>router('/Products')} id="TopCamera" src="./ProGallery/styles03.jpg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4> U.S. Polo Assn</h4>
                <h5>Min. 40% Off</h5>
                <h6>Sneakers, Loafers, Slides...</h6>
              </div>
            </div>
            <div>
              <div className="imgGallery">
              <img  onClick={()=>router('/Products')} src="./ProGallery/styles04.jpg" alt="" />
              </div>
              <div className="ContentGallery">
                <h4>Nivia, Van Heusen Flex..</h4>
                <h5>Up to 60% Off</h5>
                <h6>Trackpants, Shorts</h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProGallary





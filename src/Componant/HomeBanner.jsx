
import React, { useEffect, useState } from 'react'
import "./HBanner.css";
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {
  const router=useNavigate();
  const images = [
    'Hbanner/banner01.jpg',
    'Hbanner/banner02.jpg',
    'Hbanner/banner03.jpg',
    'Hbanner/banner04.jpg',
    'Hbanner/banner05.jpg'

  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);
  return (
    <div>
      <div onClick={()=>router('/Products')} className="slider">
      <img style={{width:"100%"}}
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </div>
    </div>
  )
}

export default HomeBanner
// import React from 'react'
// import "./HBanner.css";
// import { useNavigate } from 'react-router-dom';

// const HomeBanner = () => {
//   const router=useNavigate();
//   return (
//     <div>
//       <div onClick={()=>router('/Products')} class="imgSlider"></div>
//     </div>
//   )
// }

// export default HomeBanner

// import React from 'react'
// import "./HBanner.css";
// import { useNavigate } from 'react-router-dom';

// const HomeBanner = () => {
//   const router = useNavigate();
//   return (
//     <div>
//       <div className="container">
//         <div className="wrapper" onClick={()=>router('/Products')}>
//           <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/440a28c053a889e9.jpg?q=50" alt="" />
//           <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/60c91b93563e79c6.jpeg?q=50" alt="" />
//           <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1df65c4c96b9665e.jpeg?q=50" alt="" />
//           <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" alt="" />
//           <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c9b449c43b43ea40.jpg?q=50" alt="" />
//           <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg" alt="" />
//         </div>
//         </div>
//       </div>
//       )
// }

//       export default HomeBanner

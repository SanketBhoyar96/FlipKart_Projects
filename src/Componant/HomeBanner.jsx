
import React from 'react'
import "./HBanner.css";
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {
  const router=useNavigate();
  return (
    <div>
      <div onClick={()=>router('/Products')} class="imgSlider"></div>
    </div>
  )
}

export default HomeBanner

// import axios from 'axios';
import React from 'react'
import Header from './Header'
import Body from './Body'

import './Styles.css'
// -----------------------React Router---------------------------

  import {useNavigate } from 'react-router-dom'   
import HomeBanner from './HomeBanner'
import ProGallary from './ProGallary'
import Footer from './Footer'

const Home = () => {
  const router=useNavigate();
  return (
    <div id='home'>
      <Header/>
      <Body/>
      <HomeBanner/>
      <ProGallary/>
      <Footer/>
      {/* <h1 className='heading'>Welcome Home</h1><br />
      <button className='btn' onClick={()=>router("/products")}>Products</button> */}
  
    </div>
  )
}
export default Home;
















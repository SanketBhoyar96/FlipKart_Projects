
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const[userLogInData,setUserLogInData]=useState();
//    console.log(userLogInData,"userLoginData here");
const router=useNavigate();

   useEffect(()=>{
    if(userLogInData){
        const registeredData = JSON.parse(localStorage.getItem("userData"));
        if(registeredData){
            if(registeredData.email === userLogInData.email && registeredData.password === userLogInData.password){
                localStorage.setItem("isUserLogged", "true")
                router('/')
             toast.success("Login Successfull WELCOME HOME!")
            }else{
                toast.error("Wrong Credentials !")
            }
        }else{
            toast.error("User Not Found plz Register.")
    }
    }
   },[userLogInData]);
    
 useEffect(()=>{
      const localStorageData = JSON.parse(localStorage.getItem("isUserLogged"));
      if(localStorageData){
        // console.log("user logged in already, Directing to home");
        router('/');
      }
    });

   function submitHandle(e){
    e.preventDefault();
    // alert("Submitted")
    setUserLogInData({
        email:"bhoyar367@gmail.com",
        password:"Pass@123"
      })
   }
//    console.log(userdata,"userdata heree")

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"80px"}}>
       <form onSubmit={submitHandle} style={{border:"1px solid #5cb0b1",padding:"30px",paddingRight:"50px",backgroundColor:"#5cb0b1",borderRadius:"10px"}} id="form">
 <          h1 style={{color:"#f21274"}}>Login Form</h1>
        <label style={{fontSize:"20px"}}>Email</label><br />
        <input style={{padding:"10px",width:"100%"}}  type="email" placeholder='Email' /><br /><br />
        <label style={{fontSize:"20px"}} >Password</label><br />
        <input style={{padding:"10px",width:"100%"}}  type="password" placeholder=' Password' /><br /><br />
        <input style={{padding:"8px",width:"40%",margin:"10px",marginLeft:"60px",color:"white",backgroundColor:"#cc4600",border:"1px solid #cc4600"}} type="submit" /><br />
         <a href="./Register" style={{ color:"white",textDecoration:"none",marginLeft:"20px",fontWeight:"500",color:"blue"}}>Not User? Register here</a>
       </form>
    </div>
  )
}

export default Login;

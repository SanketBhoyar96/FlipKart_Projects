import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Register = () => {
    const[userdata,setUserdata]=useState();
    const router=useNavigate();

    useEffect(()=>{
        console.log("userData updated !");

        if(userdata){
            const toStoreUserData= JSON.stringify(userdata);
            localStorage.setItem("userData",toStoreUserData);
            toast.success("submitted");
            router('/login')
            // toast.error("submitted");
        }
    },[userdata]);

    useEffect(()=>{
      const localStorageData=JSON.parse(localStorage.getItem("isUserLogged"));
      if(localStorageData){
        console.log("user logged in already, Directing to home");
        router('/');
      }
    });

   function submitHandle(e){
    e.preventDefault();
    // alert("Submitted") 
      setUserdata({
        name:"Sanket",
        email:"bhoyar367@gmail.com",
        password:"Pass@123"
      })
   }
   console.log(userdata,"userdata heree")

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"80px"}}>
       <form onSubmit={submitHandle} style={{border:"1px solid #5cb0b1",padding:"30px",paddingRight:"50px",backgroundColor:"#5cb0b1",borderRadius:"10px"}} id="form">
 <          h1 style={{color:"#f21274"}}>Register Form</h1>
        <label style={{fontSize:"20px"}}>Name</label><br />
        <input style={{padding:"10px",width:"100%"}} type="text" placeholder='Name'/><br />
        <label style={{fontSize:"20px"}}>Email</label><br />
        <input style={{padding:"10px",width:"100%"}}  type="email" placeholder='Email' /><br />
        <label style={{fontSize:"20px"}} >Password</label><br />
        <input style={{padding:"10px",width:"100%"}}  type="password" placeholder=' Password' /><br />
        <input style={{padding:"8px",width:"40%",margin:"10px",marginLeft:"60px",color:"white",backgroundColor:"#cc4600",border:"1px solid #cc4600"}} type="submit" /><br />
       </form>
    </div>
  )
}

export default Register



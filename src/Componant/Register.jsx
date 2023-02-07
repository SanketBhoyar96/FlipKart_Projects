import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Register = () => {
    const[userData,setUserData]=useState({name:'', email:'', password:''});
    const router=useNavigate();

    useEffect(()=>{
      const localStorageData=JSON.parse(localStorage.getItem("isUserLogged"));
      if(localStorageData){
        console.log("user logged in already, Directing to home");
        router('/');
      }
    },[]);

   function submitHandle(e){
    e.preventDefault();
    if(userData.name && userData.email && userData.password){
      var registeredUsers = JSON.parse(localStorage.getItem("userData")) || [];
        registeredUsers.push(userData);
        console.log(registeredUsers,"registeruserData Here");
        localStorage.setItem("userData", JSON.stringify(registeredUsers));
        router('/login')
    // // alert("Submitted") 
    //   setUserData({
    //     name:"Sanket",
    //     email:"bhoyar367@gmail.com",
    //     password:"Pass@123"
    setUserData();
    toast.success("Register Done");
      // })
    }else{
      toast.error("Fill all Fields");
    }
   }
   console.log(userData,"userdata heree");
  //  ------------------------------------HandleChange----------------------------------
       function handleChange(event){
        const name= event.target.name;
        const value = event.target.value;
        setUserData((e)=>({...e,[name]: value}));
       }
       console.log(userData,"userdata here handleChange");
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"80px"}}>
       <form onSubmit={submitHandle} style={{border:"1px solid #5cb0b1",padding:"30px",paddingRight:"50px",backgroundColor:"#5cb0b1",borderRadius:"10px"}} id="form">
 <          h1 style={{color:"#f21274"}}>Register Form</h1>
        <label style={{fontSize:"20px"}}>Name</label><br />
        <input style={{padding:"10px",width:"100%"}} type="text" name='name' placeholder='Name' onChange={handleChange}/><br />
        <label style={{fontSize:"20px"}}>Email</label><br />
        <input style={{padding:"10px",width:"100%"}}  type="email" name='email' placeholder='Email'  onChange={handleChange} /><br />
        <label style={{fontSize:"20px"}} >Password</label><br />
        <input style={{padding:"10px",width:"100%"}}  type="password" name='password' placeholder=' Password'  onChange={handleChange} /><br />
        <input style={{cursor:"pointer", padding:"8px",width:"40%",margin:"10px",marginLeft:"60px",color:"white",backgroundColor:"#cc4600",border:"1px solid #cc4600"}} type="submit" /><br />
       </form>
    </div>
  )
}

export default Register



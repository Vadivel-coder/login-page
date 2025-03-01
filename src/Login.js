import React from 'react'
import './Login.css'

const Login = () => {
  var userData=[
    {UserName:'yuvaraj',passcode:123,cart:[]},
    {UserName:'Vadivel',passcode:456,cart:[]},
    {UserName:'Linkesh',passcode:789,cart:[]}];

    const Signup=()=>{
      var UserName=document.getElementById("userName").value;
      var Userpasscode=document.getElementById("passcode").value;
    

      var Details=userData.filter((data)=>{
        return UserName==data.UserName; 
        

      });

      if(Details.length>0){
     
        if(Details[0].passcode==Userpasscode){
          localStorage.setItem("userName",Details[0].UserName);
          window.location.replace('/home');
        }
       
      }
      else{
        console.log("Wrong Passcode");
      }
      


      
    }
  return (
     <div className='main'>

      
    <div className='form'>
      <h1> Login</h1>
      <p className='yuvi'></p>
      <hr></hr>
      <label className='raj'>Username</label>
      
      <input type='text' placeholder='enter your name' id="userName"></input>
      <br></br>
      <label className='raj'>Password</label>
      
      <input type='Password' placeholder='enter your password' id="passcode"></input>
      <p>Forgot password?</p>
      <button onClick={Signup}>Login</button>
       <div className="mp40">
      <p className='selva'>Already have a account?</p>
      <a href='#'>Login</a>
      </div>
      </div>
    </div>
  )
}

export default Login
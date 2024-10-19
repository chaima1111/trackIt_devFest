import React from "react";
import Header from '../../components/header1/Navbar';
import './WelcomBack.css'
// import imagecontainer4 from '../../assets/Container_(4).png' 
import imageSaly5 from '../../assets/slay5.png'
import imageSaly6 from '../../assets/saly6.png'
import containerright from '../../assets/Container_right.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function WelcomBack(){

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate= useNavigate()
  const handleSubmit =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5001/login',{email,password})
      .then(result=>{
        console.log(result)
        if(result.data==="success"){
          navigate('/form1')
        }
      })
      .catch(err=>console.log(err))
  }

    return(
     <>
        <Header/>
        <div className="big_container">
          <div className="images1_container" >
            <img src={imagecontainer4}/>
            <img src={imageSaly6}/>
          </div> 
        
          <div className="big_container_2div">
            <form className="big_form" onSubmit={handleSubmit}>
                <h2>Welcom Back mate!</h2>
                <p>please fill the informations needed</p>
                <input type="email" placeholder="email"
            
               id="email"
               name="email"
               onChange={(e)=>setEmail(e.target.value)}
                 required
                ></input>
                <input type="password" placeholder="password"
                  id="password"
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  required></input>
                <button type="submit">Log in</button>
            </form>
          </div>  
           
          <div className="images2_container">
             {/* <img className="images2_container_1st" src={containerright}/> */}
             <img className="images2_container_2nd" src={imageSaly5}/>

          </div>
        </div>
     </>
    )
}

export default WelcomBack ;
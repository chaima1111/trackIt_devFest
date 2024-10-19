

import React from "react";
import './head.css' ;
import logoimage from '../../assets/logo.png'
import { Link } from "react-router-dom";

function Header (){
return(
    <>
    <div className="container">
    
    <header className="head">
        <img className="logo" src={logoimage} alt="logo img"></img>
       <button  className="container_singup"> <Link to="/sign">Sign up</Link></button>
   <button className="Login"><Link to="/welcomback">Log in</Link></button>
    </header> 
    

    
    </div>
    </>
)
}
export default Header
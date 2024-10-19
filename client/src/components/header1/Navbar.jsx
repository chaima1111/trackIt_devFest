

import React from "react";
import './head.css' ;
import logoimage from '../../assets/logo.png'
import { Link } from "react-router-dom";



function Header (){
return(
    <>
   
    <div className="containerNav">
    <header className="head">
        
        <img className="logo" src={logoimage} alt="logo img"/>
        
        <div className="nav_buttons">
          <Link to="/welcomback">Already have an account ?</Link>
          <Link to="/sign" className="Login">Sign In</Link>
        </div>
        
    </header> 
    </div>

    </>
)
}
export default Header
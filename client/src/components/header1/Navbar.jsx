

import React from "react";
import './head.css' ;
import logoimage from '../../assets/logo.png'



function Header (){
return(
    <>
   
    <div className="containerNav">
    <header className="head">
        
        <img className="logo" src={logoimage} alt="logo img"/>
        
        <div>
          <a href="h">Already have a count ?</a>
          <button className="Login">LOG IN</button>
        </div>
        
    </header> 
    </div>

    </>
)
}
export default Header
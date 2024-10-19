

import React from "react";
import './head.css' ;
import logoimage from '../../assets/logo.png'

function Header (){
return(
    <>
    <div className="container">
    
    <header className="head">
        <img className="logo" src={logoimage} alt="logo img"></img>
        <div>
        <button className="Login">Log in</button>
        <button className="singup">Sign up</button>
        </div>
    </header> 
    

    
    </div>
    </>
)
}
export default Header
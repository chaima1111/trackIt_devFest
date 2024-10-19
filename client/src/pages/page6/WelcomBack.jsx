import React from "react";
import Header from '../../components/header1/Navbar';
import './WelcomBack.css'
import imagecontainer4 from '../../assets/Container (4).png' 
import imageSaly5 from '../../assets/slay5.png'
import imageSaly6 from '../../assets/saly6.png'
import containerright from '../../assets/Container_right.png'


function WelcomBack(){
    return(
     <>
        <Header/>
        <div className="big_container">
          <div className="images1_container" >
            <img src={imagecontainer4}/>
            <img src={imageSaly6}/>
          </div> 
        
          <div className="big_container_2div">
            <form className="big_form">
                <h2>Welcom Back mate!</h2>
                <p>please fill the informations needed</p>
                <input type="text" placeholder="user name"></input>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <input type="text" placeholder="companey code"></input>
                <button type="submit">Log in</button>
            </form>
          </div>  
           
          <div className="images2_container">
             <img className="images2_container_1st" src={containerright}/>
             <img className="images2_container_2nd" src={imageSaly5}/>

          </div>
        </div>
     </>
    )
}

export default WelcomBack ;
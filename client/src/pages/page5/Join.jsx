import React from "react";
import './Join.css';
import imagecontainer1 from '../../assets/container (1).png'
import imagecontainer2 from '../../assets/container (2).png'
import imagesaly3 from '../../assets/saly3.png'
import imagesaly4 from '../../assets/saly4.png'


function Join (){
    return(
        <>
         

         <div className="join_container">
            <section>
                <img className="imagecontain" src={imagecontainer2}/>
                <img className="imagesaly4" src={imagesaly4}/>
            </section>
            <form className="join_form">
              <h1>Join a workspace</h1>
              <p>write the code provided by the admin</p>
              <input type="text" placeholder="Code"></input>
              <button className="form_button" type="submit">Join</button>
            </form>

            <section className="fatherPos">
            <img className="image_left" src={imagecontainer1}/>
            <img  src={imagesaly3}/>
            </section>
         </div>
         
        
         
        </>
    )
}


export default Join
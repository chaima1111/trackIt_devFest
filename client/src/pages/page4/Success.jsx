import React from "react";
import imagecircles from '../../assets/circles2.png';
import imageshema from '../../assets/shema.png';
import imageSaly2 from '../../assets/Saly2.png';
import './Success.css'
import { Link } from "react-router-dom";
function Success(){
return(
    <>
    <div className="container_Success">

     <div className="firstimage">
      <img src={imageshema}/>
     </div>
    
     <div className="container_Success_1">
          <h1>Workspace created successfully</h1>
          <p>You will receive the code in email</p>
          <Link to="/dashboard">Go to workspace &#10145; </Link>
          <img className="imagesaly" src={imageSaly2}/>
     </div>

      <div className="image1">
         <img  src={imagecircles}/>
      </div>
    </div>
    
    

    </>
)
}

export default Success
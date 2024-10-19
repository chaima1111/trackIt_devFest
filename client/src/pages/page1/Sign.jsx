


import Header from "../../components/header1/Navbar";
import { Link } from "react-router-dom";
import image1 from "../../assets/problem.png";
import './Sign.css';


function Sign (){

    return(
    <>
    
    <Header/>
    <div className="firstcontainer"> 
    
     <div className="imgCont">
      <img src={image1} alt="img" />
     </div>
        
     <form className="formul">
        <h1>L'ets get you started</h1>
        <input className="inputs" type="email" placeholder="Email Adress" required name="email" ></input>
        <input className="inputs" type="text" placeholder="user name" required name="name" ></input>
        <button  type="submit" className="submission" > <Link to="/team"> Next</Link></button>
     </form>
     </div>
    </>
    )
}

export default Sign
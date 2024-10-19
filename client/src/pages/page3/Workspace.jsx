import React from "react";
import './workspace.css';
import Header from "../../components/header1/Navbar";
import circleimage from '../../assets/circle.png'
import slayimage from '../../assets/saly.png'

function WorkSpace(){
    return(
        <>
        <Header/>
        <div className="pageContainer">
           
            <form className="formulaire"> 
              <h2>Lest's create your work space</h2>
              <input className="formulaire_input" type="text" placeholder="name" required name="name" ></input>
              <input className="formulaire_input" type="text" placeholder="field" required name="field" ></input>
              <button className="formulaire_button" type="submit"> Create</button>
            </form>

            <div className="foot">
                <img src={circleimage} className="foot_image"></img>
                <img src={slayimage} className="foot_image"></img>
            </div>
        </div>
        </>
    )
}

export default WorkSpace
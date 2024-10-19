import React from "react";
import './Team.css'
import Header from "../../components/header1/Navbar";
import imagetable from '../../assets/table.png'
import Signimage from '../../assets/Sign.png'
import logimage from '../../assets/Log.png'
import columnimage from '../../assets/Columns.png'



function Team (){
    return(
        <>
        <Header/>
        <div className="Bigdiv">
            <img className="column" src={imagetable}/>
            
            <div className="sections">
                <section className="sections_section">
                    <img src={Signimage} className="person"></img>
                    <h2>Create a new Team</h2>
                    <button className="Create_button">Create</button>
                </section>
                <section className="sections_section">
                    <img src={logimage} className="BigImg"></img>
                    <h2>Join an existing Team</h2>
                    <button className="Join_button">Join</button>
                </section>
            
            </div>
            
            <div className="pos">
             <img className="bar" src={columnimage}  ></img>
            </div>
        </div>

        </>
    )
}

export default Team
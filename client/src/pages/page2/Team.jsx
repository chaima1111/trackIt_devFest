import './Team.css'
import imagetable from '../../assets/table.png'
import Signimage from '../../assets/Sign.png'
import logimage from '../../assets/Log.png'
import columnimage from '../../assets/Columns.png'
import { Link } from "react-router-dom";


function Team (){
    return(
        <>
        <div className="Bigdiv">
            <img className="column" src={imagetable}/>
            
            <div className="sections">
                <section className="sections_section">
                    <img src={Signimage} className="person"></img>
                    <h2>Create a new Team</h2>
                    <Link to="/workspace" className="Create_button">Create</Link>
                </section>
                <section className="sections_section">
                    <img src={logimage} className="BigImg"></img>
                    <h2>Join an existing Team</h2>
                    <Link to="/join" className="Join_button">Join</Link>
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
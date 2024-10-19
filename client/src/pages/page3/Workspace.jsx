import React ,{useState}from "react";
import './workspace.css';
import circleimage from '../../assets/circle.png'
import slayimage from '../../assets/saly.png'
import axios from "axios"
import { useNavigate } from "react-router-dom";
function WorkSpace(){


        const [Workspacee_name,setWorkspacee_name]=useState();
        const [Workspacee_field,setWorkspacee_field]=useState();
        const navigate= useNavigate()
        const handleSubmit =(e)=>{
            e.preventDefault()
            axios.post('http://localhost:5001/workspace',{Workspacee_field,Workspacee_name})
            .then(result=>{console.log(result)
                navigate('/form1')
            })
            
            .catch(err=>console.log(err))
        }
    return(
        <>
        <div className="pageContainer">
           
            <form className="formulaire" onSubmit={handleSubmit}> 
              <h2>Lest&apos;s create your work space</h2>
              <input className="formulaire_input" type="text" placeholder="field" required 
                     id="Workspacee_name"
                     name="Workspacee_name"
                     onChange={(e)=>setWorkspacee_name(e.target.value)} ></input>
              <input className="formulaire_input" type="text" placeholder="field" required 
                     id="Workspacee_field"
                     name="Workspacee_field"
                     onChange={(e)=>setWorkspacee_field(e.target.value)} ></input>
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
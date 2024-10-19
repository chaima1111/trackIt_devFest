import Header from "../../components/header1/Navbar";
import image1 from "../../assets/problem.png";
import './Sign.css';
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Sign (){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [company,setCompany]=useState();
    const [password,setPassword]=useState();
    const navigate= useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
       
        axios.post('http://localhost:5001/register',{name,email,company,password})
        .then(result=>{console.log(result)
            navigate('/form1')
        })
        .catch(err=>console.log(err))
    }
    return(
    <>
    
    <Header/>
    <div className="firstcontainer"> 
    
   
    <div className="imgCont">
      <img src={image1} alt="img" />
     </div>
        <h1>L&apos;ets get you started</h1>
        <form  className="formul" onSubmit={handleSubmit}>
              <input className="inputs_sign" 
                type="text"
                id="name"
                name="name"
                placeholder="name"                onChange={(e)=>setName(e.target.value)}
                required
              />
            
              <input className="inputs_sign" 
                type="email"
                id="email"
                name="email"
                 placeholder="Email Adress"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
        
              <input className="inputs_sign" 
                type="text"
                id="company"
                name="comany"
                 placeholder="company"
                onChange={(e)=>setCompany(e.target.value)}
                required
              />
         
          
              <input className="inputs_sign" 
                type="password"
                id="password"
                name="password"
                 placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
    
            <button   type="submit">Submit</button>
          </form>
     </div>
    </>
    )
}

export default Sign
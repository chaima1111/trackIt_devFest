import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
 
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
    return (
        <>
        <div className="signup">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label><br />
              <input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div><br />
            
    
            <div>
              <label htmlFor="email">Email:</label><br />
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div><br />
            <div>
              <label htmlFor="company">company:</label><br />
              <input
                type="text"
                id="company"
                name="comany"
                onChange={(e)=>setCompany(e.target.value)}
                required
              />
            </div><br />
            <div>
              <label htmlFor="password">Password:</label><br />
              <input
                type="password"
                id="password"
                name="password"
                // value={formData.password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div><br />
    
            <button type="submit">Submit</button>
          </form>
        </div>
        </>
      );
    
}

export default SignUp



  
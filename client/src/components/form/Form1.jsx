import "./Form1.css";
import  { useState } from "react";
import logo from "../../assets/logo.trakcit.png";
import ec1 from "../../assets/Ellipse 830.png";
import ec2 from "../../assets/Ellipse 831.png";
import chart_right from "../../assets/04.png";
import chart_left from "../../assets/Container.png";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Form1() {
  const [cash_inflow,setCash_inflow]=useState();
  const [cash_outflow,setCash_outflow]=useState();
  const [CashFlow_type,setCashFlow_type]=useState();
  const navigate= useNavigate()
  const handleSubmit =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5001/cash',{cash_inflow,cash_outflow,CashFlow_type})
      .then(result=>{console.log(result)
          navigate('/form2')
      })
      
      .catch(err=>console.log(err))
  }
  
  return (
    <div className="Form1-container">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="Form1-asset1">
        <img src={ec1} alt={ec1}></img>
      </div>
      <div className="Form1-asset2">
        <img src={ec2} alt={ec2}></img>
      </div>
      <div className="Form1-asset3">
        <img src={chart_left} alt={chart_left}></img>
      </div>
      <div className="Form1-asset4">
        <img src={chart_right} alt={chart_right}></img>
      </div>
      <h1 className="Form1-form-head">Let’s fill your income data</h1>
      <div className="Form1-form-container">
        <nav>
          <span className="active">Cost flow</span> ──
          <span>Expenses</span> ──
          <span>Revenue</span> ──
          <span>KPI goal</span>
        </nav>

        <form onSubmit={handleSubmit}>
          <h2>Fill out your cost flow</h2>
      
         
          <label htmlFor="cash_inflow">
            Cost inflow
            <input
              type="number"
              id="cash_inflow"
              name="cash_inflow"
              onChange={(e)=>setCash_inflow(e.target.value)}
               />
                    </label>


          <label htmlFor="cash_outflow">
            Cost outflow

            <input
              type="number"
              id="cash_outflow"
              name="cash_outflow"
              onChange={(e)=>setCash_outflow(e.target.value)}

              required
            />
                        </label>

          <label htmlFor="CashFlow_type">
            CashFlow Type
            <input
              type="text"
              id="CashFlow_type"
              name="CashFlow_type"
              onChange={(e)=>setCashFlow_type(e.target.value)}
            />
                        </label>


          <button type="submit" >Next</button>
        </form>
      </div>
    </div>
  );
}

export default Form1;

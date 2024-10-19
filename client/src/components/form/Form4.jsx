// import React, { useState } from "react";
import logo from "../../assets/logo.trakcit.png";
import ec1 from "../../assets/Ellipse 830.png";
import ec2 from "../../assets/Ellipse 831.png";
import chart_left from "../../assets/Container.png";
import chart_right from "../../assets/04.png";
import "./Form4.css";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Form4() {
 
  const [kpi_profit_value,setkpi_profit_value]=useState();
  const [kpi_expense_value,setkpi_expense_value]=useState();
  const [kpi_cashFlow_value,setkpi_cashFlow_value]=useState();
  const [kpi_profit_gaol_value,setkpi_profit_gaol_value]=useState();
  const [kpi_expense_gaol_value,setkpi_expense_gaol_value]=useState();
  const [kpi_cashFlow_gaol_value,setkpi_cashFlow_gaol_value]=useState();
  const navigate= useNavigate()
  const handleSubmit =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5001/kpi',{kpi_profit_value,kpi_expense_value,kpi_cashFlow_value,kpi_profit_gaol_value,kpi_expense_gaol_value,kpi_cashFlow_gaol_value})
      .then(result=>{console.log(result)
          navigate('/success')
      })
      
      .catch(err=>console.log(err))
  }
  return (
    <div className="Form1-container">
      <div className="Form1-logo">
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
      <h1 className="Form1-form-head">Let’s fill your KPI target values</h1>
      <div className="Form1-form-container">
        <nav>
          <span>Cost flow</span> ──
          <span>Expenses</span> ──
          <span>Revenue</span> ──
          {/* <span className="active">KPI goal</span> */}
        </nav>
 
        <form className="Form4" onSubmit={handleSubmit}>
          <h2>Fill out your Revenue</h2>
          <label>
            Profit
            <input
              type="number"
              id="kpi_profit_value"
              name="kpi_profit_value"
              onChange={(e)=>setkpi_profit_value(e.target.value)}
              required
            />
          </label>
  
          <label>
            Expense
            <input
              type="number"
              id="kpi_expense_value"
              name="kpi_expense_value"
              onChange={(e)=>setkpi_expense_value(e.target.value)}            
              required
            />
          </label>
    

          <label>
            Cash folw
            <input
              type="number"
              id="kpi_cashFlow_value"
              name="kpi_cashFlow_value"
              onChange={(e)=>setkpi_cashFlow_value(e.target.value)}        
              required
            />
          </label>

          <label>
            Profit Goal
            <input
              type="number"
              id="kpi_profit_gaol_value"
              name="kpi_profit_gaol_value"
              onChange={(e)=>setkpi_profit_gaol_value(e.target.value)}
              required
            />
          </label>
  
          <label>
            Expense Goal
            <input
              type="number"
              id="kpi_expense_gaol_value"
              name="kpi_expense_gaol_value"
              onChange={(e)=>setkpi_expense_gaol_value(e.target.value)}            
              required
            />
          </label>
    

          <label>
            Cash folw Goal
            <input
              type="number"
              id="kpi_cashFlow_gaol_value"
              name="kpi_cashFlow_gaol_value"
              onChange={(e)=>setkpi_cashFlow_gaol_value(e.target.value)}        
              required
            />
          </label>

          <button type="submit" >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form4;

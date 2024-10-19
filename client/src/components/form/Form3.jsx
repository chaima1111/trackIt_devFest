import React, { useState } from "react";
import logo from "../../assets/logo.trakcit.png";
import ec1 from "../../assets/Ellipse 830.png";
import ec2 from "../../assets/Ellipse 831.png";
import chart_left from "../../assets/Container.png";
import chart_right from "../../assets/04.png";
import './Form3.css'
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Form3() {
  const [expense_type,setExpense_type]=useState();
  const [amount,setAmount]=useState();
  const navigate= useNavigate()
  const handleSubmit =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5001/expense',{expense_type,amount})
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
      <h1 className="Form1-form-head">Let’s fill your income data</h1>
      <div className="Form1-form-container">
        <nav>
          <span>Cost flow</span> ──
          <span>Revenue</span> ──
          <span className="active">Expenses</span> ──
          <span>KPI goal</span>
        </nav>

        <form onSubmit={handleSubmit}>
          <h2>Fill out your Expenses</h2>
          <label htmlFor="expense_type">
          Expense type
            <input
        type="text"
        id="expense_type"
        name="expense_type"
        onChange={(e)=>setExpense_type(e.target.value)}
              required
            />
          </label>

          <label  htmlFor="amount">
            Service income
            <input
           type="number"
           id="amount"
           name="amount"
           onChange={(e)=>setAmount(e.target.value)}
              required
            />
          </label>

          <button  type="submit" >Next</button>
        </form>
      </div>
    </div>
  );
}

export default Form3;

import "./Form1.css";
import React, { useState } from "react";
import logo from "../../assets/logo.trakcit.png";
import ec1 from "../../assets/Ellipse 830.png";
import ec2 from "../../assets/Ellipse 831.png";
import chart_right from "../../assets/04.png";
import chart_left from "../../assets/Container.png";
import { Link } from "react-router-dom";
function Form1() {




 
  
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

        <form >
          <h2>Fill out your cost flow</h2>
          <label>
            Cost inflow
            <input
              type="number"
              name="inflow"
          
            />
          </label>

          <label>
            Cost outflow
            <input
              type="number"
              name="outflow"
        
              required
            />
          </label>

          <Link to="/form2" type="submit" >Next</Link>
        </form>
      </div>
    </div>
  );
}

export default Form1;

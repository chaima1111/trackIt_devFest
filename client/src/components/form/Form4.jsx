// import React, { useState } from "react";
import logo from "../../assets/logo.trakcit.png";
import ec1 from "../../assets/Ellipse 830.png";
import ec2 from "../../assets/Ellipse 831.png";
import chart_left from "../../assets/Container.png";
import chart_right from "../../assets/04.png";
import "./Form4.css";

function Form4() {
 
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

        <form className="Form4">
          <h2>Fill out your Revenue</h2>
          <label>
            Cost flow
            <input
              type="number"
              name="Costflow"
            
              required
            />
          </label>

          <label>
            Revenue
            <input
              type="number"
              name="Revenue"
            
              required
            />
          </label>

          <label>
            Expenses
            <input
              type="number"
              name="Expenses"
        
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

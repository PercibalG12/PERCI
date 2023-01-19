import React from 'react'
import "./main.css";
// import Main from './Main';
import { useState } from "react";

const Mainbtn = (props) => { 
  return (
    <button id="nav-toggle" type='button' onClick={props.handleClick} > 
  <p>EXPLORE</p>
</button>
  )
}

export default Mainbtn
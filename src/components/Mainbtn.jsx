import React from 'react'
import "./main.css";
import { useState } from "react";


const Mainbtn = (props) => { // set props from main component

  return (
    <button id="nav-toggle" type="button" onClick={props.handleClick} > // change class name when clicked 
  <i className="open fa-light fa-bars-staggered" />
  <i className="close fa-light fa-xmark-large" />
  
</button>
  )
}

export default Mainbtn
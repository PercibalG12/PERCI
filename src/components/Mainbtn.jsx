import React from 'react'
import "./main.css";
// import Main from './Main';
import { useState } from "react";

const Mainbtn = (props) => { 
  const handleClick = () => {
    props.setClassName(!props.className)
  }
  return (
    <button id="nav-toggle" type='button' onClick={handleClick} > 
  <p>EXPLORE</p>
  {/* handleClick={className}  */}
</button>
  )
}

export default Mainbtn
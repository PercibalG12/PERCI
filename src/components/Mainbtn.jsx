import React from 'react'
import "./main.css";
import { useState } from "react";

const Mainbtn = ({onClick}) => { 
  return (
    <button id="nav-toggle" type='button'onClick={onClick} > 
  <p>EXPLORE</p>
  {/* handleClick={className}  */}
</button>
  )
}

export default Mainbtn


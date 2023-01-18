import React from 'react'
import "./main.css";
import { useState } from "react";

const Mainbtn = () => {
  return (
    <button id="nav-toggle" type="button" > 
  {/* onClick={handleClick} */}
  <i className="open fa-light fa-bars-staggered" />
  <i className="close fa-light fa-xmark-large" />
</button>
  )
}

export default Mainbtn
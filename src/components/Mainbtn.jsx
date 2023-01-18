import React from 'react'
import "./main.css";
import { useState } from "react";
const Mainbtn = () => {
    const handleClick =  (event) => {
        let id = event.target.id;
        if (id === "nav-toggle") {
          document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
            console.log("HI")
        };
    }
  return (
    <button id="nav-toggle" type="button" onClick={handleClick} >
  <i className="open fa-light fa-bars-staggered" />
  <i className="close fa-light fa-xmark-large" />
</button>
  )
}

export default Mainbtn
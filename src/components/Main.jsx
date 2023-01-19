import React from 'react'
import Banner from "../assets/rep.jpg"
import { useState } from "react";
import "./main.css";
import Mainbtn from './Mainbtn';
const Main = () => {
  const [className, setClassName] = useState('false')
  const handleClick = () => {
    setClassName('true')
    
  }
  return (
    <div>
      <Mainbtn handleClick={handleClick} />
      <div className={`Banner ${className}`} 
        style={{
          backgroundImage: 'url('+Banner+')',
          backgroundSize: "cover",
          backgroundPosition: " center 0%",
          height: "100vh",
          width: "100vw",
          position: "relative",
          zIndex: "2",
          transition:"transform 500ms cubic-bezier(.13,.53,.38,.97)",
          backgroundColor: "rgba(0,0,0)"
        }}>  
      </div> 
    </div>
  );
}


export default Main
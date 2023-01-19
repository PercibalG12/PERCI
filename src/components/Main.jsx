import React from 'react'
import Banner from "../assets/rep.jpg"
import { useState } from "react";
import "./main.css";
const Main = () => {
  const [className, setClassName] = useState('false')  // set class
  const handleClick = () => {
    setClassName('true') //Create a function that updates the state when the button is clicked. This function will change the class name to a new value.
  }
  return (
    <div className='Banner false' 
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
  )
}

export default Main
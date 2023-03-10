import Mainbtn from './Mainbtn'
import { useState } from 'react'
import Banner from "../assets/rep.jpg"
const Main = () => {
  const [button, setButton] = useState(false)
  const handleClick = () => {
    setButton(!button)
  }

  return (
    <div>
      <Mainbtn handleClick={handleClick} button={button} />
      <div className={`Banner ${button}`} 
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
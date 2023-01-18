import React from 'react'
import "./main.css";
import Banner from "../assets/rep.jpg"
const Navmain = () => {
  return (
    <nav>
  <div id="nav-links">
    <a className="nav-link" >
      <h2 className="nav-link-label rubik-font">Academia</h2>
      <img className="nav-link-image" src={Banner} />
    </a>
    <a className="nav-link" >
      <h2 className="nav-link-label rubik-font">Work Exp</h2>
      <img
        className="nav-link-image"
        src={Banner}
      />
    </a>
    <a className="nav-link" >
      <h2 className="nav-link-label rubik-font">Projects</h2>
      <img
        className="nav-link-image"
        src={Banner}
      />
    </a>
    <a className="nav-link" >
      <h2 className="nav-link-label rubik-font">Contact</h2>
      <img
        className="nav-link-image"
        src={Banner}
      />
    </a>
  </div>
</nav>

  )
}

export default Navmain
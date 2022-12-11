import React from 'react'
import "./Loading.css";
import GIF from "../../assets/almost-there-reach.gif";

function Loading() {
  return (
    <div className="load-container">
      <div className="img">
      <img src={GIF} alt="loading" />
      </div>
    </div>
  )
}

export default Loading
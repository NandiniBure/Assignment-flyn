import React from 'react'
import "./style.css"
import { CheckCheckIcon, Clock10, Heart, TrophyIcon } from 'lucide-react';
const End = () => {
  return (
    <div style={{marginLeft:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <div className="end-container">
        <h2 className="heading3">EXPERTS GROWTS</h2>
        <h1 className="heading4">OUR COMPANY GROWTH</h1>
        <div className="grid-container">
          <div className="grid-item">
            <Heart className="icon"></Heart>
            <h1 className="number">119+</h1>
            <h3 style={{ fontWeight: "lighter" }}>Satisfied Customers</h3>
          </div>
          <div className="grid-item">
            <Clock10 className="icon"></Clock10>
            <h1 className="number">1591+</h1>
            <h3 style={{ fontWeight: "lighter" }}>Days Of Operation</h3>
          </div>
          <div className="grid-item">
            <CheckCheckIcon className="icon"></CheckCheckIcon>
            <h1 className="number">283+</h1>
            <h3 style={{ fontWeight: "lighter" }}>Complete Project</h3>
          </div>
          <div className="grid-item">
            <TrophyIcon className="icon"></TrophyIcon>
            <h1 className="number">75+</h1>
            <h3 style={{ fontWeight: "lighter" }}>Win Awards</h3>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth:"1200px"
        }}
      >
        <h3 className="heading3">CLIENT'S FEEDBACK</h3>
        <h1 className="heading4">PEOOPLE SAY'S ABOUT US !</h1>
        <p style={{ fontSize: "20px", }}>
          Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections Bonorum at Malorum
          Original.
        </p>
        <div>
          <span style={{ color: "red" }}>JANNAT TUMPA</span>
          <span style={{ color: "gray" }}>- COO, AMERIMAR ENTERPRISES, INC</span>
        </div>
      </div>
    </div>
  );
}

export default End
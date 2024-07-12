import React from 'react'
import "./style.css"
const Choose = () => {
  return (
    <div className="choose-container">
      <h3 className="heading3">WHY CHOOSE US</h3>
      <h1 className="heading4">WHY WE ARE BEST</h1>
      <div className="grid-container">
        <div className="grid-item">
          <img src="./a.png"></img>
          <h2 className="heading6">Clarified Vision & Target</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
        </div>
        <div className="grid-item">
          <img src="./b.png"></img>
          <h2 className="heading6">High Performance</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
        </div>
        <div className="grid-item">
          <img src="./c.png"></img>
          <h2 className="heading6">Maintain Security</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
        </div>
        <div className="grid-item">
          <img src="./d.png"></img>
          <h2 className="heading6">Better Strategy & Quality</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Choose
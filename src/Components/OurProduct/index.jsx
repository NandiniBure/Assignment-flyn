import React, { useState } from 'react'
import "./style.css"

const data = [
  {
    id: "1",
    title: "Genderless kei - Japan's Hot",
    desc: "Set to launch on the ,manufacture's new A330new aircraft in 2017,its offering lots of",
   
  },
  {
    id: "2",
    title: "Better Strategy & Quality",
    desc: "Set to launch on the ,manufacture's new A330new aircraft in 2017,its offering lots of",
  },
  {
    id: "3",
    title: "Genderless kei - Japan's Hot",
    desc: "Set to launch on the ,manufacture's new A330new aircraft in 2017,its offering lots of",
  },
];
const Products = () => {

    const [number,setNumber]=useState("1");

    console.log(number)

  return (
    <div className="product-container">
      <h3 className="heading3">OUR PROJECT</h3>
      <h1 className="heading4">WHY WE ARE BEST</h1>
      <div className="products">
        <div className="left">
          {number == "1" && (
            <img alt="" className="image-product" src="./4.png"></img>
          )}
          {number == "2" && (
            <img alt="" className="image-product" src="./5.png"></img>
          )}
          {number == "3" && (
            <img alt="" className="image-product" src="./4.png"></img>
          )}
        </div>
        <div className="right">
          {data.map((data, index) => (
            <div
              onClick={() => setNumber(data.id)}
              key={index}
              className={`container  ${
                data.id === number ? "color-red" : "color-gray"
              }`}
            >
              <h1 className="heading5">{data.title}</h1>
              <p className='text'>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products
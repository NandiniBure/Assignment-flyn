import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowBigRight, ArrowLeftToLine, ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";

const Carosel = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          justifyContent: "start",
          display: "flex",
        }}
      >
        <ul style={{ margin: "0px"}}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="slick-dot-custom ">
      .
      </div>
    ),
  };

  return (
    <div className="carosel-container">
      <h3 className="heading1">What We Do</h3>
      <div className="carosel-header">
        <h1 style={{ textAlign: "start" }}>SERVICES PROVIDE FOR YOU</h1>
        <p style={{ textAlign: "start" }}>
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus
          nec risus finibus feugiat et fermentum
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-image-container">
            <div className="cover">
              <img src="./dev.png"></img>
              <h1 style={{ color: "white", fontSize: "20px" }}>
                WEB DEVELOPMENT
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </p>
              <Link to="https://www.fylehq.com/">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#ed4155",
                    outline: "none",
                    border: "none",
                    display: "flex",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <span>READ MORE </span>{" "}
                  <img
                    style={{ width: "30px", height: "15px" }}
                    src="./arrow.png"
                  ></img>
                </button>
              </Link>
            </div>
            <img className="img-carosel" src="./2.png" alt="Service 1" />
          </div>
          <div className="slider-image-container">
            <div className="cover">
              <img src="./dev.png"></img>
              <h1 style={{ color: "white", fontSize: "20px" }}>
                WEB DEVELOPMENT
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </p>
              <Link to="https://www.fylehq.com/">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#ed4155",
                    outline: "none",
                    border: "none",
                    display: "flex",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <span>READ MORE </span>{" "}
                  <img
                    style={{ width: "30px", height: "15px" }}
                    src="./arrow.png"
                  ></img>
                </button>
              </Link>
            </div>
            <img className="img-carosel" src="./3.png" alt="Service 2" />
          </div>
          <div className="slider-image-container">
            <div className="cover">
              <img src="./dev.png"></img>
              <h1 style={{ color: "white", fontSize: "20px" }}>
                WEB DEVELOPMENT
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </p>
              <Link to="https://www.fylehq.com/">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#ed4155",
                    outline: "none",
                    border: "none",
                    display: "flex",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <span>READ MORE </span>{" "}
                  <img
                    style={{ width: "30px", height: "15px" }}
                    src="./arrow.png"
                  ></img>
                </button>
              </Link>
            </div>
            <img className="img-carosel" src="./2.png" alt="Service 3" />
          </div>
          <div className="slider-image-container">
            <div className="cover">
              <img src="./dev.png"></img>
              <h1 style={{ color: "white", fontSize: "20px" }}>
                WEB DEVELOPMENT
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </p>
              <Link to="https://www.fylehq.com/">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#ed4155",
                    outline: "none",
                    border: "none",
                    display: "flex",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <span>READ MORE </span>{" "}
                  <img
                    style={{ width: "30px", height: "15px" }}
                    src="./arrow.png"
                  ></img>
                </button>
              </Link>
            </div>
            <img className="img-carosel" src="./3.png" alt="Service 4" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carosel;

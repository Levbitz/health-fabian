import React from "react";
//import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import One from "../../lib/assets/sliders/banner2.jpeg";
import Two from "../../lib/assets/sliders/banner2.jpeg";
import Three from "../../lib/assets/sliders/banner2.jpeg";
import Four from "../../lib/assets/sliders/banner2.jpeg";
import "./Carosel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };



// 
// 

// PERCOCET
// Pharma Meds Care main Drugs are Adderall, Oxy, Percocet, Erimin, Rivotril, Roxy ,Suboxone & Xanax.
  const Sdata = [
    {
      id: 1,
      title: "ADDERALL",
      desc: "Pharma Meds Care main Drugs are Adderall, Oxy, Percocet, Erimin, Rivotril, Roxy ,Suboxone & Xanax",
      side: One,
      bg: "#094c59",
      btnBg: "#ffe799",
    },
    {
      id: 2,
      title: "PERCOCET",
      desc: "Pharma Meds Care main Drugs are Adderall, Oxy, Percocet, Erimin, Rivotril, Roxy ,Suboxone & Xanax.",
      side: Two,
      bg: "#080713",
      btnBg: "#ffe799",
    },
    {
      id: 3,
      title: "SUBOXONE",
      desc: "Pharma Meds Care main Drugs are Adderall, Oxy, Percocet, Erimin, Rivotril, Roxy ,Suboxone & Xanax",
      side: Three,
      bg: "#011e32",
      btnBg: "#ffe799",
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      side: Four,
      bg: "#080713",
      btnBg: "#ffe799",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div
                style={{
               //   backgroundColor: value.bg,
                  backgroundImage: `url(${value.side})`,
                }}
                className="levbitz_slider_container "
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col l7">
                      <div style={{
                        background:"#c4909040",
                        padding:"10px",
                        borderRadius:'10px'
                      }} className="left">
                        <h2 className="white-text">{value.title}</h2>
                        <p className="white-text">{value.desc}</p>
                        <Link
                       
                           to='/' 
                           style={{
                            fontWeight:"bold"
                           }}
                          className="btn z-depth-0"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                    <div className="col l5 hide-on-med-and-down">
                      <div className="right">
                       {/* <img
                          className="responsive-img"
                          src={value.side}
                          alt=""
                        />*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Carousel;

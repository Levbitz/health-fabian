import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

import Logo from "../../lib/assets/Logo.png";
import { useNavigate } from "react-router-dom";

//import { GoThreeBars } from "react-icons/go";
import {HiMenu} from 'react-icons/hi'
import { FaTimes } from "react-icons/fa";
//import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
//import { DiCodeigniter } from "react-icons/di";
import { GrCodepen } from "react-icons/gr";


import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  //toggle
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  // const history = useHistory();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setIsOpen(false);
  };

  console.log(click);

  //change bg
  const [navbg, setNavbg] = useState(false);
  const [accountbg, setAccountBg] = useState(false);

  const changeBg = () => {
    // alert(window.scrollY);
    if (window.scrollY >= 90) {
      setNavbg(true);
      setAccountBg(true);
    } else {
      setNavbg(false);
      setAccountBg(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <>
      <nav
        
        className={navbg ? " z-depth-0  lb_active " : " z-depth-0 lb_nav_wrap"}
      >
        <div className="nav-wrapper ">
          <Link
            style={{
              marginTop: 10,
            }}
            to="/"
            className="brand-logo left myLogo white-text "
          >
            <img
              onClick={() => setIsOpen(false)}
              className="white"
              width={150}
              src={Logo}
              alt=""
            />
          </Link>

          <div className="menu-icon black-text " onClick={handleClick}>
            {click ? (
              <HiMenu
                style={{
                  color: "#000 !important",
                }}
              />
            ) : (
              <HiMenu
                style={{
                  color: "#fff !important",
                }}
              />
            )}
          </div>
          <ul className={click ? "nav-menu active  " : "nav-menu right "}>
            {/*<li>
              <MainSearchForm />
            </li>*/}
            <li>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>About</span>
                </div>
              </Link>
            </li>
            

            <li>
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>Contact Us</span>
                </div>
              </Link>
            </li>

            <div className="nav_social_icons hide-on-med-and-down">
              <span>
                <BsFacebook color="#000" size={20} />
              </span>

              <span>
                <FaTwitter color="#000" size={20} />
              </span>

              <span>
                <BsInstagram color="#000" size={20} />
              </span>

              <span>
                <BsLinkedin color="#000" size={20} />
              </span>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

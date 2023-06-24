import NavMenu from "../NavMenu/NavMenu.jsx";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Logo from "../../../assets/images/logo.png"
import Menu from "../../../assets/icon-menu.svg"
import { Link } from "react-router-dom";
import Top from "../../Top/Top.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    
    <div className=" top-0 z-20 white fixed w-full">
    <Top/>
    <header className="container ">
    
      <div className="flex py-1 px-3">
        <div className="flex items-center pt-1">
        <Link className=" md:ml-10 lg:ml-10"  to='/'>
        <img width={140} src={Logo} alt="Snap Logo" />
        </Link>
          
        </div>
        <div className="flex-grow flex items-center z-20 justify-end ">
          <NavMenu />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
            <img
              className="block lg:hidden"
              src={Menu}
              alt="Menu"
            />
          </button>
         <Sidebar open={open} setOpen={setOpen} />
          {/*<div className="hidden lg:flex lg:space-x-10 lg:items-center">
            <div className="hover:text-almost-black cursor-pointer">Login</div>
            <div>
              <button className="border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2">
                Register
              </button>
            </div>
  </div>*/}
        </div>
      </div>
    </header>
    </div>
    </>
  );
};

export default Header;
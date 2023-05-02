import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/\';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar ">
      <div className="gpt3__navbar-links">
        <div className="">
          {/* <img src={logo} alt='' /> */}
          <h1 className='neon'>THE AI CITY </h1>
        </div>
        
      </div>
      <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#home">About</a></p>
          <p><a href="#home">Contact</a></p>

        </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center bg-gray-500 shadow z-10">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#home">About</a></p>
              <p><a href="#home">Contact</a></p>
            </div>
            {/* <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

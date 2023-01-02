import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { logo, MenuBar, MenuX } from './imports.js';

const Menu = () => (
  <>
    <p><NavLink to="/Codelaboration" className="navbar__links" onClick={() => window.scrollTo(0, 0)}>Home</NavLink></p>
    <p><NavLink to="/Codelaboration/aboutus" className="navbar__links" onClick={() => window.scrollTo(0, 0)}>About Us</NavLink></p>
    <p><NavLink to="/Codelaboration/projects" className="navbar__links" onClick={() => window.scrollTo(0, 0)}>Projects</NavLink></p>
    <p><NavLink to="/Codelaboration/apply" className="navbar__links" onClick={() => window.scrollTo(0, 0)}><span>Apply</span></NavLink></p>
  </>
)

const NavBar = () => {
  const [toggleMobileMenu, updateToggleStatus] = useState(false);

  return (
    <>
      <div className="navbar">
        
        <h3>
          <NavLink to="/Codelaboration" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="" />
          </NavLink>
          &nbsp; Codelaboration
        </h3> 
       
        
        <div className="navbar__desktop">
          <Menu />
        </div>

        <div className="navbar__mobile_menu">
          {toggleMobileMenu 
            ? <img src={MenuX} alt="" onClick={() => updateToggleStatus(false)} />
            : <img src={MenuBar} alt="" onClick={() => updateToggleStatus(true)}/>
          }
          
          {toggleMobileMenu && (
            <div className="navbar__mobile_menu-box">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NavBar
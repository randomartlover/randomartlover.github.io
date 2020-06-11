import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


export default function Header() {
  return (
    <header className="row">
      <div className="nameJob col-md-5">
        <h1 className="name"> Okoro Alexandra</h1>
        <h4 className="jobTitle">Web Developer</h4>
      </div>
      <div className="col-md-4">
        <div className="row">
          <br />
          <br />
         
         
          <nav className="navbar">
            <NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link col-md-4"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link col-md-4"
              to="/Resume"
            >
              RESUME
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link col-md-4"
              to="/Project"
            >
              PROJECT
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link col-md-4"
              to="/Contact"
            >
              CONTACT
            </NavLink>
   </nav>
        </div>
      </div>
      <div className="col-md-3"></div>
    </header>
  );
}

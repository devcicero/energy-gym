import React from "react";

const Nav = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container row">
          <div className="logo col col-50">
            <span>Energy</span> Gym
          </div>
          <ul className="col col-50">
            <li>About</li>
            <li>Benefits</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

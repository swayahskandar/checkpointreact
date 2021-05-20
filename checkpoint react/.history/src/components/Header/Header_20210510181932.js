import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav classn="main-header is-sticky">
      <img
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="logo-docplanner"
      />
      <ul>
        <li>About us </li>
        <li>Career</li>
        <li>Department</li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
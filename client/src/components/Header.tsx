import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  name?: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">Blogster</a>
        </div>
        <div className="nav-links">
          <p>Hello, {name}</p>
          <ul>
            <li>
              <button>Create Post</button>
            </li>
            <li>
              <button>Exit</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

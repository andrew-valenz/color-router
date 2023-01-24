import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function nav() {
  return (
    <nav>
      <li>
        <NavLink className="links" to="/232/65/62">
          RED
        </NavLink>
      </li>
      <li>
        <NavLink className="links" to="/164/200/81">
          GREEN
        </NavLink>
      </li>
      <li>
        <NavLink className="links" to="/108/177/178">
          BLUE
        </NavLink>
      </li>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/coaches">Coaches</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/registrations">Registrations</Link>
        </li>
        <li>
          <Link to="/fixtures">Fixtures</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

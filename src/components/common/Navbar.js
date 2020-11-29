import React, { useState } from "react";
import "../../styles/Home.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Dropdown, DropdownButton } from "react-bootstrap";

import logo from "../../images/logo.png";

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const showAboutDropdown = () => {
    setShowAbout(true);
  };
  const hideAboutDropdown = () => {
    setShowAbout(false);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-inner">
        <ScrollLink
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="about-section"
          className="nav-link"
          activeClass="nav-active"
        >
          About
        </ScrollLink>
        <ScrollLink
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="reps-section"
          className="nav-link"
          activeClass="nav-active"
        >
          Rep Teams
        </ScrollLink>
        {/* <DropdownButton
          className="abt-dropdown"
          title="About"
          onMouseEnter={showAboutDropdown}
          onMouseLeave={hideAboutDropdown}
          show={showAbout}
        >
          <Dropdown.Item>
            <Link to="/about/coaches">Coaches</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/teams">Teams</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="reps-section"
            >
              Reps
            </ScrollLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/socials">Socials</Link>
          </Dropdown.Item>
        </DropdownButton> */}

        <Link onClick={() => scroll.scrollToTop()}>
          <img src={logo} alt="" width="150px" />
        </Link>

        <ScrollLink
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link"
          to="socials-section"
          activeClass="nav-active"
        >
          Socials
        </ScrollLink>
        <ScrollLink
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link"
          to="contact-section"
          activeClass="nav-active"
        >
          Contact
        </ScrollLink>
        {/* <Link to="/shop">Shop</Link>

        <DropdownButton
          className="abt-dropdown"
          title="Contact"
          onMouseEnter={() => setShowContact(true)}
          onMouseLeave={() => setShowContact(false)}
          show={showContact}
        >
          <Dropdown.Item>
            <Link to="/coaches">General Enquiries</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/teams">Membership/Registration</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/reps">Sponsor Us</Link>
          </Dropdown.Item>
        </DropdownButton> */}
      </div>
    </div>
  );
};

export default Navbar;

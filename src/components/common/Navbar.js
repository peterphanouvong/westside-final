import React from "react";
import "../../styles/Home.scss";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

import logo from "../../images/logo.png";

const Navbar = () => {
  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuad",
      offset: -200,
      activeClass: "nav-active",
    });
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-inner">
        <Link
          to="/"
          className="nav-link"
          onClick={() => scrollTo("about-section")}
        >
          About
        </Link>
        <Link
          to="/"
          className="nav-link"
          onClick={() => scrollTo("reps-section")}
        >
          Rep Teams
        </Link>

        <Link to="/" onClick={() => scroll.scrollToTop()}>
          <img src={logo} alt="" width="150px" />
        </Link>

        <Link
          to="/"
          className="nav-link"
          onClick={() => scrollTo("socials-section")}
        >
          Socials
        </Link>
        <Link
          to="/"
          className="nav-link"
          onClick={() => scrollTo("contact-section")}
        >
          Memberships
        </Link>
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

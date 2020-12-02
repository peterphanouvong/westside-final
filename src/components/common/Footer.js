import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import logo from "../../images/logo-white.png";

const Footer = () => {
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
    <div className="footer">
      <div className="footer-inner">
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

        <Link to="/" className="nav-link" onClick={() => scroll.scrollToTop()}>
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
      </div>
      <div className="footer-lower">
        <div>Westside Volleyball Club 2020</div>
        <div>By Peter Phanouvong</div>
      </div>
    </div>
  );
};

export default Footer;

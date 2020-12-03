import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const HeroSection = () => {
  let hero = useRef(null);
  let title = useRef(null);
  let subtitle = useRef(null);
  useEffect(() => {
    gsap.from(hero, {
      duration: 1.5,
      opacity: 0,
      ease: "Power4.easeOut",
    });

    gsap.from(title, {
      delay: 0.5,
      duration: 1,
      y: 60,
      opacity: 0,
      ease: "Power4.easeOut",
    });

    gsap.from(subtitle, {
      delay: 0.7,
      duration: 1,
      y: 60,
      opacity: 0,
      ease: "Power4.easeOut",
    });
  }, []);

  return (
    <div ref={(el) => (hero = el)} className="hero">
      <h1 ref={(el) => (title = el)}>
        join the <span className="family"></span>
      </h1>
      <p ref={(el) => (subtitle = el)}>Be a part of the Westside fam</p>
    </div>
  );
};

export default HeroSection;

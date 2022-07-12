import React from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import "./header.css";
import ME from "../../assets/logo-header.svg";
import TypeAnimation from "react-type-animation";
function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hi There! I'm</h5>
        <TypeAnimation
          cursor={false}
          sequence={[" Ishan", 2000, " DEOXY", 2000]}
          wrapper="h1"
          repeat={Infinity}
          className="type"
        />
        <TypeAnimation
          cursor={false}
          sequence={[
            "Full Stack Developer",
            2000,
            "UI/UX Designer",
            2000,
            "Discord Bot Developer",
            2000,
            "Game Server Developer",
            2000,
            "System Admin",
            2000,
            "Scroll Down For More!",
            2000,
          ]}
          wrapper="h5"
          className="text-light type"
          repeat={2}
        />
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className="scroll__down">
          Scroll Down -{">"}
        </a>
      </div>
    </header>
  );
}

export default Header;

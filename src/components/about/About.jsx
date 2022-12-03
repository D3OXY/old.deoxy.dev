import React from "react";
import "./about.css";
import ME from "../../assets/logo-aboutme.svg";
// import { FaAward } from 'react-icons/fa'
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="meabt" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years of Working Experience</small>
                        </article> */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>25+ Satisfied Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed Projects</small>
            </article>
          </div>

          <p>
          A Tech Enthusiast, who plays stupid Video Games and codes useless programs.
          <br />
          As a tech enthusiast and full stack developer
          with experience in UI/UX design and Discord bot development,
          I am skilled in game server management and configuration.
          I have experience with popular panels such as Pterodactyl, PufferPanel,
          and MyMcAdmin, as well as LinuxGSM and game server development for
          popular games like Minecraft, CS:GO, and GTA. Additionally,
          I am proficient in configuring and managing billing software and e-commerce
          platforms such as Stripe, WHMCS, Shopify, and HostBill.
          </p>
          <p>
          If you are interested in working with me, let's have a quick chat and discuss how we can bring your project to life. :)
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Get Started!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

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
            A Tech Enthusiast, who plays stupid videogames and codes useless
            programs, Loves to explore new things and face challenges.
            <br />
            I am a Full Stack Developer, UI/UX Designer, Discord Bot Developer.
            <br />
            I have a good experience with game server management panel like
            Pterodactyl, Pufferpanel, MyMcAdmin, MineOS. LinuxGSM.
            <br />
            Also i do Game Server development for games like Minecraft, CS:GO,
            GTA.
            <br />
            And i am Capable of Configuring/Managing Game Panels, Billing
            Softwares and E-Commerce platforms such as WHMCS, Shopify, HostBill,
            Etc...
          </p>
          <p>
            Interested in working with me? Let's have a quick chat, and see how
            we can make your project come to life. :)
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

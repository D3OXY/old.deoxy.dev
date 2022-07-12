import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/personal-portfolio-thumbnail.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    image: IMG1,
    title: "My new Personal Website.",
    github: "https://github.com",
    gitEnabled: false,
    demo: "https://deoxy.tech",
    demoEnabled: true,
  },
  {
    id: 2,
    image: IMG2,
    title: "A Browser Based Chat App.",
    github: "https://github.com",
    gitEnabled: false,
    demo: "https://deoxy.tech",
    demoEnabled: true,
  },
  {
    id: 3,
    image: IMG3,
    title: "Admin Dashboard Made Using MERN Stack.",
    github: "https://github.com",
    gitEnabled: true,
    demo: "https://deoxy.tech",
    demoEnabled: false,
  },
  {
    id: 4,
    image: IMG4,
    title: "Simple React Authentication Using Firebase.",
    github: "https://github.com",
    gitEnabled: true,
    demo: "https://react-auth.demo.deoxy.tech",
    demoEnabled: true,
  },
  {
    id: 5,
    image: IMG5,
    title: "A Browser based Tetris Games using HTML, CSS and Javascript",
    github: "https://github.com/D3OXY/tetris",
    gitEnabled: true,
    demo: "https://tetris.demo.deoxy.tech",
    demoEnabled: true,
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works.</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, github, gitEnabled, demo, demoEnabled }) => {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {gitEnabled ? (
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  ) : (
                    <a
                      href={github}
                      active
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  )}
                  {demoEnabled ? (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href={demo}
                      active
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Portfolio;

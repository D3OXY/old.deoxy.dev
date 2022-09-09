import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: "https://i.postimg.cc/mZdtcJBN/screely-1662706667960.png",
    title: "Browser Based Tetris Game.",
    github: "https://github.com/D3OXY/tetris",
    gitEnabled: true,
    demo: "https://d3oxy.github.io/tetris/",
    demoEnabled: true,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/mZdtcJBN/screely-1662706667960.png",
    title: "NextJS Authentication",
    github: "https://github.com/D3OXY/tetris",
    gitEnabled: true,
    demo: "https://d3oxy.github.io/tetris/",
    demoEnabled: true,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/nz97yDBV/screely-1657783601718.png",
    title: "NEO | Multipurpose Discord Bot",
    github: "https://github.com",
    gitEnabled: false,
    demo: "https://deoxy.tech",
    demoEnabled: false,
  }
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
                  <a href={github} className={gitEnabled ? "btn" : "btn disabled-link"} target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className={demoEnabled ? "btn btn-primary" : "btn btn-primary disabled-link"} target="_blank" rel="noreferrer">Live Demo</a>
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

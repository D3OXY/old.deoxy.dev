import React from 'react'
import './experience.css'
import { HiColorSwatch } from 'react-icons/hi'
import {
    SiJavascript, SiTypescript, SiAdobexd, SiSublimetext, SiReact, SiFlutter, SiBootstrap, SiTailwindcss, SiDiscord, SiMongodb, SiMysql, SiSqlite, SiRedis,
    SiGraphql, SiGnubash, SiVisualstudio, SiNotion, SiGooglekeep, SiGitlab, SiFirebase, SiHeroku, SiMedium, SiGoogle, SiOracle
} from 'react-icons/si'
import { FaRobot, FaFigma, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaStackOverflow } from 'react-icons/fa'
function Experience() {
    return (
        <section id='experience'>
            <h5>What I Use</h5>
            <h2>Languages And Tools</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Languages and Frameworks</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaHtml5 className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaCss3Alt className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiJavascript className='experience__details-icon' />
                            <div>
                                <h4>Javascript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiTypescript className='experience__details-icon' />
                            <div>
                                <h4>Typescript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiReact className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiFlutter className='experience__details-icon' />
                            <div>
                                <h4>Flutter</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiBootstrap className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiTailwindcss className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaNodeJs className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiDiscord className='experience__details-icon' />
                            <div>
                                <h4>Discord JS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiMongodb className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiMysql className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiSqlite className='experience__details-icon' />
                            <div>
                                <h4>SQLite</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiRedis className='experience__details-icon' />
                            <div>
                                <h4>Redis</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiGraphql className='experience__details-icon' />
                            <div>
                                <h4>GraphQL</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiGnubash className='experience__details-icon' />
                            <div>
                                <h4>Bash</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Tools</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <SiVisualstudio className='experience__details-icon' />
                            <div>
                                <h4>VS Code</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiSublimetext className='experience__details-icon' />
                            <div>
                                <h4>Sublime Text</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiOracle className='experience__details-icon' />
                            <div>
                                <h4>Oracle Cloud</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiHeroku className='experience__details-icon' />
                            <div>
                                <h4>Heroku</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiAdobexd className='experience__details-icon' />
                            <div>
                                <h4>Adobe XD</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaFigma className='experience__details-icon' />
                            <div>
                                <h4>Figma</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiNotion className='experience__details-icon' />
                            <div>
                                <h4>Notion</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiGooglekeep className='experience__details-icon' />
                            <div>
                                <h4>Google Keep</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaGitAlt className='experience__details-icon' />
                            <div>
                                <h4>Git</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiGitlab className='experience__details-icon' />
                            <div>
                                <h4>GitLab</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiFirebase className='experience__details-icon' />
                            <div>
                                <h4>Firebase</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaRobot className='experience__details-icon' />
                            <div>
                                <h4>Copilot</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaStackOverflow className='experience__details-icon' />
                            <div>
                                <h4>Stackoverflow</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiMedium className='experience__details-icon' />
                            <div>
                                <h4>Medium</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiGoogle className='experience__details-icon' />
                            <div>
                                <h4>Google</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiColorSwatch className='experience__details-icon' />
                            <div>
                                <h4>Colorspace</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
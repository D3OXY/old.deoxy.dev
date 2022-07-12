import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
function Services() {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Discord Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Customized Discord bots based on your needs.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>External API Integration.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Discord Server Setup.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Moderation, Economy, Entertainment, Music, Modmail, Ticket System, etc...</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Frontend Design with HTML, CSS and Javascript.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive Layout.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Search Engine Optimization.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Complex Sites are made with ReactJS.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Strong and Secure Backend.</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className="service__head">
                        <h3>Game Server Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Minecraft Server/Plugin Develoment.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Gamepanel Setup (Pterodactyl).</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Billing Panel Configuration (ControlPanel, WHMCS, Hostbill).</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>CS:GO, Rust, Factorio, Satisfactory, Terraria...</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className="service__head">
                        <h3>Gamepanel Configuration</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Minecraft Server/Plugin Develoment.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Gamepanel Setup (Pterodactyl).</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Billing Panel Configuration (ControlPanel, WHMCS, Hostbill).</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>CS:GO, Rust, Factorio, Satisfactory, Terraria...</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
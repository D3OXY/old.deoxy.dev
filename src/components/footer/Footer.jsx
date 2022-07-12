import React from 'react'
import './footer.css'
import { SiBuymeacoffee, SiGithub, SiInstagram, SiDiscord } from 'react-icons/si'
function Footer() {
    return (
        <footer>
            <a href="#home" className='footer__logo'>D3OXY</a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Languages and Tools</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/d3oxy" target='_blank' rel="noreferrer"><SiGithub /></a>
                <a href="https://discord.com/invite/Stc5W333bq" target='_blank' rel="noreferrer"><SiDiscord /></a>
                <a href="https://www.instagram.com/deoxyxd/" target='_blank' rel="noreferrer"><SiInstagram /></a>
                <a href="https://www.buymeacoffee.com/deoxy" target='_blank' rel="noreferrer"><SiBuymeacoffee /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; D3OXY. 2022</small>
            </div>
        </footer>
    )
}

export default Footer
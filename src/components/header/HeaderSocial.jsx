import React from 'react'
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs'

function HeaderSocial() {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/d3oxy" target='_blank' rel="noreferrer"><BsGithub /></a>
            <a href="https://discord.com/invite/Stc5W333bq" target='_blank' rel="noreferrer"><BsDiscord /></a>
        </div>
    )
}

export default HeaderSocial
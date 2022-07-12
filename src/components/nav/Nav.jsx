import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
function Nav() {
    return (
        <nav>
            <a href="#home"><AiOutlineHome /></a>
            <a href="#about" ><AiOutlineUser /></a>
            <a href="#experience"><BiBook /></a>
            {/* <a href="#services"><RiServiceLine /></a> */}
            <a href="#testimonials"><RiServiceLine /></a>
            <a href="#contact"><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav
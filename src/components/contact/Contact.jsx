import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiDiscordLine, RiWhatsappLine } from 'react-icons/ri'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_og3kfsc', 'template_y7q1d1s', form.current, `tNhT4dHG0__IOK4e_`)
            .then((result) => {
                console.log(result.text);
                if(result.text === 'OK'){
                    alert('Message Send!')
                    form.current.reset();
                }else{
                    alert('Something went wrong! Failed to send message.')
                }
            }, (error) => {
                // console.log(error.text);
                alert('Something went wrong! Failed to send message.')
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>deoxy.source@gmail.com</h5>
                        <a href="mailto:deoxy.source@gmail.com">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiDiscordLine className='contact__option-icon' />
                        <h4>Discord</h4>
                        <h5>DEOXY#1038</h5>
                        <a href="https://discord.com/invite/Stc5W333bq" target='_blank' rel="noreferrer">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiWhatsappLine className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5 id="blur">+91 9567935139</h5>
                        <a href="https://api.whatsapp.com/send?phone=919567935139" target='_blank' rel="noreferrer">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
                    <button type='submit' className='btn btn-primary contact__form-btn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
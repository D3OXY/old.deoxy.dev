import React from 'react'
import './testimonials.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import noimagemale from '../../assets/noimagemale.jpeg'
// import noimagefemale from '../../assets/noimagefemale.jpg'
import geoffdesigns from '../../assets/geoffdesigns.webp'
import farah03 from '../../assets/farah03.webp'
import sam678740 from '../../assets/sam678740.webp'
const data = [
    {
        avatar: farah03,
        name: 'Farah03',
        review: 'Wonderful experience! Deoxy was very patient with helping me set up the bot .He was very easy to communicate with and responded immediately to all queries.Even if you are a newbie to discord ,he can set it all up for you.Very happy with his work .Will definitely work with him again!'
    },
    {
        avatar: sam678740,
        name: 'sam678740',
        review: 'Very responsive and understanding. Got the job done in a very timely manner. Loved working with him and will again in the future. Thanks'
    },
    {
        avatar: geoffdesigns,
        name: 'geoffdesigns',
        review: 'Ishan is very helpful and skilled! Extremely happy with the discord bot! Thank you!'
    },
    {
        avatar: noimagemale,
        name: 'J8TIN',
        review: 'Deoxy was such a great help setting up my Whmcs page Thankyou so much'
    },
    {
        avatar: noimagemale,
        name: 'deejay616',
        review: 'This guy was the best! He even give me advice. I am really looking forward to work with him in the future 100% satisfied'
    }
]
function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonial__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
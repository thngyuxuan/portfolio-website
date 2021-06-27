import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Features.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Mousewheel } from 'swiper/core';
SwiperCore.use(Mousewheel);

function Features() {
    return (
        <div className='feat-container'>
            <Swiper
                className="mySwiper"    
                direction={'horizontal'} 
                slidesPerView={'auto'} 
                spaceBetween={150} 
                mousewheel={true} 
                loop={true}
                speed={800}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='feat-items'>
                    <Link to='/workexp' className='feat-link'>
                        WORK EXPERIENCE
                    </Link>
                    <img src='https://static.vecteezy.com/system/resources/previews/000/154/516/original/flat-people-multitasking-vectors.jpg' className='image' />
                </SwiperSlide>
                <SwiperSlide className='feat-items'>
                    <Link to='/skills' className='feat-link'>
                        SKILLS
                    </Link> 
                </SwiperSlide>
                <SwiperSlide className='feat-items'>
                    <Link to='/testimonials' className='feat-link'>
                        TESTIMONIALS
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='feat-items'>
                    <Link to='/awards' className='feat-link'>
                        AWARDS
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='feat-items'>
                    <Link to='/blog' className='feat-link'>
                        BLOG
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Features;

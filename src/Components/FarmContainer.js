import './Farm.css';
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PHOTOS from './images/index.js';

function Container(){

    useEffect(() =>{
        AOS.init({duration: 2000});
    }, []);


    return(
        <div className='App'>
            <section class="hero" id="hero">
                <div class="hero-wrapper">
                    <h1>NICEOMA INTEGRATED FARM</h1>
                    <a href="#main-container" class="quote">Explore Our Farm</a>

                    <a href="#main-container" class="anchor">
                        <i class="fa-sharp fa-solid fa-circle-chevron-down"></i>
                    </a>
                </div>
            </section>

            <section class="intro reveal" data-aos="fade-up">
                <div class="intro-image">
                    <img src={PHOTOS.PHOTO25} alt="mama" />
                </div>
                <div class="mySelf">
                    <h3>Welcome To Niceoma Integrated Farm</h3>
                    <p>I’m Nweke Ifeoma, a zoologist and award-winning farmer with a fire in my belly for clean food, 
                        a healthy planet, sustainability and basic human decency.</p>
                </div>
            </section>

            <div class="main-container" id="main-container">
                <h1 class="reveal" data-aos="fade-up"><span>Explore</span> What We Do</h1>
                <p>Here strategies are incubated, ideas are grown.</p>

                <div class="container">
                    <div class="wrapper reveal" data-aos="fade-up">
                        <div class="card">
                            <div class="front">
                                <img src={PHOTOS.PHOTO20} alt="" />
                                <h3>continuous egg production</h3>
                            </div>
                            <div class="back">
                                <p>Our eggs are laid by happy, healthy hens that roam freely on our spacious, sunlit pastures. 
                                    We collect them daily, ensuring you receive eggs at the peak of freshness. 
                                    From the moment you crack open one of our eggs, you'll be 
                                    captivated by the vibrant yolks and the rich aroma that only comes from truly fresh eggs.</p>
                            </div>
                        </div>
                    </div>
            
                    <div class="wrapper reveal" data-aos="fade-up">
                        <div class="card">
                            <div class="front">
                                <img src={PHOTOS.PHOTO2} alt="" />
                                <h3>chicken hatchery</h3>
                            </div>
                            <div class="back">
                                <p>Are you looking to start or expand your poultry farm with the healthiest, 
                                    highest-quality chicks? Look no further. 
                                    We are dedicated to providing you with top-notch poultry solutions that will set your farm 
                                    apart from the competition. 
                                    With our unmatched expertise and commitment to excellence, we guarantee the success 
                                    and prosperity of your poultry venture.</p>
                            </div>
                        </div>
                    </div>
            
                    <div class="wrapper reveal" data-aos="fade-up">
                        <div class="card">
                            <div class="front">
                                <img src={PHOTOS.PHOTO4} alt="" />
                                <h3>continuous fish hatchery</h3>
                            </div>
                            <div class="back">
                                <p>Are you ready to make a splash in the world of aquaculture? Look no further than our cutting-edge fish hatchery, 
                                    where we turn your aquatic dreams into a thriving reality. With our unwavering commitment to excellence and a passion for 
                                    sustainable fish farming, we are your trusted partner in achieving remarkable success in the aquaculture industry.</p>
                            </div>
                        </div>
                    </div>
            
                    <div class="wrapper reveal" data-aos="fade-up">
                        <div class="card">
                            <div class="front">
                                <img src={PHOTOS.PHOTO5} alt="" />
                                <h3>fish production</h3>
                            </div>
                            <div class="back">
                                <p>With decades of experience in the aquaculture industry, our team of experts brings an 
                                    unrivaled level of knowledge to the table. 
                                    We understand the complexities of fish production, from selecting the right species 
                                    to optimizing growth and maximizing yields. Our seasoned professionals will 
                                    guide you every step of the way, ensuring that you have the 
                                    knowledge and support needed to succeed.</p>
                            </div>
                        </div>
                    </div>

                    <div class="wrapper reveal" data-aos="fade-up">
                        <div class="card">
                            <div class="front">
                                <img src={PHOTOS.PHOTO27} alt="" />
                                <h3>training</h3>
                            </div>
                            <div class="back">
                                <p>Introducing niceoma's Agricultural Training Program — a 
                                    comprehensive and dynamic curriculum designed to 
                                    empower farmers, agricultural enthusiasts, and industry professionals. 
                                    Whether you're a seasoned farmer looking 
                                    to expand your knowledge or a novice eager to embark on a 
                                    rewarding agricultural journey, our program has something for everyone.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="who reveal" data-aos="fade-up">
                    <div class="empty"></div>
                    <div class="text">
                        <h1>who we are</h1>
                        <p>Niceoma Integrated Farm is a top notch agricultural company based in Lokoja, Kogi state. We proud ourselves in 
                            having a team of innovative and passion-driven individuals who have built this company's reputation in agriculture. 
                            Our mission is simple: to ensure humans never run out of healthy and decent food.</p>
                    </div>
                </div>
                

                <div class="projects reveal" data-aos="fade-up">
                    <div class="text">
                        <h3>from</h3>
                        <h3><span>our farm</span></h3>
                    </div>
                    <div class="photos">
                        <div class="row">
                            <div class="det">
                                <img src={PHOTOS.PHOTO13} alt=""/>
                                <p>raw chicken</p>
                            </div>
                            <div class="det">
                                <img src={PHOTOS.PHOTO16} alt="" />
                                <p>raw chicken drum sticks</p>
                            </div>
                            <div class="det">
                                <img src={PHOTOS.PHOTO10} alt="" />
                                <p>grilled chicken wings</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="det">
                                <img src={PHOTOS.PHOTO14} alt="" />
                                <p>fried fish</p>
                            </div>
                            <div class="det">
                                <img src={PHOTOS.PHOTO9} alt="" />
                                <p>unprepared fish</p>
                            </div>
                            <div class="det">
                                <img src={PHOTOS.PHOTO8} alt="" />
                                <p>grilled fish</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="why reveal" data-aos="fade-up">
                    <h1>Why Choose Us?</h1>
                    <p>We follow organic and sustainable practices as the health of our customers remains our top-most priority.
                        We exceed customers' expectations without compromising the quality of our products.
                    </p>

                    <p>
                        Our farm is locally owned and operated, and actively contributes to the Nigerian economy 
                        through SAED (Skills Acquisition And Entreprenuership Development).
                    </p>
                </div>
            </div>
        </div>
    )
    
};







export default Container;
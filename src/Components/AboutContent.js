import React from 'react';
import './About.css';

function AboutContent(){

    

    const greater = ">";

    return(
        <div class="main-container" id="main-container">
            <div class="who">
                <div class="empty"></div>
                <div class="text">
                    <h1>who we are</h1>
                    <p>Niceoma Integrated Farm is a top notch agricultural company based in Lokoja, Kogi state. We proud ourselves in 
                        having a team of innovative and passion-driven individuals who have built this company's reputation in agriculture. 
                        Our mission is simple: to ensure humans never run out of healthy and decent food.</p>
                </div>
            </div>
            

        <div class="why">
            <h1>Why Choose Us?</h1>
            <p>We follow organic and sustainable practices as the health of our customers remains our top-most priority.
                We exceed customers' expectations without compromising the quality of our products.
            </p>

            <p>
                Our farm is locally owned and operated, and actively contributes to the Nigerian economy 
                through SAED (Skills Acquisition {greater} Entreprenuership Development).
            </p>
        </div>
        </div>
    )
    
};






export default AboutContent;
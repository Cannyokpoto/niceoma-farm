import React from 'react';
import './Work.css';


function WorkContent(){


    return(
        <div>
            <h1 className="employ" id="employ">Employment</h1>
            <section>
                <div className="text">
                    <h1>SHAPING TOMORROW TOGETHER.</h1>
                    <p>We are actively searching for energized people who share our core beliefs and have
                        true passion for what we do. Send us your resume @ <a href="mailto:ifynweks@gmail.com">ifynweks@gmail.com</a></p>
                </div>

                <div className="form">
                    <form action="">
                        <div className="put">
                            <input type="name" placeholder="full name"/>
                            <input type="name" placeholder="company" id="shift"/>
                        </div>

                        <div className="put">
                            <input type="email" placeholder="email"/>
                            <input type="number" placeholder="phone number" id="shift"/>
                        </div>

                        <input type="text" id="message" placeholder="message"/>

                        <a href="">send your message</a>
                    </form>
                </div>
            </section>
        </div>
    )
    
};






export default WorkContent;
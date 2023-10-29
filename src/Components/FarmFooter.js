import './Farm.css';
import React from "react";
import PHOTOS from "./images/index.js";

class Footer extends React.Component{

    render(){

        return(
            <div>
                <footer>
                    <div className=" who-we-are reveal">
                        <img src={PHOTOS.PHOTO26} alt="" />
                        <p>We are a top notch agricultural company based in Lokoja, 
                            Kogi state. We proud ourselves in having a team of innovative and 
                            passion-driven individuals who have built this company's 
                            reputation in agriculture.
                        </p>
                    </div>

                    <div className="contact reveal">
                        <h3>Contact Info</h3>
                        <p><i className="fas fa-map-marker-alt"></i> 420 new mami, opposte otokiti housing estate, Lokoja, kogi state.</p>
                        <div className="cont">
                            <div>
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <span>
                                <p>
                                    Opening Hours:
                                </p>
                                <p>
                                    7:00 AM – 6:00 PM
                                </p>
                            </span>
                        </div>

                        <div className="cont">
                            <div>
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <span>
                                <p>
                                    Phone:
                                </p>
                                <p>
                                    08037145222 | 09077755525
                                </p>
                            </span>
                        </div>

                        <div className="cont">
                            <div>
                                <i className="fa-regular fa-envelope"></i>
                            </div>

                            <span>
                                <p className="mymail">
                                    e-mail:
                                </p>
                                <p className="mymail">
                                    ifynweks@gmal.com
                                </p>
                            </span>
                        </div>
                        
                    </div>

                    <div className="newsletter reveal">
                        <h3>Send Us A Message</h3>
                        <form action="https://formsubmit.co/ifynweks@gmal.com" method="POST">
                            <textarea name="Message" id="text" cols="30" rows="10" required></textarea>
                            <button>Send Message</button>
                        </form>
                    </div>
                </footer>

                <div className="right">
                    <p><span><i class="fa-regular fa-copyright"></i> Copyright 2023. All rights reserved by</span> <a href="https://www.facebook.com/promise.okpoto?mibextid=ZbWKwL"> Promise Okpoto</a></p>
                </div>

                <a href="#hero" id="anchor" className="top"><i className="fa-solid fa-arrow-up"></i></a>
            </div>
        )
    }
};






export default Footer ;
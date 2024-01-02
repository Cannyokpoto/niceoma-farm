import './Farm.css';
import React from "react";
import PHOTOS from "./images/index.js";

class Footer extends React.Component{

    render(){

        return(
            <footer>
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

                <div className="right">
                    <p><span><i class="fa-regular fa-copyright"></i> Copyright 2023. All rights reserved by</span> <a href="https://www.facebook.com/promise.okpoto?mibextid=ZbWKwL"> Promise Okpoto</a></p>
                </div>

                <a href="#hero" id="anchor" className="top"><i className="fa-solid fa-arrow-up"></i></a>
            </footer>
        )
    }
};






export default Footer ;
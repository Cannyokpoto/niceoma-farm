import React from 'react';
import '../Components/About.css';
import Header from '../Components/FarmHeader';
import Footer from '../Components/FarmFooter';
import AboutContent from '../Components/AboutContent';


class About extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <AboutContent />
                <Footer />
            </div>
        )
    }
};


export default About;
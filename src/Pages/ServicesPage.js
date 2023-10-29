import React from 'react';
import Header from '../Components/FarmHeader';
import Footer from '../Components/FarmFooter';
import ServicesContent from '../Components/ServicesContent';
import '../Components/Services.css';



class ServicesPage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <ServicesContent />
                <Footer />
            </div>
        )
    }
};

export default ServicesPage;
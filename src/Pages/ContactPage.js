import React from 'react';
import Header from '../Components/FarmHeader';
import Footer from '../Components/FarmFooter';
import ContactContent from '../Components/ContactContent';
import '../Components/Contact.css';

function ContactPage(){
    return(
        <div>
            <Header />
            <ContactContent />
            <Footer />
        </div>
    )
}

export default ContactPage;
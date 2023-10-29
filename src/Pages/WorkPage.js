import React from 'react';
import Header from '../Components/FarmHeader';
import Footer from '../Components/FarmFooter';
import WorkContent from '../Components/WorkContent';
import '../Components/Work.css';

function WorkPage(){
    return(
        <div>
            <Header />
            <WorkContent />
            <Footer />
        </div>
    )
}

export default WorkPage;
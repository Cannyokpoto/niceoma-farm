import React from 'react';
import Header from '../Components/FarmHeader';
import Container from '../Components/FarmContainer';
import Footer from '../Components/FarmFooter';

class HomePage extends React.Component {
    render(){ return(
        <div>
            <Header />
            <Container />
            <Footer />
        </div>
    )
}
}

export default HomePage;
import React from 'react';
import Header from '../Components/FarmHeader';
import Container from '../Components/FarmContainer';


class HomePage extends React.Component {
    render(){ return(
        <div>
            <Header />
            <Container />
        </div>
    )
}
}

export default HomePage;
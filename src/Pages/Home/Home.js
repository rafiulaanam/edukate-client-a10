import React from 'react';
import About from './About/About';
import About2 from './About/About2';
import About3 from './About/About3';
import Header from './Header/Header';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <About></About>
            <About2></About2>
            <About3></About3>
        </div>
    );
};

export default Home;
import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='mx-auto sm:max-w-xl lg:max-w-screen-xl'>
            <Nav></Nav>
            <Header></Header>
            <h1>This is from home</h1>
            
        </div>
    );
};

export default Home;
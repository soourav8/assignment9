import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='mx-auto sm:max-w-xl lg:max-w-screen-xl'>
            <Nav></Nav>
            <Outlet />
        </div>
    );
};

export default Main;
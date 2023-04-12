import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    
    return (
        <nav className='flex lg:max-w-screen-xl justify-between items-center px-4 py-5'>
            <div className='font-extrabold text-3xl  '>
                <h2>Job Placement</h2>
            </div>
            
            <div className='text-[#757575] font-medium  '>
                <Link className='ml-4' to="/">Home</Link>
                <Link className='ml-4' to="/statistics">Statistics</Link>
                <Link className='ml-4' to="/applied">Applied Jobs</Link>
                <Link className='ml-4' to="/blog">Blog</Link>
            </div>
            <button  className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-lg text-white text-xl font-bold py-4 px-5'>Star Applying</button>
            
        </nav>
    );
};

export default Nav;
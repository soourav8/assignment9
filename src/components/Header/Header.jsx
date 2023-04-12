import React from 'react';



const Header = () => {
    return (
        <>
        
        <div className='flex mt-16'>
            <div>
                <h2 className='text-[80px] font-extrabold leading-[100px]'>One Step <br/> Closer To Your<br/><span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span></h2>
                <p className='text-[#757575] font-medium text-[18px] mt-3.5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button  className='mt-12 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-lg text-white text-xl font-bold py-4 px-5'>Get Started</button>
                
            </div>
            <div>
                <img src="/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
            
        </div>
        </>
    );
};

export default Header;
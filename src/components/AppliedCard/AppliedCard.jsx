import React from 'react';
import {  useNavigate } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const AppliedCard = ({ item }) => {
    const { title, company, work_type, address, logo, employee, _id, salary } = item;
    const navigate = useNavigate();
    const handleViewDetails = (_id) =>{
        navigate(`/`)

    }
    return (
        <div className='w-[1320px] h-[200px]  mx-auto'>
            <div className='flex items-center mt-20 border  justify-center  py-2 px-3'>
                <div className='mr-10 bg-[#f7f5f5] p-10'>
                    <img className='w-[150px] h-[50px] ' src={logo} alt="" />
                </div>
                <div className='grow ' >
                    <p className='font-bold text-[#474747] text-2xl mb-2'>{title}</p>
                    <p className='font-medium text-2xl text-[#757575] mb-4'>{company}</p>

                    <button className='border mb-4 border-teal-500 p-2 px-3 rounded mr-2'>{employee}</button>
                    <button className='border mb-4 border-teal-500 p-2 px-3 rounded'>{work_type}</button>
                    <div className='mb-3'>
                        <div className='flex'>
                            <img src="/assets/Icons/Frame-4.png" alt="" />
                            <p> {address.city}, {address.state} </p>
                        </div>
                        <div className='flex'>
                            <img src="/assets/Icons/Frame.png" alt="" />
                            <p>{salary}</p>

                        </div>
                    </div>


                </div>
                <div className="">
                    <button onClick={()=>handleViewDetails(_id)} className=' bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-lg text-white text-xl font-bold py-4 px-5'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedCard;
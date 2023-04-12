import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedCard = ({ item }) => {
    const { title, company, work_type, address, logo, employee, _id } = item;
    const navigate = useNavigate()
    const dynamicRoute = (_id) => {
        navigate(`/job/${_id}`, {state : {id : _id}})

    }
    return (
       
         <div className='mx-auto mt-10'>
            <img src={logo} alt="" />
            <h2 className='font-extrabold text-[#474747] text-xl mt-4'>{title}</h2>
            <p className='font-semibold text-xl text-[#757575] mt-4 mb-4'>{company}</p>
            <span><button className='border border-teal-500 py-2  px-3 rounded'>{work_type}</button>      <button className='border border-teal-500 p-2 px-3 rounded'>{employee}</button></span>
            <p className='font-medium text-xl text-[#757575] mt-4 mb-9'>
                Street: {address.street},   City: {address.city},   State: {address.state}
            </p>
            <button onClick={()=>dynamicRoute(_id)} className=' bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-lg text-white text-xl font-bold py-4 px-5'>View Details</button>




        </div>
       
    );
};

export default FeaturedCard;
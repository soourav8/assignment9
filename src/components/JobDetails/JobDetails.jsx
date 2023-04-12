import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData()


    const location = useLocation();
    // console.log(location.state)
    const job = jobs.find(job => job._id === location.state.id);
    console.log(job)
    const { responsibilities, phone, email, address, title, description, salary, education, experience
    } = job

    return (
        <>
            <div className='grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                {/* job section  */}

                    <div className='mt-20 mb-6'>

                        <span className='font-extrabold  text-[#1A1919]'>Job Description: </span><span>{description}</span>
                    </div>
                    <div className=''><span className='font-extrabold text-[#1A1919]'>Job Responsibility:</span>
                        {
                            responsibilities.map(data => <span>{data}</span>)
                        }

                    </div>
                    <div className='mb-6 mt-6'>
                        <span className='font-extrabold text-[#1A1919]'>Educational Requirements: </span><span>{education}</span>
                    </div>
                    <span className='font-extrabold text-[#1A1919]'>Experiences: </span><span>{experience}</span>

                </div>



                <div className=''>
                    {/* apply section  */}
                    <div className='bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]  pt-8 pl-16 mt-20' >
                        <p className='font-bold text-2xl mb-6'>Job Details</p>
                        <div className='flex items-center mb-3'>
                            <img src="/public/assets/Icons/Frame.png" alt="" />
                            <p>Salary: </p>
                            <p> {salary}</p>
                        </div>
                        <div className='flex items-center'>
                            <img src="/public/assets/Icons/Frame-1.png" alt="" />
                            <p>Job Title : </p>
                            <p> {title}</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] pl-16 '>
                        <p className='font-bold text-2xl mb-6 pt-8'>Contact Information</p>
                        <div className='flex items-center mb-3'>
                            <img src="/public/assets/Icons/Frame-2.png" alt="" />
                            <p>Phone: </p>
                            <p> {phone}</p>
                        </div>
                        <div className='flex items-center mb-3'>
                            <img src="/public/assets/Icons/Frame-3.png" alt="" />
                            <p>Email: </p>
                            <p> {phone}</p>
                        </div>
                        <div className='flex items-center mb-3'>
                            <img src="/public/assets/Icons/Frame-4.png" alt="" />
                            <p>Address : </p>
                            <p> {address.city}, {address.street}, {address.zip}</p>
                        </div>
                    </div>
                    <button className='mt-12 w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-lg text-white text-xl font-bold py-4 px-5'>Apply Now</button>
                </div>

            </div>
        </ >
    );
};

export default JobDetails;
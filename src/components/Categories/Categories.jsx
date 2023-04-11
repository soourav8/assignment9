import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [items, setItems] = useState([]) ; 
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className='text-center mt-32'>
            <h2 className='font-bold text-5xl mb-3.5'>Job Category List</h2>
            <p className='text-[#757575] font-medium text-[18px] '>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
    );
};

export default Categories;
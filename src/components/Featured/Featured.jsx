import React, { useEffect, useState } from 'react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const Featured = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/src/f.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log(items)
    return (
        <div>
            <>
                <div className='text-center  '>
                    <h2 className='font-bold text-5xl mb-8'>Featured Jobs</h2>
                    <p className='text-[#757575] font-medium text-[18px] '>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-2 mt-9 mx-auto'>
                    {
                        items.map(item => <FeaturedCard key={item._id} item={item}></FeaturedCard>)
                    }
                </div>
            </>
        </div>
    );
};

export default Featured;
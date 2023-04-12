import data from "/src/data.json"
import React, { useEffect, useState } from 'react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const Featured = () => {
    const [showAll, setShowAll] = useState(false);
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch('/src/f.json')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])
    // console.log(items)
    // setItems(data)
    return (
        <div>
            <>
                <div className='text-center  '>
                    <h2 className='font-bold text-5xl mb-8'>Featured Jobs</h2>
                    <p className='text-[#757575] font-medium text-[18px] '>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-2 mt-9 mx-auto'>
                    {
                        data.slice(0, showAll ? 6 : 4).map(item => <FeaturedCard key={item._id} item={item}></FeaturedCard>)
                    }
                </div>
                <div className="text-center mb-20">
                    <button onClick={()=>setShowAll(true)}  className='mt-16 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-lg text-white text-xl font-bold py-4 px-5'>See More</button>
                </div>
            </>
        </div>
    );
};

export default Featured;
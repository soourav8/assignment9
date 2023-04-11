import React from 'react';

const Category = ({data}) => {
    const{category, posts, image} = data
    console.log(data)
    return (
        <div className='mx-auto'>
            <img className='' src={image} alt="" />
            <h2 className='font-extrabold text-xl text-[#474747]'>{category}</h2>
            <p className='font-medium text-[#A3A3A3]'>{posts}</p>
        </div>
    );
};

export default Category;
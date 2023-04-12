import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Applied = () => {
    const [items , setItems] = useState([]);
    const data = useLoaderData()
    useEffect(()=>{
        const storedId = getShoppingCart()
        const savedData = [];
        for(const id in storedId){
            const appliedData = data.find(data => data._id ===id );
            savedData.push(appliedData);
          

        }
        setItems(savedData)

        
        
       
        
    },[items])
    
    
    
    // const job = data.find(data => data._id === )
    
    return (
        <div>
           <p>{items.length}</p>
        </div>
    );
};

export default Applied;
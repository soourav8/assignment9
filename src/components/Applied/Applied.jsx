import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import AppliedCard from '../AppliedCard/AppliedCard';

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

        
        
       
        
    },[])
    
    
    
    
    
    return (
        <div>
           {
             items.map(item => <AppliedCard key={item._id} item={item}></AppliedCard>)
           }
        </div>
    );
};

export default Applied;
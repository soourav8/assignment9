
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
  

const assignments = [
    { name: "Assignment 1", mark: 60 },
    { name: "Assignment 2", mark: 50 },
    { name: "Assignment 3", mark: 58 },
    { name: "Assignment 4", mark: 44 },
    { name: "Assignment 5", mark: 55 },
    { name: "Assignment 6", mark: 57 },
    { name: "Assignment 7", mark: 60 }
];


const Statistics = () => {

    
    
   
    


    return (
        <div className='mt-20'>
            <ResponsiveContainer width="100%" aspect={3}>
            
            <AreaChart
          width={950}
          height={400}
          data={assignments}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal="true" />
          <XAxis dataKey="name" />
          <YAxis dataKey="mark" />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
            

        </div>
    );
};

export default Statistics;
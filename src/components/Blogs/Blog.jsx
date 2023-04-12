import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 font-bold text-[#757575] text-2xl'>
           <p>1.When should we use context api?</p>
           <p>Ans.The Context API can be used to share data with multiple components, without having to pass data through props manually.</p> <br></br> 
           <p>2.What is custom hook?</p>
           <p>Ans.A custom hook is a javascript function starts with "use" , we can use other hooks in custom hooks . We mostly use to remove duplicate logics in components that make codes clear and enhance the speed and reduces time to write code.</p><br></br>
           <p>3.What is useRef in react?</p>
           <p>Ans.It is a built in react hook that useRef is powerful because it's persisted between renders. Unlike useState, useRef doesn't cause a component to re-render when the value or state changes </p><br></br>
           <p>4.What is useMemo?</p>
           <p>Ans.This react hook is higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings. This improves performance because it memoizes the result and skips rendering to reuse the last rendered result</p>



        </div>
    );
};

export default Blog;
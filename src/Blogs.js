import React from 'react';
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div className='bg-white text-center  mt-10'>
            <h1 className='text-blue-600 font-bold text-5xl mb-10'>Comming Soon...</h1>
            <button  className=" button pointer mt-10"><Link to="/">Go Back To Home</Link> </button>
        </div>
    );
};

export default Blogs;
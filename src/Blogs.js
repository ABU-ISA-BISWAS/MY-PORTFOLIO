import React from 'react';
import { Link } from "react-router-dom";
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='bg text-center  '>
            <h2 className='text-blue-600 font-bold text-5xl mb-10'>Comming Soon...</h2>
            <button  className=" buttn pointer mt-10 mb-10"><Link to="/">Go Back To Home</Link> </button>
        </div>
    );
};

export default Blogs;
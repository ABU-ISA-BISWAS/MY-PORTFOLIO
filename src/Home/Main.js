import React from 'react';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Main = () => {
    return (
        <div className='main'>
            <Home></Home>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Main;
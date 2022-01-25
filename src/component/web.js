import React from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';
import About from './about';
import Message from './message';
import Skill from './skill'
import Project from './project';
import './style/web.css'
import './style/mediaQuery.css'
import Personality from './personality';

const Web = () => {
    return (
        <>
        <div className='web'>
            <Sidebar />
            <Navbar />
            <About />
            <Personality />
            <Skill />
            <Project />
            <Message />
        </div>
        </>
    )
}

export default Web
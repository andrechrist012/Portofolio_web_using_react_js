import React from 'react'
import './style/nav.css'
import './message';

const Navbar = () => {
    let messageLink = '#message'
    let aboutLink = '#about'
    let personalityLink = '#personality'
    let skillLink = '#skill'
    let projectLink = '#project'

    return(
        <>
        <nav>
            <a href={aboutLink}>About</a>
            <a href={personalityLink}>Personality</a>
            <a href={skillLink}>Skill</a>
            <a href={projectLink}>Project</a>
            <a href={messageLink} id='right'>Message</a>
        </nav>
        </>
    )
}

export default Navbar